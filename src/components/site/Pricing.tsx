import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    tagline: "Polished, ready, and 100% yours.",
    price: "$749",
    original: "$2,497",
    description: "Everything you need to get your manuscript polished and ready.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
    ],
    cta: "Start with Basic",
    featured: false,
  },
  {
    name: "Standard",
    tagline: "Cover. Kindle. Ready to launch.",
    price: "$1,499",
    original: "$4,997",
    description: "Complete package with cover design and Kindle e-book publishing.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
      "Book Cover Design",
      "Publishing on Kindle (E-book)",
    ],
    cta: "Choose Standard",
    featured: false,
  },
  {
    name: "Premium",
    tagline: "Two formats. Global retailers.",
    price: "$2,100",
    original: "$7,000",
    description: "Full publishing with ISBN, Amazon & Kindle in both e-book and paperback.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
      "Book Cover Design",
      "ISBN Number",
      "Publishing on Amazon & Kindle",
      "E-book + Paperback (2 Formats)",
    ],
    cta: "Go Premium",
    featured: false,
  },
  {
    name: "Professional",
    tagline: "Author website + 3 formats.",
    price: "$2,400",
    original: "$8,000",
    description: "Advanced publishing with author website, multi-platform distribution, and 3 formats.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
      "Book Cover Design",
      "ISBN + Barcode",
      "Publishing on Amazon, Kindle & Barnes & Noble",
      "2-4 Pages Author Website",
      "1-Year Domain & Hosting",
      "E-book, Paperback, Hardcover (3 Formats)",
    ],
    cta: "Go Professional",
    featured: true,
  },
  {
    name: "Grand",
    tagline: "Trailer. Marketing. Best-sellers team.",
    price: "$4,200",
    original: "$14,000",
    description: "Complete solution with video trailer, 12-month marketing, and bestselling writers.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
      "Book Cover Design",
      "ISBN + Barcode",
      "Publishing on Amazon, Kindle, Barnes & Noble, Google Books & Kobo",
      "2-4 Pages Author Website",
      "1-Year Domain & Hosting",
      "30-60 Seconds Video Trailer",
      "12 Months of Brand Marketing",
      "Dedicated Team of Best-Selling Writers",
      "E-book, Paperback, Hardcover (3 Formats)",
    ],
    cta: "Choose Grand",
    featured: false,
  },
  {
    name: "Bestseller",
    tagline: "The full bestseller engine.",
    price: "$7,199",
    original: "$23,997",
    description: "The ultimate package to turn your book into a bestseller with full marketing support.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
      "Book Cover Design",
      "ISBN + Barcode",
      "Publishing on Amazon, Kindle, Barnes & Noble, Google Books & Kobo",
      "2-4 Pages Author Website",
      "2-Year Domain & Hosting",
      "60-90 Seconds Video Trailer",
      "24 Months of Bestselling Marketing",
      "Dedicated Team of Best-Selling Writers",
      "E-book, Paperback, Hardcover (3 Formats)",
    ],
    cta: "Apply for Bestseller",
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
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-crimson px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-glow-crimson">
            <Sparkles className="h-3.5 w-3.5" />
            Limited Launch · 70% OFF All Packages
          </div>
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
              {/* Discount ribbon */}
              <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-background shadow-soft">
                70% OFF
              </div>

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
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-5xl text-gradient-crimson font-bold tracking-tight">{t.price}</span>
                  <span className="text-lg text-muted-foreground line-through decoration-primary/40 decoration-2">
                    {t.original}
                  </span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{t.description}</p>
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
