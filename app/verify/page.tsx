import { type EmailOtpType } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { APP_Routs } from "@/CONSTANTS";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import serverClient from "@/packages/supabase/server-client";
import { redirect } from "next/navigation";

const EmailVerifyPage = async ({ searchParams }: { searchParams: any }) => {
  const params = new URLSearchParams(searchParams);
  const token_hash = params.get("token_hash")!;
  const type = params.get("type") as EmailOtpType | null;

  if (!token_hash || !type) return redirect("/");

  const supabase = serverClient(cookies);
  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  });

  if (error) throw new Error(error.message);

  return (
    <section className="h-[calc(100vh-5rem)] flex justify-center items-center">
      <div className="space-x-2 flex justify-center items-center">
        <p className="text-success-400">Email Verified</p>
        <Button
          href={APP_Routs.LOGIN}
          variant="flat"
          color="secondary"
          className="mx-auto"
          as={Link}
        >
          LOGIN
        </Button>
      </div>
    </section>
  );
};

export default EmailVerifyPage;

export const dynamic = "force-dynamic";
