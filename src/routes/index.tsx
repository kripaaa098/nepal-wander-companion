import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Map, Sparkles, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/PageShell";
import { destinations, dishes, experiences, hiddenGems, images, stats } from "@/lib/nepal-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NepalWander — Don't Just Visit Nepal. Wander It." },
      {
        name: "description",
        content:
          "A premium travel companion for Nepal: destinations, hidden gems, treks, stays, food, budgets, phrases and safety, all in one place.",
      },
      { property: "og:title", content: "NepalWander — Don't Just Visit Nepal. Wander It." },
      {
        property: "og:description",
        content: "Plan a Nepal journey with local depth — from Kathmandu courtyards to the Khumbu ice.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Compass,
    title: "Journey planner",
    body: "Answer five questions and get a day-by-day route shaped around your time, budget and pace.",
    to: "/planner",
  },
  {
    icon: Sparkles,
    title: "Hidden gems",
    body: "Tsum Valley, Khaptad, Panauti — places most itineraries never reach.",
    to: "/hidden-gems",
  },
  {
    icon: Map,
    title: "Routes & map",
    body: "Ready-made loops with stops, nights and distances you can adapt.",
    to: "/routes",
  },
  {
    icon: Wallet,
    title: "Real budgets",
    body: "Daily costs from shoestring teahouses to heritage hotels, plus permits and fees.",
    to: "/budget",
  },
] as const;

function Index() {
  const featured = destinations.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={images.hero}
          alt="Machhapuchhre peak glowing at sunrise above layered Himalayan ridges"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="image-veil absolute inset-0" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-background/40 text-primary backdrop-blur">
            Nepal · 8 of the world's 14 highest peaks
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-7xl">
            Don't Just Visit Nepal.
            <span className="text-gradient-summit"> Wander It.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            One companion for the whole journey — where to go, what it costs, when to arrive, what to say, and how
            to stay safe from the Terai grasslands to 5,364 metres.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/planner">
                Plan my journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/destinations">Explore destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-border/70 bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-primary md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Section title="Everything the trip needs, in one place" description="Built from how people actually travel Nepal.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="surface-panel group p-6 transition-colors hover:border-primary/60"
            >
              <p.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <span className="mt-4 inline-flex items-center text-sm text-primary">
                Open <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Start with the places" description="Six destinations that between them cover most of what Nepal offers.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => (
            <Link
              key={d.slug}
              to="/destinations/$slug"
              params={{ slug: d.slug }}
              className="group relative overflow-hidden rounded-xl border border-border"
            >
              <img
                src={d.image}
                alt={`${d.name}, ${d.region}`}
                loading="lazy"
                width={1280}
                height={853}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="image-veil absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">{d.region}</p>
                <h3 className="mt-1 text-xl font-semibold">{d.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{d.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="secondary">
            <Link to="/destinations">See all destinations</Link>
          </Button>
        </div>
      </Section>

      <Section
        title="Go where the buses don't"
        description="Quiet corners with real infrastructure — just fewer people in the photographs."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {hiddenGems.slice(0, 3).map((g) => (
            <div key={g.slug} className="surface-panel p-6">
              <Badge variant="secondary">{g.crowdLevel}</Badge>
              <h3 className="mt-4 text-lg font-semibold">{g.name}</h3>
              <p className="text-sm text-primary">{g.near}</p>
              <p className="mt-3 text-sm text-muted-foreground">{g.why}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="secondary">
            <Link to="/hidden-gems">All hidden gems</Link>
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src={images.food}
              alt="Dal bhat thali with momo on a dark wooden table"
              loading="lazy"
              width={1280}
              height={853}
              className="h-80 w-full object-cover"
            />
            <div className="image-veil absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-2xl font-semibold">Eat your way through the hills</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                {dishes.length} dishes explained, with what to pay and where each one belongs.
              </p>
              <Button asChild size="sm" className="mt-4">
                <Link to="/food">Open the food guide</Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src={images.stays}
              alt="Warm teahouse lounge with a window onto snow peaks"
              loading="lazy"
              width={1280}
              height={853}
              className="h-80 w-full object-cover"
            />
            <div className="image-veil absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-2xl font-semibold">Sleep well at every altitude</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Teahouses, community homestays, eco-lodges and heritage hotels with honest nightly rates.
              </p>
              <Button asChild size="sm" className="mt-4">
                <Link to="/stays">Browse stays</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Things worth doing" description={`${experiences.length} experiences, from a 30-minute flight to a four-day ridge walk.`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.slice(0, 4).map((e) => (
            <div key={e.slug} className="surface-panel flex flex-col p-5">
              <Badge variant="outline" className="w-fit">
                {e.category}
              </Badge>
              <h3 className="mt-3 font-semibold">{e.name}</h3>
              <p className="text-xs text-muted-foreground">{e.place}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.description}</p>
              <p className="mt-4 text-sm text-primary">from ${e.priceUsd}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="surface-panel flex flex-col items-start gap-4 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Keep your journey in one place</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Create a free account to save trips, favourite places, write a travel journal and leave reviews.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/auth">Create an account</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
