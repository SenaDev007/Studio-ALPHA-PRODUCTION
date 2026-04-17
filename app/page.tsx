import Link from "next/link";
import Image from "next/image";

import { JsonLd } from "@/components/json-ld";
import { faqs, processSteps, sectors, services, showcaseProjects, siteConfig } from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  image: `${siteConfig.domain}/opengraph-image`,
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  sameAs: [siteConfig.whatsappHref, siteConfig.githubUrl],
  areaServed: ["Cotonou", "Abomey-Calavi", "Porto-Novo", "Benin"],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressCountry: "BJ"
  },
  url: siteConfig.domain,
  priceRange: "$$",
  serviceType: services.map((service) => service.title)
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function HomePage() {
  return (
    <main id="top" className="relative overflow-hidden px-4 pb-16 pt-8 md:px-6">
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="section-pad mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-8 md:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal">
          <p className="eyebrow">Studio créatif et audiovisuel à Cotonou</p>
          <h1 className="mt-5 max-w-[10.8ch] font-[family-name:var(--font-outfit)] text-5xl leading-none tracking-[-0.07em] text-[color:var(--foreground)] sm:text-6xl lg:text-[6rem]">
            Des images qui installent une présence nette.
          </h1>
          <p className="text-muted mt-6 max-w-[64ch] text-base leading-8 md:text-lg">
            Studio ALPHA PRODUCTION conçoit des productions vidéo et photo pour les marques,
            institutions et organisateurs d&apos;événements qui doivent être vus clairement à
            Cotonou. Le studio prend en charge la direction visuelle, la captation, le montage
            et la déclinaison des livrables pour le web, les réseaux sociaux et la communication
            terrain.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="#contact"
              className="premium-transition inline-flex items-center justify-between rounded-full bg-[color:var(--foreground)] px-2 py-2 text-[#fbf3e8] shadow-[0_20px_42px_-26px_rgba(17,22,26,0.45)] hover:-translate-y-px active:scale-[0.98] sm:w-auto"
            >
              <span className="pl-5 pr-4 text-sm font-semibold md:text-base">
                Parler du projet
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/12">
                +
              </span>
            </Link>
            <Link
              href="#services"
              className="premium-transition inline-flex items-center justify-center rounded-full border border-black/10 bg-white/45 px-6 py-4 text-sm font-semibold text-[color:var(--foreground)] hover:-translate-y-px hover:bg-white/65 active:scale-[0.98] md:text-base"
            >
              Voir les expertises
            </Link>
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="premium-transition inline-flex items-center justify-center rounded-full border border-black/10 bg-[color:var(--accent-soft)] px-6 py-4 text-sm font-semibold text-[color:var(--foreground)] hover:-translate-y-px hover:bg-[color:var(--accent-soft)]/80 active:scale-[0.98] md:text-base"
            >
              WhatsApp direct
            </Link>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              "Production locale à Cotonou",
              "Formats web, social et corporate",
              "Direction, captation et postproduction"
            ].map((item) => (
              <div
                key={item}
                className="premium-transition rounded-[1.4rem] border border-black/6 bg-white/45 p-4 text-sm text-[color:var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-1">
          <div className="double-shell">
            <div className="double-core relative overflow-hidden p-5 md:p-6">
              <div className="grain-mask" />
              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <article className="rounded-[1.5rem] border border-black/7 bg-[color:var(--surface-strong)] p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Implantation
                  </span>
                  <h2 className="mt-4 max-w-full text-[2rem]">Cotonou, ancrage local.</h2>
                  <p className="text-muted mt-4 text-sm leading-7">
                    Une production plus réactive, plus lisible et mieux alignée avec le terrain.
                  </p>
                </article>

                <article className="rounded-[1.5rem] border border-[color:var(--accent-soft)] bg-[linear-gradient(180deg,rgba(159,91,52,0.12),rgba(255,253,249,0.92))] p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Formats
                  </span>
                  <h2 className="mt-4 max-w-full text-[2rem]">Brand, event, social.</h2>
                  <p className="text-muted mt-4 text-sm leading-7">
                    Des livrables pensés pour les points de contact réellement utilisés.
                  </p>
                </article>

                <article className="rounded-[1.5rem] border border-black/7 bg-[color:var(--surface-strong)] p-5 md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Approche
                  </span>
                  <h2 className="mt-4 max-w-full text-[2rem]">
                    Préparer, capter, monter, livrer sans bruit inutile.
                  </h2>
                  <p className="text-muted mt-4 max-w-[58ch] text-sm leading-7">
                    Le studio structure la production pour réduire les allers-retours et sécuriser
                    le résultat final. L’objectif n’est pas de produire plus, mais de produire
                    mieux pour la diffusion.
                  </p>
                </article>
              </div>

              <div className="mt-5 grid gap-2">
                <span className="signal-line h-1.5 rounded-full bg-black/8" />
                <span className="signal-line h-1.5 rounded-full bg-black/8 [animation-delay:180ms]" />
                <span className="signal-line h-1.5 rounded-full bg-black/8 [animation-delay:360ms]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-8">
        <div className="reveal grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Présence locale, exécution propre</p>
            <h2 className="mt-5 max-w-[15ch]">
              Une vitrine visuelle crédible pour les structures qui doivent être vues clairement.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Entreprises, institutions et événements",
              "Formats horizontaux, verticaux et diffusion web"
            ].map((item) => (
              <div key={item} className="double-shell">
                <div className="double-core rounded-[calc(var(--radius-shell)-0.5rem)] bg-[color:var(--surface-strong)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Couverture
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-outfit)] text-xl tracking-[-0.04em]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-pad mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-5">
            Une production pensée pour la visibilité, pas seulement pour l’esthétique.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="double-shell reveal">
            <div className="double-core min-h-[28rem] bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(159,91,52,0.08))] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {services[0]?.index}
              </p>
              <div className="mt-28 max-w-lg">
                <h3>{services[0]?.title}</h3>
                <p className="text-muted mt-5 text-base leading-8">{services[0]?.description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {services.slice(1).map((service, index) => (
              <div
                key={service.title}
                className={`double-shell reveal ${index === 0 ? "reveal-delay-1" : index === 1 ? "reveal-delay-2" : "reveal-delay-3"}`}
              >
                <div className="double-core bg-[color:var(--surface-strong)] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    {service.index}
                  </p>
                  <h3 className="mt-4">{service.title}</h3>
                  <p className="text-muted mt-4 text-base leading-8">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="positionnement" className="section-pad mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Positionnement</p>
          <h2 className="mt-5">
            Des contenus utiles pour les marques et structures actives à {siteConfig.city}.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr_0.92fr]">
          {sectors.map((sector, index) => (
            <article
              key={sector.title}
              className={`double-shell reveal ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""}`}
            >
              <div
                className={`double-core bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(17,22,26,0.03))] p-6 ${
                  index === 0 ? "min-h-[22rem]" : "min-h-[18rem]"
                } flex flex-col justify-end`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {sector.tag}
                </p>
                <h3 className="mt-4">{sector.title}</h3>
                <p className="text-muted mt-4 text-base leading-8">{sector.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="realisations" className="section-pad mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-5">
            Des mises en scene de projets pour presenter le type de rendu que le studio peut livrer.
          </h2>
          <p className="text-muted mt-5 max-w-[62ch] text-base leading-8">
            Les visuels ci-dessous servent de galerie de presentation. Ils peuvent etre remplaces
            par vos vraies productions des que vous me fournissez les assets finaux.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr_0.92fr]">
          {showcaseProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`double-shell reveal ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""}`}
            >
              <div className="double-core overflow-hidden bg-[color:var(--surface-strong)]">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-black/6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    {project.category}
                  </p>
                  <h3 className="mt-4">{project.title}</h3>
                  <p className="text-muted mt-4 text-base leading-8">{project.summary}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground)]/72">
                    {project.deliverables}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="processus" className="section-pad mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Méthode</p>
          <h2 className="mt-5">Un processus simple pour cadrer le besoin et tenir la livraison.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`double-shell reveal ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""}`}
            >
              <div className="double-core min-h-[16rem] bg-[color:var(--surface-strong)] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {step.index}
                </p>
                <h3 className="mt-8">{step.title}</h3>
                <p className="text-muted mt-4 text-base leading-8">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-6">
        <div className="double-shell reveal">
          <div className="double-core grid gap-6 p-7 md:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="eyebrow">SEO local</p>
              <h2 className="mt-5 max-w-[16ch]">
                Studio de production audiovisuelle à {siteConfig.city}, disponible pour les besoins
                de communication au {siteConfig.country}.
              </h2>
            </div>
            <p className="text-muted max-w-[60ch] text-base leading-8">
              La page a été structurée pour répondre aux recherches liées à la production vidéo,
              à la captation événementielle, au studio photo et au montage à Cotonou. Les contenus,
              les métadonnées et les données structurées renforcent ce positionnement local.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5">Questions fréquentes</h2>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={`double-shell reveal group ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""}`}
              open={index === 0}
            >
              <summary className="double-core cursor-pointer list-none p-6 font-[family-name:var(--font-outfit)] text-xl tracking-[-0.04em] marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="premium-transition text-[color:var(--accent)] group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-base leading-8 text-[color:var(--muted)]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="section-pad mx-auto max-w-7xl">
        <div className="double-shell reveal">
          <div className="double-core grid gap-8 p-7 md:grid-cols-[1fr_0.78fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-5 max-w-[16ch]">
                Présentez le besoin et le studio revient avec un cadrage clair.
              </h2>
              <p className="text-muted mt-5 max-w-[60ch] text-base leading-8">
                Le site integre maintenant les coordonnees d'appel et un acces WhatsApp direct.
                Le domaine de production reste a mettre a jour dans la configuration des que le
                deploiement Vercel ou le domaine final est valide.
              </p>
            </div>

            <div className="grid content-start gap-4">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="premium-transition inline-flex items-center justify-between rounded-[1.6rem] bg-[color:var(--foreground)] px-4 py-4 text-[#fbf3e8] shadow-[0_20px_42px_-26px_rgba(17,22,26,0.45)] hover:-translate-y-px active:scale-[0.98]"
              >
                <span className="pr-4 font-semibold">{siteConfig.email}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/12">
                  @
                </span>
              </Link>
              <Link
                href={`tel:${siteConfig.phoneHref}`}
                className="premium-transition inline-flex items-center justify-between rounded-[1.6rem] border border-black/10 bg-white/45 px-4 py-4 text-[color:var(--foreground)] hover:-translate-y-px hover:bg-white/65 active:scale-[0.98]"
              >
                <span className="font-semibold">{siteConfig.phoneDisplay}</span>
                <span className="text-sm uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  Appel
                </span>
              </Link>
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="premium-transition inline-flex items-center justify-between rounded-[1.6rem] border border-black/10 bg-[color:var(--accent-soft)] px-4 py-4 text-[color:var(--foreground)] hover:-translate-y-px hover:bg-[color:var(--accent-soft)]/80 active:scale-[0.98]"
              >
                <span className="font-semibold">{siteConfig.whatsappDisplay}</span>
                <span className="text-sm uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  WhatsApp
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
