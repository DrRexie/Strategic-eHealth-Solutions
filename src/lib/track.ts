/**
 * Cookieless analytics for the Site Console (https://rex-console.vercel.app).
 * Sends: pageview, section_view (each <section id> once per page load, when it
 * crosses mid-screen), contact_open (first focus inside the contact form) and
 * inquiry_submit (call track("inquiry_submit") after a successful submission).
 * No cookies or local storage are used.
 */
const ENDPOINT = "https://rex-console.vercel.app/api/events";

type EventType = "pageview" | "section_view" | "contact_open" | "inquiry_submit";

export function track(type: EventType, extra: Record<string, string | undefined> = {}) {
  try {
    const payload: Record<string, string> = { type, path: window.location.pathname };
    for (const [k, v] of Object.entries(extra)) if (v) payload[k] = v;
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain" }))) return;
    void fetch(ENDPOINT, { method: "POST", body, keepalive: true, headers: { "Content-Type": "text/plain" } });
  } catch {
    /* analytics must never break the site */
  }
}

export function initTracking() {
  let referrer = "";
  try {
    if (document.referrer) {
      const r = new URL(document.referrer);
      if (r.host !== window.location.host) referrer = r.host;
    }
  } catch {
    /* ignore */
  }
  const utm = new URLSearchParams(window.location.search).get("utm_source") ?? undefined;
  track("pageview", { referrer, utm_source: utm });

  let opened = false;
  document.addEventListener("focusin", (e) => {
    const el = e.target as HTMLElement | null;
    if (!opened && el?.closest?.("#contact form")) {
      opened = true;
      track("contact_open");
    }
  });

  if (!("IntersectionObserver" in window)) return;
  const seen = new Set<string>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const id = (e.target as HTMLElement).id;
        if (e.isIntersecting && !seen.has(id)) {
          seen.add(id);
          track("section_view", { section: id });
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  // Sections render after React mounts; observe them once they exist.
  const observeAll = () => document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
  window.setTimeout(observeAll, 800);
}
