import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  AvatarIcon,
  DropdownSection,
} from "@nextui-org/react";
import { NAV_LINKS } from "./CONSTANTS";
import { useLogout } from "../hooks/useLogout";
import { Logout } from "./icons";
import Link from "next/link";

export const AvatarDropdown = () => {
  const { logOut } = useLogout();

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" size="sm">
        <DropdownTrigger>
          <Avatar
            icon={<AvatarIcon />}
            className="cursor-pointer"
            classNames={{
              base: "bg-gradient-to-br from-[#c49beb] to-[#8934d9] hidden md:block",
              icon: "text-black/80",
            }}
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownSection>
            {NAV_LINKS.map(({ text }) => {
              return (
                <DropdownItem
                  key={text}
                  color="secondary"
                  className="capitalize"
                  href={`/${text}`}
                  as={Link}
                >
                  {text}
                </DropdownItem>
              );
            })}
          </DropdownSection>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={logOut}
            variant="shadow"
            endContent={<Logout color="#fff" />}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
