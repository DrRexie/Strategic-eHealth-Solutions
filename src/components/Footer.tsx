import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo variant="white" className="mb-4" />
            <p className="text-white/60 mb-4 max-w-md leading-relaxed">
              Powering Ghana's Digital Health Future — Strategic eHealth Solutions is your 
              trusted partner for national-scale health system transformation.
            </p>
            <p className="text-secondary text-sm font-medium">
              "Connecting Care Through Intelligent Health Systems"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Solutions", href: "#solutions" },
                { label: "AI Intelligence", href: "#ai-intelligence" },
                { label: "Case Studies", href: "#case-studies" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/60 hover:text-white text-left text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p>Accra, Ghana</p>
              <p>contact@strategicehealth.com</p>
              <p>+233 (0) 30 XXX XXXX</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Strategic eHealth Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-white/40 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
