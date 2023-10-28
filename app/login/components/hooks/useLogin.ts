import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface LoginInfo {
  email: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();
  const [isLogginIn, setIsLogginIn] = useState(false);
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setIsLogginIn(true);
    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );
      const { error } = await supabase.auth.signInWithPassword(loginInfo);
      if (error) throw new Error(error.message);

      router.push("/");
      toast.success("Logged in.");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLogginIn(false);
    }
  };

  return { handleInputChange, loginInfo, handleLogin, isLogginIn };
};
