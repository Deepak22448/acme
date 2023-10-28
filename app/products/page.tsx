import serverClient from "@/packages/supabase/server-client";
import { cookies } from "next/headers";
import { PorductCard } from "./components/PorductCard";

const ProductsPage = async () => {
  const supabase = serverClient(cookies);
  const { data } = await supabase
    .from("Product")
    .select(`* , ProductSizeStock (size)`);

  return (
    <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-10 mx-4 sm:mx-6 md:mx-8">
      {data?.map((product) => (
        <PorductCard key={product.id} data={product} />
      ))}
    </section>
  );
};

export default ProductsPage;
