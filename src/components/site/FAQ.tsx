import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Do I keep 100% ownership and royalties of my book?",
    a: "Absolutely. Every package — from Basic to Bestseller — includes 100% ownership rights. Your name appears as the sole author, you own the copyright, and 100% of the royalties paid by Amazon, Kindle, Barnes & Noble, Kobo, and Google Books are deposited directly into your account. We never take a royalty cut.",
  },
  {
    q: "How long does the entire publishing process take?",
    a: "Most projects are delivered in 8 to 16 weeks depending on the package. A polished Basic manuscript typically lands in 6–8 weeks, the Standard package in 8–10 weeks, and Grand or Bestseller packages — which include trailers, websites, and multi-month marketing — run on a 12–16 week studio timeline.",
  },
  {
    q: "What genres do you publish?",
    a: "We publish across nine specialty studios: Business & Self-Help, Thriller & Mystery, Fantasy & Sci-Fi, Romance, Memoir & Biography, Historical Fiction, Young Adult, Children's Books, and Poetry & Literary. Each studio is led by a senior editor with 10+ years of category expertise.",
  },
  {
    q: "Will my book actually be available on Amazon and Kindle?",
    a: "Yes. From the Standard package onward, your book is fully published on Amazon Kindle. Premium and above add Amazon paperback, Barnes & Noble, Kobo, and Google Books — distributed through our official KDP and IngramSpark partnerships, reaching 20,000+ retailers worldwide.",
  },
  {
    q: "Is the 70% discount real or just a marketing gimmick?",
    a: "It is a real, time-limited launch promotion. Our standard rates are listed in strikethrough next to every tier. The discount honors authors who commit during our current production cycle — once a tier sells out for the quarter, pricing resets to original list.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — every package can be split into 2, 3, or 4 interest-free installments. A small kickoff deposit gets your project into production immediately, with the remaining payments scheduled around major delivery milestones (manuscript, cover, publishing).",
  },
  {
    q: "What if I already have a manuscript?",
    a: "Even better. We handle manuscripts at every stage — raw notes, half-written drafts, completed manuscripts that need polishing, or finished books that just need professional cover, formatting, and distribution. We tailor the scope and price accordingly.",
  },
  {
    q: "Will the writing actually sound like me?",
    a: "Yes. Our ghostwriters conduct 4–8 deep voice-discovery interviews before drafting a single page. We capture your cadence, vocabulary, and worldview, then send sample chapters for approval before writing the full book. Most clients tell us readers can't believe they didn't write it themselves.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a tiered refund policy outlined in detail on our Refund Policy page. In short: refunds are available on a milestone basis before delivery of the corresponding work product, and we maintain a 100% satisfaction guarantee on every revision round.",
  },
  {
    q: "Is everything confidential?",
    a: "Completely. Every engagement begins with a mutual NDA. Your name, your story, your business details — none of it leaves our studio. Our ghostwriters waive all claims to authorship in writing.",
  },
];

const FAQ = () => {
  // SEO: FAQ structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative py-16 md:py-20 overflow-hidden bg-muted/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="absolute top-1/4 left-0 h-[320px] w-[320px] bg-gradient-radial-crimson blur-3xl opacity-25" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4 reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-4xl leading-tight font-semibold">
              Clear answers before<br />
              <span className="text-gradient-crimson italic">your first page.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Practical details on ownership, timelines, publishing channels, privacy, and payment options — without the oversized clutter.
            </p>

            <div className="mt-7 rounded-xl border border-border bg-card p-5 shadow-soft">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Still have questions?</span>
                <br />Email us at <a href="mailto:hello@trueamericanpublishers.com" className="text-primary hover:underline">hello@trueamericanpublishers.com</a> or book a free 30-minute publishing consultation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 reveal">
            <Accordion type="single" collapsible className="divide-y divide-border rounded-2xl border border-border bg-card px-5 md:px-6 shadow-soft">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-0 bg-transparent"
                >
                  <AccordionTrigger className="text-left text-base md:text-[1.05rem] font-semibold py-4 hover:no-underline hover:text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm md:text-[0.95rem]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
