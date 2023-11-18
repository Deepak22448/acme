import {
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { FC } from "react";
import { Logo } from "./icons";
import Link from "next/link";

interface Props {
  isMenuOpen: boolean;
}
export const BrandingLogo: FC<Props> = ({ isMenuOpen }) => {
  return (
    <NavbarContent justify="start" key="brand">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <Link href="/">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </Link>
    </NavbarContent>
  );
};
