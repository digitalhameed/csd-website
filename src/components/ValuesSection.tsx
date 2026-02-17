import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Eye, Star, RefreshCw, Handshake } from "lucide-react";

const values = [
  { icon: CheckCircle, titleEn: "Quality & Commitment", titleAr: "الجودة والالتزام" },
  { icon: Eye, titleEn: "Transparency", titleAr: "الشفافية" },
  { icon: Star, titleEn: "Client Satisfaction", titleAr: "رضا العملاء" },
  { icon: RefreshCw, titleEn: "Continuous Improvement", titleAr: "التحسين المستمر" },
  { icon: Handshake, titleEn: "Smart Collaboration", titleAr: "التعاون الذكي" },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="values" className="py-24 bg-dark-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">قيمنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4 mb-12">VALUES</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="gold-border-card p-6 text-center hover:border-primary/60 transition-all duration-300 group relative"
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold-gradient rounded-full" />
              <div className="w-14 h-14 mx-auto rounded-full border-2 border-primary/40 flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{value.titleEn}</h3>
              <p className="font-arabic text-sm text-gold">{value.titleAr}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
