"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCart } from "@/packages/zustand/hooks";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    if (!cartItems.length) router.push("/cart");
  }, [cartItems, router]);

  useEffect(() => {
    fetch("/api/checkout_sessions", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout className="h-screen" />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}
