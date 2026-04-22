import { Award, Users, Globe, BookOpen } from "lucide-react";

const stats = [
  { v: "300+", l: "Books Published", Icon: BookOpen },
  { v: "37", l: "Bestsellers", Icon: Award },
  { v: "14M+", l: "Copies Sold", Icon: Globe },
  { v: "1,200+", l: "Happy Authors", Icon: Users },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] bg-gradient-radial-crimson blur-3xl opacity-50" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
              About True American Publishers
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight font-bold">
              America's premium<br />
              <span className="text-gradient-crimson italic">eBook studio.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                True American Publishers was founded in 2013 by a team of ex-Big Five editors,
                Amazon KDP veterans, and growth marketers obsessed with one question:
                <span className="text-foreground font-medium"> what if every author got the
                  same firepower as a New York Times bestseller?</span>
              </p>
              <p>
                Today we're a full-service eBook agency that has helped over <span className="text-foreground font-semibold">1,200 authors</span> publish, market, and monetize their books — across business, fiction, fantasy and romance — generating more than <span className="text-foreground font-semibold">14 million copies sold worldwide</span>.
              </p>
              <p>
                We treat every manuscript like a screenplay. Every launch like a premiere. Every
                author like the voice the world has been waiting to hear.
              </p>
              <blockquote className="border-l-2 border-primary pl-5 text-foreground font-display text-xl italic">
                "Stories don't just sell — they shape decades."
              </blockquote>
            </div>
          </div>

          {/* Stat panel */}
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="premium-card rounded-2xl p-7 text-center"
                >
                  <s.Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="font-display text-4xl md:text-5xl text-gradient-crimson font-bold">
                    {s.v}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 premium-card rounded-2xl p-6">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Trusted by</span> founders, executives,
                novelists, and Fortune 500 leaders to bring their ideas to the page —
                and to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
