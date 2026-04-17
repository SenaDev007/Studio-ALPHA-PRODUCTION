import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { blogPosts, siteConfig } from "@/lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: [post.image]
    }
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-[100dvh] bg-[color:var(--black)] px-4 pb-20 pt-32 md:px-6">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--gray-light)] transition-colors duration-300 hover:text-[color:var(--orange)]"
        >
          <ArrowLeft size={14} />
          Retour au blog
        </Link>

        <div className="mt-8 text-[9px] uppercase tracking-[0.2em] text-[color:var(--orange)]">
          {post.category} <span className="text-[color:var(--gray-light)]">· {post.date}</span>
        </div>
        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.9] tracking-[0.08em] text-white">
          {post.title}
        </h1>
        <p className="mt-6 max-w-3xl font-[family-name:var(--font-serif)] text-xl italic leading-9 text-[color:var(--gray-light)]">
          {post.excerpt}
        </p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden border border-white/8">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.25))]" />
        </div>

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-lg leading-9 text-[color:var(--white)]/84">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="hero-glass-panel mt-14 rounded-[2rem] p-8">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--orange)]">
            Besoin d'un accompagnement
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase tracking-[0.08em] text-white">
            Transformer cette logique en projet reel
          </h2>
          <Link
            href="/?project=Forfait%20sur%20mesure&intent=devis#contact"
            className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--orange)] transition-colors duration-300 hover:text-[color:var(--orange-light)]"
          >
            Demander un devis
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </main>
  );
}
