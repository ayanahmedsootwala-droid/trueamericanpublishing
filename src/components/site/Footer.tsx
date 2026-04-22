import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-secondary/40 pt-16 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-crimson">
                <span className="font-display text-lg text-primary-foreground font-bold">T</span>
              </span>
              <span className="font-display text-xl font-bold">
                True American <span className="text-gradient-crimson">Publishers</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              America's premium eBook publishing studio — turning ambitious authors into
              category-defining voices since 2013.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a href="mailto:hello@trueamericanpublishers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> hello@trueamericanpublishers.com
              </a>
              <a href="tel:+12125550188" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +1 (212) 555-0188
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> New York · London · Los Angeles
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-primary transition-colors">eBook Writing</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Ghostwriting</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Cover Design</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Publishing</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Audiobooks</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Marketing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#work" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="/#process" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} True American Publishers. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made in the USA · Trusted by 1,200+ authors worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
