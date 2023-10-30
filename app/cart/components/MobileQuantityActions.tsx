import { Tables } from "@/packages/supabase/types/database.types";
import { Input, useDisclosure } from "@nextui-org/react";
import { ModalInputQuantity } from "../components";
import { useCartItem } from "./hooks/useCartItem";

export const MobileQuantityActions = ({
  id,
}: Pick<Tables<"CartItem">, "id">) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    data: { quantity },
  } = useCartItem(id);

  return (
    <div className="sm:hidden">
      <Input
        type="number"
        radius="none"
        readOnly
        value={String(quantity)}
        size="sm"
        startContent={
          <p className="mr-1 text-sm tracking-wide" onClick={onOpen}>
            Qty:
          </p>
        }
        endContent={<p onClick={onOpen}>+</p>}
      />
      <ModalInputQuantity isOpen={isOpen} onOpenChange={onOpenChange} id={id} />
    </div>
  );
};
