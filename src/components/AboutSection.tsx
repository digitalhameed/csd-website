import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-dark-surface relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="section-badge">من نحن ؟</span>
            <div className="flex chevron-accent">
              <ChevronRight className="w-6 h-6" />
              <ChevronRight className="w-6 h-6 -ml-2 opacity-70" />
              <ChevronRight className="w-6 h-6 -ml-2 opacity-40" />
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-12">ABOUT CSD</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gold-border-card p-8 space-y-6"
          >
            <p className="text-foreground/90 leading-relaxed text-lg">
              CSD for Contracting, Supplying and Development delivers integrated solutions in supplying, 
              maintenance, operation, inspection, and project management.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Built on the extensive experience of its founders with industry leaders such as{" "}
              <span className="text-gold font-semibold">SABIC</span>,{" "}
              <span className="text-gold font-semibold">ARAMCO</span>,{" "}
              <span className="text-gold font-semibold">SAMREF</span>, and{" "}
              <span className="text-gold font-semibold">MARAFIQ</span>, CSD combines technical expertise 
              with a strong professional network to create real competitive value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="gold-border-card p-8 space-y-6 font-arabic text-right"
            dir="rtl"
          >
            <p className="text-foreground/90 leading-relaxed text-lg">
              سي إس دي للخدمات والتوريد والتطوير (CSD) منظمة متخصصة تقدم حلولاً جوهرية في الخدمات والتوريد 
              والتطوير والإستشارات الفنية التي تشمل الصيانة، التشغيل، التفتيش وإدارة المشاريع.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              تأسست اعتمادًا على خبرات عملية عميقة لمؤسسيها وفريقها في شركات رائدة مثل سابك، أرامكو، 
              سامرف، مرافق، ما يمنحنا فهمًا دقيقًا لاحتياجات القطاع الصناعي والمشاريع الكبرى. 
              ونعتمد على شبكة علاقات قوية تشكل أساس ميزتنا التنافسية.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
