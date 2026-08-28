export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold text-sm tracking-tighter uppercase">
          Vance SEO © {year}
        </div>
        <div className="flex gap-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href="/" className="hover:text-foreground">
            Insights
          </a>
        </div>
      </div>
    </footer>
  );
}
