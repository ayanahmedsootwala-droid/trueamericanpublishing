import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, BookOpen, Sparkles, Star, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const HeroScene = lazy(() => import("./HeroScene"));

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  genre: z.string().trim().min(1, "Pick a genre or project type").max(80),
  details: z.string().trim().min(10, "Add a few words about your book").max(500),
});

const Hero = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);
  const [loading, setLoading] = useState(false);

  // Drives parallax + magic-book opening based on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = 600;
      scrollProgress.current = Math.min(1, y / max);
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        sceneRef.current.style.opacity = `${Math.max(0.2, 1 - y / 900)}`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Quote request received",
        description: "A senior producer will email you a tailored proposal within 24 hours.",
      });
    }, 900);
  };

  return (
    <section
      id="top"
      className="relative min-h-[100vh] overflow-hidden bg-gradient-hero"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-faint opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Centered logo just under the navbar */}
      <div className="relative z-10 pt-28 md:pt-32 flex justify-center">
        <a href="#top" className="group inline-flex flex-col items-center gap-3 animate-fade-in">
          <span className="relative inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl bg-white shadow-elegant ring-1 ring-primary/20 p-2 transition-transform duration-500 group-hover:scale-105">
            <img
              src={logo}
              alt="True American Publishers — ghost rising from open book with quill"
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
            <span className="absolute inset-0 rounded-2xl bg-gradient-radial-crimson opacity-60 blur-xl -z-10" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            Est. 2013 · New York · London · Los Angeles
          </span>
        </a>
      </div>

      <div className="container relative pt-10 pb-16 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              The Studio Behind 600+ Published Books
            </span>
          </div>

          <h1
            className="mt-8 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-bold tracking-tight animate-fade-in-up text-foreground"
          >
            Stuck on chapter one?<br />
            We turn it into a{" "}
            <span className="relative inline-block">
              <span className="text-gradient-crimson italic">bestseller.</span>
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-crimson rounded-full opacity-70" />
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ghostwriting, editing, design, distribution, and Amazon marketing — under one roof.
            Eleven years, fifty genres, and over two thousand authors who finally saw their book
            on a shelf.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#quote">
                Get My Free Quote
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

          {/* Trust bar */}
          <div
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.9 / 5 from 2,000+ authors
              </span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">600+</span> titles published ·{" "}
              <span className="text-foreground font-semibold">11+</span> years in print
            </p>
          </div>
        </div>

        {/* Right — 3D scene */}
        <div
          ref={sceneRef}
          className="lg:col-span-5 relative h-[460px] md:h-[560px] lg:h-[640px] will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-radial-crimson blur-3xl opacity-80" />
          <Suspense fallback={<div className="h-full w-full animate-pulse rounded-2xl bg-muted/40" />}>
            <HeroScene scrollProgress={scrollProgress} />
          </Suspense>

          <div className="absolute top-4 right-2 hidden md:flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-border px-3 py-1.5 shadow-soft animate-float">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-foreground">Scroll · the book opens</span>
          </div>

          <div
            className="absolute bottom-6 left-2 hidden md:flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur border border-border px-4 py-3 shadow-elegant animate-float"
            style={{ animationDelay: "1s" }}
          >
            <BookOpen className="h-5 w-5 text-primary" />
            <div className="leading-tight">
              <div className="text-xs text-muted-foreground">Now distributing to</div>
              <div className="text-sm font-semibold">40,000+ retailers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Get-a-quote form, just beneath the hero */}
      <div id="quote" className="container relative pb-24">
        <div className="reveal in-view premium-card rounded-3xl p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Free Strategy Call</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight font-bold">
              Get your <span className="text-gradient-crimson italic">tailored quote</span> in 24 hours.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tell us about your project. A senior producer — not a sales rep — will reply with a
              custom plan, timeline, and price.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              100% confidential · NDA available on request
            </div>
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
              <Input id="q-genre" name="genre" placeholder="Memoir · Business · Thriller · Romance…" maxLength={80} required />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="q-details">A few words about your book</Label>
              <Textarea id="q-details" name="details" rows={3} placeholder="What's the premise? Who's it for? Where are you in the process?" maxLength={500} required />
            </div>
            <Button type="submit" variant="hero" size="lg" className="md:col-span-2" disabled={loading}>
              {loading ? "Sending…" : "Get My Free Quote"}
              <ArrowRight />
            </Button>
          </form>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
