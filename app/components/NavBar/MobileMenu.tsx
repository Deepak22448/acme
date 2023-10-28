import { NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { NAV_LINKS } from "./CONSTANTS";
import { SwitchThemeBtn } from "../../../packages/next-themes/SwitchThemeBtn";
import { FC } from "react";
import NextLink from "next/link";
import { useLogout } from "../hooks/useLogout";
import { Logout } from "./icons";
import { useUser } from "@/packages/zustand/hooks";

interface Props {
  clonseMenu: () => void;
}

export const MobileMenu: FC<Props> = ({ clonseMenu }) => {
  const { logOut } = useLogout();
  const { user } = useUser();

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
      <NavbarMenuItem key="switch-theme">
        <SwitchThemeBtn />
      </NavbarMenuItem>
      {user && (
        <NavbarMenuItem key="logout-btn">
          <Button
            key="logout"
            color="danger"
            onClick={(_event) => {
              clonseMenu();
              logOut();
            }}
            variant="shadow"
            endContent={<Logout color="#fff" />}
          >
            Log Out
          </Button>
        </NavbarMenuItem>
      )}
    </NavbarMenu>
  );
};
