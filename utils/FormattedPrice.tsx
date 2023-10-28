"use client";
import { Tables } from "@/packages/supabase/types/database.types";
import { FC } from "react";

interface Props {
  className?: HTMLInputElement["className"];
  price: Tables<"Product">["price"];
}

export const FormattedPrice: FC<Props> = ({ className, price }) => {
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });
  const formattedAmount = currencyFormatter.format(+price);

  return <div className={className}>{formattedAmount}</div>;
};
