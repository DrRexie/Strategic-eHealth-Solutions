import { Database, Share2, Brain, Link2, GraduationCap, ArrowRight, Check, Target } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SOLUTION_DETAILS } from "@/data/solution-details";
import { jumpState, prefillConsultation } from "@/lib/consultation-prefill";
import { Button } from "./ui/button";

const solutions = [
  {
    icon: Database,
    title: "National EMR/EHR Systems",
    description: "Comprehensive electronic medical record systems designed for facility-level and nationwide deployments.",
    features: [
      "Customized for GHS workflows",
      "Offline/online hybrid support",
      "NHIS integration ready",
      "Multi-facility management"
    ],
    color: "primary"
  },
  {
    icon: Share2,
    title: "Health Information Exchange (HIE)",
    description: "Secure data sharing infrastructure enabling seamless patient information flow across public and private facilities.",
    features: [
      "Continuity of care",
      "Referral management",
      "Public health surveillance",
      "Real-time reporting"
    ],
    color: "secondary"
  },
  {
    icon: Brain,
    title: "AI Agents for Healthcare",
    description: "Intelligent automation and decision support systems that enhance clinical outcomes and operational efficiency.",
    features: [
      "Clinical decision support",
      "Automated reporting",
      "Claims processing",
      "Population health analytics"
    ],
    color: "accent"
  },
  {
    icon: Link2,
    title: "Interoperability & Standards",
    description: "Standards-based integration ensuring your health systems communicate effectively with national infrastructure.",
    features: [
      "HL7 & FHIR compliance",
      "DHIMS2 integration",
      "Insurance system APIs",
      "Lab & pharmacy links"
    ],
    color: "primary"
  },
  {
    icon: GraduationCap,
    title: "Digital Health Strategy & Capacity Building",
    description: "Strategic advisory and training programs to build sustainable digital health capabilities.",
    features: [
      "eHealth architecture",
      "Governance frameworks",
      "Clinical training",
      "IT team development"
    ],
    color: "secondary"
  }
];

type Solution = (typeof solutions)[number];

/** Detailed panel behind a solution card's "Learn More" link. */
const SolutionDialog = ({ solution }: { solution: Solution }) => {
  const detail = SOLUTION_DETAILS[solution.title];
  if (!detail) return null;
  return (
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
              <solution.icon className="h-5 w-5 text-[#4CC3B5]" aria-hidden="true" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8FDCD2]">Core Solution</span>
          </div>
          <DialogTitle className="font-display text-2xl font-bold text-white">{solution.title}</DialogTitle>
          <DialogDescription className="text-[15px] leading-relaxed text-white/75">{detail.overview}</DialogDescription>
        </DialogHeader>
      </div>

      <div className="space-y-7 px-7 py-7 sm:px-9">
        <section>
          <h4 className="text-xs font-bold uppercase tracking-wider text-primary">What's included</h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {detail.features.map((f) => (
              <div key={f.name} className="rounded-2xl border border-border bg-muted/40 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  {f.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-7 sm:grid-cols-[1.2fr_0.8fr]">
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">How we deliver</h4>
            <ol className="mt-3 space-y-2.5">
              {detail.approach.map((step, i) => (
                <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Standards &amp; safeguards</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {detail.standards.map((item) => (
                <li key={item} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/80">{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span><span className="font-semibold text-foreground">Focus:</span> {detail.outcomeFocus}</span>
          </p>
          <DialogClose asChild>
            <button
              type="button"
              onClick={() => prefillConsultation({ engagement: "consultation", message: `I'd like to discuss ${solution.title}.` })}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-healthcare-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Discuss your requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </DialogClose>
        </div>
      </div>
    </DialogContent>
  );
};

const SolutionsSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" className="py-24 md:py-32 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-5">
            Core Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-[1.1]">
            Comprehensive Digital Health{" "}
            <span className="text-gradient">Solutions for GHS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end digital health capabilities designed specifically for Ghana Health Service's 
            operational requirements and national health priorities.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="bg-card rounded-3xl p-8 shadow-card hover-lift border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                solution.color === 'primary' ? 'bg-primary/10' :
                solution.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
              }`}>
                <solution.icon className={`w-7 h-7 ${
                  solution.color === 'primary' ? 'text-primary' :
                  solution.color === 'secondary' ? 'text-secondary' : 'text-accent'
                }`} />
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 border-t border-border pt-5">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      solution.color === 'primary' ? 'bg-primary' :
                      solution.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More — opens the detailed briefing for this solution */}
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className={`inline-flex min-h-11 items-center text-sm font-medium group-hover:gap-3 gap-2 transition-all rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      solution.color === 'primary' ? 'text-primary' :
                      solution.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`}
                  >
                    Learn More
                    <span className="sr-only"> about {solution.title}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </DialogTrigger>
                <SolutionDialog solution={solution} />
              </Dialog>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 px-8"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
