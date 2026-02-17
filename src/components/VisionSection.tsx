import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Eye } from "lucide-react";

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 bg-darker-surface relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="section-badge">رؤيتنا</span>
          <div className="flex justify-center my-4 chevron-accent">
            <ChevronRight className="w-8 h-8" />
            <ChevronRight className="w-8 h-8 -ml-3 opacity-70" />
            <ChevronRight className="w-8 h-8 -ml-3 opacity-40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-12">Vision</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto gold-border-card p-12 text-center relative"
        >
          <Eye className="w-16 h-16 text-gold mx-auto mb-6 opacity-40" />
          <p className="text-xl md:text-2xl font-display leading-relaxed mb-6">
            Delivering high-value services that enhance our partners' competitiveness 
            through professionalism and modern technologies
          </p>
          <p className="text-xl md:text-2xl font-arabic leading-relaxed text-gold" dir="rtl">
            تقديم خدمات عالية القيمة تعزز تنافسية شركائنا باحترافية وتقنيات حديثة
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
