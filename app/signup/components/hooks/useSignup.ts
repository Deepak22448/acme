import { API_Routs } from "@/CONSTANTS";
import { createBrowserClient } from "@supabase/ssr";
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
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      const { error, data } = await supabase.auth.signUp({
        email: signupInfo.email,
        password: signupInfo.password,
      });
      if (error) throw new Error(error.message);
      if (data?.user?.identities?.length === 0)
        throw new Error("This user already exists");

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
