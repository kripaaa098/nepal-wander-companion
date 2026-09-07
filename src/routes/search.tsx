import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { EmptyState, PageHeader, Section } from "@/components/site/PageShell";
import { searchIndex } from "@/lib/nepal-data";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search NepalWander — places, stays, food and guides" },
      { name: "description", content: "Search every Nepal destination, hidden gem, experience, stay, dish and guide on NepalWander." },
      { property: "og:title", content: "Search | NepalWander" },
      { property: "og:description", content: "Find any place, stay, dish or guide across NepalWander." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 12);
    return searchIndex.filter((r) => `${r.title} ${r.subtitle} ${r.keywords} ${r.type}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <PageHeader eyebrow="Find" title="Search everything" description="Places, gems, experiences, stays, dishes and guides in one index.">
        <div className="relative max-w-xl">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'trek', 'momo', 'Pokhara' or 'homestay'"
            className="pl-9"
            aria-label="Search NepalWander"
          />
        </div>
      </PageHeader>
      <Section>
        {results.length === 0 ? (
          <EmptyState title={`Nothing found for "${query}"`} hint="Try a place name, an activity or a dish." />
        ) : (
          <ul className="grid gap-3 md:grid-cols-2">
            {results.map((r) => (
              <li key={`${r.type}-${r.title}`}>
                <Link to={r.to} className="surface-panel flex items-center justify-between gap-4 p-5 transition-colors hover:border-primary/60">
                  <div>
                    <p className="font-medium">{r.title}</p>
                    <p className="text-sm text-muted-foreground">{r.subtitle}</p>
                  </div>
                  <Badge variant="outline">{r.type}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
