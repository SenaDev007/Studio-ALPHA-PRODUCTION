import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

type LeadPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  details?: string;
  intent?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  const name = body.name?.trim();
  const email = body.email?.trim();
  const projectType = body.projectType?.trim();
  const budget = body.budget?.trim();
  const details = body.details?.trim();
  const intent = body.intent?.trim() || "contact";

  if (!name || !email || !projectType || !budget || !details) {
    return NextResponse.json(
      { error: "Tous les champs du formulaire sont obligatoires." },
      { status: 400 }
    );
  }

  const leadLabel =
    intent === "inscription" ? "Inscription formation" : intent === "devis" ? "Demande de devis" : "Contact";

  const message = [
    `Bonjour Studio ALPHA PRODUCTION,`,
    "",
    `Workflow: ${leadLabel}`,
    `Nom: ${name}`,
    `Email: ${email}`,
    `Projet: ${projectType}`,
    `Budget: ${budget}`,
    `Details: ${details}`
  ].join("\n");

  const encodedMessage = encodeURIComponent(message);
  const encodedSubject = encodeURIComponent(`${leadLabel} - ${projectType} - ${name}`);

  return NextResponse.json({
    ok: true,
    whatsappUrl: `${siteConfig.whatsappApi}?text=${encodedMessage}`,
    mailtoUrl: `mailto:${siteConfig.email}?subject=${encodedSubject}&body=${encodedMessage}`
  });
}
