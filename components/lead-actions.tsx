import Link from "next/link";
import { ArrowRight, GraduationCap, Receipt } from "@phosphor-icons/react/dist/ssr";

type LeadActionsProps = {
  mode: "quote" | "training";
};

export function LeadActions({ mode }: LeadActionsProps) {
  if (mode === "training") {
    return (
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/?project=Formation%20drone&intent=inscription#contact"
          className="hero-glass-button inline-flex items-center justify-between gap-3 rounded-full px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-white"
        >
          <span className="inline-flex items-center gap-2">
            <GraduationCap size={16} weight="light" />
            Demarrer l'inscription
          </span>
          <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
      <Link
        href="/?project=Forfait%20sur%20mesure&intent=devis#contact"
        className="hero-glass-button inline-flex items-center justify-between gap-3 rounded-full px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-white"
      >
        <span className="inline-flex items-center gap-2">
          <Receipt size={16} weight="light" />
          Demander un devis
        </span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
