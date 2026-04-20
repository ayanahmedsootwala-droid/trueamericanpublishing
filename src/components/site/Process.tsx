import { Lightbulb, FileText, Edit3, Palette, Rocket, Trophy } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Discovery", desc: "Strategy session to map your story, audience, and category opportunity." },
  { icon: FileText, title: "Manuscript", desc: "Outlining, drafting and ghostwriting with weekly milestone reviews." },
  { icon: Edit3, title: "Editing", desc: "Developmental, line and copy editing by award-winning editors." },
  { icon: Palette, title: "Design", desc: "Iconic cover, interior typography and audiobook production." },
  { icon: Rocket, title: "Launch", desc: "Distribution to 40K+ retailers and a coordinated bestseller push." },
  { icon: Trophy, title: "Legacy", desc: "Ongoing marketing, PR, foreign rights and adaptation deals." },
];

const Process = () => {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Journey</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            From spark to<br />
            <span className="text-gradient-gold italic">screen-worthy.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            A six-stage cinematic process refined across 300+ titles.
          </p>
        </div>

        <div className="mt-24 relative">
          {/* Vertical timeline line on mobile, horizontal beam on desktop */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary-glow/40 to-transparent md:hidden" />
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-4 relative">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal relative pl-16 md:pl-0" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="md:flex md:flex-col md:items-center md:text-center">
                  <div className="absolute md:relative left-0 md:left-auto top-0 md:top-auto">
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-background border border-primary/40 shadow-glow-gold z-10">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-primary-foreground bg-gradient-gold rounded-full h-5 w-5 inline-flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed md:px-2">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
