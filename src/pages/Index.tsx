import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Portfolio from "@/components/site/Portfolio";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import Pricing from "@/components/site/Pricing";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumora Press",
    description:
      "Cinematic publishing studio offering ghostwriting, publishing, marketing, cover design and audiobook production for ambitious authors.",
    url: "/",
    sameAs: [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
