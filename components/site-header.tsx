"use client";

import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
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
      <nav className="floating-nav mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 rounded-full px-4 py-3 md:px-5">
        <Link href="#hero" className="inline-flex items-center">
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)] transition-colors duration-300 hover:text-[color:var(--orange)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/?project=Formation%20drone&intent=inscription#contact"
            className="hero-glass-button inline-flex rounded-full px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-white"
          >
            Inscription
          </Link>
          <Link
            href="/?project=Forfait%20sur%20mesure&intent=devis#contact"
            className="hero-primary-button inline-flex rounded-full px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white"
          >
            Devis gratuit
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((state) => !state)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          className="hero-glass-button inline-flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
        >
          {open ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/92 px-6 backdrop-blur-xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 hero-glass-button inline-flex h-11 w-11 items-center justify-center rounded-full text-[color:var(--orange)]"
          aria-label="Fermer le menu"
        >
          <X size={22} weight="light" />
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
          href="/?project=Formation%20drone&intent=inscription#contact"
          onClick={() => setOpen(false)}
          className="hero-glass-button mt-4 inline-flex rounded-full px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-white"
        >
          Inscription
        </Link>
        <Link
          href="/?project=Forfait%20sur%20mesure&intent=devis#contact"
          onClick={() => setOpen(false)}
          className="hero-primary-button inline-flex rounded-full px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-white"
        >
          Devis gratuit
        </Link>
      </div>
    </header>
  );
}
