import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import AIIntelligenceSection from "@/components/AIIntelligenceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InvestorSection from "@/components/InvestorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <AIIntelligenceSection />
        <CaseStudiesSection />
        <InvestorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
