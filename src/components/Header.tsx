import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "AI Intelligence", href: "#ai-intelligence" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Partner", href: "#partner" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-card py-3"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button onClick={scrollToTop} className="cursor-pointer">
          <Logo variant="default" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium transition-colors text-primary hover:text-secondary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Contact
          </Button>
          <Button
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="bg-secondary hover:bg-secondary/90"
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
            <X className="text-primary" size={24} />
          ) : (
            <Menu className="text-primary" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-elevated p-4 animate-fade-in">
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
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
