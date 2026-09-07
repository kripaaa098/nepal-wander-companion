import { createFileRoute } from "@tanstack/react-router";
import { CloudRain, Snowflake, Sun, Thermometer } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PageHeader, Section } from "@/components/site/PageShell";
import { destinations, seasons } from "@/lib/nepal-data";

export const Route = createFileRoute("/weather")({
  head: () => ({
    meta: [
      { title: "When to visit Nepal — seasons, weather and monsoon | NepalWander" },
      {
        name: "description",
        content: "Spring, monsoon, autumn and winter in Nepal: temperatures, rainfall and what each season means for your plans.",
      },
      { property: "og:title", content: "When to visit Nepal | NepalWander" },
      { property: "og:description", content: "Season-by-season temperatures, rainfall and trekking advice for Nepal." },
    ],
  }),
  component: WeatherPage,
});

const icons = [Sun, CloudRain, Thermometer, Snowflake];

function WeatherPage() {
  return (
    <>
      <PageHeader
        eyebrow="Timing"
        title="Seasons, not just dates"
        description="Nepal has four distinct travel seasons and the right one depends entirely on where you're heading."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {seasons.map((s, i) => {
            const Icon = icons[i] ?? Sun;
            return (
              <article key={s.season} className="surface-panel p-6">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-xl font-semibold">
                    <Icon className="h-5 w-5 text-primary" aria-hidden /> {s.season}
                  </h2>
                  <Badge variant="secondary">{s.months}</Badge>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{s.feel}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Temperature</dt>
                    <dd>{s.tempRange}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Rainfall</dt>
                    <dd>{s.rainfall}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Advice</dt>
                    <dd>{s.advice}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </Section>

      <Section title="Best months by destination">
        <div className="surface-panel overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-4">Destination</th>
                <th className="px-5 py-4">Region</th>
                <th className="px-5 py-4">Altitude</th>
                <th className="px-5 py-4">Best months</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((d) => (
                <tr key={d.slug} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4 font-medium">{d.name}</td>
                  <td className="px-5 py-4 text-muted-foreground">{d.region}</td>
                  <td className="px-5 py-4 text-muted-foreground">{d.altitude}</td>
                  <td className="px-5 py-4">{d.bestMonths.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
