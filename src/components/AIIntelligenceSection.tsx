import { Activity, BarChart3, Bell, FileText, Plus, Stethoscope, TrendingUp } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const aiCapabilities = [
  {
    icon: Stethoscope,
    title: "Clinical Decision Support",
    description: "AI-powered recommendations for diagnosis, treatment protocols, and care pathways."
  },
  {
    icon: Activity,
    title: "Early Warning Systems",
    description: "Real-time monitoring and alerts for disease outbreaks and patient deterioration."
  },
  {
    icon: BarChart3,
    title: "Population Health Analytics",
    description: "Advanced analytics identifying health trends and resource optimization opportunities."
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Intelligent generation of DHIMS2 reports, donor reports, and compliance documentation."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Context-aware alerts for follow-ups, medication reminders, and care gaps."
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description: "Forecast disease burden, resource needs, and health outcomes for planning."
  }
];

/** The four systems connected by the AI Health Intelligence Hub, summarised from the rest of this site. */
const connectedSystems = [
  {
    name: "EMR Systems",
    summary:
      "Electronic medical records for single facilities and nationwide deployments, customized for Ghana Health Service workflows. They hold the patient data the hub's AI agents work with.",
    points: [
      "Offline/online hybrid support and multi-facility management",
      "Rolled out across 200+ GHS facilities, serving 3M+ patients a year",
      "85% fewer duplicate patient records; 60% faster clinical documentation",
    ],
  },
  {
    name: "HIE Platform",
    summary:
      "Health Information Exchange: secure, consent-based sharing of patient records between public and private providers, so care continues wherever a patient is seen.",
    points: [
      "Connecting 150+ facilities with real-time data sharing across regions",
      "40% fewer redundant laboratory tests",
      "Streamlined referrals and stronger public health surveillance",
    ],
  },
  {
    name: "Analytics Dashboard",
    summary:
      "Real-time dashboards that turn connected health data into insight for decision-makers, from population health trends to resource planning.",
    points: [
      "Analyzing 10M+ health records",
      "Early warning for disease outbreaks",
      "Predictive models for resource needs and health outcomes",
    ],
  },
  {
    name: "GHS Reporting",
    summary:
      "Automated reporting for Ghana Health Service and the Ministry of Health, produced directly from facility data instead of manual compilation.",
    points: [
      "Intelligent generation of DHIMS2 reports",
      "Automated donor and ministry reports and compliance documentation",
      "Transparent M&E reporting aligned with international standards",
    ],
  },
];

const AIIntelligenceSection = () => {
  return (
    <section id="ai-intelligence" className="py-24 md:py-32 bg-healthcare-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="white" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="white" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow eyebrow-dark mb-5">
            AI-Powered Intelligence
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.1]">
            National Health Intelligence{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Powered by AI
            </span>
          </h2>
          <p className="text-lg text-white/70">
            Our AI agents work seamlessly across EMR systems, HIE platforms, and analytics dashboards 
            to deliver evidence-based decision-making and early disease detection at national scale.
          </p>
        </div>

        {/* AI Visualization */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            {/* Central Hub */}
            <div className="flex flex-col items-center justify-center mb-12">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 animate-pulse-glow">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L12 6M12 18L12 22M2 12L6 12M18 12L22 12" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">AI Health Intelligence Hub</h3>
              <p className="text-white/60 text-center text-sm max-w-md">
                Connecting EMR systems, HIE platforms, and Ministry reporting for unified intelligence
              </p>
            </div>

            {/* Connected Systems — each opens a short summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {connectedSystems.map((system) => (
                <Popover key={system.name}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="group bg-white/5 border border-white/10 rounded-xl p-4 text-center transition-all duration-200 hover:bg-white/10 hover:border-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary data-[state=open]:bg-white/15 data-[state=open]:border-secondary"
                    >
                      <span className="block w-3 h-3 rounded-full bg-secondary mx-auto mb-2 animate-pulse" aria-hidden="true" />
                      <span className="text-white/90 text-sm font-medium">{system.name}</span>
                      <span className="mt-1 flex items-center justify-center gap-1 text-[11px] text-white/50 group-hover:text-secondary group-data-[state=open]:text-secondary">
                        <Plus className="w-3 h-3 transition-transform duration-200 group-data-[state=open]:rotate-45" aria-hidden="true" />
                        Learn more
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent sideOffset={10} className="w-80 rounded-2xl p-5 shadow-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">AI Health Intelligence Hub</p>
                    <h4 className="mt-1 font-display text-base font-semibold text-foreground">{system.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{system.summary}</p>
                    <ul className="mt-3 space-y-1.5 border-t border-border pt-3">
                      {system.points.map((point) => (
                        <li key={point} className="flex gap-2 text-xs text-foreground/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-secondary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl ring-1 ring-white/10 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                {capability.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            <span className="text-white font-semibold">Evidence-based decision-making.</span>{" "}
            <span className="text-secondary font-semibold">Early disease detection.</span>{" "}
            <span className="text-accent font-semibold">Resource optimization.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIIntelligenceSection;
