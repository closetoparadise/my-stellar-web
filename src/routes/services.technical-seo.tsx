import { createFileRoute, Link } from "@tanstack/react-router";
import performanceVisual from "../assets/performance-visual.jpg";

export const Route = createFileRoute("/services/technical-seo")({
  head: () => ({
    meta: [
      { title: "Technical SEO Audit — Vance SEO" },
      {
        name: "description",
        content:
          "In-depth technical SEO audits covering crawling, rendering, Core Web Vitals, schema markup, and indexability.",
      },
      {
        property: "og:title",
        content: "Technical SEO Audit — Vance SEO",
      },
      {
        property: "og:description",
        content:
          "In-depth technical SEO audits covering crawling, rendering, Core Web Vitals, schema markup, and indexability.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/technical-seo" },
    ],
    links: [{ rel: "canonical", href: "/services/technical-seo" }],
  }),
  component: TechnicalSEOPage,
});

function TechnicalSEOPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-24">
      <header className="max-w-[800px] mb-16">
        <span className="font-mono text-xs text-accent tracking-tighter block mb-4">
          01 / TECHNICAL AUDIT
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] mb-6">
          Infrastructure Health
        </h1>
        <p className="text-lg text-muted-foreground max-w-[55ch]">
          Search engines reward fast, well-structured sites. I audit your
          entire technical stack to remove the friction that keeps pages from
          ranking.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="relative">
          <img
            src={performanceVisual}
            alt="Abstract line graph showing organic traffic growth"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded opacity-90"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold mb-6">
            What&apos;s included
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Crawlability & indexation analysis",
              "Core Web Vitals & page-speed remediation",
              "Schema markup & structured data audit",
              "JavaScript rendering & hydration review",
              "XML sitemap & robots.txt optimization",
              "Internal linking architecture",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="bg-foreground text-background p-8 md:p-16 rounded-[4px] mb-24">
        <h2 className="font-display text-3xl font-bold tracking-tighter mb-8">
          Typical outcomes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-display font-bold">+160%</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Crawl efficiency
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">-40%</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Page load time
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">3.2x</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Indexed pages
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">Zero</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Critical errors
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center border-t border-border pt-12">
        <div>
          <h3 className="font-display text-xl font-bold mb-2">
            Ready to fix your foundation?
          </h3>
          <p className="text-sm text-muted-foreground">
            Book a technical audit and get a prioritized remediation roadmap.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors"
        >
          Start Audit
        </Link>
      </div>
    </article>
  );
}
