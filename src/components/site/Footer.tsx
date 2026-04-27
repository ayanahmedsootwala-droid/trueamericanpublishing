import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-foreground text-background pt-20 pb-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-gradient-radial-crimson blur-3xl opacity-30" />

      <div className="container relative">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="True American Publishers logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain drop-shadow-[0_4px_12px_hsl(var(--primary)/0.25)]"
              />
              <span className="font-display text-2xl font-bold leading-tight text-background">
                True American <span className="text-accent">Publishers</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-background/70 max-w-sm leading-relaxed">
              America's premium eBook publishing studio — turning ambitious authors into
              category-defining voices since 2013. Ghostwriting, design, distribution and
              marketing under one cinematic roof.
            </p>
            <div className="mt-6 space-y-2 text-sm text-background/70">
              <a href="mailto:contact@trueamericanpublishers.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> contact@trueamericanpublishers.com
              </a>
              <a href="tel:+12125550188" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +1 (212) 555-0188
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Sugarland, Texas · USA
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "X / Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
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
            <h4 className="text-sm font-semibold text-foreground mb-4">Genres</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#work" className="hover:text-primary transition-colors">Business & Self-Help</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Thriller & Mystery</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Fantasy & Sci-Fi</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Romance</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Memoir & Biography</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Historical Fiction</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Young Adult</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Children's Books</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Poetry & Literary</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#work" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="/#process" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
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
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} True American Publishers. All rights reserved.
          </p>
          <p className="text-xs text-background/60">
            Made in the USA · Trusted by 2,000+ authors worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
