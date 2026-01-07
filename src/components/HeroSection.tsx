import { useState } from "react";
import { ArrowRight, Play, Shield, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import VideoDemoModal from "./VideoDemoModal";
import companyLogo from "@/assets/gallery/company-logo-main.png";

const HeroSection = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <VideoDemoModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Logo */}
          <div className="mb-10 animate-fade-up">
            <img 
              src={companyLogo} 
              alt="Strategic eHealth Solutions" 
              className="w-64 md:w-80 lg:w-96 h-auto mx-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by Ghana Health Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Powering Ghana's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Digital Health Transformation
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Strategic eHealth Solutions partners with Ghana Health Service to deliver AI-powered EMR systems, 
            Health Information Exchange, and interoperable digital health infrastructure that strengthens 
            care delivery nationwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-base"
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowDemoModal(true)}
              className="border-white bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-6 text-base"
            >
              <Play className="mr-2 w-5 h-5" />
              Request a Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/60 text-sm">Facilities Connected</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-display text-3xl md:text-4xl font-bold text-white">10M+</span>
              </div>
              <p className="text-white/60 text-sm">Patient Records</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-white">99.9%</span>
              </div>
              <p className="text-white/60 text-sm">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
