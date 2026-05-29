import { Link, useParams, Navigate } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import { getProject, projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug ?? "");
  if (!project) return <Navigate to="/work" replace />;

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      <section className="px-6 md:px-12 pt-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="relative aspect-[16/8] rounded-[2.5rem] overflow-hidden bg-ink">
            <img src={project.cover} alt={project.title} width={1024} height={768} className="w-full h-full object-cover" />
            <Splash className="-top-10 -right-10 w-56" rotate={140} />
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3">{project.category} · {project.year}</p>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.9]">{project.title}<span className="text-lime">.</span></h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.role.map((r) => (
                <span key={r} className="px-4 py-2 rounded-full bg-ink text-ink-foreground text-xs uppercase tracking-widest">{r}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          <h2 className="font-display text-3xl font-extrabold">About<br />the project<span className="text-lime">.</span></h2>
          <p className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">{project.brief}</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {project.gallery.map((src, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden bg-muted ${i === 0 ? "col-span-2 md:col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto bg-ink text-ink-foreground rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          <Splash className="-bottom-10 -left-10 w-56 opacity-90" rotate={-30} />
          <div className="relative z-10">
            <span className="font-display text-7xl text-lime leading-none">"</span>
            <blockquote className="font-display text-3xl md:text-4xl font-extrabold leading-tight -mt-4">
              {project.quote.text}
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-widest text-ink-foreground/60">— {project.quote.author}</p>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h3 className="font-display text-4xl md:text-5xl font-extrabold">other<br />projects<span className="text-lime">.</span></h3>
            <Link to={`/work/${next.slug}`} className="text-sm font-medium hover:text-lime flex items-center gap-2">
              Next: {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link key={p.slug} to={`/work/${p.slug}`} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-3 flex justify-between items-baseline">
                  <span className="font-display text-xl font-extrabold">{p.title}</span>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
