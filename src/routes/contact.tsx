import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vance SEO" },
      {
        name: "description",
        content:
          "Get in touch with Vance SEO for a technical SEO audit or content strategy project.",
      },
      {
        property: "og:title",
        content: "Contact — Vance SEO",
      },
      {
        property: "og:description",
        content:
          "Get in touch with Vance SEO for a technical SEO audit or content strategy project.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <header className="max-w-[800px] mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] mb-6">
          Let&apos;s <span className="text-accent">work</span> together
        </h1>
        <p className="text-lg text-muted-foreground max-w-[55ch]">
          Tell me what you&apos;re building. I typically respond within one
          business day.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-16">
        <section>
          <h2 className="font-display text-xl font-bold mb-6">
            Direct contact
          </h2>
          <a
            href="mailto:hello@vance-seo.fyi"
            className="group inline-flex items-center gap-4 text-2xl font-display font-bold hover:text-accent transition-colors mb-8"
          >
            hello@vance-seo.fyi
            <span className="text-accent group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>

          <div className="mt-10 space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground block text-sm mb-1">
                Availability
              </strong>
              Accepting 2 new retainers for Q3
            </p>
            <p>
              <strong className="text-foreground block text-sm mb-1">
                Response time
              </strong>
              Within 24 hours
            </p>
            <p>
              <strong className="text-foreground block text-sm mb-1">
                Location
              </strong>
              Remote, UTC±3 friendly
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold mb-6">
            What to include
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Your site URL and current traffic context",
              "The biggest SEO challenge right now",
              "Your timeline and internal team setup",
              "Any tools you already use (GA4, Search Console, Ahrefs, etc.)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
