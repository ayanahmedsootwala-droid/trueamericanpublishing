import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  project: z.string().trim().min(1, "Tell us what you're working on").max(80),
  message: z.string().trim().min(10, "Add a bit more detail").max(1000),
});

const leadInbox = "trueamericanpublishers@gmail.com";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      project: fd.get("project"),
      message: fd.get("message"),
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
    const subject = encodeURIComponent(`New author inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nProject: ${parsed.data.project}\n\nMessage:\n${parsed.data.message}`,
    );
    window.location.href = `mailto:${leadInbox}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Application received",
        description: "Our director will reach out within 24 hours.",
      });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-20 md:py-24 overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Begin</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight font-bold">
              Your story is<br />
              <span className="text-gradient-crimson italic">waiting.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Tell us about your book. We respond to every serious inquiry within 24 hours with
              a complimentary strategy call.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { Icon: Mail, label: "trueamericanpublishers@gmail.com" },
                { Icon: Phone, label: "+1 (212) 555-0188" },
                { Icon: MapPin, label: "Sugarland, Texas · USA" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-white">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 reveal premium-card rounded-2xl p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Jane Carter" maxLength={100} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@email.com" maxLength={255} required />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="project">Project type</Label>
              <Input id="project" name="project" placeholder="Memoir · Business · Fiction…" maxLength={80} required />
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Tell us about your book</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Premise, audience, where you are in the process…"
                maxLength={1000}
                required
              />
            </div>

            <Button type="submit" variant="hero" size="xl" className="mt-8 w-full" disabled={loading}>
              {loading ? "Sending…" : "Send My Application"}
              <ArrowRight />
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              100% confidential · NDA available on request
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
