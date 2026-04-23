import { Award, Users, Globe, BookOpen, ShieldCheck, Sparkles, Trophy, Building2 } from "lucide-react";

const stats = [
  { v: "600+", l: "Books Published", Icon: BookOpen },
  { v: "11+", l: "Years Experience", Icon: Award },
  { v: "50+", l: "Genres Covered", Icon: Globe },
  { v: "2,000+", l: "Authors Onboard", Icon: Users },
  { v: "100%", l: "Client Satisfaction", Icon: ShieldCheck },
  { v: "40K+", l: "Retail Channels", Icon: Building2 },
];

const values = [
  {
    Icon: ShieldCheck,
    title: "100% Author Ownership",
    body: "Your name, your copyright, your royalties. We never take a percentage of your book sales — ever.",
  },
  {
    Icon: Trophy,
    title: "Senior Talent Only",
    body: "Every project is led by a Big Five-trained editor and a producer with 10+ years in trade publishing.",
  },
  {
    Icon: Sparkles,
    title: "Cinematic Standard",
    body: "We treat manuscripts like screenplays and launches like premieres — because that's what readers remember.",
  },
  {
    Icon: Building2,
    title: "End-to-End Studio",
    body: "Writing, editing, design, distribution, audiobooks and marketing — all under one roof, one producer, one invoice.",
  },
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
                A decade later, we're a fully integrated eBook studio with offices in
                <span className="text-foreground font-medium"> New York, London and Los Angeles</span>,
                a roster of 60+ specialized writers, in-house art directors, audio producers, and a
                dedicated marketing arm that has placed books in <span className="text-foreground font-medium">USA Today, Wall Street Journal,
                NYT, Amazon #1, BookTok and Audible top-10</span> charts.
              </p>
              <p>
                We've helped over <span className="text-foreground font-semibold">1,200 authors</span> publish, market, and monetize their books across nine genres — generating more than <span className="text-foreground font-semibold">14 million copies sold worldwide</span>.
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

        {/* Values grid */}
        <div className="mt-24 reveal">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">What Sets Us Apart</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight font-bold">
              Four standards we will <span className="text-gradient-crimson italic">never compromise.</span>
            </h3>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="premium-card rounded-2xl p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-crimson shadow-glow-crimson mb-5">
                  <v.Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h4 className="font-display text-xl font-bold">{v.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
