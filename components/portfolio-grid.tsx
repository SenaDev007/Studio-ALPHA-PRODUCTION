"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "@phosphor-icons/react";
import { useMemo, useState } from "react";

import { showcaseProjects } from "@/lib/site";

const filters = ["Tout", "Corporate", "Evenements", "Drone", "Mariages", "Publicite"] as const;

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Tout");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "Tout") {
      return showcaseProjects;
    }

    return showcaseProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="reveal mb-10 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
              activeFilter === filter
                ? "border-[color:var(--orange)] bg-[color:var(--orange-dim)] text-[color:var(--orange)]"
                : "border-[color:var(--gray)] text-[color:var(--gray-light)] hover:border-[color:var(--orange)] hover:text-[color:var(--orange)]"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-12">
        {visibleProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={project.href}
            className={`group relative overflow-hidden bg-[color:var(--dark2)] ${
              activeFilter === "Tout" ? project.span : "lg:col-span-6"
            } ${index < 3 ? "reveal" : "reveal reveal-delay-1"}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.92))]" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6">
              <div className="mb-2 text-[9px] uppercase tracking-[0.22em] text-[color:var(--orange)]">
                {project.label}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] uppercase tracking-[0.12em] text-white">
                {project.title}
              </h3>
            </div>
            <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[rgba(240,121,33,0.5)] bg-black/40 text-sm text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Play size={18} weight="fill" />
            </div>
          </Link>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <div className="hero-glass-panel mt-6 rounded-[2rem] p-6 text-sm text-[color:var(--gray-light)]">
          Aucun projet n'est encore associe a ce filtre.
        </div>
      ) : null}
    </>
  );
}
