import { Link } from "@tanstack/react-router";
import { Mountain } from "lucide-react";

const groups = [
  {
    title: "Explore",
    links: [
      { to: "/destinations", label: "Destinations" },
      { to: "/hidden-gems", label: "Hidden gems" },
      { to: "/experiences", label: "Experiences" },
      { to: "/routes", label: "Routes & map" },
    ],
  },
  {
    title: "Plan",
    links: [
      { to: "/planner", label: "Journey planner" },
      { to: "/budget", label: "Budget" },
      { to: "/weather", label: "Seasons & weather" },
      { to: "/checklist", label: "Preparation" },
    ],
  },
  {
    title: "Know before you go",
    links: [
      { to: "/safety", label: "Safety" },
      { to: "/phrases", label: "Phrase guide" },
      { to: "/food", label: "Food" },
      { to: "/guide", label: "Travel guide" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" aria-hidden />
            <span className="font-display text-lg font-semibold">NepalWander</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Don't Just Visit Nepal. Wander It. A travel companion built with local knowledge, from the Terai
            grasslands to the Khumbu ice.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
            <ul className="mt-3 space-y-2">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/70 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} NepalWander · Demo content for illustration · Kathmandu, Nepal
      </div>
    </footer>
  );
}
