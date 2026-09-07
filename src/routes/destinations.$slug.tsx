import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Mountain, Star, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/PageShell";
import { FavoriteButton } from "@/components/site/FavoriteButton";
import { Reviews } from "@/components/site/Reviews";
import { destinations } from "@/lib/nepal-data";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = destinations.find((d) => d.slug === params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Destination not found | NepalWander" }, { name: "robots", content: "noindex" }] };
    }
    const d = loaderData.destination;
    return {
      meta: [
        { title: `${d.name}, Nepal — travel guide | NepalWander` },
        { name: "description", content: `${d.tagline}. Best months, budget, ideal days and highlights for ${d.name}.` },
        { property: "og:title", content: `${d.name}, Nepal | NepalWander` },
        { property: "og:description", content: d.tagline },
      ],
    };
  },
  component: DestinationDetail,
});

function DestinationDetail() {
  const { destination: d } = Route.useLoaderData();
  const related = destinations.filter((x) => x.slug !== d.slug && x.region === d.region).slice(0, 3);

  return (
    <>
      <section className="relative isolate">
        <img
          src={d.image}
          alt={`${d.name}, ${d.district}`}
          width={1280}
          height={853}
          className="h-[52vh] w-full object-cover"
        />
        <div className="image-veil absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
            <Badge variant="secondary">{d.region}</Badge>
            <h1 className="mt-3 text-4xl font-semibold md:text-6xl">{d.name}</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">{d.tagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <FavoriteButton itemType="destination" itemSlug={d.slug} itemName={d.name} />
              <Button asChild size="sm" variant="secondary">
                <Link to="/planner">Add to a journey</Link>
              </Button>
              <span className="flex items-center gap-1 text-sm text-primary">
                <Star className="h-4 w-4 fill-current" /> {d.rating} · {d.reviewCount} travellers
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-lg text-muted-foreground">{d.summary}</p>
            <h2 className="mt-10 text-2xl font-semibold">Don't miss</h2>
            <ul className="mt-4 space-y-3">
              {d.highlights.map((h) => (
                <li key={h} className="surface-panel flex items-start gap-3 p-4 text-sm">
                  <Mountain className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {d.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <aside className="surface-panel h-fit p-6">
            <h2 className="font-semibold">Trip facts</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-muted-foreground">
                  <CalendarDays className="h-4 w-4" /> Ideal length
                </dt>
                <dd>{d.idealDays} days</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-muted-foreground">
                  <Wallet className="h-4 w-4" /> Daily budget
                </dt>
                <dd>~${d.dailyBudgetUsd}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Altitude</dt>
                <dd>{d.altitude}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">District</dt>
                <dd>{d.district}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Best months</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {d.bestMonths.map((m) => (
                    <span key={m} className="rounded-full bg-secondary px-2.5 py-1 text-xs">
                      {m}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Coordinates</dt>
                <dd className="mt-1 font-mono text-xs">
                  {d.coords.lat.toFixed(4)}, {d.coords.lng.toFixed(4)}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section>
        <Reviews itemType="destination" itemSlug={d.slug} itemName={d.name} />
      </Section>

      {related.length > 0 ? (
        <Section title={`More in the ${d.region}`}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/destinations/$slug"
                params={{ slug: r.slug }}
                className="surface-panel overflow-hidden"
              >
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  width={1280}
                  height={853}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{r.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
