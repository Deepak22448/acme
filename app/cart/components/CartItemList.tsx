import { useCart } from "@/packages/zustand/hooks";
import { CartListItem } from "./CartListItem";

export const CartItemList = () => {
  const { cartItems } = useCart();

  return (
    <div className="w-full lg:w-2/3 space-y-6">
      {cartItems.map(({ id }) => (
        <CartListItem key={id} id={id} />
      ))}
    </div>
  );
};
