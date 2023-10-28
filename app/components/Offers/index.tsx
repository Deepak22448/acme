import { Button } from "@nextui-org/button";
import Link from "next/link";

export const Offers = () => {
  return (
    <section>
      <div className="text-center py-7 md:py-10 border my-3">
        <h2 className="font-extrabold text-3xl md:text-5xl mb-2">
          BUY 2 GET 2 FREE
        </h2>
        <h3>ON SELECTED COLLECTION</h3>
        <div
          className="my-5
        "
        >
          <h2 className="font-bold text-xl md:text-2xl">
            Use Code{" "}
            <span className="p-2 border-3 border-purple-200 px-2">GETLIT</span>
          </h2>
        </div>
        <Link href="/collections">
          <Button color="secondary" variant="faded">
            SHOP THE COLLECTION
          </Button>
        </Link>
      </div>

      <div className="my-9 md:my-16 px-4 sm:px-6 md:px-8">
        <div className="mb-7 md:mb-14 space-y-1">
          <h3 className="font-thin text-3xl md:text-5xl text-center">
            DISCOVER YOUR SCENT
          </h3>
          <h5 className="font-thin text-2xl md:text-3xl text-center">
            BUY 1 GET 1 FREE
          </h5>
          <h5 className="font-thin text-sm md:text-lg text-center ">
            USE CODE: <span className="font-semibold">LIKEABOSS</span>
          </h5>
        </div>
      </div>
    </section>
  );
};
