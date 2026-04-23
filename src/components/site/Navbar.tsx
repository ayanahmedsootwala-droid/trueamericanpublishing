import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-white/90 border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="True American Publishers logo"
            width={48}
            height={48}
            className="h-11 w-11 md:h-12 md:w-12 object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_4px_12px_hsl(var(--primary)/0.2)]"
          />
          <span className="font-display text-base md:text-lg tracking-tight font-bold leading-tight">
            True American <span className="text-gradient-crimson">Publishers</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-crimson transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+12125550188"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <Phone className="h-4 w-4" /> (212) 555-0188
          </a>
          <Button variant="hero" size="sm" asChild>
            <a href="#quote">Free Quote</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-white/98 backdrop-blur-xl">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild className="mt-2">
              <a href="#quote" onClick={() => setOpen(false)}>Get My Free Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
