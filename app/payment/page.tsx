import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { EmbeddedPayment } from "./components/EmbeddedPayment";
import serverClient from "@/packages/supabase/server-client";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function Payment() {
  const [user, { data: cartItems }] = await Promise.all([
    getUser(),
    getCartItems(),
  ]);

  if (!user || !cartItems?.length) {
    return redirect("/");
  }

  const paymentIntent = await stripe.checkout.sessions.create({
    customer_email: user.email,
    line_items: cartItems.map(({ Product, quantity }) => ({
      price_data: {
        currency: "INR",
        product_data: {
          name: Product?.name!,
          images: [Product?.imgUrl!],
        },
        unit_amount: Product?.price! * 100,
      },
      quantity: quantity,
    })),

    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    mode: "payment",
    ui_mode: "embedded",
    return_url: "https://acme-topaz.vercel.app/products",
  });
  return (
    <div id="checkout">
      <EmbeddedPayment clientSecret={paymentIntent.client_secret} />
    </div>
  );
}

const getCartItems = async () => {
  const supabase = serverClient(cookies);
  return supabase
    .from("CartItem")
    .select(`* , Product (*)`)
    .order("created_at", { ascending: true });
};

const getUser = async () => {
  const supabase = serverClient(cookies);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};
