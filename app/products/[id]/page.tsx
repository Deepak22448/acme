import type { Tables } from "@/packages/supabase/types/database.types";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ProductPricture } from "./components/ProductPricture";
import { ProductInfo } from "./components/ProductInfo";
import serverClient from "@/packages/supabase/server-client";

interface Params {
  params: {
    id: Tables<"Product">["id"];
  };
}
const ProductPage = async ({ params: { id } }: Params) => {
  const supabase = serverClient(cookies);
  const { data } = await supabase
    .from("Product")
    .select(`* , ProductSizeStock (size)`)
    .eq("id", id);

  if (!data) return notFound();

  const { name, imgUrl, price, ProductSizeStock: sizes } = data[0];
  return (
    <section className="h-min w-full sm:flex px-2 sm:px-6 lg:px-8 my-2 sm:py-10 sm:gap-x-5 md:gap-x-7 lg:gap-x-3 mb-8 sm:mb-12">
      <ProductPricture imgUrl={imgUrl} name={name} />
      <ProductInfo name={name} price={price} sizes={sizes} id={id} />
    </section>
  );
};

export default ProductPage;
