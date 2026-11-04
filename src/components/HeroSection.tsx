import { useState } from "react";
import { ArrowRight, Play, Shield, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import VideoDemoModal from "./VideoDemoModal";
import BrandMark from "./BrandMark";

const HeroSection = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <VideoDemoModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-secondary/20 blur-[120px]" aria-hidden="true" />

      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Logo */}
          <div className="mb-10 flex flex-col items-center gap-4 animate-fade-up">
            <BrandMark variant="light" className="h-20 w-20 md:h-24 md:w-24 drop-shadow-[0_12px_32px_rgba(41,163,151,0.35)]" title="Strategic eHealth Solutions" />
            <div className="flex flex-col items-center leading-none">
              <span className="font-display text-2xl md:text-3xl font-extrabold tracking-[0.08em] text-white">STRATEGIC</span>
              <span className="mt-1.5 font-display text-sm md:text-base font-semibold tracking-[0.02em] text-[#8FDCD2]">eHealth Solutions</span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-full pl-3 pr-4 py-1.5 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by Ghana Health Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Powering Ghana's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4CC3B5] via-[#8FDCD2] to-[#5AA4EC]">
              Digital Health Transformation
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Strategic eHealth Solutions partners with Ghana Health Service to deliver AI-powered EMR systems, 
            Health Information Exchange, and interoperable digital health infrastructure that strengthens 
            care delivery nationwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-healthcare-navy hover:bg-[#F28C28] hover:text-white font-semibold px-8 h-14 text-base shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)]"
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowDemoModal(true)}
              className="border-white/25 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white font-semibold px-8 h-14 text-base backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Request a Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-white/10 max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm py-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white">500+</span>
              </div>
              <p className="text-white/55 text-xs md:text-sm">Facilities Connected</p>
            </div>
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Zap className="w-5 h-5 text-[#F28C28]" />
                <span className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white">10M+</span>
              </div>
              <p className="text-white/55 text-xs md:text-sm">Patient Records</p>
            </div>
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white">99.9%</span>
              </div>
              <p className="text-white/55 text-xs md:text-sm">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
