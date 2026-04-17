"use client";

import { FormEvent, useState } from "react";

import { siteConfig } from "@/lib/site";

const projectOptions = [
  "Production video",
  "Prise de vue drone",
  "Photographie",
  "Diffusion live",
  "Formation drone",
  "Forfait sur mesure"
];

const budgetOptions = [
  "Moins de 150 000 XOF",
  "150 000 a 350 000 XOF",
  "350 000 a 700 000 XOF",
  "Plus de 700 000 XOF"
];

export function ContactForm() {
  const [status, setStatus] = useState("Envoyer ma demande");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const project = String(form.get("projectType") || "");
    const budget = String(form.get("budget") || "");
    const details = String(form.get("details") || "");

    const message = [
      `Nom: ${name}`,
      `Email: ${email}`,
      `Projet: ${project}`,
      `Budget: ${budget}`,
      `Details: ${details}`
    ].join("\n");

    const encoded = encodeURIComponent(
      `Bonjour Studio ALPHA PRODUCTION,\n\n${message}\n`
    );

    window.open(
      `${siteConfig.whatsappApi}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer"
    );

    setStatus("Demande envoyee vers WhatsApp");
    event.currentTarget.reset();
    window.setTimeout(() => setStatus("Envoyer ma demande"), 2800);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)]">
            Prenom & nom
          </span>
          <input
            required
            name="name"
            className="border border-white/10 bg-[color:var(--dark2)] px-4 py-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[color:var(--gray-mid)] focus:border-[color:var(--orange)]"
            placeholder="Jean Dupont"
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
            className="border border-white/10 bg-[color:var(--dark2)] px-4 py-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[color:var(--gray-mid)] focus:border-[color:var(--orange)]"
            placeholder="jean@exemple.com"
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
          className="border border-white/10 bg-[color:var(--dark2)] px-4 py-4 text-sm text-white outline-none transition-colors duration-300 focus:border-[color:var(--orange)]"
          defaultValue=""
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
          className="border border-white/10 bg-[color:var(--dark2)] px-4 py-4 text-sm text-white outline-none transition-colors duration-300 focus:border-[color:var(--orange)]"
          defaultValue=""
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
          className="border border-white/10 bg-[color:var(--dark2)] px-4 py-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[color:var(--gray-mid)] focus:border-[color:var(--orange)]"
          placeholder="Parlez-nous de votre vision, vos objectifs, vos delais..."
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-[color:var(--orange)] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--white)] transition-colors duration-300 hover:bg-[color:var(--orange-light)] active:scale-[0.98]"
      >
        {status}
      </button>
    </form>
  );
}
