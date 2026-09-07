import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Route as RouteIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader, Section } from "@/components/site/PageShell";
import { routeIdeas } from "@/lib/nepal-data";

export const Route = createFileRoute("/routes")({
  head: () => ({
    meta: [
      { title: "Nepal routes and itineraries with stops | NepalWander" },
      {
        name: "description",
        content: "Ready-made Nepal routes with stops, nights, distances and coordinates — the Golden Triangle, Khumbu and the quiet west.",
      },
      { property: "og:title", content: "Nepal routes | NepalWander" },
      { property: "og:description", content: "Three complete Nepal routes you can follow or adapt." },
    ],
  }),
  component: RoutesPage,
});

function RoutesPage() {
  const [activeSlug, setActiveSlug] = useState(routeIdeas[0]!.slug);
  const active = routeIdeas.find((r) => r.slug === activeSlug)!;

  return (
    <>
      <PageHeader
        eyebrow="Routes"
        title="Lines across the country"
        description="Each route lists its stops, nights and coordinates, ready to drop into your own map when you travel."
      >
        <div className="flex flex-wrap gap-2">
          {routeIdeas.map((r) => (
            <Button key={r.slug} size="sm" variant={activeSlug === r.slug ? "default" : "secondary"} onClick={() => setActiveSlug(r.slug)}>
              {r.name.split(":")[0]}
            </Button>
          ))}
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-2xl font-semibold">{active.name}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="secondary">{active.days} days</Badge>
              <Badge variant="secondary">{active.distanceKm} km</Badge>
              <Badge variant="outline">{active.style}</Badge>
            </div>
            <ol className="mt-8 space-y-4 border-l border-border pl-6">
              {active.stops.map((s, i) => (
                <li key={s.name} className="relative">
                  <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="surface-panel p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold">{s.name}</h3>
                      <span className="text-sm text-primary">{s.nights} nights</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                    <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {s.coords.lat.toFixed(4)}, {s.coords.lng.toFixed(4)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="surface-panel h-fit overflow-hidden">
            <div className="relative h-72 bg-secondary/50">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:28px_28px]" />
              {active.stops.map((s, i) => {
                const left = ((s.coords.lng - 80) / 8) * 100;
                const top = 100 - ((s.coords.lat - 26.5) / 3.5) * 100;
                return (
                  <div
                    key={s.name}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1"
                    style={{ left: `${Math.min(92, Math.max(8, left))}%`, top: `${Math.min(88, Math.max(12, top))}%` }}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="whitespace-nowrap text-[11px] text-foreground">{s.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-sm font-medium">
                <RouteIcon className="h-4 w-4 text-primary" /> Route overview
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A simple positional sketch of the stops. Coordinates are listed on each stop so the route is ready
                for a full interactive map later.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
