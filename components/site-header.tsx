"use client";

import Link from "next/link";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#formation", label: "Formation" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#blog", label: "Blog" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-5 md:px-6">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 border-b border-transparent bg-[linear-gradient(180deg,rgba(8,8,8,0.95),rgba(8,8,8,0.35),transparent)] px-0 py-4 md:px-0">
        <Link href="#hero" className="inline-flex items-center gap-3 text-white">
          <BrandMark />
          <span className="h-9 w-px bg-[linear-gradient(180deg,#F07921,#2D2DB5)]" />
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-body)] text-[11px] font-light uppercase tracking-[0.16em] text-[color:var(--orange)]">
              studio
            </span>
            <span className="font-[family-name:var(--font-body)] text-[18px] font-bold tracking-[0.2em] text-[color:var(--anthracite-light)]">
              ALPHA
            </span>
            <span className="mt-1 font-[family-name:var(--font-body)] text-[8px] font-light uppercase tracking-[0.38em] text-[color:var(--gray-light)]">
              Production
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((state) => !state)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-1/2 h-px w-6 bg-white transition-transform duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-6 bg-white transition-transform duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)] transition-colors duration-300 hover:text-[color:var(--orange)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden bg-[color:var(--orange)] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[color:var(--white)] transition-colors duration-300 hover:bg-[color:var(--orange-light)] md:inline-flex"
        >
          Devis gratuit
        </Link>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 px-6 backdrop-blur-xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 text-3xl text-[color:var(--orange)]"
          aria-label="Fermer le menu"
        >
          ×
        </button>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:text-[color:var(--orange)]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-[color:var(--orange)] px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-[color:var(--white)]"
        >
          Devis gratuit
        </Link>
      </div>
    </header>
  );
}
