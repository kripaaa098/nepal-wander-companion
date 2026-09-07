import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";

import { PageHeader, Section } from "@/components/site/PageShell";
import { guideArticles } from "@/lib/nepal-data";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Nepal travel guide — arrival, treks and travelling well | NepalWander" },
      {
        name: "description",
        content: "Practical Nepal guides: your first 72 hours, how to choose the right trek, and how to travel responsibly.",
      },
      { property: "og:title", content: "Nepal travel guide | NepalWander" },
      { property: "og:description", content: "Three practical guides for a first or fifth trip to Nepal." },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="The parts nobody tells you"
        description="Short, practical reads written the way a friend in Kathmandu would explain it."
      />
      <Section>
        <div className="space-y-8">
          {guideArticles.map((a) => (
            <article key={a.slug} className="surface-panel p-8">
              <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {a.readMinutes} min read
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{a.title}</h2>
              <p className="mt-2 text-muted-foreground">{a.excerpt}</p>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {a.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
