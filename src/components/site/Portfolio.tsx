import { useState } from "react";
import stackImg from "@/assets/editorial/stack.jpg";
import floatingBook from "@/assets/editorial/floating-book.jpg";
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
import m1 from "@/assets/genre/memoir-1.jpg";
import m2 from "@/assets/genre/memoir-2.jpg";
import m3 from "@/assets/genre/memoir-3.jpg";
import c1 from "@/assets/genre/children-1.jpg";
import c2 from "@/assets/genre/children-2.jpg";
import c3 from "@/assets/genre/children-3.jpg";
import h1 from "@/assets/genre/historical-1.jpg";
import h2 from "@/assets/genre/historical-2.jpg";
import h3 from "@/assets/genre/historical-3.jpg";
import y2 from "@/assets/genre/ya-2.jpg";
import y3 from "@/assets/genre/ya-3.jpg";
import y4 from "@/assets/genre/ya-4.jpg";
import p1 from "@/assets/genre/poetry-1.jpg";
import p2 from "@/assets/genre/poetry-2.jpg";
import p3 from "@/assets/genre/poetry-3.jpg";
import { Briefcase, Skull, Sparkles, Heart, BookHeart, Baby, Landmark, GraduationCap, Feather } from "lucide-react";

type Book = { img: string; title: string; author: string; rank: string };

const genres: Array<{
  id: string;
  label: string;
  icon: typeof Briefcase;
  blurb: string;
  books: Book[];
}> = [
  {
    id: "ya",
    label: "Young Adult",
    icon: GraduationCap,
    blurb: "TikTok-ready coming-of-age stories built for crossover bestseller status.",
    books: [
      { img: y4, title: "Neon Summer", author: "Cara Alib", rank: "BookTok #1" },
      { img: y2, title: "Summer of Static", author: "Jules Avery", rank: "YA Bestseller" },
      { img: y3, title: "The Last Signal", author: "Theo Mendez", rank: "NYT YA #4" },
    ],
  },
  {
    id: "business",
    label: "Business & Self-Help",
    icon: Briefcase,
    blurb: "Authority-building books for founders, executives and thought leaders.",
    books: [
      { img: b1, title: "The Compounding Edge", author: "James R. Holt", rank: "WSJ Bestseller" },
      { img: b2, title: "Lead Without Fear", author: "Sarah Mitchell", rank: "HBR Bestseller" },
      { img: b3, title: "The Focus Star", author: "Dr. Marcus Chen", rank: "#3 NYT" },
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
  {
    id: "memoir",
    label: "Memoir & Biography",
    icon: BookHeart,
    blurb: "Intimate true stories given the literary polish of a Big Five debut.",
    books: [
      { img: m1, title: "Letters I Never Sent", author: "Helena Marsh", rank: "Indie Bestseller" },
      { img: m2, title: "The House on Mulberry Lane", author: "Theodore Vance", rank: "NPR Pick" },
      { img: m3, title: "Becoming Ember", author: "Yara Solano", rank: "Goodreads Choice" },
    ],
  },
  {
    id: "historical",
    label: "Historical Fiction",
    icon: Landmark,
    blurb: "Sweeping period sagas researched with archival depth and cinematic sweep.",
    books: [
      { img: h1, title: "The Cartographer's Daughter", author: "Adelaide Roux", rank: "Historical Bestseller" },
      { img: h2, title: "Empire of Salt", author: "Rafael Castile", rank: "Amazon #1" },
      { img: h3, title: "The Velvet Conspiracy", author: "Constance Aldridge", rank: "USA Today" },
    ],
  },
  {
    id: "children",
    label: "Children's Books",
    icon: Baby,
    blurb: "Charming illustrated picture books with collectable, gift-worthy production.",
    books: [
      { img: c1, title: "The Whispering Woods", author: "Lila Park", rank: "Parents' Choice" },
      { img: c2, title: "Captain Cookie & the Moon Cake", author: "Marco Beam", rank: "Amazon #1 Kids" },
      { img: c3, title: "Little Lighthouse", author: "Rosie Quill", rank: "Indie Picture #2" },
    ],
  },
  {
    id: "poetry",
    label: "Poetry & Literary",
    icon: Feather,
    blurb: "Slim volumes of poetry & literary essays designed to be heirlooms.",
    books: [
      { img: p1, title: "Wildflower Hours", author: "Imani Vale", rank: "Indie Poetry #1" },
      { img: p2, title: "After the Eclipse", author: "Soren Kael", rank: "Goodreads Poetry" },
      { img: p3, title: "Salt and Honey", author: "Mira Adelle", rank: "Bestselling Verse" },
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
        <div className="grid lg:grid-cols-12 gap-10 items-end reveal">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Our Work</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight font-bold">
              Bestsellers across<br />
              <span className="text-gradient-crimson italic">every category.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl text-lg leading-relaxed">
              From boardroom manifestos to BookTok love stories, picture books to poetry — explore the nine worlds
              where True American Publishers' authors are quietly redefining what a bestseller looks like.
            </p>
          </div>

          {/* Editorial pictorial — premium book stack */}
          <div className="lg:col-span-5 relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-elegant group">
            <img
              src={stackImg}
              alt="Stack of premium leather-bound books with gold-edged pages"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Crafted to Endure</p>
              <p className="font-display text-xl text-foreground mt-1">Heirloom-quality publishing.</p>
            </div>
          </div>
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

        {/* Closing editorial pictorial */}
        <div className="mt-24 reveal grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-[420px] rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={floatingBook}
              alt="Open book floating with pages turning and golden light emanating"
              loading="lazy"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">The Quiet Standard</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight font-bold">
              Every cover is a <span className="text-gradient-crimson italic">first impression</span> the reader will remember forever.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our in-house art directors design book covers the way studios design movie posters —
              with intent, mood, and a fierce understanding of the genre's iconography. Each
              concept goes through three rounds of refinement before it ever sees Amazon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
