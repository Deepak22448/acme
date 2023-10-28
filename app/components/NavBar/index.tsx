"use client";

import { useState } from "react";
import { Navbar as NexUINavBar } from "@nextui-org/react";
import { BrandingLogo } from "./BrandingLogo";
import { Links } from "./Links";
import { MobileMenu } from "./MobileMenu";
import { useUser } from "@/packages/zustand/hooks";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { user, isLoading } = useUser();

  return (
    <NexUINavBar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      isBordered
    >
      <BrandingLogo isMenuOpen={isMenuOpen} />
      <Links />
      <MobileMenu clonseMenu={closeMenu} />
    </NexUINavBar>
  );
};
