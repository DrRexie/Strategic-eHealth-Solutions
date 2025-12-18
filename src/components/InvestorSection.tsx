import { Target, BarChart3, Shield, Globe, Handshake, FileCheck } from "lucide-react";
import { Button } from "./ui/button";

const alignmentPoints = [
  {
    icon: Target,
    title: "Universal Health Coverage",
    description: "Supporting Ghana's path to UHC through scalable digital infrastructure."
  },
  {
    icon: Globe,
    title: "Sustainable Development Goals",
    description: "Direct contribution to SDG 3 (Good Health) and SDG 9 (Innovation)."
  },
  {
    icon: FileCheck,
    title: "National eHealth Strategy",
    description: "Fully aligned with Ghana's digital health roadmap and priorities."
  },
  {
    icon: BarChart3,
    title: "M&E Ready",
    description: "Built-in monitoring, evaluation, and transparent reporting frameworks."
  },
  {
    icon: Shield,
    title: "Strong Governance",
    description: "Data protection, security standards, and ethical AI principles."
  },
  {
    icon: Handshake,
    title: "Partnership Model",
    description: "Collaborative approach with government, donors, and implementing partners."
  }
];

const InvestorSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="partner" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Value Proposition */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              For Investors & Donors
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Trusted Platform for{" "}
              <span className="text-gradient">Measurable Health Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Strategic eHealth Solutions offers donors, investors, and development partners 
              a proven platform for sustainable digital health investments in Ghana with 
              transparent governance and demonstrable outcomes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our implementations are designed for scalability and sustainability, with 
              robust M&E frameworks that provide clear visibility into health system 
              strengthening and patient impact.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-card px-4 py-3 rounded-lg shadow-card border border-border">
                <div className="text-2xl font-bold text-primary">$10M+</div>
                <div className="text-sm text-muted-foreground">Investment Deployed</div>
              </div>
              <div className="bg-card px-4 py-3 rounded-lg shadow-card border border-border">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Development Partners</div>
              </div>
              <div className="bg-card px-4 py-3 rounded-lg shadow-card border border-border">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90"
              >
                Engage as a Donor
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToContact}
              >
                Investment Opportunities
              </Button>
            </div>
          </div>

          {/* Right: Alignment Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {alignmentPoints.map((point, index) => (
              <div
                key={point.title}
                className="bg-card p-5 rounded-xl shadow-card border border-border hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 text-sm">
                  {point.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
