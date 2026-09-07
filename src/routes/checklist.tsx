import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { PageHeader, Section } from "@/components/site/PageShell";
import { checklist } from "@/lib/nepal-data";

export const Route = createFileRoute("/checklist")({
  head: () => ({
    meta: [
      { title: "Nepal preparation checklist — documents, gear, health | NepalWander" },
      {
        name: "description",
        content: "A practical Nepal packing and preparation checklist covering documents, trekking gear, health and money.",
      },
      { property: "og:title", content: "Nepal preparation checklist | NepalWander" },
      { property: "og:description", content: "Everything to sort before you fly into Kathmandu." },
    ],
  }),
  component: ChecklistPage,
});

const STORAGE_KEY = "nepalwander.checklist";

function ChecklistPage() {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) setDone(JSON.parse(stored) as string[]);
  }, []);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const groups = Array.from(new Set(checklist.map((c) => c.group)));
  const progress = Math.round((done.length / checklist.length) * 100);

  return (
    <>
      <PageHeader
        eyebrow="Prepare"
        title="Before you fly"
        description="Sixteen things worth sorting at home. Your ticks stay on this device."
      >
        <div className="max-w-sm">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{done.length} of {checklist.length} done</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </div>
      </PageHeader>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g} className="surface-panel p-6">
              <h2 className="text-lg font-semibold">{g}</h2>
              <ul className="mt-4 space-y-4">
                {checklist
                  .filter((c) => c.group === g)
                  .map((c) => (
                    <li key={c.id} className="flex items-start gap-3">
                      <Checkbox
                        id={c.id}
                        checked={done.includes(c.id)}
                        onCheckedChange={() => toggle(c.id)}
                        className="mt-0.5"
                      />
                      <label htmlFor={c.id} className="text-sm">
                        <span className={done.includes(c.id) ? "text-muted-foreground line-through" : ""}>
                          {c.label}
                        </span>
                        {c.note ? <span className="block text-xs text-muted-foreground">{c.note}</span> : null}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
