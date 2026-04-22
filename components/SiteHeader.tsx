import Image from "next/image";
import Link from "next/link";
import { Lexend_Exa } from "next/font/google";

import FacebookIcon from "./FacebookIcon";
import HeaderScrollShell from "./HeaderScrollShell";
import MobileHeaderMenu from "./MobileHeaderMenu";
import logoImage from "../app/assets/logo.png";
import SignOutButton from "./SignOutButton";
import { getCurrentSession } from "../lib/auth";

const lexendExa = Lexend_Exa({
  subsets: ["latin"],
  display: "swap",
});

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/press-release", label: "Press Release" },
];

const facebookHref = "https://www.facebook.com/rockonmotionpictures";

export default async function SiteHeader() {
  const session = await getCurrentSession();

  return (
    <HeaderScrollShell>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 xl:max-w-[90rem]">
        <Link href="/" className="relative flex shrink-0 items-center gap-3 overflow-visible sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="relative flex justify-center">
              <Image
                src={logoImage}
                alt="Rock On Motion Pictures"
                className="relative z-10 h-16 w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.38)] sm:h-20 lg:h-24"
                priority
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[72%] h-16 w-24 -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.2)_48%,transparent_100%)] [clip-path:polygon(47%_0,53%_0,100%_100%,0_100%)] blur-md"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[84%] h-7 w-36 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.14)_48%,transparent_76%)] blur-md"
              />
            </div>
            <span
              className={`${lexendExa.className} relative z-10 mt-3 text-center text-[0.82rem] font-normal tracking-[0.08em] text-[#eef7ff] drop-shadow-[0_0_22px_rgba(180,199,212,0.38)] sm:text-[0.98rem]`}
            >
              Let There Be Light
            </span>
          </div>
          <div className="hidden items-center lg:flex">
            <div className={`${lexendExa.className} text-base font-normal tracking-[0.05em] text-white sm:text-xl lg:text-2xl`}>
              ROCK ON MOTION PICTURES
            </div>
          </div>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/14 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={facebookHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="rounded-full border border-transparent p-2.5 text-white/78 transition hover:border-white/20 hover:bg-white/12 hover:text-white"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          {session ? (
            <>
              {/* <span className="hidden rounded-full border border-white/20 bg-white/12 px-3 py-2 text-sm text-white/84 sm:block">
                {session.profile?.email ?? session.user.email}
              </span> */}
              <SignOutButton />
            </>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl border border-white/75 bg-white px-4 py-2.5 text-sm font-semibold text-[#083d68] shadow-[0_14px_30px_rgba(4,40,66,0.18)] transition hover:-translate-y-[1px] hover:bg-[#eef6fd] hover:text-[#083d68]"
              style={{ color: "#083d68" }}
            >
              Login
            </Link>
          )}
        </div>
        <MobileHeaderMenu isAuthenticated={Boolean(session)} navLinks={navLinks} />
      </div>
    </HeaderScrollShell>
  );
}
