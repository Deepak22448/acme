import { DEFAULT_DELIVERY_CHARGES } from "@/CONSTANTS";
import { useCart } from "@/packages/zustand/hooks";
import { FormattedPrice } from "@/utils/FormattedPrice";
import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { useMemo } from "react";

export const BillDetails = () => {
  const { cartItems } = useCart();
  const totalItemsCount = cartItems.length;
  const totalPrice = useMemo(() => {
    return cartItems.reduce((prevTotal, item) => {
      const { price } = item.Product!;
      return prevTotal + price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <Card className="w-full lg:w-1/3 h-min" radius="none">
      <CardBody>
        <h3 className="font-bold text-xl tracking-wide border-b border-b-gray-400 pb-2">
          BILL DETAILS
        </h3>

        <div className="py-3">
          <div className="flex justify-between ">
            <h6>Price{`(${totalItemsCount} items)`}</h6>
            <FormattedPrice price={totalPrice} />
          </div>
          <div className="flex justify-between ">
            <h6>Delivery Charges</h6>
            <div className="flex space-x-2">
              <FormattedPrice
                price={DEFAULT_DELIVERY_CHARGES}
                className="line-through"
              />
              <p className="text-success-400">Free</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between border-y border-dotted py-5 my-3">
          <h4 className="text-lg sm:text-xl font-bold">Total Amount</h4>
          <FormattedPrice price={totalPrice} />
        </div>
        <Button color="success" variant="flat" as={Link} href="/payment">
          Pay Now
        </Button>
      </CardBody>
    </Card>
  );
};
