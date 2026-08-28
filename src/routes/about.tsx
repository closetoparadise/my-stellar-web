import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vance SEO" },
      {
        name: "description",
        content:
          "Learn about Vance SEO's methodology and approach to technical SEO, content strategy, and link building.",
      },
      {
        property: "og:title",
        content: "About — Vance SEO",
      },
      {
        property: "og:description",
        content:
          "Learn about Vance SEO's methodology and approach to technical SEO, content strategy, and link building.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <header className="max-w-[800px] mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] mb-6">
          About <span className="text-accent">Vance</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[55ch]">
          Fractional SEO lead for engineering-led companies that need search to
          perform like a product, not a side project.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <section>
          <h2 className="font-display text-2xl font-bold mb-4">
            How I work
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most SEO problems are not content problems—they are systems
            problems. I start with the technical foundation, then layer in
            content and authority strategies that are measurable, scalable, and
            aligned with how your product actually makes money.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My engagements are tight. I work with a small number of teams per
            quarter so I can go deep on architecture, analytics, and execution
            rather than shipping generic slide decks.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold mb-4">
            Principles
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Technical integrity first: fast, crawlable, and indexable.",
              "Intent beats volume: every page must serve a real search purpose.",
              "Links follow value: editorial coverage, not link farms.",
              "Reporting ties to revenue: traffic is a metric, growth is the goal.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="bg-foreground text-background p-8 md:p-16 rounded-[4px]">
        <h2 className="font-display text-3xl font-bold tracking-tighter mb-8">
          Results at a glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-display font-bold">40+</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Clients served
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">7 yrs</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              SEO experience
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">$4M+</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Revenue attributed
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">3</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Monthly retainer slots
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
