import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-black/8 pt-6 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. Studio de production audiovisuelle à{" "}
          {siteConfig.city}.
        </p>
        <p>Next.js 15, TypeScript, Tailwind CSS, App Router et SEO technique complet.</p>
      </div>
    </footer>
  );
}
