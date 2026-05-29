import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const { pathname } = useLocation();
  return (
    <header className="relative z-30 flex items-center justify-between px-6 md:px-12 py-6">
      <Link to="/" className="font-display text-2xl font-extrabold tracking-tight">
        zita<span className="text-lime">.</span>
      </Link>
      <nav className="flex items-center gap-1 md:gap-2 text-sm font-medium">
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-full transition-colors ${
                active
                  ? "bg-ink text-ink-foreground"
                  : "hover:bg-ink/5"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
