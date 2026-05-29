import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject } from "@/data/projects"; // Adjust path to your data file

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug || "");

  // State to manage full-screen modal gallery indices
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (!project) {
    return <div className="p-12 text-center text-muted-foreground">Project not found.</div>;
  }

  // Navigation handlers for the fullscreen lightbox modal
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stops modal from closing unexpectedly
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => 
        prev === 0 ? project.gallery.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => 
        prev === project.gallery.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* HEADER BLOCK */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 inline-block">
          ← Back to Portfolio
        </Link>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-2">{project.title}</h1>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{project.category} · {project.year}</p>
      </header>

      {/* GRID GALLERY */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {project.gallery.map((imgUrl, index) => (
          <div 
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className="aspect-square bg-ink/5 rounded-2xl overflow-hidden border border-border/40 cursor-pointer group relative hover:shadow-md transition-all"
          >
            <img 
              src={imgUrl} 
              alt={`${project.title} gallery asset ${index + 1}`}
              loading="lazy"
              /* 'object-contain' keeps the original aspect ratio without slicing off edges */
              className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ))}
      </main>

      {/* LIGHTBOX MODAL (TAP & SCROLL BACKGROUND FOREGROUND LAYER) */}
      {activeImageIndex !== null && (
        <div 
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm select-none animate-in fade-in duration-200"
        >
          {/* Close Area */}
          <button 
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-display z-50"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center text-xl transition-all z-50"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Main Focused Display Image Container */}
          <div className="max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center relative">
            <img 
              src={project.gallery[activeImageIndex]} 
              alt="Fullscreen interactive view"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
            />
            {/* Image Counter Badge */}
            <p className="text-white/60 text-xs mt-4 tracking-widest uppercase">
              {activeImageIndex + 1} / {project.gallery.length}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center text-xl transition-all z-50"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};
