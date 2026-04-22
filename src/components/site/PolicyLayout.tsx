import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  updated?: string;
  children: React.ReactNode;
}

const PolicyLayout = ({ title, subtitle, updated, children }: PolicyLayoutProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = `${title} | True American Publishers`;
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-20 min-h-screen overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-[120px] -z-10" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-[120px] -z-10" />

        <div className="container max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <header className="mb-12 pb-10 border-b border-border/60">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Legal</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight">
              <span className="text-gradient-gold italic">{title}</span>
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
            )}
            {updated && (
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Last updated: {updated}
              </p>
            )}
          </header>

          <article className="policy-prose space-y-8 text-foreground/85 leading-relaxed">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolicyLayout;
