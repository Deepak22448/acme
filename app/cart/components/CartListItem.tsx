import { FC } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { FormattedPrice } from "@/utils/FormattedPrice";
import { APP_Routs } from "@/CONSTANTS";
import { useCartItem } from "./hooks/useCartItem";
import { Tables } from "@/packages/supabase/types/database.types";
import { QuantityActions } from "../components";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: Tables<"CartItem">["id"];
}

export const CartListItem: FC<Props> = ({ id }) => {
  const { data, deleteCartItem } = useCartItem(id);

  const { size, quantity, Product, id: cartItemId } = data;
  const { imgUrl, name, price, id: productId } = Product!;

  return (
    <Card radius="none">
      <CardBody>
        <div className="flex gap-x-5">
          <div className="space-y-2 w-[40%] sm:w-auto">
            <Link
              className="relative w-full aspect-square sm:h-48 sm:w-48 block"
              href={`${APP_Routs.PRODUCTS}/${productId}`}
            >
              <Image
                src={imgUrl}
                alt={name}
                fill
                className="absolute object-contain inset-0"
              />
            </Link>
            <QuantityActions id={cartItemId} />
          </div>

          <div className="flex flex-col justify-between items-start">
            <div>
              <h2 className="uppercase tracking-wider font-extrabold text-xs sm:text-lg md:text-2xl line-clamp-1">
                {name}
              </h2>
              <div className="mt-3">
                <FormattedPrice
                  price={price * quantity}
                  className="font-extralight inline-block mr-3 text-sm sm:text-base md:text-xl"
                />
                <span className="text-xs">{"(Incl. All taxes)"}</span>
              </div>
              <h3 className="font-extralight text-gray-400">Size : {size}</h3>
            </div>
            <Button
              color="danger"
              variant="flat"
              size="sm"
              onClick={deleteCartItem}
            >
              Remove
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
