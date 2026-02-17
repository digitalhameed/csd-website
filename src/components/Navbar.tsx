import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import csdLogo from "@/assets/csd-logo.jpg";

const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#vision", label: "Vision" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#values", label: "Values" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <img src={csdLogo} alt="CSD Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display font-bold text-xl text-gold">CSD</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gold-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Contact Us <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
