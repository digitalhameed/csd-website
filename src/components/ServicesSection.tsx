import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ChevronRight,
  Package,
  Headphones,
  Wrench,
  Settings,
  Cpu,
  Zap,
  ClipboardCheck,
  Link,
} from "lucide-react";

const services = [
  {
    icon: Package,
    titleEn: "Industrial Materials & Equipment Supply",
    titleAr: "التوريد وإدارة المشاريع",
    descEn: "Project management & execution",
    items: ["Industrial materials supply", "Project management & execution"],
  },
  {
    icon: Headphones,
    titleEn: "Technical Support & Industrial Consulting",
    titleAr: "الدعم الفني والاستشارات الصناعية",
    descEn: "Specialized technical consultations",
    items: ["Technical support", "Industrial consulting"],
  },
  {
    icon: Wrench,
    titleEn: "Mechanical Maintenance & Troubleshooting",
    titleAr: "الصيانة الميكانيكية",
    descEn: "Alignment, balancing, RCA, troubleshooting",
    items: ["Pumps, compressors, turbines & valves", "Root Cause Analysis (RCA)", "Troubleshooting & repair"],
  },
  {
    icon: Settings,
    titleEn: "Mechanical Support Services (Soft Crafts)",
    titleAr: "الخدمات المساندة للمشاريع",
    descEn: "Scaffolding, sandblasting, painting, insulation",
    items: ["Scaffolding", "Sandblasting", "Painting & insulation", "Thermal insulation & refractories"],
  },
  {
    icon: Cpu,
    titleEn: "Technology Integration Consulting",
    titleAr: "الاستشارات التقنية وتكامل الأنظمة",
    descEn: "Process automation & modern tech integration",
    items: ["Process automation", "Modern technology integration", "Operational accuracy & efficiency"],
  },
  {
    icon: Link,
    titleEn: "Operational & Process Improvement",
    titleAr: "الاستشارات التصنيعية وورش التشغيل",
    descEn: "Lean Six Sigma methodologies",
    items: ["Workflow improvement", "Productivity enhancement", "Lean Six Sigma implementation"],
  },
  {
    icon: ClipboardCheck,
    titleEn: "Mechanical & Civil Inspection",
    titleAr: "التفتيش الميكانيكي والمدني",
    descEn: "NDT, API, radiographic inspections",
    items: ["Pipeline inspection", "NDT (UT, PT, MT, RT, VT)", "Welding & equipment inspection", "API & safety inspections"],
  },
  {
    icon: Zap,
    titleEn: "Electrical & Instrumentation Consulting",
    titleAr: "الاستشارات الكهربائية والآلات الدقيقة",
    descEn: "Transformers, panels, cables, motors",
    items: ["Transformers (installation, testing, oil analysis)", "MV & LV panels", "High voltage cables", "Motors & overhead cranes", "Instrument calibration & maintenance"],
  },
  {
    icon: Package,
    titleEn: "Supply Chain Management",
    titleAr: "إدارة سلاسل الإمداد",
    descEn: "Inventory, demand planning, quality control",
    items: ["Inventory management", "Demand planning", "Quality control", "Performance & operations optimization"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-dark-surface relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="section-badge">خدماتنا</span>
            <div className="flex chevron-accent">
              <ChevronRight className="w-6 h-6" />
              <ChevronRight className="w-6 h-6 -ml-2 opacity-70" />
              <ChevronRight className="w-6 h-6 -ml-2 opacity-40" />
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-12">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="gold-border-card p-6 hover:border-primary/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{service.titleEn}</h3>
              <p className="font-arabic text-sm text-gold mb-3" dir="rtl">{service.titleAr}</p>
              <ul className="space-y-1">
                {service.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
