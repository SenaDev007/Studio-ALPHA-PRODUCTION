"use client";

import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#positionnement", label: "Positionnement" },
  { href: "#processus", label: "Processus" },
  { href: "#faq", label: "FAQ" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 px-4 pt-5 md:px-6">
      <nav className="surface-shell premium-transition mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full px-3 py-3 md:px-4">
        <Link
          href="#top"
          className="premium-transition inline-flex items-center gap-3 rounded-full px-2 py-1 hover:-translate-y-px"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,#13181c,#2a3036)] font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-[-0.06em] text-[#f8efe3]">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-outfit)] text-[0.95rem] font-semibold">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-xs text-[color:var(--muted)]">
              {siteConfig.city}, {siteConfig.country}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="premium-transition inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-black/[0.06] md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((state) => !state)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-[6px] rounded-full bg-[color:var(--foreground)] premium-transition ${
                open ? "translate-y-0 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 translate-y-[6px] rounded-full bg-[color:var(--foreground)] premium-transition ${
                open ? "translate-y-0 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="premium-transition rounded-full px-4 py-3 text-sm text-[color:var(--muted)] hover:-translate-y-px hover:bg-black/[0.05] hover:text-[color:var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="premium-transition ml-2 inline-flex items-center gap-3 rounded-full bg-[color:var(--foreground)] px-2 py-2 text-sm font-semibold text-[#fbf3e8] shadow-[0_20px_42px_-26px_rgba(17,22,26,0.45)] hover:-translate-y-px active:scale-[0.98]"
          >
            <span className="pl-3">Demander un devis</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/12">
              +
            </span>
          </Link>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`premium-transition surface-shell mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-[2rem] px-4 ${
          open ? "max-h-[24rem] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="premium-transition rounded-[1.25rem] px-4 py-3 text-[color:var(--muted)] hover:bg-black/[0.05] hover:text-[color:var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="premium-transition mt-2 inline-flex items-center justify-between rounded-[1.25rem] bg-[color:var(--foreground)] px-4 py-3 font-semibold text-[#fbf3e8] active:scale-[0.98]"
          >
            <span>Demander un devis</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/12">
              +
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
