"use client";

import { useRouter } from "next/navigation";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

interface SignOutButtonProps {
  className?: string;
}

export default function SignOutButton({ className }: SignOutButtonProps) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className={`inline-flex items-center justify-center rounded-xl border border-white/75 bg-white px-4 py-2.5 text-sm font-semibold text-[#083d68] shadow-[0_14px_30px_rgba(4,40,66,0.18)] transition hover:-translate-y-[1px] hover:bg-[#eef6fd] hover:text-[#083d68] ${className ?? ""}`}
      style={{ color: "#083d68" }}
    >
      Logout
    </button>
  );
}
