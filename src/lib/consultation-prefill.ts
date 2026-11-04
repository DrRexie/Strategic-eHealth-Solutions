/** Lets other sections open the consultation form with an engagement type and message pre-filled. */
export const CONSULTATION_PREFILL_EVENT = "consultation:prefill";

/** Set while a dialog closes to jump to the form, so it skips returning focus to its trigger. */
export const jumpState = { toForm: false };

export function prefillConsultation(detail: { engagement?: string; message?: string }) {
  jumpState.toForm = true;
  // Wait for the closing dialog to release its scroll lock, then move to the form.
  window.setTimeout(() => {
    window.dispatchEvent(new CustomEvent(CONSULTATION_PREFILL_EVENT, { detail }));
    const contact = document.querySelector<HTMLElement>("#contact");
    contact?.scrollIntoView({ behavior: "smooth", block: "start" });
    // Put keyboard focus in the first empty field without fighting the smooth scroll.
    const first = contact?.querySelector<HTMLInputElement>("form input:not([type=hidden])");
    first?.focus({ preventScroll: true });
    jumpState.toForm = false;
  }, 350);
}
