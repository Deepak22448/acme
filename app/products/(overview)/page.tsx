import serverClient from "@/packages/supabase/server-client";
import { cookies } from "next/headers";
import { PorductCard } from "../components/PorductCard";
import { Tables } from "@/packages/supabase/types/database.types";
import NoItemsFound from "../components/NoItemsFound";
import { sizes } from "@/CONSTANTS";

interface SearchParams {
  size?: Tables<"ProductSizeStock">["size"];
  min?: Tables<"Product">["price"];
  max?: Tables<"Product">["price"];
}
interface Props {
  searchParams: SearchParams;
}
const ProductsPage = async ({ searchParams }: Props) => {
  const { data } = await fetchProducts(searchParams);

  if (!data?.length) {
    return <NoItemsFound />;
  }
  return (
    <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-10 mx-4 sm:mx-6 md:mx-8">
      {data?.map((product) => (
        <PorductCard key={product.id} data={product} />
      ))}
    </section>
  );
};

export default ProductsPage;

const fetchProducts = async (searchParams: Props["searchParams"]) => {
  const isFilterApplied = Object.keys(searchParams).length > 0;
  if (isFilterApplied) return fetchByQueryFilters(searchParams);

  const supabase = serverClient(cookies);
  return await supabase.from("Product").select(`* , ProductSizeStock(size)`);
};

const fetchByQueryFilters = async ({ size, min, max }: SearchParams) => {
  const supabase = serverClient(cookies);
  return await supabase
    .from("Product")
    .select(`* , ProductSizeStock!inner(size)`)
    .gte("price", min ?? 0)
    .lte("price", max ?? 500000)
    .filter(
      "ProductSizeStock.size",
      "in",
      `(${size ? size : sizes.join(",")})`
    );
};
