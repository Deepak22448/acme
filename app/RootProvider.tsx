import { NextThemesProvider } from "@/packages/next-themes";
import { NextUIProvider } from "@/packages/nextui";
import { ToastifyContainer } from "@/packages/react-tostify";
import { InitZustandProvider } from "@/packages/zustand";
import { FC, PropsWithChildren } from "react";

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider>
      <ToastifyContainer />
      <InitZustandProvider />
      <NextThemesProvider>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};
