import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader, Section } from "@/components/site/PageShell";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { budgetTiers, buildItinerary, interests, pace, type PlannerInput } from "@/lib/nepal-data";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "Nepal journey planner — build a day-by-day route | NepalWander" },
      {
        name: "description",
        content: "Answer a few questions and get a personalised day-by-day Nepal itinerary with a cost estimate.",
      },
      { property: "og:title", content: "Nepal journey planner | NepalWander" },
      { property: "og:description", content: "A personalised Nepal itinerary shaped around your time, budget and pace." },
    ],
  }),
  component: PlannerPage,
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function PlannerPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("My Nepal journey");
  const [days, setDays] = useState(10);
  const [budget, setBudget] = useState<PlannerInput["budget"]>("Comfortable");
  const [selected, setSelected] = useState<string[]>(["Trekking", "Culture & heritage"]);
  const [tripPace, setTripPace] = useState<PlannerInput["pace"]>("Balanced");
  const [month, setMonth] = useState("October");
  const [plan, setPlan] = useState<ReturnType<typeof buildItinerary> | null>(null);
  const [saving, setSaving] = useState(false);

  const daysError = days < 3 || days > 30 ? "Choose between 3 and 30 days." : null;

  const generate = () => {
    if (daysError) return;
    setPlan(buildItinerary({ days, budget, interests: selected, pace: tripPace, month }));
  };

  const save = async () => {
    if (!user) {
      toast.error("Sign in to save this journey");
      void navigate({ to: "/auth" });
      return;
    }
    if (!plan) return;
    setSaving(true);
    const { error } = await supabase.from("trips").insert({
      user_id: user.id,
      title: title.trim() || "My Nepal journey",
      travellers: 1,
      budget_tier: budget,
      pace: tripPace,
      interests: selected,
      itinerary: plan.days,
      estimate_usd: plan.estimateUsd,
    });
    setSaving(false);
    if (error) {
      toast.error("Couldn't save that journey");
      return;
    }
    toast.success("Journey saved");
    void navigate({ to: "/dashboard" });
  };

  return (
    <>
      <PageHeader
        eyebrow="Plan"
        title="Build your journey"
        description="Five choices, one route. Adjust anything and regenerate as often as you like."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <div className="surface-panel h-fit space-y-6 p-6">
            <div>
              <Label htmlFor="title">Journey name</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="days">Days in Nepal</Label>
              <Input
                id="days"
                type="number"
                min={3}
                max={30}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="mt-2"
              />
              {daysError ? <p className="mt-2 text-xs text-destructive">{daysError}</p> : null}
            </div>
            <div>
              <Label>Budget</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {budgetTiers.map((t) => (
                  <Button
                    key={t.tier}
                    size="sm"
                    variant={budget === t.tier ? "default" : "secondary"}
                    onClick={() => setBudget(t.tier)}
                  >
                    {t.tier}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label>Pace</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {pace.map((p) => (
                  <Button key={p} size="sm" variant={tripPace === p ? "default" : "secondary"} onClick={() => setTripPace(p)}>
                    {p}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label>Month of travel</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {months.map((m) => (
                  <Button key={m} size="sm" variant={month === m ? "default" : "secondary"} onClick={() => setMonth(m)}>
                    {m.slice(0, 3)}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label>Interests</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <Button
                    key={i}
                    size="sm"
                    variant={selected.includes(i) ? "default" : "secondary"}
                    onClick={() =>
                      setSelected((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))
                    }
                  >
                    {i}
                  </Button>
                ))}
              </div>
            </div>
            <Button className="w-full" onClick={generate} disabled={Boolean(daysError)}>
              Build my itinerary
            </Button>
          </div>

          <div>
            {!plan ? (
              <div className="surface-panel flex h-full flex-col items-center justify-center p-12 text-center">
                <h2 className="font-display text-xl">Your route appears here</h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Set your days, budget and interests, then build the itinerary. Nothing is saved until you choose to.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="surface-panel flex flex-wrap items-center justify-between gap-4 p-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated total for one traveller</p>
                    <p className="font-display text-3xl text-primary">${plan.estimateUsd}</p>
                  </div>
                  <Button onClick={save} disabled={saving}>
                    {saving ? "Saving…" : "Save this journey"}
                  </Button>
                </div>
                <ul className="space-y-3">
                  {plan.days.map((d) => (
                    <li key={d.day} className="surface-panel flex gap-4 p-5">
                      <span className="font-display text-2xl text-primary">{String(d.day).padStart(2, "0")}</span>
                      <div>
                        <Badge variant="secondary">{d.place}</Badge>
                        <h3 className="mt-2 font-semibold">{d.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{d.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="surface-panel p-6">
                  <h3 className="font-semibold">Notes for this plan</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {plan.notes.map((n) => (
                      <li key={n}>· {n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
