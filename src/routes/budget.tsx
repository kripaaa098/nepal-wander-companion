import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader, Section } from "@/components/site/PageShell";
import { budgetExtras, budgetTiers } from "@/lib/nepal-data";

export const Route = createFileRoute("/budget")({
  head: () => ({
    meta: [
      { title: "Nepal travel budget — daily costs, permits and fees | NepalWander" },
      {
        name: "description",
        content: "What Nepal actually costs per day at three budget levels, plus visa, permit, guide and flight fees.",
      },
      { property: "og:title", content: "Nepal travel budget | NepalWander" },
      { property: "og:description", content: "Daily costs and one-off fees for a realistic Nepal budget." },
    ],
  }),
  component: BudgetPage,
});

function BudgetPage() {
  const [days, setDays] = useState(12);
  const [travellers, setTravellers] = useState(2);
  const [tier, setTier] = useState(budgetTiers[1]!.tier);
  const [extras, setExtras] = useState<string[]>(["Tourist visa on arrival (30 days)"]);

  const perDay = budgetTiers.find((t) => t.tier === tier)?.perDayUsd ?? 65;
  const extrasTotal = budgetExtras.filter((e) => extras.includes(e.label)).reduce((s, e) => s + e.usd, 0);
  const total = (perDay * Math.max(1, days) + extrasTotal) * Math.max(1, travellers);

  return (
    <>
      <PageHeader
        eyebrow="Money"
        title="What Nepal really costs"
        description="Daily spend at three comfort levels, plus the one-off fees people forget until the airport."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {budgetTiers.map((t) => (
            <button
              key={t.tier}
              onClick={() => setTier(t.tier)}
              className={`surface-panel p-6 text-left transition-colors ${tier === t.tier ? "border-primary" : ""}`}
            >
              <h2 className="text-lg font-semibold">{t.tier}</h2>
              <p className="mt-1 font-display text-3xl text-primary">${t.perDayUsd}</p>
              <p className="text-xs text-muted-foreground">per person, per day</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <li>· {t.stay}</li>
                <li>· {t.food}</li>
                <li>· {t.transport}</li>
                <li>· {t.activities}</li>
              </ul>
            </button>
          ))}
        </div>
      </Section>

      <Section title="Estimate your trip" description="Adjust the numbers and add the fees that apply to you.">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="surface-panel space-y-6 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="days">Days</Label>
                <Input id="days" type="number" min={1} max={60} value={days} onChange={(e) => setDays(Number(e.target.value))} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="travellers">Travellers</Label>
                <Input
                  id="travellers"
                  type="number"
                  min={1}
                  max={12}
                  value={travellers}
                  onChange={(e) => setTravellers(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <Label>One-off fees</Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {budgetExtras.map((e) => (
                  <Button
                    key={e.label}
                    size="sm"
                    variant={extras.includes(e.label) ? "default" : "secondary"}
                    onClick={() =>
                      setExtras((prev) => (prev.includes(e.label) ? prev.filter((x) => x !== e.label) : [...prev, e.label]))
                    }
                  >
                    {e.label} · ${e.usd}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <aside className="surface-panel h-fit p-6">
            <p className="text-sm text-muted-foreground">Estimated total</p>
            <p className="font-display text-4xl text-primary">${total.toLocaleString()}</p>
            <dl className="mt-5 space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <dt>Daily spend</dt>
                <dd>${perDay} × {days} days</dd>
              </div>
              <div className="flex justify-between">
                <dt>One-off fees</dt>
                <dd>${extrasTotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Travellers</dt>
                <dd>× {travellers}</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs text-muted-foreground">
              Excludes international flights and travel insurance. Prices are indicative demo figures.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
