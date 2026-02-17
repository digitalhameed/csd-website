import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Users } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-darker-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">فريقنا</span>
          <div className="flex items-center gap-2 my-4 chevron-accent">
            <ChevronRight className="w-8 h-8" />
            <ChevronRight className="w-8 h-8 -ml-4 opacity-70" />
            <ChevronRight className="w-8 h-8 -ml-4 opacity-40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-12">OUR TEAM</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="gold-border-card p-12 max-w-4xl mx-auto"
        >
          <Users className="w-20 h-20 text-gold mx-auto mb-8 opacity-50" />
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <p className="text-xl leading-relaxed">
              A team of elite experts and consultants with strong hands-on industrial experience.
            </p>
            <p className="text-xl font-arabic leading-relaxed text-right" dir="rtl">
              نخبة من الخبراء والاستشاريين ذوي خبرة ميدانية عالية في القطاعات الصناعية والخدمية.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["30+", "SABIC", "ARAMCO", "MARAFIQ"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="text-center p-4 rounded-lg bg-secondary"
              >
                <span className="text-2xl font-display font-bold text-gold">{item}</span>
                <p className="text-xs text-muted-foreground mt-1">
                  {i === 0 ? "Years Experience" : "Industry Partner"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
