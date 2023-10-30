import { Tables } from "@/packages/supabase/types/database.types";
import { Button } from "@nextui-org/react";
import { useCartItem } from "./hooks/useCartItem";

export const DesktopQuantityActions = ({
  id,
}: Pick<Tables<"CartItem">, "id">) => {
  const {
    updateQuantity,
    data: { quantity },
  } = useCartItem(id);

  const handleIncrement = () => updateQuantity(quantity + 1);
  const handleDecrement = () => updateQuantity(quantity - 1);

  return (
    <div className="hidden sm:flex sm:justify-evenly">
      <Button radius="none" size="sm" onClick={handleIncrement}>
        +
      </Button>
      {quantity}
      <Button radius="none" size="sm" onClick={handleDecrement}>
        -
      </Button>
    </div>
  );
};
