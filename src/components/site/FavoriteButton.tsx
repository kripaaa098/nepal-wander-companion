import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export function FavoriteButton({
  itemType,
  itemSlug,
  itemName,
  className,
}: {
  itemType: string;
  itemSlug: string;
  itemName: string;
  className?: string;
}) {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: favorite } = useQuery({
    queryKey: ["favorite", user?.id, itemType, itemSlug],
    enabled: Boolean(user),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("favorites")
        .select("id")
        .eq("item_type", itemType)
        .eq("item_slug", itemSlug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const toggle = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("not-signed-in");
      if (favorite) {
        const { error } = await supabase.from("favorites").delete().eq("id", favorite.id);
        if (error) throw error;
        return "removed" as const;
      }
      const { error } = await supabase
        .from("favorites")
        .insert({ user_id: user.id, item_type: itemType, item_slug: itemSlug, item_name: itemName });
      if (error) throw error;
      return "saved" as const;
    },
    onSuccess: (result) => {
      toast.success(result === "saved" ? `${itemName} saved` : `${itemName} removed`);
      void queryClient.invalidateQueries({ queryKey: ["favorite", user?.id, itemType, itemSlug] });
      void queryClient.invalidateQueries({ queryKey: ["favorites", user?.id] });
    },
    onError: (error: Error) => {
      toast.error(error.message === "not-signed-in" ? "Sign in to save places" : "Couldn't save that — try again");
    },
  });

  return (
    <Button
      variant={favorite ? "default" : "secondary"}
      size="sm"
      className={className}
      disabled={toggle.isPending}
      onClick={() => toggle.mutate()}
    >
      <Heart className={cn("mr-2 h-4 w-4", favorite && "fill-current")} />
      {favorite ? "Saved" : "Save"}
    </Button>
  );
}
