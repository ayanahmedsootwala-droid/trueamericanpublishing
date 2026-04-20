const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-gold">
              <span className="font-display text-lg text-primary-foreground font-bold">L</span>
            </span>
            <span className="font-display text-xl">
              Lumora <span className="text-gradient-gold">Press</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lumora Press. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
