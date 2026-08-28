import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-extrabold text-xl tracking-tight uppercase italic"
        >
          Vance<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-tight uppercase">
          <Link
            to="/services"
            className="hover:text-accent transition-colors"
            activeProps={{ className: "text-accent" }}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="hover:text-accent transition-colors"
            activeProps={{ className: "text-accent" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-accent transition-colors"
            activeProps={{ className: "text-accent" }}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Active for Q3
          </span>
        </div>
      </div>
    </nav>
  );
}
