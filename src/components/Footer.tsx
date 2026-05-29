import { Link } from "react-router-dom";
import { Splash } from "./Splash";

export const Footer = () => (
  <footer className="relative bg-ink text-ink-foreground overflow-hidden mt-24">
    <Splash className="-top-16 -right-20 w-72 opacity-90" rotate={140} />
    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-display text-4xl md:text-5xl font-extrabold leading-none">
          let's<br />make<br />something<span className="text-lime">.</span>
        </h3>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-ink-foreground/60 uppercase tracking-widest text-xs mb-3">Contact</p>
        <p>0760 875 574</p>
        <p>alisonzita4@gmail.com</p>
        <p>Kampala, Uganda</p>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-ink-foreground/60 uppercase tracking-widest text-xs mb-3">Elsewhere</p>
        <p>Behance</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>
    </div>
    <div className="relative z-10 border-t border-ink-foreground/10 px-6 md:px-12 py-6 flex justify-between text-xs text-ink-foreground/60">
      <span>© 2026 Aber Zita Lourdes</span>
      <Link to="/contact" className="hover:text-lime">Get in touch →</Link>
    </div>
  </footer>
);
