import serverClient from "@/packages/supabase/server-client";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function signUpUser(
  email: string,
  password: string,
  cookies: () => ReadonlyRequestCookies
) {
  const supabase = serverClient(cookies);

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error?.message) {
    throw new Error(error.message);
  }
  return user;
}
