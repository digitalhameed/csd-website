import csdLogo from "@/assets/csd-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={csdLogo} alt="CSD" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-display font-bold text-gold">CSD</span>
          <span className="text-sm text-muted-foreground">للتوريد والخدمات الصناعية</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CSD - Contracting, Supplying & Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
