import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell min-h-full flex flex-col">
      <SiteHeader />
      <main className="relative z-10 flex-1">{children}</main>
      <footer className="relative z-10 mt-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-[var(--muted)] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>Website built by Why Enterprises LLC</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <a href="/privacy-policy" className="transition hover:text-[var(--foreground)]">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
