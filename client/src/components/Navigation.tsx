import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoFull from "@assets/Hashware_Full_White_PNG_1768586294939.png";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.portfolio, id: "portfolio" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center"
            data-testid="link-home-logo"
            aria-label="Hashware - Home"
          >
            <img
              src={logoFull}
              alt="Hashware - Web and Mobile Development"
              className="h-40 lg:h-48 w-auto"
              width="160"
              height="160"
              loading="eager"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center gap-2 ml-4 p-1 bg-muted/30 rounded-lg">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  language === "en"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-lang-en"
                aria-label="Switch to English"
                lang="en"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("nl")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  language === "nl"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-lang-nl"
                aria-label="Switch to Dutch"
                lang="nl"
              >
                NL
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div 
            className="md:hidden py-4 border-t border-border"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded transition-colors ${
                    language === "en"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                  data-testid="button-mobile-lang-en"
                  aria-label="Switch to English"
                  lang="en"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("nl")}
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded transition-colors ${
                    language === "nl"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                  data-testid="button-mobile-lang-nl"
                  aria-label="Switch to Dutch"
                  lang="nl"
                >
                  NL
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
