import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    tagline: "Kickstart your author journey",
    price: "$749",
    features: [
      "Manuscript consultation (up to 10k words)",
      "Basic developmental feedback",
      "Standard cover concept",
      "eBook formatting",
      "Amazon KDP setup",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Essential",
    tagline: "For aspiring first-time authors",
    price: "$999",
    features: [
      "Ghostwriting (up to 15k words)",
      "Proofreading & basic editing",
      "Custom cover design",
      "eBook + paperback formatting",
      "Amazon distribution",
    ],
    cta: "Choose Essential",
    featured: false,
  },
  {
    name: "Author",
    tagline: "Polished publishing made simple",
    price: "$1,399",
    features: [
      "Ghostwriting (up to 25k words)",
      "Developmental + copy editing",
      "Premium cover design",
      "Print + eBook publishing",
      "ISBN + Amazon distribution",
      "Author bio & blurb crafting",
    ],
    cta: "Become an Author",
    featured: false,
  },
  {
    name: "Professional",
    tagline: "Most chosen by serious writers",
    price: "$2,199",
    features: [
      "Full ghostwriting (up to 40k words)",
      "Premium editorial team",
      "Award-winning cover + interior",
      "Print, eBook + Audiobook setup",
      "Multi-retailer distribution",
      "4-week launch campaign",
    ],
    cta: "Go Professional",
    featured: true,
  },
  {
    name: "Premium",
    tagline: "Elite production for ambitious authors",
    price: "$3,499",
    features: [
      "Senior ghostwriter (up to 60k words)",
      "Full editorial + proofreading suite",
      "Luxury cover & interior design",
      "Audiobook narration & production",
      "20K+ retailer distribution",
      "8-week marketing campaign",
      "Author website starter",
    ],
    cta: "Go Premium",
    featured: false,
  },
  {
    name: "Legacy",
    tagline: "For category-defining works",
    price: "$7,499",
    features: [
      "Senior ghostwriter + research team",
      "Bestseller campaign engineering",
      "PR placements (Forbes, Inc., etc.)",
      "Foreign rights & translation",
      "Adaptation & speaking pipeline",
      "Dedicated launch director",
    ],
    cta: "Apply for Legacy",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Packages</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Choose your<br />
            <span className="text-gradient-gold italic">level of legacy.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Transparent pricing. Concierge execution. No template-driven shortcuts.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal relative rounded-2xl p-8 flex flex-col transition-all duration-500 ${
                t.featured
                  ? "glass-card border border-primary/40 shadow-gold z-10 bg-gradient-to-b from-primary/[0.06] to-transparent"
                  : "glass-card glow-border hover:-translate-y-1"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {t.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-primary-foreground shadow-glow-gold">
                  <Crown className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-display text-3xl">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
              </div>

              <div className="mt-8 pb-8 border-b border-border/60">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-gradient-gold">{t.price}</span>
                  {t.price !== "Custom" && <span className="text-sm text-muted-foreground">starting</span>}
                </div>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${t.featured ? "bg-gradient-gold" : "bg-primary/15"}`}>
                      <Check className={`h-3 w-3 ${t.featured ? "text-primary-foreground" : "text-primary"}`} strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={t.featured ? "hero" : "ghostly"}
                size="lg"
                className="mt-10 w-full"
                asChild
              >
                <a href="#contact">{t.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground reveal">
          Flexible payment plans available · 100% satisfaction guarantee · NDA on every project
        </p>
      </div>
    </section>
  );
};

export default Pricing;
