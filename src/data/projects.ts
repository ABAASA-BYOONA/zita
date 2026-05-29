import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject } from "@/data/projects";

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // Decode the slug in case it has URL encoded spaces (%20) from your data file
  const project = getProject(slug ? decodeURIComponent(slug) : "");

  // State to manage full-screen modal gallery indices
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="p-12 text-center text-muted-foreground min-h-screen flex flex-col items-center justify-center gap-4">
        <p>Project not found.</p>
        <Link to="/" className="text-sm underline">Return Home</Link>
      </div>
    );
  }

  // Ensure gallery always defaults to an array to prevent .length runtime crashes
  const gallery = project.gallery || [];

  // Navigation handlers for the fullscreen lightbox modal
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (activeImageIndex !== null && gallery.length > 0) {
      setActiveImageIndex((prev) => 
        prev === 0 ? gallery.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (activeImageIndex !== null && gallery.length > 0) {
      setActiveImageIndex((prev) => 
        prev === gallery.length - 1 ? 0 : (prev ?? 0) + 1
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
        {gallery.map((imgUrl, index) => (
          <div 
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className="aspect-square bg-ink/5 rounded-2xl overflow-hidden border border-border/40 cursor-pointer group relative hover:shadow-md transition-all"
          >
            <img 
              src={imgUrl} 
              alt={`${project.title} asset ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ))}
      </main>

      {/* LIGHTBOX MODAL */}
      {activeImageIndex !== null && gallery.length > 0 && (
        <div 
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm select-none"
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
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center text-xl z-50"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Main Focused Display Image Container */}
          <div className="max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center relative">
            <img 
              src={gallery[activeImageIndex]} 
              alt="Fullscreen view"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Image Counter Badge */}
            <p className="text-white/60 text-xs mt-4 tracking-widest uppercase">
              {activeImageIndex + 1} / {gallery.length}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center text-xl z-50"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};
