const stats = [
  { v: "300+", l: "Books Published" },
  { v: "37", l: "Bestsellers" },
  { v: "14M+", l: "Copies Sold" },
  { v: "12", l: "Years of Craft" },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Lumora</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              We don't make books.<br />
              We make <span className="text-gradient-gold italic">legacies.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Lumora Press was founded by a team of ex-Big Five editors, Hollywood producers,
                and growth marketers obsessed with one question:
                <span className="text-foreground"> what if every book were treated like a blockbuster?</span>
              </p>
              <p>
                We treat manuscripts like screenplays. Launches like premieres. Authors like the
                voices the world has been waiting to hear.
              </p>
              <p className="text-foreground font-display text-xl italic">
                "Stories don't just sell — they shape decades."
              </p>
            </div>
          </div>

          {/* Stat panel */}
          <div className="reveal relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold blur-3xl opacity-60" />
            <div className="relative glass-card glow-border rounded-2xl p-2">
              <div className="grid grid-cols-2">
                {stats.map((s, i) => (
                  <div
                    key={s.l}
                    className={`p-10 text-center ${i % 2 === 0 ? "border-r border-border/60" : ""} ${i < 2 ? "border-b border-border/60" : ""}`}
                  >
                    <div className="font-display text-5xl md:text-6xl text-gradient-gold">{s.v}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
