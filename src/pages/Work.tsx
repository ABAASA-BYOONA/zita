import { Link } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const Work = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Nav />
    <section className="relative px-6 md:px-12 pt-8 pb-20">
      <Splash className="-top-8 right-8 w-56" rotate={60} />
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-4">All work · 2024 — 2025</p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.85]">
          PROJECTS<span className="text-lime">.</span>
        </h1>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Link key={p.slug} to={`/work/${p.slug}`} className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
            <div className={`relative overflow-hidden rounded-[2rem] bg-muted ${i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <img src={p.cover} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs uppercase tracking-widest">{p.category}</div>
              <div className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-lime text-lime-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold">{p.title}</h2>
              <span className="text-sm text-muted-foreground">{p.year}</span>
            </div>
            <p className="text-muted-foreground text-sm mt-1 max-w-md">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Work;
