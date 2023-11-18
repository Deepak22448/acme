import { Tables } from "@/packages/supabase/types/database.types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "@nextui-org/react";
import { ChangeEvent, FC, useState } from "react";
import { useCartItem } from "./hooks/useCartItem";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  id: Tables<"CartItem">["id"];
}

export const ModalInputQuantity: FC<Props> = ({ isOpen, onOpenChange, id }) => {
  const [newQuantity, setNewQuantity] = useState("");
  const { updateQuantity } = useCartItem(id);
  const handleQuantityInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setNewQuantity(value);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Enter Quantity
            </ModalHeader>
            <ModalBody>
              <Input
                type="number"
                placeholder="Quantity"
                value={newQuantity.toString()}
                onChange={handleQuantityInputChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="secondary"
                onPress={() => {
                  updateQuantity(Number(newQuantity));
                  onClose();
                }}
              >
                Apply
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
