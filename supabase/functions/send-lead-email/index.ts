const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type LeadPayload = {
  source?: string;
  name?: string;
  email?: string;
  project?: string;
  genre?: string;
  message?: string;
  details?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = "") =>
  value.replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[char] ?? char));

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("Email service is not configured");

    const payload = (await req.json()) as LeadPayload;
    const name = (payload.name ?? "").trim().slice(0, 100);
    const email = (payload.email ?? "").trim().slice(0, 255);
    const project = (payload.project ?? payload.genre ?? "").trim().slice(0, 120);
    const message = (payload.message ?? payload.details ?? "").trim().slice(0, 1500);
    const source = (payload.source ?? "Website form").trim().slice(0, 80);

    if (!name || !emailRegex.test(email) || !project || message.length < 10) {
      return new Response(JSON.stringify({ error: "Invalid lead details" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; color: #17191f; line-height: 1.6; padding: 24px;">
        <h1 style="margin: 0 0 16px; color: #9c0f2f;">New True American Publishers Lead</h1>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Project / Genre:</strong> ${escapeHtml(project)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; border-left: 3px solid #9c0f2f; padding-left: 16px;">${escapeHtml(message)}</div>
      </div>
    `;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/email/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "contact@trueamericanpublishers.com",
        subject: `New ${source}: ${name}`,
        html,
        reply_to: email,
      }),
    });

    if (!response.ok) throw new Error(await response.text());

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unable to send lead" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});