import { Tables } from "@/packages/supabase/types/database.types";
import { FormattedPrice } from "@/utils/FormattedPrice";
import { FC } from "react";
import { Sizes } from "./Sizes";
import { SizesChartTable } from "./SizesChartTable";
import { ActionButtons } from "./ActionButtons";

type Props = Pick<Tables<"Product">, "name" | "price"> & {
  sizes: Pick<Tables<"ProductSizeStock">, "size">[];
  id: Tables<"Product">["id"];
};
export const ProductInfo: FC<Props> = ({ name, price, sizes, id }) => {
  return (
    <div className="text-center sm:text-start sm:w-1/2">
      <h2 className="uppercase tracking-wider font-extrabold text-xl sm:text-lg md:text-2xl line-clamp-1">
        {name}
      </h2>
      <div className="mt-3">
        <FormattedPrice
          price={price}
          className="font-extralight inline-block mr-3 text-xl sm:text-base md:text-xl"
        />
        <span>{"(Incl. All taxes)"}</span>
      </div>
      <Sizes sizes={sizes} />
      <ActionButtons id={id} size={sizes[0].size} />

      <SizesChartTable />
    </div>
  );
};
