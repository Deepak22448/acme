import { PorductCard } from "@/app/products/components/PorductCard";
import { cookies } from "next/headers";
import serverClient from "@/packages/supabase/server-client";

export const NewArrivals = async () => {
  const supabase = serverClient(cookies);
  const { data } = await supabase
    .from("Product")
    .select(`* , ProductSizeStock (size)`);

  return (
    <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-16 mx-4 sm:mx-6 md:mx-8">
      {data?.map((product) => (
        <PorductCard key={product.id} data={product} />
      ))}
    </section>
  );
};
