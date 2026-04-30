// Submit-lead edge function: validates input, stores in DB, emails owner.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().nullable(),
  genre: z.string().trim().max(120).optional().nullable(),
  message: z.string().trim().min(1).max(2000),
  form_source: z.enum(["hero_quote", "contact"]).default("hero_quote"),
});

const OWNER_EMAIL = "contact@trueamericanpublishers.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const json = await req.json();
    const parsed = LeadSchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const data = parsed.data;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("cf-connecting-ip") ??
      null;
    const ua = req.headers.get("user-agent") ?? null;

    const { data: inserted, error: insertErr } = await supabase
      .from("leads")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        genre: data.genre ?? null,
        message: data.message,
        form_source: data.form_source,
        ip_address: ip,
        user_agent: ua,
      })
      .select()
      .single();

    if (insertErr) {
      console.error("Insert error:", insertErr);
      return new Response(JSON.stringify({ error: "Could not save lead" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Try to send notification email via Lovable Emails (if configured)
    let emailDelivered = false;
    try {
      const fromAddress = Deno.env.get("LOVABLE_EMAIL_FROM") ?? "notifications@trueamericanpublishers.com";
      const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
      if (lovableApiKey) {
        const emailRes = await fetch("https://emails.lovable.app/v1/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableApiKey}`,
          },
          body: JSON.stringify({
            from: `True American Publishers <${fromAddress}>`,
            to: [OWNER_EMAIL],
            reply_to: data.email,
            subject: `New ${data.form_source === "contact" ? "contact" : "publishing-plan"} lead — ${data.name}`,
            html: `
              <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#fbf8f3;color:#0f1115;">
                <h1 style="font-family:Georgia,serif;color:#a8001c;margin:0 0 4px;font-size:22px;">New author lead</h1>
                <p style="color:#6b6f76;font-size:13px;margin:0 0 24px;">Source: ${data.form_source}</p>
                <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eee;border-radius:8px;overflow:hidden;font-size:14px;">
                  <tr><td style="padding:10px 14px;color:#6b6f76;width:110px;">Name</td><td style="padding:10px 14px;font-weight:600;">${escapeHtml(data.name)}</td></tr>
                  <tr><td style="padding:10px 14px;color:#6b6f76;border-top:1px solid #eee;">Email</td><td style="padding:10px 14px;border-top:1px solid #eee;"><a href="mailto:${escapeHtml(data.email)}" style="color:#a8001c;">${escapeHtml(data.email)}</a></td></tr>
                  ${data.phone ? `<tr><td style="padding:10px 14px;color:#6b6f76;border-top:1px solid #eee;">Phone</td><td style="padding:10px 14px;border-top:1px solid #eee;">${escapeHtml(data.phone)}</td></tr>` : ""}
                  ${data.genre ? `<tr><td style="padding:10px 14px;color:#6b6f76;border-top:1px solid #eee;">Project</td><td style="padding:10px 14px;border-top:1px solid #eee;">${escapeHtml(data.genre)}</td></tr>` : ""}
                </table>
                <h2 style="font-family:Georgia,serif;font-size:16px;margin:24px 0 8px;">Message</h2>
                <div style="white-space:pre-wrap;background:#fff;border:1px solid #eee;border-radius:8px;padding:14px;font-size:14px;line-height:1.55;">${escapeHtml(data.message)}</div>
                <p style="color:#9aa0a6;font-size:11px;margin-top:24px;">Lead ID: ${inserted.id}</p>
              </div>
            `,
          }),
        });
        emailDelivered = emailRes.ok;
        if (!emailRes.ok) {
          console.error("Email send failed:", emailRes.status, await emailRes.text());
        } else {
          await supabase.from("leads").update({ email_sent: true }).eq("id", inserted.id);
        }
      } else {
        console.warn("LOVABLE_API_KEY not set; skipping email send.");
      }
    } catch (e) {
      console.error("Email exception:", e);
    }

    return new Response(JSON.stringify({ ok: true, id: inserted.id, emailDelivered }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
