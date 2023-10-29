import { Tables } from "@/packages/supabase/types/database.types";
import React, { FC } from "react";

interface Props {
  sizes: Pick<Tables<"ProductSizeStock">, "size">[];
}
export const Sizes: FC<Props> = ({ sizes }) => {
  return (
    <div className="mt-6 text-lg font-extralight">
      SIZES
      <div className="w-full flex gap-x-1 justify-center sm:justify-start">
        {sizes?.map(({ size }) => (
          <span
            key={size}
            className="text-small text-center w-11 p-2 border hover:bg-purple-500 transition hover:text-white cursor-pointer"
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};
