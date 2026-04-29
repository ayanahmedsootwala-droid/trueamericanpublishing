import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, BookOpen, Sparkles, Star } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

import thriller1 from "@/assets/genre/thriller-1.jpg";
import fantasy1 from "@/assets/genre/fantasy-1.jpg";
import romance1 from "@/assets/genre/romance-1.jpg";
import ya1 from "@/assets/genre/ya-1.jpg";
import ya2 from "@/assets/genre/ya-2.jpg";
import ya3 from "@/assets/genre/ya-3.jpg";
import ya4 from "@/assets/genre/ya-4.jpg";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  genre: z.string().trim().min(1, "Pick a genre or project type").max(80),
  details: z.string().trim().min(10, "Add a few words about your book").max(500),
});

const leadInbox = "contact@trueamericanpublishers.com";

// Real AI book-cover collage replacing the previous 3D scene
const heroBooks = [
  { src: ya4, alt: "Gen-Z young adult book cover", className: "top-0 left-1/2 -translate-x-1/2 w-36 md:w-44 rotate-[-5deg] z-20", delay: "0s" },
  { src: ya1, alt: "Young adult fantasy book cover", className: "top-8 left-1 w-32 md:w-40 rotate-[-13deg] z-10", delay: "0.2s" },
  { src: ya2, alt: "Contemporary young adult book cover", className: "top-10 right-0 w-32 md:w-40 rotate-[12deg] z-10", delay: "0.4s" },
  { src: ya3, alt: "Young adult sci-fi book cover", className: "bottom-4 left-1/2 -translate-x-1/2 w-36 md:w-48 rotate-[3deg] z-30", delay: "0.6s" },
  { src: fantasy1, alt: "Fantasy book cover", className: "bottom-8 left-6 w-28 md:w-36 rotate-[9deg]", delay: "0.8s" },
  { src: romance1, alt: "Romance book cover", className: "bottom-10 right-6 w-28 md:w-36 rotate-[-9deg]", delay: "1s" },
  { src: thriller1, alt: "Thriller book cover", className: "top-1/2 -translate-y-1/2 -left-3 w-24 md:w-30 rotate-[18deg] hidden md:block", delay: "1.2s" },
];

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = quoteSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      genre: fd.get("genre"),
      details: fd.get("details"),
    });
    if (!parsed.success) {
      toast({
        title: "Please review your details",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    const subject = encodeURIComponent(`New publishing plan lead from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nGenre / Project: ${parsed.data.genre}\n\nBook Details:\n${parsed.data.details}`,
    );
    window.location.href = `mailto:${leadInbox}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Lead magnet request prepared",
        description: "Your email app opened with the lead details. Branded direct delivery needs email setup completed.",
      });
    }, 900);
  };

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-faint opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Centered logo just under the navbar — no outer tile */}
      <div className="relative z-10 pt-22 md:pt-24 flex justify-center">
        <a href="#top" className="group inline-flex flex-col items-center gap-3 animate-fade-in">
          <img
            src={logo}
            alt="True American Publishers — ghost rising from open book with quill"
            width={120}
            height={120}
            className="h-20 w-20 md:h-28 md:w-28 object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_24px_hsl(var(--primary)/0.25)]"
          />
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Est. 2013 · Miami, Florida
          </span>
        </a>
      </div>

      <div className="container relative pt-7 pb-12 md:pb-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              The Studio Behind 600+ Published Books
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-[2.35rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.35rem] leading-[1.08] font-semibold animate-fade-in-up text-foreground">
            A sharper book. A wider audience. A launch that feels effortless.
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-[1.05rem] text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            From raw idea to professionally published eBook, our Miami studio handles the
            writing, editing, cover design, distribution, and launch strategy that makes your story feel undeniable.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#quote">
                Claim My Free Publishing Plan
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="ghostly" size="xl" asChild>
              <a href="#work">
                <BookOpen className="mr-1" />
                See Our Work
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 / 5 from 2,000+ authors</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">600+</span> titles published ·{" "}
              <span className="text-foreground font-semibold">11+</span> years in print
            </p>
          </div>
        </div>

        {/* Right — real AI book-cover collage */}
        <div className="lg:col-span-5 relative h-[340px] md:h-[455px]">
          <div className="absolute inset-0 bg-gradient-radial-crimson blur-3xl opacity-55" />
          <div className="relative h-full w-full">
            {heroBooks.map((b, i) => (
              <div
                key={i}
                className={`absolute ${b.className} animate-fade-in-up`}
                style={{ animationDelay: b.delay }}
              >
                <div className="rounded-md overflow-hidden shadow-elegant ring-1 ring-black/5 animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                  <img
                    src={b.src}
                    alt={b.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 left-2 hidden md:flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur border border-border px-4 py-3 shadow-elegant animate-float z-40" style={{ animationDelay: "1s" }}>
            <BookOpen className="h-5 w-5 text-primary" />
            <div className="leading-tight">
              <div className="text-xs text-muted-foreground">Free lead magnet</div>
              <div className="text-sm font-semibold">Publishing plan in 24 hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Get-a-quote form */}
      <div id="quote" className="container relative pb-16 md:pb-20">
        <div className="reveal in-view premium-card rounded-2xl p-6 md:p-8 grid lg:grid-cols-12 gap-7 items-center">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Free Lead Magnet</p>
            <h2 className="mt-3 font-display text-2xl md:text-4xl leading-tight font-bold">
              Get your <span className="text-gradient-crimson italic">Publishing Plan</span> in 24 hours.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Submit your details and receive a tailored roadmap covering your genre, timeline,
              publishing channels, and launch recommendations.
            </p>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="q-name">Full name</Label>
              <Input id="q-name" name="name" placeholder="Jane Carter" maxLength={100} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="q-email">Email</Label>
              <Input id="q-email" name="email" type="email" placeholder="jane@email.com" maxLength={255} required />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="q-genre">Genre or project type</Label>
              <Input id="q-genre" name="genre" placeholder="Young Adult · Thriller · Romance · Memoir…" maxLength={80} required />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="q-details">A few words about your book</Label>
              <Textarea id="q-details" name="details" rows={3} placeholder="What's the premise? Who's it for? Where are you in the process?" maxLength={500} required />
            </div>
            <Button type="submit" variant="hero" size="lg" className="md:col-span-2" disabled={loading}>
              {loading ? "Sending…" : "Send My Publishing Plan"}
              <ArrowRight />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
