import { lazy, Suspense, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles, Star } from "lucide-react";

const HeroScene = lazy(() => import("./HeroScene"));

const Hero = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll for the 3D layer
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
        sceneRef.current.style.opacity = `${Math.max(0, 1 - y / 700)}`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-hero"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-faint opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container relative pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              True American Publishers · eBook Studio
            </span>
          </div>

          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[5.75rem] leading-[1.02] font-bold animate-fade-in-up text-foreground">
            Your Story.<br />
            Published as a <span className="text-gradient-crimson italic">Bestseller.</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            We are America's premium eBook publishing studio — guiding authors from blank page
            to global bestseller. Ghostwriting, editing, design, distribution and marketing,
            all under one roof.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Publish Your Book
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="ghostly" size="xl" asChild>
              <a href="#work">
                <BookOpen className="mr-1" />
                Explore Our Work
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
                4.9 / 5 from 1,200+ authors
              </span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">300+</span> titles published ·{" "}
              <span className="text-foreground font-semibold">14M+</span> copies sold
            </p>
          </div>
        </div>

        {/* Right — 3D scene */}
        <div
          ref={sceneRef}
          className="lg:col-span-5 relative h-[460px] md:h-[560px] lg:h-[640px] will-change-transform"
        >
          {/* Glow behind scene */}
          <div className="absolute inset-0 bg-gradient-radial-crimson blur-3xl opacity-80" />
          <Suspense fallback={<div className="h-full w-full animate-pulse rounded-2xl bg-muted/40" />}>
            <HeroScene />
          </Suspense>

          {/* Floating badge */}
          <div className="absolute top-4 right-2 hidden md:flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-border px-3 py-1.5 shadow-soft animate-float">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-foreground">Live publishing</span>
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

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
