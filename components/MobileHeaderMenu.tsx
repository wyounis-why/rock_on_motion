"use client";
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import SignOutButton from "@/components/SignOutButton";

interface MobileHeaderMenuProps {
  isAuthenticated: boolean;
  navLinks: Array<{
    href: string;
    label: string;
  }>;
}

export default function MobileHeaderMenu({ isAuthenticated, navLinks }: MobileHeaderMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/14"
      >
        <span className="sr-only">Open menu</span>
        <span className="flex w-5 flex-col gap-1.5">
          <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(18rem,calc(100vw-2rem))] rounded-[1.75rem] border border-white/20 bg-[linear-gradient(180deg,rgba(11,88,143,0.98)_0%,rgba(15,117,188,0.96)_100%)] p-4 shadow-[0_20px_50px_rgba(238,247,255,0.18)] backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/86 transition hover:bg-white/12 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-white/14 pt-4">
            {isAuthenticated ? (
              <SignOutButton className="w-full justify-center" />
            ) : (
              <Link
                href="/login"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/75 bg-white px-4 py-2.5 text-sm font-semibold text-[#083d68] shadow-[0_14px_30px_rgba(4,40,66,0.18)] transition hover:-translate-y-[1px] hover:bg-[#eef6fd] hover:text-[#083d68]"
                style={{ color: "#083d68" }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
