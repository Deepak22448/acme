import { Tables } from "@/packages/supabase/types/database.types";
import { Card, CardFooter } from "@nextui-org/card";
import { FC } from "react";
import { FormattedPrice } from "@/utils/FormattedPrice";
import Link from "next/link";
import Image from "next/image";
import { APP_Routs } from "@/CONSTANTS";

interface Props {
  data: Tables<"Product"> & {
    ProductSizeStock: { size: Tables<"ProductSizeStock">["size"] }[];
  };
}
export const PorductCard: FC<Props> = ({ data }) => {
  const { imgUrl, price, name, ProductSizeStock: sizes, id } = data;

  return (
    <Link href={`${APP_Routs.PRODUCTS}/${id}`}>
      <Card radius="none">
        <div className="w-full aspect-square relative my-4">
          <Image
            src={imgUrl}
            fill
            alt="product"
            className="absolute inset-0 object-contain"
          />
        </div>
        <CardFooter className="flex-col items-start py-2 w-full shadow-small">
          <p className="text-tiny font-semibold tracking-wider lg:text-sm line-clamp-1 mb-1">
            {name}
          </p>
          <div className="flex items-center justify-between w-full">
            <FormattedPrice
              price={price}
              className="text-tiny font-light tracking-wider lg:text-sm line-clamp-1"
            />
          </div>
          <div className="w-full flex mt-2 gap-x-1">
            {sizes?.map(({ size }) => (
              <span
                key={size}
                className="text-small text-center p-2 border grow hover:bg-purple-500 transition hover:text-white"
              >
                {size}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
