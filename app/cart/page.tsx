"use client";

import { Database } from "@/packages/supabase/types/database.types";
import { useCart } from "@/packages/zustand/hooks";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Loading, CartItemList, BillDetails, EmptyCart } from "./components";

const Cart = () => {
  const { setCartItems, cartItems, isLoading } = useCart();
  const isCartEmpty = cartItems.length === 0;

  useEffect(() => {
    fetchCart().then((cart) => {
      if (cart?.data) setCartItems(cart.data);
    });
  }, [setCartItems]);

  if (isLoading) return <Loading />;
  if (isCartEmpty) return <EmptyCart />;

  return (
    <section className="mx-3 space-y-6 md:space-y-0 md:flex md:space-x-3 sm:mx-6 lg:max-w-7xl lg:px-2 lg:mx-auto my-9">
      <CartItemList />
      <BillDetails />
    </section>
  );
};

export default Cart;

const fetchCart = async () => {
  try {
    const supabase = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    return supabase
      .from("CartItem")
      .select(`* , Product (*)`)
      .order("created_at", { ascending: true });
  } catch (error) {
    toast.error("Error while fetching cart.");
  }
};
