import { ArrowRight, Check, Target, type LucideIcon } from "lucide-react";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { jumpState, prefillConsultation } from "@/lib/consultation-prefill";

export interface DetailContent {
  kicker: string;
  title: string;
  icon: LucideIcon;
  overview: string;
  items: { name: string; detail: string }[];
  itemsHeading?: string;
  steps: string[];
  stepsHeading?: string;
  tags: string[];
  tagsHeading?: string;
  focus: string;
  cta: { label: string; engagement: string; message: string };
}

/** Navy-headed detail panel shared by the site's "Learn More" links. Render inside a <Dialog>. */
const DetailDialog = ({ content }: { content: DetailContent }) => (
  <DialogContent
    onCloseAutoFocus={(e) => {
      if (jumpState.toForm) e.preventDefault();
    }}
    className="max-h-[88vh] w-[min(94vw,48rem)] max-w-none gap-0 overflow-y-auto rounded-3xl border-0 p-0 [&>button.absolute]:text-white [&>button.absolute]:opacity-80 [&>button.absolute]:data-[state=open]:bg-transparent [&>button.absolute]:data-[state=open]:text-white"
  >
    <div className="bg-healthcare-navy px-7 pb-6 pt-7 text-white sm:px-9">
      <DialogHeader className="space-y-3 text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <content.icon className="h-5 w-5 text-[#4CC3B5]" aria-hidden="true" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8FDCD2]">{content.kicker}</span>
        </div>
        <DialogTitle className="font-display text-2xl font-bold text-white">{content.title}</DialogTitle>
        <DialogDescription className="text-[15px] leading-relaxed text-white/75">{content.overview}</DialogDescription>
      </DialogHeader>
    </div>

    <div className="space-y-7 px-7 py-7 sm:px-9">
      <section>
        <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{content.itemsHeading ?? "What this means"}</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {content.items.map((it) => (
            <div key={it.name} className="rounded-2xl border border-border bg-muted/40 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Check className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                {it.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-7 sm:grid-cols-[1.2fr_0.8fr]">
        <section>
          <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{content.stepsHeading ?? "How we work"}</h4>
          <ol className="mt-3 space-y-2.5">
            {content.steps.map((step, i) => (
              <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{content.tagsHeading ?? "Aligned with"}</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {content.tags.map((t) => (
              <li key={t} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/80">{t}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span><span className="font-semibold text-foreground">Focus:</span> {content.focus}</span>
        </p>
        <DialogClose asChild>
          <button
            type="button"
            onClick={() => prefillConsultation({ engagement: content.cta.engagement, message: content.cta.message })}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-healthcare-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            {content.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </DialogClose>
      </div>
    </div>
  </DialogContent>
);

export default DetailDialog;
