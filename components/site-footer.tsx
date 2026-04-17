import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#formation", label: "Formation" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6 bg-[color:var(--dark)] px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-3 text-white">
            <BrandMark />
            <span className="h-10 w-px bg-[linear-gradient(180deg,#F07921,#2D2DB5)]" />
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
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--gray-light)] transition-colors duration-300 hover:text-[color:var(--orange)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {["fb", "ig", "yt", "tk"].map((item) => (
              <span
                key={item}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] uppercase tracking-[0.18em] text-[color:var(--gray-light)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 text-center text-[11px] text-[color:var(--gray-mid)]">
          © 2026 Studio Alpha Production. Tous droits reserves. Vision. Image. Impact.
        </div>
      </div>
    </footer>
  );
}
