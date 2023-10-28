import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { NAV_LINKS } from "./CONSTANTS";
import { SwitchThemeBtn } from "../../../packages/next-themes/SwitchThemeBtn";
import { FC } from "react";
import NextLink from "next/link";

interface Props {
  clonseMenu: () => void;
}

export const MobileMenu: FC<Props> = ({ clonseMenu }) => {
  return (
    <NavbarMenu>
      {NAV_LINKS.map(({ text }, index) => (
        <NavbarMenuItem key={`${index}`}>
          <Link
            as={NextLink}
            className="w-full capitalize"
            href={text}
            onClick={clonseMenu}
            color="secondary"
          >
            {text}
          </Link>
        </NavbarMenuItem>
      ))}
      <NavbarMenuItem>
        <SwitchThemeBtn />
      </NavbarMenuItem>
    </NavbarMenu>
  );
};
