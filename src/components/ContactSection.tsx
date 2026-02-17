import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import csdLogo from "@/assets/csd-logo.jpg";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-dark-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="section-badge">تواصل معنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4 mb-12">Contact Us</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto gold-border-card p-12"
        >
          <div className="flex justify-center mb-8">
            <img src={csdLogo} alt="CSD" className="h-20 w-20 rounded-full object-cover border-2 border-primary" />
          </div>

          <div className="space-y-6">
            <a
              href="tel:+966563522807"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">+966 56 352 2807</span>
            </a>

            <a
              href="mailto:Admin@csd-const.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">Admin@csd-const.com</span>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold">Jeddah - Palestine St. Next to Dr. Suliman Fakeeh Hospital</p>
                <p className="font-arabic text-muted-foreground mt-1" dir="rtl">
                  جدة - شارع فلسطين - بجوار مستشفى الدكتور سليمان فقيه
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
