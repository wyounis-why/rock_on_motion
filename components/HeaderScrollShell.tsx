"use client";

import { useEffect, useState, type ReactNode } from "react";

interface HeaderScrollShellProps {
  children: ReactNode;
}

export default function HeaderScrollShell({ children }: HeaderScrollShellProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setHasScrolled(window.scrollY > 8);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${hasScrolled ? "border-white/18 bg-[linear-gradient(180deg,rgba(11,88,143,0.96)_0%,rgba(15,117,188,0.88)_100%)] backdrop-blur-xl shadow-[0_14px_34px_rgba(238,247,255,0.26)]" : "border-transparent bg-transparent shadow-none"}`}
    >
      {children}
    </header>
  );
}

