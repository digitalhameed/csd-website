import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Lightbulb, Truck, Award } from "lucide-react";

const highlights = [
  {
    icon: DollarSign,
    textEn: "Cost optimization while maintaining high-quality service standards.",
    textAr: "خفض التكاليف مع الحفاظ على أعلى معايير الجودة",
  },
  {
    icon: Lightbulb,
    textEn: "Providing effective and practical solutions to complex challenges.",
    textAr: "تقديم حلول عملية وفعّالة لمعالجة التحديات",
  },
  {
    icon: Truck,
    textEn: "Supplying factory and project requirements efficiently and reliably.",
    textAr: "توريد احتياجات المصانع والمشاريع بكفاءة وموثوقية",
  },
  {
    icon: Award,
    textEn: "Delivering specialized technical and engineering consultations across various fields.",
    textAr: "تقديم استشارات فنية وهندسية متخصصة في مجالات متعددة",
  },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-darker-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gold-gradient flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <p className="font-arabic text-2xl font-bold mb-2">نمتلك فريق عمل</p>
                <p className="font-arabic text-xl mb-4">بخبرة تتجاوز ٣٠ عامًا</p>
                <p className="font-display text-lg font-bold">We Have a Team with</p>
                <p className="font-display text-2xl font-black">Over 30 Years</p>
                <p className="font-display text-lg font-bold">of Experience</p>
              </div>
            </div>
            <p className="font-arabic text-xl text-center mt-6" dir="rtl">نسهم من خلال خبراتنا في :</p>
            <p className="text-center text-muted-foreground mt-1">Through our expertise, we contribute to:</p>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="gold-border-card p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-foreground/90">{item.textEn}</p>
                  <p className="text-sm font-arabic text-gold mt-1" dir="rtl">{item.textAr}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
