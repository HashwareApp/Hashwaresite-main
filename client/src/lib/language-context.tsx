import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "en" | "nl";

interface Translations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    tagline: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  services: {
    title: string;
    subtitle: string;
    web: {
      title: string;
      description: string;
      features: string[];
    };
    mobile: {
      title: string;
      description: string;
      features: string[];
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    viewProject: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      projectType: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      types: {
        web: string;
        mobile: string;
        both: string;
        other: string;
      };
    };
    info: {
      title: string;
      address: string;
      email: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    connect: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Coming Soon",
      contact: "Contact",
    },
    hero: {
      tagline: "Unlocking smart software.",
      description: "We build innovative web and mobile applications for you.",
      cta1: "Our Services",
      cta2: "Contact Us",
    },
    services: {
      title: "Our Services",
      subtitle: "Building digital experiences that make a difference",
      web: {
        title: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies.",
        features: ["Custom Web Applications", "Modern Web Technologies", "Security-first Approach", "Scalable & Maintainable Solutions"],
      },
      mobile: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps for iOS and Android.",
        features: ["iOS & Android Apps", "Cross-platform Solutions", "Security & Privacy Awareness", "Long-term Maintainability"],
      },
    },
    portfolio: {
      title: "Coming Soon",
      subtitle: "We're working on exciting projects. Check back soon!",
      viewProject: "View Project",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have a question or want to work together? Send us a message.",
      form: {
        name: "Your Name",
        email: "Email Address",
        projectType: "Project Type",
        message: "Tell us about your project",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        types: {
          web: "Web Application",
          mobile: "Mobile App",
          both: "Web & Mobile",
          other: "Other",
        },
      },
      info: {
        title: "Contact Information",
        address: "Address",
        email: "Email",
      },
    },
    footer: {
      description: "Innovative web and mobile app development",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
    },
  },
  nl: {
    nav: {
      home: "Home",
      services: "Diensten",
      portfolio: "Binnenkort",
      contact: "Contact",
    },
    hero: {
      tagline: "Unlocking smart software.",
      description: "Wij bouwen innovatieve web- en mobiele applicaties voor jou.",
      cta1: "Onze Diensten",
      cta2: "Neem Contact Op",
    },
    services: {
      title: "Onze Diensten",
      subtitle: "Digitale ervaringen bouwen die het verschil maken",
      web: {
        title: "Web Ontwikkeling",
        description: "Moderne, responsieve webapplicaties gebouwd met de nieuwste technologieën.",
        features: ["Maatwerk webapplicaties", "Moderne webtechnologieën", "Security-first aanpak", "Schaalbare en onderhoudbare oplossingen"],
      },
      mobile: {
        title: "Mobiele Ontwikkeling",
        description: "Native en cross-platform mobiele apps voor iOS en Android.",
        features: ["iOS & Android Apps", "Cross-platform Oplossingen", "Aandacht voor security & privacy", "Toekomstbestendige oplossingen"],
      },
    },
    portfolio: {
      title: "Binnenkort",
      subtitle: "We werken aan spannende projecten. Kom snel terug!",
      viewProject: "Bekijk Project",
    },
    contact: {
      title: "Contact",
      subtitle: "Heeft u een vraag of wilt u samenwerken? Stuur ons een bericht.",
      form: {
        name: "Uw Naam",
        email: "E-mailadres",
        projectType: "Project Type",
        message: "Vertel ons over uw project",
        submit: "Verstuur Bericht",
        sending: "Versturen...",
        success: "Bericht succesvol verzonden!",
        types: {
          web: "Webapplicatie",
          mobile: "Mobiele App",
          both: "Web & Mobiel",
          other: "Anders",
        },
      },
      info: {
        title: "Contactgegevens",
        address: "Adres",
        email: "E-mail",
      },
    },
    footer: {
      description: "Innovatieve web- en mobiele app ontwikkeling",
      quickLinks: "Snelle Links",
      connect: "Verbinden",
      rights: "Alle rechten voorbehouden.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hashware-language");
      if (saved === "en" || saved === "nl") {
        return saved;
      }
    }
    return "en";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    localStorage.setItem("hashware-language", lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
