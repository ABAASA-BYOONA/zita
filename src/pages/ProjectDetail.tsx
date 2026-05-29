import { useState, useEffect, useCallback } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import { getProject, projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug ? decodeURIComponent(slug) : "");
  if (!project) return <Navigate to="/work" replace />;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gallery = project.gallery || [];
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? gallery.length - 1 : prev - 1
    );
  }, [gallery.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === gallery.length - 1 ? 0 : prev + 1
    );
  }, [gallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="px-6 md:px-12 pt-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="relative aspect-[16/8] rounded-[2.5rem] overflow-hidden bg-ink">
            <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
            <Splash className="-top-10 -right-10 w-56" rotate={140} />
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3">
                {project.category} · {project.year}
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.9]">
                {project.title}<span className="text-lime">.</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.role.map((r) => (
                <span key={r} className="px-4 py-2 rounded-full bg-ink text-ink-foreground text-xs uppercase tracking-widest">{r}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          <h2 className="font-display text-3xl font-extrabold">About<br />the project<span className="text-lime">.</span></h2>
          <p className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
            {project.brief || project.summary}
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`rounded-2xl overflow-hidden bg-muted cursor-pointer
                ${i === 0 ? "col-span-2 md:col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      {project.quote?.text && (
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-5xl mx-auto bg-ink text-ink-foreground rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
            <Splash className="-bottom-10 -left-10 w-56 opacity-90" rotate={-30} />
            <div className="relative z-10">
              <span className="font-display text-7xl text-lime leading-none">"</span>
              <blockquote className="font-display text-3xl md:text-4xl font-extrabold leading-tight -mt-4">
                {project.quote.text}
              </blockquote>
              {project.quote.author && (
                <p className="mt-6 text-sm uppercase tracking-widest text-ink-foreground/60">
                  — {project.quote.author}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* OTHER PROJECTS */}
      {others.length > 0 && (
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <h3 className="font-display text-4xl md:text-5xl font-extrabold">other<br />projects<span className="text-lime">.</span></h3>
              <Link to={`/work/${encodeURIComponent(next.slug)}`} className="text-sm font-medium hover:text-lime flex items-center gap-2">
                Next: {next.title} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((p) => (
                <Link key={p.slug} to={`/work/${encodeURIComponent(p.slug)}`} className="group">
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
      )}

      <Footer />

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full px-20 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightboxIndex]}
              alt=""
              className="max-h-[80vh] w-full object-contain rounded-xl shadow-2xl"
            />
            <p className="mt-4 text-white/50 text-xs uppercase tracking-widest">
              {lightboxIndex + 1} / {gallery.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
