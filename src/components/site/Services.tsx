import { BookOpen, PenLine, Megaphone, Palette, Headphones, Library } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Book Writing",
    desc: "We craft the manuscript you've always meant to write — sharp, structural, unmistakably yours.",
    accent: "from-primary/40 to-primary/0",
  },
  {
    icon: PenLine,
    title: "Ghostwriting",
    desc: "Discreet, world-class collaborators trained in your voice. Your name. Your vision. Their craft.",
    accent: "from-secondary-glow/40 to-secondary/0",
  },
  {
    icon: Library,
    title: "Publishing",
    desc: "Hybrid and traditional pathways with full distribution to Amazon, Barnes & Noble, and 40K retailers.",
    accent: "from-accent/40 to-accent/0",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Bestseller campaigns, PR placements, paid acquisition and Amazon ads engineered for impact.",
    accent: "from-primary/40 to-primary/0",
  },
  {
    icon: Palette,
    title: "Cover Design",
    desc: "Iconic, award-winning covers that stop the scroll and own the shelf — physical and digital.",
    accent: "from-secondary-glow/40 to-secondary/0",
  },
  {
    icon: Headphones,
    title: "Audiobooks",
    desc: "Studio-grade narration, mastering and ACX/Audible distribution to capture the listening market.",
    accent: "from-accent/40 to-accent/0",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container relative">
        <div className="max-w-2xl reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Do</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Six disciplines.<br />
            <span className="text-gradient-gold italic">One unstoppable book.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Every service under one roof — engineered to make your book impossible to ignore.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative rounded-2xl glass-card glow-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${s.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="mt-8 flex items-center gap-2 text-sm text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Learn more
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
