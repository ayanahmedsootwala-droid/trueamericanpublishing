import { useState } from "react";
import b1 from "@/assets/genre/biz-1.jpg";
import b2 from "@/assets/genre/biz-2.jpg";
import b3 from "@/assets/genre/biz-3.jpg";
import t1 from "@/assets/genre/thriller-1.jpg";
import t2 from "@/assets/genre/thriller-2.jpg";
import t3 from "@/assets/genre/thriller-3.jpg";
import f1 from "@/assets/genre/fantasy-1.jpg";
import f2 from "@/assets/genre/fantasy-2.jpg";
import f3 from "@/assets/genre/fantasy-3.jpg";
import r1 from "@/assets/genre/romance-1.jpg";
import r2 from "@/assets/genre/romance-2.jpg";
import r3 from "@/assets/genre/romance-3.jpg";
import { Briefcase, Skull, Sparkles, Heart } from "lucide-react";

type Book = { img: string; title: string; author: string; rank: string };

const genres: Array<{
  id: string;
  label: string;
  icon: typeof Briefcase;
  blurb: string;
  books: Book[];
}> = [
  {
    id: "business",
    label: "Business & Self-Help",
    icon: Briefcase,
    blurb: "Authority-building books for founders, executives and thought leaders.",
    books: [
      { img: b1, title: "The Compounding Edge", author: "James R. Holt", rank: "WSJ Bestseller" },
      { img: b2, title: "Lead Without Fear", author: "Sarah Mitchell", rank: "HBR Bestseller" },
      { img: b3, title: "The Focused Hour", author: "Dr. Marcus Chen", rank: "#3 NYT" },
    ],
  },
  {
    id: "thriller",
    label: "Thriller & Mystery",
    icon: Skull,
    blurb: "Page-turning suspense engineered to dominate Kindle and Audible charts.",
    books: [
      { img: t1, title: "The Midnight Ledger", author: "E. Ravensworth", rank: "#1 NYT" },
      { img: t2, title: "What She Buried", author: "Cora Lane", rank: "Top 10 Audible" },
      { img: t3, title: "Cold Evidence", author: "Detective Ray Walsh", rank: "Amazon #2" },
    ],
  },
  {
    id: "fantasy",
    label: "Fantasy & Sci-Fi",
    icon: Sparkles,
    blurb: "World-building epics that ignite passionate fanbases and adaptation deals.",
    books: [
      { img: f1, title: "Crown of Embers", author: "Liana Storm", rank: "#2 NYT" },
      { img: f2, title: "Signal/Noise", author: "Dr. K. Aoyama", rank: "Amazon #3" },
      { img: f3, title: "Ashes of the Ninth Realm", author: "Adrian Vale", rank: "USA Today" },
    ],
  },
  {
    id: "romance",
    label: "Romance",
    icon: Heart,
    blurb: "Heart-stopping love stories with the marketing muscle to top BookTok.",
    books: [
      { img: r1, title: "When Hearts Collide", author: "Isabella Rose", rank: "USA Today" },
      { img: r2, title: "The Summer We Fell", author: "Olivia Pierce", rank: "BookTok #1" },
      { img: r3, title: "Forbidden Vows", author: "Sienna Knight", rank: "NYT Bestseller" },
    ],
  },
];

const Portfolio = () => {
  const [active, setActive] = useState(genres[0].id);
  const current = genres.find((g) => g.id === active)!;

  return (
    <section id="work" className="relative py-28 md:py-32 overflow-hidden bg-secondary/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[800px] bg-gradient-radial-crimson blur-3xl opacity-60" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Our Work</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight font-bold">
              Bestsellers across<br />
              <span className="text-gradient-crimson italic">every category.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From boardroom manifestos to BookTok love stories — explore the four genres where
            our authors are dominating today.
          </p>
        </div>

        {/* Genre tabs */}
        <div className="mt-12 flex flex-wrap gap-3 reveal">
          {genres.map((g) => {
            const Icon = g.icon;
            const isActive = g.id === active;
            return (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-crimson text-primary-foreground border-transparent shadow-crimson"
                    : "bg-white text-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4" />
                {g.label}
              </button>
            );
          })}
        </div>

        {/* Genre blurb */}
        <p className="mt-6 text-base text-muted-foreground max-w-2xl reveal">{current.blurb}</p>

        {/* Book grid */}
        <div
          key={current.id}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          style={{ perspective: "1500px" }}
        >
          {current.books.map((b, i) => (
            <article
              key={b.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-white shadow-elegant transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-10deg)_rotateX(4deg)_translateZ(20px)] group-hover:shadow-crimson">
                <img
                  src={b.img}
                  alt={`${b.title} by ${b.author} — book cover`}
                  loading="lazy"
                  width={640}
                  height={960}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Spine highlight */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="mt-5">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">
                  {b.rank}
                </span>
                <h3 className="font-display text-xl leading-tight text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">by {b.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
