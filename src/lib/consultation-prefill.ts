/** Lets other sections open the consultation form with an engagement type and message pre-filled. */
export const CONSULTATION_PREFILL_EVENT = "consultation:prefill";

export function prefillConsultation(detail: { engagement?: string; message?: string }) {
  // Wait for a closing dialog to release scroll before moving the page.
  window.setTimeout(() => {
    window.dispatchEvent(new CustomEvent(CONSULTATION_PREFILL_EVENT, { detail }));
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 400);
}
