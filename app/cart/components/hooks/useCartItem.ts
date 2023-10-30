import { useCallback, useMemo } from "react";
import { Database, Tables } from "@/packages/supabase/types/database.types";
import { createBrowserClient } from "@supabase/ssr";
import { useCart } from "@/packages/zustand/hooks";
import { toast } from "react-toastify";

export const useCartItem = (id: Tables<"CartItem">["id"]) => {
  const { updateCartItemQuanity, cartItems, removeCartItem } = useCart();
  const data = useMemo(
    () => cartItems.filter((item) => item.id === id)[0],
    [id, cartItems]
  );

  const updateQuantity = useCallback(
    async (quantity: Tables<"CartItem">["quantity"]) => {
      if (quantity <= 0) return;
      // update UI state.
      updateCartItemQuanity({ id, quantity: quantity });
      const supabase = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );
      try {
        const { error } = await supabase
          .from("CartItem")
          .update({ quantity })
          .eq("id", id);

        if (error) throw new Error(error.message);

        toast.success("Quantity updated.");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [id, updateCartItemQuanity]
  );

  const deleteCartItem = useCallback(async () => {
    const supabase = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    // update UI State.
    removeCartItem(id);
    try {
      const { error } = await supabase.from("CartItem").delete().eq("id", id);
      if (error) throw new Error(error.message);

      toast.success("Item removed.");
    } catch (error) {
      toast.error("Unable to remove.");
    }
  }, [id, removeCartItem]);

  return {
    updateQuantity,
    data,
    deleteCartItem,
  };
};
