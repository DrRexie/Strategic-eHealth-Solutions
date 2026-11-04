import { useState, useEffect } from "react";
import { Menu, X, Images } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "./ui/button";
import GalleryModal from "./GalleryModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "AI Intelligence", href: "#ai-intelligence" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Partner", href: "#partner" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-xl",
        isScrolled
          ? "bg-white/85 border-border py-2.5 shadow-card"
          : "bg-white/70 border-transparent py-3.5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button onClick={scrollToTop} className="cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Logo variant="default" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-primary/[0.06] hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-primary/[0.06] hover:text-primary flex items-center gap-1.5"
          >
            <Images className="w-4 h-4" />
            Gallery
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="border-border bg-transparent text-foreground hover:border-primary hover:bg-transparent hover:text-primary"
          >
            Contact
          </Button>
          <Button
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="bg-healthcare-navy text-white shadow-card hover:bg-primary"
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-healthcare-navy" size={24} />
          ) : (
            <Menu className="text-healthcare-navy" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border shadow-elevated p-4 animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground font-medium py-2 px-4 text-left hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsGalleryOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground font-medium py-2 px-4 text-left hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
            >
              <Images className="w-4 h-4" />
              Gallery
            </button>
            <div className="pt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="w-full"
              >
                Contact
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-healthcare-navy text-white hover:bg-primary"
              >
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Gallery Modal */}
      <GalleryModal open={isGalleryOpen} onOpenChange={setIsGalleryOpen} />
    </header>
  );
};

export default Header;
