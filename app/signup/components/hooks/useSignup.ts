import { API_Routs, BaseURL } from "@/CONSTANTS";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export interface SignupInfo {
  email: string;
  password: string;
}

export const useSignup = () => {
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    email: "",
    password: "",
  });

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setSignupInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSignup = async (event: FormEvent) => {
    event.preventDefault();

    setIsSigningIn(true);
    try {
      await fetch(API_Routs.SIGNUP, {
        method: "POST",
        body: JSON.stringify(signupInfo),
      });
      router.push("/");
      toast.success("Verification link sent. Please check your email.");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  return { handleInputChange, signupInfo, handleSignup, isSigningIn };
};
