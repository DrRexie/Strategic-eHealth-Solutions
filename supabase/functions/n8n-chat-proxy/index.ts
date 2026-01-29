const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// NOTE: This was previously embedded client-side; keeping it here prevents browser CORS failures.
const N8N_WEBHOOK_URL =
  "https://aiaa1.datasciencemasterminds.com/webhook/ef5bf615-39a6-4440-aa99-b7a6f5cdac3f/chat";

Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "content-type": "application/json" },
    });
  }

  try {
    const contentType = req.headers.get("content-type") ?? "application/json";
    const bodyText = await req.text();

    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "content-type": contentType,
      },
      body: bodyText,
    });

    const upstreamBody = await upstream.text();

    const headers = new Headers(corsHeaders);
    const upstreamContentType = upstream.headers.get("content-type");
    headers.set("content-type", upstreamContentType ?? "application/json");

    return new Response(upstreamBody, {
      status: upstream.status,
      headers,
    });
  } catch (err) {
    console.error("n8n-chat-proxy upstream error:", err);
    return new Response(
      JSON.stringify({
        error: "Chat service unreachable",
      }),
      {
        status: 502,
        headers: { ...corsHeaders, "content-type": "application/json" },
      }
    );
  }
});
