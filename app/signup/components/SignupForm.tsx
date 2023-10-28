"use client";
import { Button, Input } from "@nextui-org/react";
import { useSignup } from "./hooks/useSignup";

export const SignupForm = () => {
  const { handleInputChange, handleSignup, signupInfo, isSigningIn } =
    useSignup();

  return (
    <form className="space-y-6" onSubmit={handleSignup}>
      <Input
        type="email"
        label="Email"
        name="email"
        isRequired
        onChange={handleInputChange}
        value={signupInfo.email}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        isRequired
        onChange={handleInputChange}
        value={signupInfo.password}
      />
      <Button
        color="secondary"
        variant="shadow"
        isLoading={isSigningIn}
        isDisabled={isSigningIn}
        className="sm:max-w-sm mx-auto w-full h-14 flex justify-center items-center"
        type="submit"
      >
        CREATE
      </Button>
    </form>
  );
};
