import routeClient from "@/packages/supabase/route-client";
import { Tables } from "@/packages/supabase/types/database.types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export const POST = async (req: NextRequest) => {
  try {
    const [user, { data: cartItems }] = await Promise.all([
      getUser(),
      getCartItems(),
    ]);

    if (!user || !cartItems?.length) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
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
      return_url: `${req.nextUrl.origin}/products`,
    });

    await emptyUserCart(user.id);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 403 }
    );
  }
};

const getCartItems = async () => {
  const supabase = routeClient(cookies);
  return supabase
    .from("CartItem")
    .select(`* , Product (*)`)
    .order("created_at", { ascending: true });
};

const getUser = async () => {
  const supabase = routeClient(cookies);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

const emptyUserCart = async (userID: Tables<"CartItem">["userId"]) => {
  const supabase = routeClient(cookies);
  await supabase.from("CartItem").delete().eq("userId", userID);
};
