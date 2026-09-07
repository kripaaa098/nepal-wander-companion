import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { EmptyState, PageHeader, Section } from "@/components/site/PageShell";
import { FavoriteButton } from "@/components/site/FavoriteButton";
import { images, stays, type Stay } from "@/lib/nepal-data";

export const Route = createFileRoute("/stays")({
  head: () => ({
    meta: [
      { title: "Where to stay in Nepal — teahouses to heritage hotels | NepalWander" },
      {
        name: "description",
        content:
          "Teahouses, community homestays, eco-lodges and heritage hotels across Nepal with nightly rates and what each one gets right.",
      },
      { property: "og:title", content: "Nepal stays | NepalWander" },
      { property: "og:description", content: "Sleep well at every altitude — from NPR teahouses to heritage courtyards." },
    ],
  }),
  component: StaysPage,
});

const types: (Stay["type"] | "All")[] = ["All", "Teahouse", "Homestay", "Boutique", "Eco-lodge", "Heritage"];

function StaysPage() {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(300);

  const filtered = useMemo(
    () => stays.filter((s) => (type === "All" || s.type === type) && s.priceUsd <= maxPrice),
    [type, maxPrice],
  );

  return (
    <>
      <PageHeader eyebrow="Sleep" title="Stays for every altitude" description="Six honest options, from a NPR teahouse bunk to a courtyard heritage hotel.">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <Button key={t} size="sm" variant={type === t ? "default" : "secondary"} onClick={() => setType(t)}>
                {t}
              </Button>
            ))}
          </div>
          <div className="w-full max-w-xs">
            <p className="mb-2 text-sm text-muted-foreground">Max nightly rate: ${maxPrice}</p>
            <Slider
              value={[maxPrice]}
              min={20}
              max={300}
              step={10}
              onValueChange={(v) => setMaxPrice(v[0] ?? 300)}
              aria-label="Maximum nightly rate"
            />
          </div>
        </div>
      </PageHeader>

      <Section>
        {filtered.length === 0 ? (
          <EmptyState title="No stays in that range" hint="Raise the nightly rate or choose a different type." />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <article key={s.slug} className="surface-panel overflow-hidden">
                <img
                  src={images.stays}
                  alt={`${s.name} in ${s.place}`}
                  loading="lazy"
                  width={1280}
                  height={853}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold">{s.name}</h2>
                      <p className="text-sm text-muted-foreground">{s.place}</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-primary">
                      <Star className="h-3.5 w-3.5 fill-current" /> {s.rating}
                    </span>
                  </div>
                  <Badge variant="outline" className="mt-3">
                    {s.type}
                  </Badge>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {s.perks.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-sm">
                      <span className="text-lg font-semibold text-primary">${s.priceUsd}</span> / night
                    </p>
                    <FavoriteButton itemType="stay" itemSlug={s.slug} itemName={s.name} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
