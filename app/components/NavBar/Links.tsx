import { useUser } from "@/packages/zustand/hooks";
import { Button, Link, NavbarContent, Skeleton } from "@nextui-org/react";
import { Cart } from "./icons";
import NextLink from "next/link";
import { AvatarDropdown } from "./AvatarDropdown";

export const Links = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <NavbarContent justify="end">
        <Skeleton className="h-8 w-12" />
        <Skeleton className="h-8 w-12" />
      </NavbarContent>
    );
  }

  if (user) {
    return (
      <NavbarContent justify="end">
        <Cart height={30} width={30} />
        <AvatarDropdown />
      </NavbarContent>
    );
  }

  return (
    <NavbarContent justify="end">
      <Link href="/login" color="secondary" size="sm" as={NextLink}>
        Login
      </Link>
      <Button
        as={NextLink}
        color="secondary"
        href="/signup"
        variant="flat"
        size="sm"
      >
        Sign Up
      </Button>
    </NavbarContent>
  );
};
