import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Mountain, Search, User } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";

const links = [
  { to: "/destinations", label: "Destinations" },
  { to: "/planner", label: "Plan a journey" },
  { to: "/hidden-gems", label: "Hidden gems" },
  { to: "/experiences", label: "Experiences" },
  { to: "/stays", label: "Stays" },
  { to: "/food", label: "Food" },
  { to: "/guide", label: "Guide" },
] as const;

const moreLinks = [
  { to: "/routes", label: "Routes & map" },
  { to: "/weather", label: "Seasons & weather" },
  { to: "/budget", label: "Budget" },
  { to: "/phrases", label: "Phrase guide" },
  { to: "/checklist", label: "Preparation" },
  { to: "/safety", label: "Safety" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { session } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" aria-hidden />
          <span className="font-display text-lg font-semibold tracking-tight">NepalWander</span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search" onClick={() => navigate({ to: "/search" })}>
            <Search className="h-4 w-4" />
          </Button>
          {session ? (
            <Button variant="secondary" size="sm" onClick={() => navigate({ to: "/dashboard" })}>
              <User className="mr-2 h-4 w-4" /> My journeys
            </Button>
          ) : (
            <Button size="sm" onClick={() => navigate({ to: "/auth" })}>
              Sign in
            </Button>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetTitle className="px-1 font-display text-xl">Wander the whole map</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {[...links, ...moreLinks].map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    activeProps={{ className: "text-foreground bg-secondary" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
