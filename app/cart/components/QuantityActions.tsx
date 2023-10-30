import { Tables } from "@/packages/supabase/types/database.types";
import { DesktopQuantityActions, MobileQuantityActions } from "../components";

export const QuantityActions = ({ id }: Pick<Tables<"CartItem">, "id">) => {
  return (
    <>
      <MobileQuantityActions id={id} />
      <DesktopQuantityActions id={id} />
    </>
  );
};
