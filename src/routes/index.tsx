import { createFileRoute, Link } from "@tanstack/react-router";
import performanceVisual from "../assets/performance-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vance SEO — Technical SEO & Content Strategy" },
      {
        name: "description",
        content:
          "Helping engineering-led companies outrank the noise with technical SEO audits, semantic content strategies, and precision link building.",
      },
      {
        property: "og:title",
        content: "Vance SEO — Technical SEO & Content Strategy",
      },
      {
        property: "og:description",
        content:
          "Helping engineering-led companies outrank the noise with technical SEO audits, semantic content strategies, and precision link building.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-[800px]">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-balance animate-fade-up">
            SEARCH VISIBILITY FOR{" "}
            <span className="text-accent">HUMANS</span>, PERFORMANCE FOR
            MACHINES.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-[50ch] animate-fade-up delay-150">
            Helping engineering-led companies outrank the noise with technical
            SEO audits, semantic content strategies, and precision link
            building.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors"
            >
              Start Audit
            </Link>
            <div className="flex -space-x-3 overflow-hidden items-center ml-4">
              <div className="size-10 rounded-full ring-2 ring-background bg-secondary grid place-items-center font-mono text-[10px] text-muted-foreground">
                +40
              </div>
              <span className="pl-6 text-[11px] font-mono text-muted-foreground uppercase tracking-wide">
                Trusted by scaling teams
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Strip */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center opacity-40 grayscale gap-12">
          <span className="font-display font-black text-2xl tracking-tighter uppercase">
            Luma
          </span>
          <span className="font-display font-black text-2xl tracking-tighter uppercase">
            Nexus
          </span>
          <span className="font-display font-black text-2xl tracking-tighter uppercase">
            Vantage
          </span>
          <span className="font-display font-black text-2xl tracking-tighter uppercase">
            Arc-Tech
          </span>
          <span className="font-display font-black text-2xl tracking-tighter uppercase">
            Flow
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-display text-4xl font-extrabold tracking-tighter uppercase">
            Core <span className="text-accent">Capabilities</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            [01/04] SYSTEM INDEX
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          <ServiceCard
            number="01"
            label="TECHNICAL AUDIT"
            title="Infrastructure Health"
            description="Comprehensive crawling, core web vitals, and schema architecture for search indexing precision."
            to="/services/technical-seo"
          />
          <ServiceCard
            number="02"
            label="CONTENT STRATEGY"
            title="Semantic Authority"
            description="Building topical clusters that satisfy user intent and demonstrate deep platform expertise."
            to="/services/content-strategy"
          />
          <ServiceCard
            number="03"
            label="LINK ACQUISITION"
            title="Digital PR & Outreach"
            description="Earning high-authority placements from reputable industry publications and news cycles."
            to="/services/link-building"
          />
        </div>
      </section>

      {/* Case Study Snippet */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 bg-foreground text-background p-8 md:p-16 rounded-[4px]">
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">
                Case Study Snippet
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tighter mb-6">
                +240% Growth in organic sessions for &lsquo;Veridian
                Cloud&rsquo;.
              </h2>
              <p className="text-background/70 text-sm leading-relaxed max-w-[40ch]">
                By restructuring their JSON-LD schema and pivoting content
                toward mid-funnel intent, we reduced CAC by 35% in six months.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-2xl font-display font-bold">$1.2M</div>
                <div className="text-[10px] uppercase text-background/50 font-mono">
                  Est. Value
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold">4.2k</div>
                <div className="text-[10px] uppercase text-background/50 font-mono">
                  Keyword Wins
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={performanceVisual}
              alt="Abstract visualization of organic traffic growth over time"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-32 text-center"
      >
        <span className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase mb-8 block">
          Available for new audits
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
          READY TO <span className="text-accent">SCALE</span>?
        </h2>
        <a
          href="mailto:hello@vance-seo.fyi"
          className="group inline-flex items-center gap-4 text-2xl font-display font-bold hover:text-accent transition-colors"
        >
          hello@vance-seo.fyi
          <span className="text-accent group-hover:translate-x-2 transition-transform">
            →
          </span>
        </a>
      </section>
    </>
  );
}

function ServiceCard({
  number,
  label,
  title,
  description,
  to,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="block bg-background p-10 group hover:bg-secondary transition-colors"
    >
      <span className="font-mono text-xs text-accent mb-6 block tracking-tighter">
        {number}/ {label}
      </span>
      <h3 className="font-display text-xl font-bold mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      <div className="h-px w-full bg-border group-hover:bg-accent/30 transition-colors"></div>
    </Link>
  );
}
