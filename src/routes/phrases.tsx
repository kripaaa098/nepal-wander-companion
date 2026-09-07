import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { EmptyState, PageHeader, Section } from "@/components/site/PageShell";
import { phrases } from "@/lib/nepal-data";

export const Route = createFileRoute("/phrases")({
  head: () => ({
    meta: [
      { title: "Nepali phrase guide for travellers | NepalWander" },
      {
        name: "description",
        content: "Essential Nepali phrases with script, pronunciation and context — greetings, bargaining, food, trail and emergencies.",
      },
      { property: "og:title", content: "Nepali phrase guide | NepalWander" },
      { property: "og:description", content: "Twelve Nepali phrases that change every interaction on the road." },
    ],
  }),
  component: PhrasesPage,
});

function PhrasesPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      phrases.filter((p) =>
        `${p.roman} ${p.english} ${p.context}`.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );

  return (
    <>
      <PageHeader
        eyebrow="Language"
        title="A little Nepali goes a long way"
        description="Nepali is written in Devanagari, but roman spelling is widely understood. Start with these."
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a phrase or situation"
          className="max-w-sm"
          aria-label="Search phrases"
        />
      </PageHeader>
      <Section>
        {filtered.length === 0 ? (
          <EmptyState title="No phrase matches that" hint="Try 'food', 'trail' or 'thank'." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.roman} className="surface-panel p-6">
                <p className="font-display text-2xl">{p.nepali}</p>
                <p className="mt-1 text-primary">{p.roman}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.english}</p>
                <Badge variant="outline" className="mt-4">
                  {p.context}
                </Badge>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
