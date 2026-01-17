import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Smartphone, Globe } from "lucide-react";
import logoIcon from "@assets/Hashware_Logo_White_PNG_1768586294940.png";

function FloatingShape({ delay, duration, className }: { delay: number; duration: number; className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" aria-label="Hero Section">
      
      {/* Enhanced animated background shapes */}
      <FloatingShape delay={0} duration={8} className="top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-3xl" />
      <FloatingShape delay={1.5} duration={10} className="top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 blur-3xl" />
      <FloatingShape delay={3} duration={12} className="bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-3xl" />
      <FloatingShape delay={2} duration={9} className="top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-500 to-red-500 opacity-15 blur-3xl" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Innovative Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {t.hero.tagline}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/50"
                onClick={() => scrollToSection("services")}
                data-testid="button-services"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 hover:bg-slate-800 hover:border-blue-500/50"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact"
              >
                {t.hero.cta2}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8 flex items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-400">Web Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-slate-400">Mobile Apps</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              {/* Animated gradient rings */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-4/5 h-4/5 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl"
              />

              {/* Floating tech icons around logo */}
              {/* Code icon - centered above logo */}
              <motion.div
                className="absolute -top-4 sm:-top-8 lg:-top-10 left-0 right-0 mx-auto w-fit z-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  delay: 0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-2 sm:p-3 rounded-xl backdrop-blur-sm bg-blue-500/10 border border-blue-500/30 shadow-lg shadow-blue-500/20">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
              </motion.div>

              {/* Smartphone icon - right side, centered vertically */}
              <motion.div
                className="absolute top-1/2 -right-2 sm:-right-6 lg:-right-12 -translate-y-1/2 z-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-2 sm:p-3 rounded-xl backdrop-blur-sm bg-purple-500/10 border border-purple-500/30 shadow-lg shadow-purple-500/20">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
              </motion.div>

              {/* Globe icon - left side, centered vertically (same height as smartphone) */}
              <motion.div
                className="absolute top-1/2 -left-2 sm:-left-6 lg:-left-12 -translate-y-1/2 z-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 4.5,
                  delay: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-2 sm:p-3 rounded-xl backdrop-blur-sm bg-cyan-500/10 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="relative">
                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-2xl rounded-full" />
                  <img
                    src={logoIcon}
                    alt="Hashware Logo - Unlocking Smart Software"
                    className="relative w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                    width="320"
                    height="320"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
