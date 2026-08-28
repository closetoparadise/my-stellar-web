import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SEO Services — Vance SEO" },
      {
        name: "description",
        content:
          "Technical SEO audits, semantic content strategy, and digital PR link building for high-growth companies.",
      },
      {
        property: "og:title",
        content: "SEO Services — Vance SEO",
      },
      {
        property: "og:description",
        content:
          "Technical SEO audits, semantic content strategy, and digital PR link building for high-growth companies.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  to: "/services/technical-seo" | "/services/content-strategy" | "/services/link-building";
  number: string;
  label: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    to: "/services/technical-seo",
    number: "01",
    label: "TECHNICAL AUDIT",
    title: "Infrastructure Health",
    description:
      "Comprehensive crawling, core web vitals, and schema architecture for search indexing precision.",
  },
  {
    to: "/services/content-strategy",
    number: "02",
    label: "CONTENT STRATEGY",
    title: "Semantic Authority",
    description:
      "Building topical clusters that satisfy user intent and demonstrate deep platform expertise.",
  },
  {
    to: "/services/link-building",
    number: "03",
    label: "LINK ACQUISITION",
    title: "Digital PR & Outreach",
    description:
      "Earning high-authority placements from reputable industry publications and news cycles.",
  },
];

function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <header className="max-w-[800px] mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] mb-6">
          SEO <span className="text-accent">SERVICES</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[50ch]">
          Focused, technical, and built to move the needle on rankings,
          traffic, and revenue.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mb-24">
        {services.map((service) => (
          <Link
            key={service.to}
            to={service.to}
            className="block bg-background p-10 group hover:bg-secondary transition-colors"
          >
            <span className="font-mono text-xs text-accent mb-6 block tracking-tighter">
              {service.number}/ {service.label}
            </span>
            <h2 className="font-display text-xl font-bold mb-4 tracking-tight">
              {service.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="h-px w-full bg-border group-hover:bg-accent/30 transition-colors"></div>
          </Link>
        ))}
      </div>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tighter mb-4">
          How engagements work
        </h2>
        <ol className="space-y-6 text-muted-foreground">
          <li className="flex gap-4">
            <span className="font-mono text-accent text-sm">01</span>
            <span>
              <strong className="text-foreground">Discovery.</strong> We audit
              your site, analytics, and competitive landscape to find the
              highest-leverage opportunities.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-accent text-sm">02</span>
            <span>
              <strong className="text-foreground">Roadmap.</strong> You get a
              prioritized plan with timelines, expected outcomes, and clear
              deliverables.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-accent text-sm">03</span>
            <span>
              <strong className="text-foreground">Execution.</strong> I work
              alongside your team or embed as a fractional SEO lead to ship
              improvements weekly.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-accent text-sm">04</span>
            <span>
              <strong className="text-foreground">Measurement.</strong> We
              track rankings, traffic, and revenue impact with transparent
              reporting.
            </span>
          </li>
        </ol>
      </section>
    </main>
  );
}
