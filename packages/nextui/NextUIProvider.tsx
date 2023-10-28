"use client";
import { NextUIProvider as Provider } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

export const NextUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
