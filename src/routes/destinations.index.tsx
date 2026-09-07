import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmptyState, PageHeader, Section } from "@/components/site/PageShell";
import { destinations, type Region } from "@/lib/nepal-data";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Nepal destinations — Kathmandu to Everest | NepalWander" },
      {
        name: "description",
        content:
          "Explore eight Nepal destinations across the Himalaya, hills, Kathmandu Valley and Terai with budgets, best months and ideal trip length.",
      },
      { property: "og:title", content: "Nepal destinations | NepalWander" },
      {
        property: "og:description",
        content: "Compare Nepal destinations by region, budget, season and ideal number of days.",
      },
    ],
  }),
  component: DestinationsPage,
});

const regions: (Region | "All")[] = ["All", "Himalaya", "Hills", "Kathmandu Valley", "Terai"];

function DestinationsPage() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      destinations.filter(
        (d) =>
          (region === "All" || d.region === region) &&
          (query.trim() === "" ||
            `${d.name} ${d.district} ${d.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())),
      ),
    [region, query],
  );

  return (
    <>
      <PageHeader
        eyebrow="Explore"
        title="Every Nepal worth knowing"
        description="Eight regions-worth of the country, from car-free Newar towns to a 5,416 m pass in the rain shadow."
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a place, district or interest"
            className="md:max-w-sm"
            aria-label="Search destinations"
          />
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <Button
                key={r}
                size="sm"
                variant={region === r ? "default" : "secondary"}
                onClick={() => setRegion(r)}
              >
                {r}
              </Button>
            ))}
          </div>
        </div>
      </PageHeader>

      <Section>
        {filtered.length === 0 ? (
          <EmptyState
            title="No destinations match that"
            hint="Try a different region, or search for something broader like 'trek' or 'heritage'."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <Link
                key={d.slug}
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="surface-panel group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={d.image}
                    alt={`${d.name} in ${d.district}`}
                    loading="lazy"
                    width={1280}
                    height={853}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute left-3 top-3" variant="secondary">
                    {d.region}
                  </Badge>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold">{d.name}</h2>
                    <span className="flex items-center gap-1 text-sm text-primary">
                      <Star className="h-3.5 w-3.5 fill-current" /> {d.rating}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {d.district} · {d.altitude}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{d.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2.5 py-1">{d.idealDays} days ideal</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1">~${d.dailyBudgetUsd}/day</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1">{d.bestMonths.join(" · ")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
