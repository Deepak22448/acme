import { type EmailOtpType } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import serverClient from "@/packages/supabase/server-client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (token_hash && type) {
    const supabase = serverClient(cookies);

    await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    return NextResponse.redirect(new URL("/", request.url));
  }
}
