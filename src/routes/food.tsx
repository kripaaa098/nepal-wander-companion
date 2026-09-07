import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader, Section } from "@/components/site/PageShell";
import { FavoriteButton } from "@/components/site/FavoriteButton";
import { dishes, images } from "@/lib/nepal-data";

export const Route = createFileRoute("/food")({
  head: () => ({
    meta: [
      { title: "Nepali food guide — dal bhat, momo and Newari khaja | NepalWander" },
      {
        name: "description",
        content:
          "What to eat in Nepal and what it costs: dal bhat, momo, Newari khaja sets, thukpa, sel roti, juju dhau and more.",
      },
      { property: "og:title", content: "Nepali food guide | NepalWander" },
      { property: "og:description", content: "Eight essential Nepali dishes with prices and where they belong." },
    ],
  }),
  component: FoodPage,
});

function FoodPage() {
  const [vegOnly, setVegOnly] = useState(false);
  const list = dishes.filter((d) => !vegOnly || d.vegetarian);

  return (
    <>
      <section className="relative isolate">
        <img
          src={images.food}
          alt="Dal bhat thali with momo on a dark wooden table"
          width={1280}
          height={853}
          className="h-[42vh] w-full object-cover"
        />
        <div className="image-veil absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Eat</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Dal bhat power, 24 hour</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The dishes worth crossing a valley for, what they cost in rupees and where each one belongs.
          </p>
        </div>
      </section>

      <Section>
        <div className="mb-8">
          <Button size="sm" variant={vegOnly ? "default" : "secondary"} onClick={() => setVegOnly((v) => !v)}>
            <Leaf className="mr-2 h-4 w-4" /> Vegetarian only
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => (
            <article key={d.name} className="surface-panel flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold">{d.name}</h2>
                {d.vegetarian ? <Badge variant="outline">Veg</Badge> : null}
              </div>
              <p className="text-sm text-primary">{d.origin}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.description}</p>
              <p className="mt-4 text-sm">{d.priceNpr}</p>
              <FavoriteButton
                className="mt-4 w-fit"
                itemType="dish"
                itemSlug={d.name.toLowerCase().replace(/\s+/g, "-")}
                itemName={d.name}
              />
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
