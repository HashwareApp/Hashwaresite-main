import { useLanguage } from "@/lib/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative" aria-label="Portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card className="max-w-md w-full bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-12 text-center">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 mb-6"
              >
                <Rocket className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{t.portfolio.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.portfolio.subtitle}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
