import { Database, Share2, Brain, Link2, GraduationCap, ArrowRight } from "lucide-react";
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

const SolutionsSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Core Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
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
              className="bg-card rounded-2xl p-8 shadow-card hover-lift border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
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
              <ul className="space-y-2 mb-6">
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

              {/* Link */}
              <button 
                onClick={scrollToContact}
                className={`inline-flex items-center text-sm font-medium group-hover:gap-3 gap-2 transition-all ${
                  solution.color === 'primary' ? 'text-primary' :
                  solution.color === 'secondary' ? 'text-secondary' : 'text-accent'
                }`}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
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
