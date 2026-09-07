import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Clock, Gauge } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, PageHeader, Section } from "@/components/site/PageShell";
import { FavoriteButton } from "@/components/site/FavoriteButton";
import { experiences, type Experience } from "@/lib/nepal-data";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Things to do in Nepal — experiences and activities | NepalWander" },
      {
        name: "description",
        content:
          "Paragliding, rafting, cooking classes, monastery retreats, jungle canoes and short treks across Nepal, with prices and intensity.",
      },
      { property: "og:title", content: "Nepal experiences | NepalWander" },
      { property: "og:description", content: "Activities across Nepal with honest prices, duration and effort levels." },
    ],
  }),
  component: ExperiencesPage,
});

const categories: (Experience["category"] | "All")[] = ["All", "Adventure", "Culture", "Wellness", "Nature", "Food"];

function ExperiencesPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => experiences.filter((e) => category === "All" || e.category === category),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="Do"
        title="Experiences worth the day"
        description="Curated activities with real prices, how long they take and how hard they actually are."
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button key={c} size="sm" variant={category === c ? "default" : "secondary"} onClick={() => setCategory(c)}>
              {c}
            </Button>
          ))}
        </div>
      </PageHeader>

      <Section>
        {filtered.length === 0 ? (
          <EmptyState title="Nothing in that category yet" hint="Try 'All' to see everything available." />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e) => (
              <article key={e.slug} className="surface-panel flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{e.category}</Badge>
                  <span className="text-sm text-primary">from ${e.priceUsd}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold">{e.name}</h2>
                <p className="text-sm text-muted-foreground">{e.place}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.description}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {e.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Gauge className="h-3.5 w-3.5" /> {e.intensity}
                  </span>
                </div>
                <FavoriteButton className="mt-5 w-fit" itemType="experience" itemSlug={e.slug} itemName={e.name} />
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
