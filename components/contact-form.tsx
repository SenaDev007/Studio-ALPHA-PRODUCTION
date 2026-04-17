"use client";

import { useSearchParams } from "next/navigation";
import { ArrowSquareOut, CheckCircle, Copy, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { budgetOptions, projectOptions } from "@/lib/site";

type LeadResult = {
  mailtoUrl: string;
  whatsappUrl: string;
};

const baseStatus = {
  idle: "Envoyer ma demande",
  loading: "Traitement en cours...",
  success: "Workflow pret",
  error: "Reessayer l'envoi"
} as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<keyof typeof baseStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<LeadResult | null>(null);
  const [copied, setCopied] = useState(false);

  const presetIntent = searchParams.get("intent") ?? "contact";
  const presetProject = searchParams.get("project") ?? "";
  const presetBudget = searchParams.get("budget") ?? "";

  const defaultDetails = useMemo(() => {
    if (presetIntent === "inscription") {
      return "Je souhaite recevoir les modalites d'inscription a la formation drone.";
    }

    if (presetIntent === "devis") {
      return "Je souhaite recevoir un devis detaille pour ce besoin.";
    }

    return "";
  }, [presetIntent]);

  useEffect(() => {
    setResult(null);
    setError(null);
    setStatus("idle");
  }, [presetIntent, presetProject, presetBudget]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);
    setCopied(false);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      projectType: String(form.get("projectType") || ""),
      budget: String(form.get("budget") || ""),
      details: String(form.get("details") || ""),
      intent: String(form.get("intent") || "contact")
    };

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setStatus("error");
      setError(data.error || "Le workflow n'a pas pu etre prepare.");
      return;
    }

    const data = (await response.json()) as LeadResult;
    setResult(data);
    setStatus("success");
  }

  async function handleCopy() {
    if (!result?.mailtoUrl) {
      return;
    }

    await navigator.clipboard.writeText(result.mailtoUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="hero-glass-panel grid gap-5 rounded-[2rem] p-6 md:p-8">
        <input type="hidden" name="intent" value={presetIntent} />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)]">
              Prenom & nom
            </span>
            <input
              required
              name="name"
              className="hero-input"
              placeholder="Jean Dupont"
              autoComplete="name"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)]">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              className="hero-input"
              placeholder="jean@exemple.com"
              autoComplete="email"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)]">
            Type de projet
          </span>
          <select
            required
            name="projectType"
            className="hero-input"
            defaultValue={presetProject || ""}
          >
            <option value="" disabled>
              Selectionner...
            </option>
            {projectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)]">
            Budget estime
          </span>
          <select
            required
            name="budget"
            className="hero-input"
            defaultValue={presetBudget || ""}
          >
            <option value="" disabled>
              Selectionner...
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)]">
            Decrivez votre projet
          </span>
          <textarea
            required
            name="details"
            rows={5}
            className="hero-input"
            placeholder="Parlez-nous de votre vision, vos objectifs, vos delais..."
            defaultValue={defaultDetails}
          />
        </label>

        {error ? (
          <p className="text-sm text-[#ffb38a]">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="hero-primary-button inline-flex items-center justify-center rounded-full px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {baseStatus[status]}
        </button>
      </form>

      {result ? (
        <div className="hero-glass-panel rounded-[2rem] p-6 md:p-8">
          <div className="flex items-center gap-3 text-[color:var(--orange)]">
            <CheckCircle size={20} weight="fill" />
            <span className="text-[11px] uppercase tracking-[0.22em]">Workflow actif</span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">
            Votre demande a ete preparee. Choisissez le canal d'envoi. Les deux liens ci-dessous
            sont reels et ouvrent soit WhatsApp soit votre client email avec le message pre-rempli.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              href={result.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-glass-button inline-flex items-center justify-between rounded-full px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-white"
            >
              <span className="inline-flex items-center gap-2">
                <WhatsappLogo size={16} weight="fill" />
                WhatsApp
              </span>
              <ArrowSquareOut size={14} />
            </a>

            <a
              href={result.mailtoUrl}
              className="hero-glass-button inline-flex items-center justify-between rounded-full px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-white"
            >
              <span className="inline-flex items-center gap-2">
                <EnvelopeSimple size={16} weight="light" />
                Email
              </span>
              <ArrowSquareOut size={14} />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="hero-glass-button inline-flex items-center justify-between rounded-full px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-white"
            >
              <span className="inline-flex items-center gap-2">
                <Copy size={16} weight="light" />
                {copied ? "Copie" : "Copier"}
              </span>
              <ArrowSquareOut size={14} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
