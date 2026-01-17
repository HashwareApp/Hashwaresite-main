import { useLanguage } from "@/lib/language-context";
import logoFull from "@assets/Hashware_Full_White_PNG_1768586294939.png";

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.portfolio, id: "portfolio" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="h-10 lg:h-12 w-44 lg:w-52 overflow-hidden">
              <img
                src={logoFull}
                alt="Hashware - Innovative Software Solutions"
                className="h-24 lg:h-28 w-auto object-cover object-center -mt-7 lg:-mt-8 -ml-4 lg:-ml-5"
                width="208"
                height="112"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t.footer.description}
            </p>
            <p className="text-muted-foreground text-sm">
              Postbus 67025<br />
              1060JA Amsterdam
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.connect}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@hashware.app"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  info@hashware.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Hashware. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
