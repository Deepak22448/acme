"use client";
import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

export const NextThemesProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};
