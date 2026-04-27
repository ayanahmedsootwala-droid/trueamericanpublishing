import { BookOpen, PenLine, Megaphone, Palette, Headphones, Library, ShoppingCart, FileEdit } from "lucide-react";

const services = [
  {
    icon: PenLine,
    title: "Ghostwriting",
    desc: "World-class collaborators who write in your voice — from concept to finished manuscript.",
  },
  {
    icon: BookOpen,
    title: "eBook Writing",
    desc: "Original full-length eBooks crafted around your expertise, audience, and bestseller goals.",
  },
  {
    icon: FileEdit,
    title: "Editing & Proofreading",
    desc: "Developmental, line, and copy editing by editors with Big-Five and indie experience.",
  },
  {
    icon: Palette,
    title: "Cover & Interior Design",
    desc: "Iconic covers and clean, modern interior layouts for Kindle, paperback and hardcover.",
  },
  {
    icon: Library,
    title: "eBook Publishing",
    desc: "End-to-end Amazon KDP, Apple Books, B&N, Kobo and Google Play distribution.",
  },
  {
    icon: Headphones,
    title: "Audiobook Production",
    desc: "Studio-grade narration, mastering and ACX/Audible distribution.",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    desc: "Bestseller campaigns, Amazon ads, BookTok, PR placements, and email funnels.",
  },
  {
    icon: ShoppingCart,
    title: "Author Branding",
    desc: "Author websites, social presence and lead magnets that turn readers into superfans.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative section-spacious overflow-hidden">
      <div className="absolute inset-0 bg-editorial-pattern opacity-45 [mask-image:linear-gradient(180deg,transparent,black_12%,black_88%,transparent)]" />

      <div className="container relative">
        <div className="max-w-2xl reveal">
          <p className="section-kicker mb-4">What We Do</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] font-bold">
            Eight disciplines.<br />
            <span className="text-gradient-crimson italic">One unstoppable book.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Every service a self-publishing author needs — engineered to make your eBook impossible to ignore.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal premium-card group relative rounded-2xl p-7 overflow-hidden min-h-[245px]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-crimson-soft border border-primary/15 group-hover:bg-gradient-crimson group-hover:border-transparent transition-all duration-500">
                  <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="mt-5 font-display text-xl text-foreground font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
