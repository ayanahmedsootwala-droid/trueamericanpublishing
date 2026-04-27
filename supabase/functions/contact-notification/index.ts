import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const submissionSchema = z.object({
  source: z.enum(["hero-quote", "contact-form"]),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  project: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(1000),
});

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[char] ?? char));

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const parsed = submissionSchema.safeParse(await req.json());

    if (!parsed.success) {
      return new Response(JSON.stringify({ error: "Invalid submission details" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { source, name, email, project, message } = parsed.data;
    const apiKey = Deno.env.get("RESEND_API_KEY");

    if (!apiKey) {
      console.log("Contact notification received", { source, name, email, project });
      return new Response(JSON.stringify({ error: "Email delivery is not configured" }), {
        status: 503,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin: 0 0 16px; color: #b81335;">New ${source === "hero-quote" ? "Quote Request" : "Contact Form"} Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Project / Genre:</strong> ${escapeHtml(project)}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 16px; background: #f8fafc; border-left: 4px solid #b81335; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "True American Publishers <onboarding@resend.dev>",
        to: ["contact@trueamericanpublishers.com"],
        reply_to: email,
        subject: `New ${source === "hero-quote" ? "quote request" : "contact inquiry"} from ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Email notification failed", response.status, body);
      return new Response(JSON.stringify({ error: "Notification failed" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact notification error", error);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
