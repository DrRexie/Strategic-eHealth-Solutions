import { Activity, BarChart3, Bell, FileText, Stethoscope, TrendingUp } from "lucide-react";

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

const AIIntelligenceSection = () => {
  return (
    <section id="ai-intelligence" className="py-24 bg-healthcare-navy relative overflow-hidden">
      {/* Background Effects */}
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
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            AI-Powered Intelligence
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
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

            {/* Connected Systems */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["EMR Systems", "HIE Platform", "Analytics Dashboard", "GHS Reporting"].map((system) => (
                <div key={system} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-secondary mx-auto mb-2 animate-pulse" />
                  <span className="text-white/80 text-sm font-medium">{system}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4">
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
