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
    <section id="pricing" className="relative py-28 md:py-32 overflow-hidden bg-secondary/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Investment Tiers</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight font-bold">
            Crafted with intention.<br />
            <span className="text-gradient-crimson italic">Priced with respect.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Six curated tiers — each engineered for a specific stage of the author journey.
            No upsells. No hidden retainers. Only senior talent, transparent scopes, and a
            single dedicated producer guiding your manuscript from first draft to the world stage.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal relative rounded-2xl p-8 flex flex-col transition-all duration-500 ${
                t.featured
                  ? "bg-gradient-to-b from-primary/[0.04] to-white border-2 border-primary shadow-crimson z-10"
                  : "premium-card"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {t.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-crimson px-4 py-1 text-xs font-bold text-primary-foreground shadow-glow-crimson">
                  <Crown className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-display text-3xl font-bold">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
              </div>

              <div className="mt-8 pb-8 border-b border-border">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-gradient-crimson font-bold">{t.price}</span>
                  <span className="text-sm text-muted-foreground">starting</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full shrink-0 ${
                        t.featured ? "bg-gradient-crimson" : "bg-primary/10"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${t.featured ? "text-primary-foreground" : "text-primary"}`}
                        strokeWidth={3}
                      />
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

        <div className="mt-16 reveal max-w-3xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-border bg-white px-8 py-5 shadow-soft">
            <span className="text-sm text-foreground/80">
              <span className="text-primary font-bold">·</span> Flexible installment plans
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span className="text-sm text-foreground/80">
              <span className="text-primary font-bold">·</span> 100% satisfaction guarantee
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span className="text-sm text-foreground/80">
              <span className="text-primary font-bold">·</span> Mutual NDA on every engagement
            </span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic font-display">
            Not seeing the right fit? Our concierge team can architect a bespoke arrangement around your manuscript and ambitions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
