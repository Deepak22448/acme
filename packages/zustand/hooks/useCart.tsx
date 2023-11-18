import { Tables } from "@/packages/supabase/types/database.types";
import { create } from "zustand";

export type CartItem = Tables<"CartItem"> & {
  Product: Tables<"Product"> | null;
};

interface CartState {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[], isLoading?: boolean) => void;
  isLoading: boolean;
  updateCartItemQuanity: (itemInfo: Pick<CartItem, "id" | "quantity">) => void;
  removeCartItem: (id: CartItem["id"]) => void;
}

export const useCart = create<CartState>((set) => ({
  cartItems: [],
  setCartItems: (cartItems, isLoading = false) => set({ cartItems, isLoading }),
  isLoading: true,
  updateCartItemQuanity: ({ id, quantity }) =>
    set((state) => {
      const cartItems = state.cartItems.map((item) => {
        if (item.id === id) return { ...item, quantity };
        return item;
      });

      return {
        ...state,
        cartItems,
      };
    }),
  removeCartItem: (id) =>
    set((state) => {
      const cartItems = state.cartItems.filter((item) => item.id !== id);
      return {
        state,
        cartItems,
      };
    }),
}));
