import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const clients = [
  "Ma'aden",
  "United Cement",
  "Saudi Electricity Company",
  "Al-Hadas Global International Holding Company",
  "Wahdat Al-Saff Wal-Quwa",
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-24 bg-darker-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">عملاؤنا</span>
          <div className="flex justify-center my-4 chevron-accent">
            <ChevronDown className="w-8 h-8" />
            <ChevronDown className="w-8 h-8 -ml-3 opacity-70" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            OUR <span className="text-gold">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            A proven track record with leading clients across industrial and service sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gold-border-card p-6 flex items-center justify-center hover:border-primary/60 transition-all duration-300 min-h-[100px]"
            >
              <span className="font-semibold text-sm text-center">{client}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-arabic text-lg text-muted-foreground mt-8"
          dir="rtl"
        >
          سجل حافل من المشاريع الناجحة مع جهات رائدة
        </motion.p>
      </div>
    </section>
  );
};

export default ClientsSection;
