import { APP_Routs } from "@/CONSTANTS";
import { Tables } from "@/packages/supabase/types/database.types";
import { Button } from "@nextui-org/button";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FC } from "react";
import serverActionClient from "@/packages/supabase/server-action-client";
import Link from "next/link";
import serverClient from "@/packages/supabase/server-client";

interface Props {
  id: Tables<"Product">["id"];
  size: Pick<Tables<"ProductSizeStock">, "size">["size"];
}

export const ActionButtons: FC<Props> = async ({ id, size }) => {
  const { user, cartItem } = await streamUserAndCartItem(id);
  const isNotInCart = cartItem?.length === 0;

  const addToCart = async () => {
    "use server";
    const supabase = serverActionClient(cookies);
    await supabase
      .from("CartItem")
      .insert({ productId: id, userId: user?.id!, quantity: 1, size: size });

    return redirect(`${APP_Routs.PRODUCTS}/${id}`);
  };

  return (
    <div className="my-6">
      {!user ? (
        <LinkButton href="/login">ADD TO CART</LinkButton>
      ) : isNotInCart ? (
        <form action={addToCart}>
          <Button color="secondary" variant="ghost" radius="none" type="submit">
            ADD TO CART
          </Button>
        </form>
      ) : (
        <LinkButton href="/cart">GO TO CART</LinkButton>
      )}
    </div>
  );
};

const streamUserAndCartItem = async (id: Props["id"]) => {
  const [
    {
      data: { user },
    },
    { data: cartItem },
  ] = await Promise.all([getUser(), getCartItemById(id)]);

  return { user, cartItem };
};

const getUser = async () => {
  const supabase = serverClient(cookies);
  return supabase.auth.getUser();
};

const getCartItemById = (id: Props["id"]) => {
  const supabase = serverClient(cookies);
  return supabase.from("CartItem").select("*").eq("productId", id);
};

const LinkButton = ({ href, children }: { href: string; children: string }) => {
  return (
    <Button
      color="secondary"
      variant="ghost"
      radius="none"
      href={href}
      as={Link}
    >
      {children}
    </Button>
  );
};
