import { useEffect } from "react";

const N8N_CHAT_CSS_URL = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
const N8N_CHAT_BUNDLE_URL =
  "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

declare global {
  interface Window {
    __n8nChatInitialized?: boolean;
  }
}

function ensureStylesheet(href: string) {
  const existing = document.querySelector<HTMLLinkElement>(
    `link[rel="stylesheet"][href="${href}"]`
  );
  if (existing) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

export default function N8nChatWidget() {
  useEffect(() => {
    if (window.__n8nChatInitialized) return;
    window.__n8nChatInitialized = true;

    const init = async () => {
      ensureStylesheet(N8N_CHAT_CSS_URL);

      const { createChat } = (await import(
        /* @vite-ignore */ N8N_CHAT_BUNDLE_URL
      )) as unknown as {
        createChat: (config: unknown) => void;
      };

      const baseUrl = import.meta.env.VITE_SUPABASE_URL;
      const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

      // Backend proxy (avoids CORS issues with the n8n webhook)
      const webhookUrl = `${baseUrl}/functions/v1/n8n-chat-proxy`;

      createChat({
        webhookUrl,
        initialMessages: ["My name is Rex. How can I assist you today?"],
        webhookConfig: {
          method: "POST",
          headers: {
            apikey: publishableKey,
            authorization: `Bearer ${publishableKey}`,
            "content-type": "application/json",
          },
        },
      });
    };

    init().catch((err) => {
      console.error("Failed to initialize chat widget:", err);
      // Allow retry on hard failure
      window.__n8nChatInitialized = false;
    });
  }, []);

  return null;
}
