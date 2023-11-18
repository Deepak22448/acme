"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect } from "react";
import { useUser } from "./hooks";

export const InitZustandProvider = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { setUser } = useUser();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setUser(null, false);
      } else {
        setUser(session?.user ?? null, false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, setUser]);

  return <></>;
};
