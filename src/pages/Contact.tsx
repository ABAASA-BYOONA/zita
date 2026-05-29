import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <section className="relative px-6 md:px-12 pt-8 pb-24">
        <Splash className="top-20 right-10 w-64" rotate={40} />
        <Splash className="bottom-10 -left-10 w-56" rotate={-50} flip />
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-4">Contact</p>
            <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.85] mb-8">
              say<br />hi<span className="text-lime">.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-sm mb-10">
              Briefs, collaborations, coffees in Kampala — I'd love to hear from you.
            </p>
            <div className="space-y-3">
              <a href="mailto:alisonzita4@gmail.com" className="block font-display text-2xl font-extrabold hover:text-lime transition">
                alisonzita4@gmail.com
              </a>
              <a href="tel:+256760875574" className="block font-display text-2xl font-extrabold hover:text-lime transition">
                +256 760 875 574
              </a>
              <p className="text-muted-foreground pt-4">Kampala, Uganda</p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Message sent — I'll reply soon.");
            }}
            className="bg-secondary rounded-[2rem] p-8 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <Input required className="mt-1 bg-background border-0 h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <Input required type="email" className="mt-1 bg-background border-0 h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Project</label>
              <Textarea required rows={5} className="mt-1 bg-background border-0 rounded-xl resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full bg-ink text-ink-foreground hover:bg-ink/90 h-12">
              {sent ? "Sent ✓" : "Send message"}
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
