import { useLanguage } from "@/lib/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" aria-label="Contact Information">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent" />
      
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t.contact.info.address}</h3>
                    <p className="text-muted-foreground">
                      Postbus 67025<br />
                      1060JA Amsterdam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t.contact.info.email}</h3>
                    <a
                      href="mailto:info@hashware.app"
                      className="text-primary hover:underline transition-colors"
                      data-testid="link-email"
                    >
                      info@hashware.app
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
