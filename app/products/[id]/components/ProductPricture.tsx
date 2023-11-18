import { Tables } from "@/packages/supabase/types/database.types";
import { FC } from "react";
import Image from "next/image";

type Props = Pick<Tables<"Product">, "imgUrl" | "name">;

export const ProductPricture: FC<Props> = ({ imgUrl, name }) => {
  return (
    <div className="h-80 sm:h-[75vh] sm:w-1/2 relative sm:sticky sm:top-24 mb-8 sm:mb-2 ">
      <Image
        src={imgUrl}
        alt={name}
        fill
        className="absolute inset-0 object-contain object-top"
      />
    </div>
  );
};
