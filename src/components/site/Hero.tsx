import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-cinematic.jpg";
import { useEffect, useRef } from "react";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0003})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Cinematic background */}
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <img
          src={heroImg}
          alt="An open book transforming into cinematic film reels with golden light"
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Animated glow blobs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-secondary/30 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary/90">
              True American Publishers
            </span>
          </div>

          <h1 className="mt-8 font-display text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.95] font-medium animate-fade-in-up">
            Turn Your Story <br />
            Into a <span className="text-gradient-gold italic">Legacy</span>.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            True American Publishers is a cinematic publishing studio that transforms ambitious
            authors into category-defining voices — from first draft to global bestseller.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Begin Your Legacy
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="ghostly" size="xl" asChild>
              <a href="#work">Explore Our Work</a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 / 5 from 1,200+ authors</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">37</span> bestsellers launched · <span className="text-foreground font-semibold">14M+</span> copies sold
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
