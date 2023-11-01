import { User } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { middlewareClient } from "./packages/supabase/middleware-client";

const getUser = async (request: NextRequest, response: NextResponse) => {
  const supabase = middlewareClient({ request, response });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.user;
};

const isRouteRestricted = async (req: NextRequest, user: User | undefined) => {
  const authRoutes = ["/cart"];
  const nonAuthRoutes = ["/login", "/signup"];

  const pathName = req.nextUrl.pathname;
  if (user) {
    return nonAuthRoutes.includes(pathName);
  } else {
    return authRoutes.includes(pathName);
  }
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });
  const user = await getUser(req, res);

  const isRestricted = await isRouteRestricted(req, user);

  if (isRestricted) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return res;
}
