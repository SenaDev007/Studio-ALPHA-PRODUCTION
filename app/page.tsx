import Image from "next/image";
import Link from "next/link";
import {
  AirplaneTilt,
  ArrowRight,
  Broadcast,
  Camera,
  EnvelopeSimple,
  GraduationCap,
  MapPin,
  PhoneCall,
  SlidersHorizontal,
  VideoCamera
} from "@phosphor-icons/react/dist/ssr";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { LeadActions } from "@/components/lead-actions";
import { PortfolioGrid } from "@/components/portfolio-grid";
import {
  blogPosts,
  droneModules,
  faqs,
  heroStats,
  media,
  pricingPlans,
  services,
  siteConfig
} from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  image: `${siteConfig.domain}/opengraph-image`,
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  sameAs: [siteConfig.whatsappApi, siteConfig.githubUrl],
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

const serviceIcons = {
  AirplaneTilt,
  Broadcast,
  Camera,
  GraduationCap,
  SlidersHorizontal,
  VideoCamera
} as const;

export default function HomePage() {
  return (
    <main id="main-content" className="relative overflow-hidden pt-24">
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section id="hero" className="relative flex min-h-[100dvh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,rgba(240,121,33,0.08)_0%,transparent_55%),radial-gradient(ellipse_at_15%_75%,rgba(45,45,181,0.10)_0%,transparent_50%),linear-gradient(160deg,#080808_0%,#0d0d0d_60%,#080808_100%)]" />
        <div className="hero-spotlight absolute inset-x-[8%] top-[-18%] h-[36rem] rounded-full blur-3xl" />
        <Image
          src={media.hero}
          alt="Equipe de captation video en direct dans un environnement de production professionnel"
          fill
          priority
          className="object-cover object-center opacity-28"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.92)_0%,rgba(8,8,8,0.72)_48%,rgba(8,8,8,0.52)_100%)]" />
        <div className="absolute inset-y-0 left-[56%] hidden w-px -skew-x-[6deg] bg-[linear-gradient(180deg,transparent,rgba(45,45,181,0.24),transparent)] lg:block" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-4 py-20 md:px-6 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div className="reveal max-w-[880px]">
            <div className="hero-badge inline-flex items-center gap-3 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white">
              <span className="h-2 w-2 rounded-full bg-[color:var(--orange)]" />
              Studio audiovisuel & formation drone
            </div>

            <h1 className="mt-8 leading-[0.88]">
              <span className="block font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3vw,3rem)] font-light italic tracking-[0.25em] text-[color:var(--orange)]">
                studio
              </span>
              <span className="block font-[family-name:var(--font-display)] text-[clamp(5rem,12vw,9.25rem)] tracking-[0.08em] text-[color:var(--white)]">
                ALPHA
              </span>
              <span className="block font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.75rem)] tracking-[0.2em] text-[color:var(--anthracite-light)]">
                PRODUCTION
              </span>
            </h1>

            <p className="mt-6 max-w-[34rem] font-[family-name:var(--font-serif)] text-[clamp(1rem,1.7vw,1.35rem)] italic leading-[1.8] text-[color:var(--gray-light)]">
              Nous capturons ce que l&apos;oeil ne voit pas. Du sol jusqu&apos;au ciel,
              chaque image raconte votre histoire avec une execution plus nette et plus utile.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#portfolio"
                className="hero-primary-button inline-flex items-center justify-center rounded-full px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white"
              >
                Voir le portfolio
              </Link>
              <Link
                href="/?project=Formation%20drone&intent=inscription#contact"
                className="hero-secondary-button inline-flex items-center justify-center rounded-full px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white"
              >
                Formation drone
              </Link>
              <Link
                href="/?project=Forfait%20sur%20mesure&intent=devis#contact"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)] transition-colors duration-300 hover:text-[color:var(--orange)]"
              >
                Devis gratuit
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="hero-glass-panel rounded-[2rem] p-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--orange)]">
                Demarrer un workflow
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] uppercase tracking-[0.08em] text-white">
                Devis ou inscription
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/74">
                Les actions du site ouvrent de vrais parcours pre-remplis. Vous pouvez lancer un devis
                ou une inscription sans passer par des boutons decoratifs.
              </p>
              <LeadActions mode="quote" />
              <LeadActions mode="training" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-4 hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[color:var(--gray-mid)] md:flex md:left-6">
          <span className="h-11 w-px bg-[linear-gradient(180deg,transparent,var(--indigo))]" />
          Defiler pour decouvrir
        </div>

        <div className="absolute bottom-8 right-4 hidden gap-8 md:flex md:right-6 xl:right-12">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero-stat-pill rounded-full px-5 py-4">
              <div className="font-[family-name:var(--font-display)] text-[2rem] leading-none text-[color:var(--orange)]">
                {stat.value}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[color:var(--gray-light)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-pad bg-[color:var(--dark)] px-4 md:px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal mb-16">
            <div className="section-tag">Ce que nous faisons</div>
            <h2 className="section-title mt-5">
              NOS <span className="o">SER</span>
              <span className="i">VICES</span>
            </h2>
            <p className="section-desc mt-4">
              De la captation au montage, du sol aux airs, une offre complete pour votre image.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const ServiceIcon =
                serviceIcons[service.icon as keyof typeof serviceIcons] || VideoCamera;

              return (
                <article
                  key={service.title}
                  className={`hero-glass-panel rounded-[2rem] p-5 transition-transform duration-300 hover:-translate-y-1 ${
                    index < 3 ? "reveal" : "reveal reveal-delay-1"
                  }`}
                >
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.62))]" />
                    <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/35 text-[color:var(--orange)] backdrop-blur-sm">
                      <ServiceIcon size={22} weight="light" />
                    </div>
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-[3.25rem] leading-none text-[rgba(240,121,33,0.1)]">
                    {service.index}
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.65rem] uppercase tracking-[0.08em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-[color:var(--gray-light)]">
                    {service.description}
                  </p>
                  <Link
                    href={service.cta}
                    className="mt-7 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[color:var(--orange)] transition-all duration-300 hover:gap-5"
                  >
                    En savoir plus
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-pad bg-[color:var(--black)] px-4 md:px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal mb-10">
            <div className="section-tag">Nos realisations</div>
            <h2 className="section-title mt-5">
              PORT<span className="o">FOL</span>
              <span className="i">IO</span>
            </h2>
            <p className="section-desc mt-4">
              Le filtre fonctionne et chaque vignette renvoie vers un workflow de devis coherent avec
              le type de realisation affiche.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      <section id="formation" className="section-pad relative overflow-hidden bg-[color:var(--dark)] px-4 md:px-6">
        <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(45,45,181,0.06)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal mb-16">
            <div className="section-tag">Pilotage professionnel</div>
            <h2 className="section-title mt-5">
              FORMA<span className="o">TION</span>
              <br />
              <span className="i">DRONE</span>
            </h2>
            <p className="section-desc mt-4">
              Maitrisez le ciel, du pilotage de base a la prise de vue aerienne professionnelle.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="hero-glass-panel relative rounded-[2rem] p-10">
                <Image
                  src={media.dronePilot}
                  alt="Pilote de drone en situation de prise de vue aerienne"
                  fill
                  className="rounded-[2rem] object-cover opacity-20"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,rgba(14,14,14,0.35),rgba(14,14,14,0.92))]" />
                <div className="absolute left-0 top-0 h-[2px] w-14 bg-[color:var(--indigo)]" />
                <div className="absolute bottom-0 right-0 h-[2px] w-14 bg-[color:var(--orange)]" />
                <div className="relative py-8 text-center font-[family-name:var(--font-display)] text-[5rem] leading-none text-[color:var(--orange)]">
                  DRN
                </div>
                <div className="relative grid gap-3 sm:grid-cols-2">
                  {[
                    { value: "5", key: "Modules" },
                    { value: "40h", key: "Formation" },
                    { value: "100%", key: "Pratique incluse" },
                    { value: "360", key: "Support continu" }
                  ].map((item) => (
                    <div key={item.key} className="rounded-[1.25rem] border border-white/8 bg-black/30 px-5 py-4 backdrop-blur-sm">
                      <div className="font-[family-name:var(--font-display)] text-[1.85rem] leading-none text-[color:var(--indigo-light)]">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[color:var(--gray-light)]">
                        {item.key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[rgba(45,45,181,0.25)] bg-[rgba(45,45,181,0.09)] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-[color:var(--indigo-light)]">
                Attestation de formation delivree
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              {droneModules.map((module) => (
                <div
                  key={module.index}
                  className="group flex gap-5 border-b border-white/5 py-6 transition-all duration-300 hover:border-[rgba(240,121,33,0.22)] hover:pl-3"
                >
                  <div className="min-w-[52px] font-[family-name:var(--font-display)] text-[2rem] leading-none text-[rgba(85,85,212,0.22)] transition-colors duration-300 group-hover:text-[color:var(--indigo-light)]">
                    {module.index}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[1.1rem] uppercase tracking-[0.08em] text-white">
                      {module.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--gray-light)]">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}

              <Link
                href="/?project=Formation%20drone&intent=inscription#contact"
                className="hero-secondary-button mt-9 inline-flex rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-[color:var(--white)]"
              >
                S&apos;inscrire a la formation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="tarifs" className="section-pad bg-[color:var(--black)] px-4 md:px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal mb-16">
            <div className="section-tag">Investissement</div>
            <h2 className="section-title mt-5">
              NOS <span className="o">TA</span>
              <span className="i">RIFS</span>
            </h2>
            <p className="section-desc mt-4">
              Les cartes tarifaires ouvrent des demandes pre-remplies. Aucun bouton mort.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={`hero-glass-panel relative rounded-[2rem] p-10 ${
                  plan.featured ? "border-[color:var(--orange)]/30" : ""
                } ${
                  index === 0 ? "reveal" : index === 1 ? "reveal reveal-delay-1" : "reveal reveal-delay-2"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--orange)] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.28em] text-[color:var(--white)]">
                    Populaire
                  </div>
                ) : null}
                <div className="text-[9px] uppercase tracking-[0.3em] text-[color:var(--orange)]">
                  {plan.category}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.8rem] uppercase tracking-[0.1em] text-white">
                  {plan.name}
                </h3>
                <div className="mt-5 font-[family-name:var(--font-display)] text-[3.2rem] leading-none text-[color:var(--indigo-light)]">
                  <span className="align-super text-[1.25rem]">XOF</span>
                  {plan.price}
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[color:var(--gray-light)]">
                  {plan.unit}
                </div>
                <ul className="mt-7 space-y-0">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 border-b border-white/4 py-2 text-sm text-[color:var(--gray-light)]"
                    >
                      <span className="text-[color:var(--orange)]">–</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`mt-8 inline-flex w-full items-center justify-between rounded-full px-5 py-4 text-[10px] uppercase tracking-[0.24em] transition-colors duration-300 ${
                    plan.featured
                      ? "bg-[color:var(--orange)] text-[color:var(--white)]"
                      : "border border-[color:var(--orange)] text-[color:var(--orange)] hover:bg-[color:var(--orange)] hover:text-[color:var(--white)]"
                  }`}
                >
                  <span>{plan.category === "Formation" ? "S'inscrire" : "Demander un devis"}</span>
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="section-pad bg-[color:var(--dark)] px-4 md:px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal mb-16">
            <div className="section-tag">Actualites & insights</div>
            <h2 className="section-title mt-5">
              LE <span className="o">BL</span>
              <span className="i">OG</span>
            </h2>
            <p className="section-desc mt-4">
              Les cartes blog ouvrent maintenant de vraies pages articles.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr]">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`hero-glass-panel overflow-hidden rounded-[2rem] transition-colors duration-300 hover:bg-white/6 ${
                  index === 0 ? "reveal" : index === 1 ? "reveal reveal-delay-1" : "reveal reveal-delay-2"
                }`}
              >
                <div className={`relative overflow-hidden ${post.large ? "h-[250px]" : "h-[210px]"}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--orange)]">
                    {post.category} <span className="text-[color:var(--gray-light)]">· {post.date}</span>
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.2rem] uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:text-[color:var(--orange)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--gray-light)]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[color:var(--orange)] transition-all duration-300 hover:gap-4"
                  >
                    Lire l&apos;article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad relative overflow-hidden bg-[color:var(--black)] px-4 md:px-6">
        <div className="pointer-events-none absolute right-[-70px] top-1/2 hidden -translate-y-1/2 rotate-90 font-[family-name:var(--font-display)] text-[170px] tracking-[0.12em] text-[rgba(240,121,33,0.03)] xl:block">
          ALPHA
        </div>
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.5vw,3.75rem)] leading-[0.92] tracking-[0.08em] text-white">
              DONNONS VIE
              <br />
              A VOTRE <span className="text-[color:var(--orange)]">VI</span>
              <span className="text-[color:var(--indigo-light)]">SION</span>
            </h2>
            <p className="mt-5 max-w-[34rem] font-[family-name:var(--font-serif)] text-[1rem] italic leading-[1.9] text-[color:var(--gray-light)]">
              Le formulaire gere maintenant les workflows de contact, devis et inscription avec
              validation, pre-remplissage et sorties actionnables.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: "Telephone", value: siteConfig.phoneDisplay, icon: PhoneCall },
                { label: "Email", value: siteConfig.email, icon: EnvelopeSimple },
                { label: "Localisation", value: `${siteConfig.city}, ${siteConfig.country}`, icon: MapPin }
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--orange)]/25 bg-[color:var(--orange-dim)] text-[color:var(--orange)]">
                    <item.icon size={18} weight="light" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--gray-light)]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-base text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href={`tel:${siteConfig.phoneHref}`}
                className="hero-glass-button inline-flex items-center justify-between rounded-full px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-white"
              >
                <span className="inline-flex items-center gap-2">
                  <PhoneCall size={16} weight="light" />
                  Appeler
                </span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href={siteConfig.whatsappApi}
                target="_blank"
                rel="noreferrer"
                className="hero-glass-button inline-flex items-center justify-between rounded-full px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-white"
              >
                <span className="inline-flex items-center gap-2">
                  <Broadcast size={16} weight="light" />
                  WhatsApp
                </span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
