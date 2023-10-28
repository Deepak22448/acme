import { SignupInfo } from "@/app/signup/components/hooks/useSignup";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { signUpUser } from "./helpers";
import { handleErrors } from "../../utils/handleErrors";
import { SignupErrors } from "./CONSTANTS";

export async function POST(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const cookieStore = cookies();

    const { email, password } = (await request.json()) as SignupInfo;
    await signUpUser(email, password, requestUrl, cookieStore);

    return NextResponse.json({ message: "Signup Successfull." });
  } catch (error) {
    return handleErrors(error, SignupErrors);
  }
}

export const dynamic = "force-dynamic";
