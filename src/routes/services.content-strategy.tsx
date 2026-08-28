import { createFileRoute, Link } from "@tanstack/react-router";
import performanceVisual from "../assets/performance-visual.jpg";

export const Route = createFileRoute("/services/content-strategy")({
  head: () => ({
    meta: [
      { title: "Content Strategy — Vance SEO" },
      {
        name: "description",
        content:
          "Semantic content strategies, topical clusters, and intent-driven editorial calendars that build authority and rank.",
      },
      {
        property: "og:title",
        content: "Content Strategy — Vance SEO",
      },
      {
        property: "og:description",
        content:
          "Semantic content strategies, topical clusters, and intent-driven editorial calendars that build authority and rank.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/content-strategy" },
    ],
    links: [{ rel: "canonical", href: "/services/content-strategy" }],
  }),
  component: ContentStrategyPage,
});

function ContentStrategyPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-24">
      <header className="max-w-[800px] mb-16">
        <span className="font-mono text-xs text-accent tracking-tighter block mb-4">
          02 / CONTENT STRATEGY
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] mb-6">
          Semantic Authority
        </h1>
        <p className="text-lg text-muted-foreground max-w-[55ch]">
          Content that ranks isn&apos;t just keyword-optimized—it&apos;s
          topically complete. I build content engines that earn trust and
          coverage across the entire buyer journey.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className="font-display text-2xl font-bold mb-6">
            What&apos;s included
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Topical cluster & pillar-page architecture",
              "Search intent mapping per funnel stage",
              "Competitive content gap analysis",
              "Editorial calendar & production workflow",
              "On-page optimization & E-E-A-A alignment",
              "Content refresh & cannibalization cleanup",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={performanceVisual}
            alt="Abstract visualization of growing topical authority"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded opacity-90"
          />
        </div>
      </div>

      <section className="bg-foreground text-background p-8 md:p-16 rounded-[4px] mb-24">
        <h2 className="font-display text-3xl font-bold tracking-tighter mb-8">
          Typical outcomes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-display font-bold">+210%</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Organic traffic
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">+85%</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Top-3 keywords
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">-30%</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Bounce rate
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">2.1x</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Avg. session time
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center border-t border-border pt-12">
        <div>
          <h3 className="font-display text-xl font-bold mb-2">
            Build your authority engine
          </h3>
          <p className="text-sm text-muted-foreground">
            Get a content strategy designed to rank and convert.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors"
        >
          Plan Content
        </Link>
      </div>
    </article>
  );
}
