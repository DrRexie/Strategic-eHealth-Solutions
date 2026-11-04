import { Building2, Globe, Target, Award } from "lucide-react";
import ceoPortrait from "@/assets/gallery/ceo-portrait.png";

const AboutSection = () => {
  const expertise = [
    {
      icon: Building2,
      title: "Government Partnership",
      description: "Deep collaboration with Ghana Health Service and Ministry of Health on national digital health initiatives."
    },
    {
      icon: Globe,
      title: "Global Best Practices",
      description: "International standards (HL7, FHIR) adapted for local context with proven methodologies."
    },
    {
      icon: Target,
      title: "Implementation Excellence",
      description: "End-to-end delivery from strategy through deployment and sustained support."
    },
    {
      icon: Award,
      title: "Donor & Partner Ready",
      description: "Transparent reporting, M&E frameworks, and governance aligned with international standards."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-elevated ring-1 ring-black/5 max-w-3xl">
            <img
              src={ceoPortrait}
              alt="Dr. Rex Acheampong - Strategic eHealth Solutions Founder"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-healthcare-navy/50 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="eyebrow mb-5">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-[1.1]">
              Ghana's Trusted Digital Health{" "}
              <span className="text-gradient">Transformation Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Strategic eHealth Solutions supports <strong>Ghana Health Service's vision</strong> for a 
              connected, data-driven health system. We bring deep expertise in EMR/EHR systems, 
              Health Information Exchange, AI agents for healthcare, and national-scale interoperability.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team combines local understanding of Ghana's health system with global best practices, 
              working alongside government agencies, development partners, donors, and international 
              health organizations to deliver sustainable digital health infrastructure.
            </p>

            {/* Key differentiators */}
            <div className="flex flex-wrap gap-3">
              {["Consulting & Advisory", "Technology Vendor", "Systems Integrator", "Implementation Partner"].map((item) => (
                <span 
                  key={item}
                  className="bg-card border border-border text-foreground/80 px-4 py-2 rounded-full text-sm font-medium shadow-card"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Expertise Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card p-6 rounded-2xl shadow-card hover-lift border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/[0.07] ring-1 ring-primary/15 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
