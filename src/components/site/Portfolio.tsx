import b1 from "@/assets/book-1.jpg";
import b2 from "@/assets/book-2.jpg";
import b3 from "@/assets/book-3.jpg";
import b4 from "@/assets/book-4.jpg";
import b5 from "@/assets/book-5.jpg";
import b6 from "@/assets/book-6.jpg";

const books = [
  { img: b1, title: "The Midnight Ledger", author: "E. Ravensworth", genre: "Mystery", rank: "#1 NYT" },
  { img: b2, title: "Signal/Noise", author: "Dr. K. Aoyama", genre: "Sci-Fi Thriller", rank: "Amazon #3" },
  { img: b3, title: "A Quiet Empire", author: "Marisol Vega", genre: "Memoir", rank: "USA Today" },
  { img: b4, title: "The Compounding Edge", author: "James R. Holt", genre: "Business", rank: "WSJ Bestseller" },
  { img: b5, title: "Crown of Embers", author: "Liana Storm", genre: "Fantasy", rank: "#2 NYT" },
  { img: b6, title: "What She Knew", author: "Cora Lane", genre: "Romance", rank: "Top 100 Audible" },
];

const Portfolio = () => {
  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-radial-gold blur-3xl opacity-50" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Work</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Books that became<br />
              <span className="text-gradient-gold italic">cultural moments.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection from the 300+ titles we've launched across every major genre and platform.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10" style={{ perspective: "1500px" }}>
          {books.map((b, i) => (
            <article
              key={b.title}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-12deg)_rotateX(6deg)_translateZ(20px)] shadow-elegant">
                <img
                  src={b.img}
                  alt={`${b.title} by ${b.author} — book cover`}
                  loading="lazy"
                  width={640}
                  height={896}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Spine glow */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary/40 via-primary-glow/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Hover sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-lg ring-1 ring-primary/0 group-hover:ring-primary/40 group-hover:shadow-gold transition-all duration-500" />

                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-primary mb-1">
                    {b.rank}
                  </span>
                  <h3 className="font-display text-xl leading-tight">{b.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{b.author} · {b.genre}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
