import { createFileRoute, Link } from "@tanstack/react-router";
import performanceVisual from "../assets/performance-visual.jpg";

export const Route = createFileRoute("/services/link-building")({
  head: () => ({
    meta: [
      { title: "Link Building & Digital PR — Vance SEO" },
      {
        name: "description",
        content:
          "White-hat link building and digital PR that earns authoritative backlinks from relevant industry publications.",
      },
      {
        property: "og:title",
        content: "Link Building & Digital PR — Vance SEO",
      },
      {
        property: "og:description",
        content:
          "White-hat link building and digital PR that earns authoritative backlinks from relevant industry publications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/link-building" },
    ],
    links: [{ rel: "canonical", href: "/services/link-building" }],
  }),
  component: LinkBuildingPage,
});

function LinkBuildingPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-24">
      <header className="max-w-[800px] mb-16">
        <span className="font-mono text-xs text-accent tracking-tighter block mb-4">
          03 / LINK ACQUISITION
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] mb-6">
          Digital PR & Outreach
        </h1>
        <p className="text-lg text-muted-foreground max-w-[55ch]">
          Links should be earned, not bought. I run outreach campaigns rooted
          in original research, data stories, and genuine editorial value.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="relative">
          <img
            src={performanceVisual}
            alt="Abstract illustration of an expanding authority network"
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
              "Linkable asset strategy (data studies, tools, reports)",
              "Targeted media list & relationship building",
              "Digital PR campaign execution",
              "Guest post & contributor pitch management",
              "Competitor backlink gap analysis",
              "Authority tracking & link quality monitoring",
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
            <div className="text-2xl font-display font-bold">+180%</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Referring domains
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">DR 70+</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Avg. placement
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">12</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Pieces of coverage
            </div>
          </div>
          <div>
            <div className="text-2xl font-display font-bold">0</div>
            <div className="text-[10px] uppercase text-background/50 font-mono mt-1">
              Paid links
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center border-t border-border pt-12">
        <div>
          <h3 className="font-display text-xl font-bold mb-2">
            Earn links that move rankings
          </h3>
          <p className="text-sm text-muted-foreground">
            Start a white-hat outreach campaign built on real editorial value.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors"
        >
          Build Authority
        </Link>
      </div>
    </article>
  );
}
