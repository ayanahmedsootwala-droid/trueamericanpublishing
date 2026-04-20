import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Lumora didn't just publish my book — they engineered a movement. We hit #1 in three categories within 48 hours of launch.",
    name: "Marisol Vega",
    role: "Author of A Quiet Empire",
    initials: "MV",
  },
  {
    quote: "Working with Lumora felt like joining a Hollywood studio. The cover, the launch, the press — every detail was cinematic.",
    name: "Dr. Kenji Aoyama",
    role: "Bestselling Sci-Fi Author",
    initials: "KA",
  },
  {
    quote: "I came in with 40,000 messy words. I left with a USA Today bestseller and a six-figure speaking pipeline.",
    name: "James R. Holt",
    role: "Founder & WSJ Bestseller",
    initials: "JH",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Author Voices</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Trusted by the<br />
            <span className="text-gradient-gold italic">authors who matter.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative rounded-2xl glass-card glow-border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-purple"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-foreground/90 font-display">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t border-border/60">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-secondary-glow flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Press logos marquee */}
        <div className="mt-24 reveal">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            As featured in
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[
                "FORBES", "WIRED", "THE NEW YORK TIMES", "VOGUE", "FAST COMPANY",
                "BLOOMBERG", "WIRED", "VANITY FAIR", "THE GUARDIAN", "FORBES",
                "WIRED", "THE NEW YORK TIMES", "VOGUE", "FAST COMPANY",
              ].map((logo, i) => (
                <span key={i} className="font-display text-2xl text-muted-foreground/60 tracking-widest">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
