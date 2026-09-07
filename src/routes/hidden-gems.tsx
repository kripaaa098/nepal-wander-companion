import { createFileRoute } from "@tanstack/react-router";
import { Compass } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PageHeader, Section } from "@/components/site/PageShell";
import { FavoriteButton } from "@/components/site/FavoriteButton";
import { hiddenGems } from "@/lib/nepal-data";

export const Route = createFileRoute("/hidden-gems")({
  head: () => ({
    meta: [
      { title: "Hidden gems of Nepal — quiet places most trips miss | NepalWander" },
      {
        name: "description",
        content:
          "Tsum Valley, Khaptad, Rara Lake, Panauti, Bandipur and Ilam — six quiet Nepal destinations with how to reach them and when to go.",
      },
      { property: "og:title", content: "Hidden gems of Nepal | NepalWander" },
      { property: "og:description", content: "Six quiet corners of Nepal that most itineraries never reach." },
    ],
  }),
  component: HiddenGemsPage,
});

function HiddenGemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Off the trail"
        title="Hidden gems"
        description="Places with enough infrastructure to visit comfortably and few enough visitors to feel like a discovery."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {hiddenGems.map((g) => (
            <article key={g.slug} className="surface-panel flex flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{g.name}</h2>
                  <p className="text-sm text-primary">{g.near}</p>
                </div>
                <Badge variant="secondary">{g.crowdLevel}</Badge>
              </div>
              <p className="mt-4 flex-1 text-sm text-muted-foreground">{g.why}</p>
              <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Best time</dt>
                  <dd>{g.bestTime}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Getting there</dt>
                  <dd className="flex items-start gap-2">
                    <Compass className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                    {g.gettingThere}
                  </dd>
                </div>
              </dl>
              <FavoriteButton className="mt-5 w-fit" itemType="hidden-gem" itemSlug={g.slug} itemName={g.name} />
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
