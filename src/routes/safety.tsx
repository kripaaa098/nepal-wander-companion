import { createFileRoute } from "@tanstack/react-router";
import { PhoneCall, ShieldAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PageHeader, Section } from "@/components/site/PageShell";
import { safetyTips } from "@/lib/nepal-data";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Nepal travel safety — altitude, roads and emergency numbers | NepalWander" },
      {
        name: "description",
        content: "Altitude rules, road risk, water safety, temple etiquette and Nepal emergency numbers in one place.",
      },
      { property: "og:title", content: "Nepal travel safety | NepalWander" },
      { property: "og:description", content: "The safety guidance that actually matters in Nepal." },
    ],
  }),
  component: SafetyPage,
});

const emergency = [
  { label: "Nepal Police", number: "100" },
  { label: "Ambulance", number: "102" },
  { label: "Fire", number: "101" },
  { label: "Tourist Police", number: "+977 1 4247041" },
];

function SafetyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stay well"
        title="Safety, honestly"
        description="Altitude and roads are the real risks in Nepal. Everything else is manageable with a little preparation."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {safetyTips.map((t) => (
              <article key={t.title} className="surface-panel p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="flex items-start gap-3 text-lg font-semibold">
                    <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    {t.title}
                  </h2>
                  <Badge variant={t.level === "Essential" ? "default" : "secondary"}>{t.level}</Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
              </article>
            ))}
          </div>
          <aside className="surface-panel h-fit p-6">
            <h2 className="flex items-center gap-2 font-semibold">
              <PhoneCall className="h-4 w-4 text-primary" /> Emergency numbers
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {emergency.map((e) => (
                <li key={e.label} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{e.label}</span>
                  <a href={`tel:${e.number.replace(/\s/g, "")}`} className="font-medium text-primary">
                    {e.number}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              Save these offline. Mobile coverage is good in valleys and patchy on high passes.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
