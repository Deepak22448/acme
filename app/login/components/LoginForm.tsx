"use client";
import { Button, Input } from "@nextui-org/react";
import { useLogin } from "./hooks/useLogin";

export const LoginForm = () => {
  const { handleInputChange, handleLogin, isLogginIn, loginInfo } = useLogin();

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <Input
        type="email"
        label="Email"
        name="email"
        isRequired
        value={loginInfo.email}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        isRequired
        value={loginInfo.password}
        onChange={handleInputChange}
      />
      <Button
        color="secondary"
        variant="shadow"
        className="sm:max-w-sm mx-auto w-full h-14 flex justify-center items-center"
        type="submit"
        isLoading={isLogginIn}
        isDisabled={isLogginIn}
      >
        LOGIN
      </Button>
    </form>
  );
};
