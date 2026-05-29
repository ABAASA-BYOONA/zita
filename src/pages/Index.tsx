import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.png";
import { projects } from "@/data/projects";

const Index = () => {
  const featured = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative px-6 md:px-12 pt-6 pb-24">
        <Splash className="-top-10 right-10 w-64 md:w-96" rotate={20} />
        <Splash className="bottom-0 -left-12 w-56 md:w-80" rotate={-30} flip />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 relative z-10">
            <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-6">
              Visual Communication · Photography · Design
            </p>
            <h1 className="font-display font-extrabold leading-[0.85] tracking-tight">
              <span className="block text-[18vw] md:text-[12vw] lg:text-[9rem]">port</span>
              <span className="block text-[18vw] md:text-[12vw] lg:text-[9rem] pl-[14vw] md:pl-32">
                folio<span className="text-lime">.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              I'm <span className="text-foreground font-medium">Aber Zita Lourdes</span> — I build stories and make impact through photography and design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-ink text-ink-foreground hover:bg-ink/90 px-7 h-12">
                <Link to="/work">See the work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-ink/20 hover:bg-ink/5 px-7 h-12">
                <Link to="/about">About me</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-ink">
              <img src={portrait} alt="Portrait of Aber Zita Lourdes" width={896} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Kampala · UG</span>
              <span>Available 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="relative bg-ink text-ink-foreground py-24 px-6 md:px-12">
        <Splash className="-top-12 right-1/3 w-48 opacity-90" rotate={200} />
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <h2 className="font-display text-5xl md:text-7xl font-extrabold leading-none">
              what<br />i do<span className="text-lime">.</span>
            </h2>
            <p className="max-w-sm text-ink-foreground/70">
              Three practices, one obsession — telling true stories through carefully made things.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "01", t: "Photography", d: "Wildlife, themed studio and editorial work — patient, unposed, intentional." },
              { n: "02", t: "Branding & Print", d: "Identity systems, illustration, and printed matter that earn a second look." },
              { n: "03", t: "UI / UX & Web", d: "Interfaces and websites with the same care I'd give a printed page." },
            ].map((s) => (
              <div key={s.n} className="group rounded-3xl bg-ink-foreground/[0.04] border border-ink-foreground/10 p-7 hover:bg-lime hover:text-lime-foreground transition-colors">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-xs tracking-widest opacity-60">{s.n}</span>
                  <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 transition" />
                </div>
                <h3 className="font-display text-3xl font-extrabold mb-3">{s.t}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-display text-5xl md:text-7xl font-extrabold leading-none">
              selected<br />work<span className="text-lime">.</span>
            </h2>
            <Link to="/work" className="text-sm font-medium hover:text-lime flex items-center gap-2">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className={`group block ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden rounded-[2rem] bg-muted ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img src={p.cover} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs uppercase tracking-widest">{p.category}</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold">{p.title}</h3>
                  <span className="text-sm text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-secondary p-8 md:p-14 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-ink">
              <img src={portrait} alt="" loading="lazy" width={896} height={896} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-4">About me</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              I don't just create<br />visuals — I build <span className="bg-lime text-lime-foreground px-2">stories</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Graduate of Visual Communication, Design and Multimedia. I work across photography, illustration, print and web — guided by the belief that powerful images aren't staged, they're discovered.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-medium hover:text-lime">
              Read my philosophy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
