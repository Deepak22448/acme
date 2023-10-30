import { APP_Routs } from "@/CONSTANTS";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const EmptyCart = () => {
  return (
    <section className="h-screen w-screen flex flex-col space-y-3 justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl uppercase font-extralight">
        No items in Cart
      </h1>
      <Button color="secondary" as={Link} href={`${APP_Routs.PRODUCTS}`}>
        START SHOPPING
      </Button>
    </section>
  );
};
