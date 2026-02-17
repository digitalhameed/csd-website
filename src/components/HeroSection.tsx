import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import csdLogo from "@/assets/csd-logo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Industrial background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={csdLogo} alt="CSD" className="h-16 w-16 rounded-full object-cover border-2 border-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">للتوريد والخدمات الصناعية</p>
                </div>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-black mb-2 text-gold-gradient">
                CSD
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <ChevronRight className="w-8 h-8 chevron-accent" />
                <ChevronRight className="w-8 h-8 chevron-accent opacity-70" />
                <ChevronRight className="w-8 h-8 chevron-accent opacity-40" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 mb-8"
            >
              <p className="text-2xl md:text-3xl font-display font-bold">
                <span className="text-gold">C</span>ontracting
              </p>
              <p className="text-2xl md:text-3xl font-display font-bold">
                <span className="text-gold">S</span>upplying
              </p>
              <p className="text-2xl md:text-3xl font-display font-bold">
                <span className="text-gold">D</span>evelopment
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Discover More <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:block text-right font-arabic"
          >
            <h2 className="text-5xl font-black mb-4 text-gold-gradient">سي إس دي</h2>
            <p className="text-2xl font-bold text-foreground/90 mb-2">للتوريد</p>
            <p className="text-2xl font-bold text-foreground/90">والخدمات الصناعية</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
