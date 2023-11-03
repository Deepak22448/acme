import serverClient from "@/packages/supabase/server-client";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function signUpUser(
  email: string,
  password: string,
  requestUrl: URL,
  cookies: () => ReadonlyRequestCookies
) {
  const supabase = serverClient(cookies);

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/api/auth/confirm`,
    },
  });

  if (error?.message) {
    throw new Error(error.message);
  }
  return user;
}
