import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-gold">
              <span className="font-display text-lg text-primary-foreground font-bold">T</span>
            </span>
            <span className="font-display text-xl">
              True American <span className="text-gradient-gold">Publishers</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="/#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="/#about" className="hover:text-foreground transition-colors">About</a>
            <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} True American Publishers. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 text-xs">
            <Link
              to="/terms-and-conditions"
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </Link>
            <span className="text-border">·</span>
            <Link
              to="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-border">·</span>
            <Link
              to="/refund-policy"
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Refund Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
