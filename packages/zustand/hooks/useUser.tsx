import { type User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
  user: User | null;
  isLoading: boolean;
  setUser: (details: User | null, loading?: boolean) => void;
}
export const useUser = create<UserState>((set) => ({
  user: null,
  isLoading: true,
  setUser: (details, loading = false) =>
    set({ user: details, isLoading: loading }),
}));
