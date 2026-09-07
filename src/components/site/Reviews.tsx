import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { EmptyState, ErrorState } from "@/components/site/PageShell";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export function Reviews({
  itemType,
  itemSlug,
  itemName,
}: {
  itemType: string;
  itemSlug: string;
  itemName: string;
}) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [touched, setTouched] = useState(false);

  const reviewsQuery = useQuery({
    queryKey: ["reviews", itemType, itemSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, rating, comment, author_name, created_at, user_id")
        .eq("item_type", itemType)
        .eq("item_slug", itemSlug)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const submit = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("not-signed-in");
      const { error } = await supabase.from("reviews").insert({
        user_id: user.id,
        item_type: itemType,
        item_slug: itemSlug,
        item_name: itemName,
        rating,
        comment: comment.trim(),
        author_name: (user.user_metadata?.["display_name"] as string) ?? user.email?.split("@")[0] ?? "Traveller",
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Thanks for the review");
      setComment("");
      setTouched(false);
      void queryClient.invalidateQueries({ queryKey: ["reviews", itemType, itemSlug] });
    },
    onError: (error: Error) =>
      toast.error(error.message === "not-signed-in" ? "Sign in to leave a review" : "Couldn't post that review"),
  });

  const commentError = touched && comment.trim().length < 10 ? "Write at least 10 characters." : null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div>
        <h2 className="text-2xl font-semibold">Traveller reviews</h2>
        {reviewsQuery.isLoading ? (
          <div className="mt-6 space-y-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl bg-muted/40" />
            ))}
          </div>
        ) : reviewsQuery.isError ? (
          <div className="mt-6">
            <ErrorState message="Reviews couldn't load right now." onRetry={() => void reviewsQuery.refetch()} />
          </div>
        ) : (reviewsQuery.data?.length ?? 0) === 0 ? (
          <div className="mt-6">
            <EmptyState title="No reviews yet" hint={`Be the first to write about ${itemName}.`} />
          </div>
        ) : (
          <ul className="mt-6 space-y-4">
            {reviewsQuery.data?.map((r) => (
              <li key={r.id} className="surface-panel p-5">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{r.author_name ?? "Traveller"}</p>
                  <span className="flex items-center gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={cn("h-3.5 w-3.5", i < r.rating && "fill-current")} />
                    ))}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.comment}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {new Date(r.created_at).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="surface-panel h-fit p-6">
        <h3 className="font-semibold">Write a review</h3>
        <div className="mt-4 flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              onClick={() => setRating(n)}
              className="p-1 text-primary"
            >
              <Star className={cn("h-5 w-5", n <= rating && "fill-current")} />
            </button>
          ))}
        </div>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder={`What should other travellers know about ${itemName}?`}
          className="mt-4 min-h-28"
        />
        {commentError ? <p className="mt-2 text-xs text-destructive">{commentError}</p> : null}
        <Button
          className="mt-4 w-full"
          disabled={submit.isPending || comment.trim().length < 10}
          onClick={() => submit.mutate()}
        >
          {submit.isPending ? "Posting…" : "Post review"}
        </Button>
        {!user ? (
          <p className="mt-3 text-xs text-muted-foreground">You'll need an account to post — it takes a minute.</p>
        ) : null}
      </div>
    </div>
  );
}
