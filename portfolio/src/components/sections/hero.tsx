"use client";

import { type ReactElement } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Highlight, SocialLink, CompanyCollaboration } from "@/data/portfolio";
import Image from "next/image";

const Stack3D = dynamic(() => import("@/components/stack-3d").then((mod) => mod.Stack3D), {
  ssr: false,
});

type HeroProps = {
  highlights: Highlight[];
  socialLinks: SocialLink[];
  techItems: string[];
  companies: CompanyCollaboration[];
};

type SocialIconProps = {
  className?: string;
};

const socialIconMap: Record<SocialLink["icon"], ({ className }: SocialIconProps) => ReactElement> = {
  github: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.54.12-3.2 0 0 1-.32 3.3 1.23a11.44 11.44 0 016 0c2.29-1.56 3.29-1.23 3.29-1.23.65 1.66.25 2.9.13 3.2.76.84 1.22 1.91 1.22 3.22 0 4.6-2.8 5.61-5.48 5.91.43.38.81 1.11.81 2.25 0 1.63-.02 2.95-.02 3.35 0 .32.21.69.82.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  ),
  linkedin: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.11 2.06 2.06 0 010 4.11zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0z"
      />
    </svg>
  ),
  mail: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M24 4.5v15A2.5 2.5 0 0121.5 22h-19A2.5 2.5 0 010 19.5v-15A2.5 2.5 0 012.5 2h19A2.5 2.5 0 0124 4.5zm-2.13-.63H2.13L12 11.08l9.87-7.21zm.13 2.95l-6.33 4.62L22 18.13V6.82zM2 18.13l6.2-6.69L2 6.82v11.31zm1.93 1.87h16.14L13.9 13.36 12 14.75l-1.9-1.39L3.93 20z"
      />
    </svg>
  ),
};

export function HeroSection({ highlights, socialLinks, techItems, companies }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative grid gap-8 lg:grid-cols-2 lg:items-stretch xl:grid-cols-[1.1fr_0.9fr]" aria-labelledby="hero-title">
      <motion.div
        className="space-y-6 lg:h-full lg:space-y-8"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: "easeOut" }}
      >
        <div className="hero-status-chip">
          <Sparkles className="hero-status-icon" />
          Disponible / Remote
        </div>

        <div className="space-y-4">
          <motion.h1
            id="hero-title"
            className="hero-title text-balance md:text-3xl lg:text-[36px]"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Ingénierie logicielle.
          </motion.h1>
          <motion.p
            className="hero-description max-w-2xl text-base"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.65, delay: 0.2, ease: "easeOut" }}
          >
            Conception de logiciels, d’expériences et de projets numériques variés, avec attention particulière au détail. Micro-interactions soignées et performances optimisées.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" size="lg" className="gap-2">
            <Download className="h-4 w-4" />
            Télécharger le CV
          </Button>
        </div>

        <div className="hero-stats-wrap w-full space-y-3 md:max-w-lg">
          <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-3 sm:gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                className="hero-highlight-card glass-panel px-2 py-4 sm:px-4 sm:py-5"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.2, duration: prefersReducedMotion ? 0.2 : 0.5, ease: "easeOut" }}
              >
                <div className="hero-highlight-title">{item.title}</div>
                <div className="hero-highlight-subtitle">{item.subtitle}</div>
              </motion.div>
            ))}
          </div>

          <div
            className="tech-marquee-wrap border-y-2 border-[var(--border)] py-2"
            aria-label="Technologies utilisées"
          >
            <div className="tech-marquee-track">
              {[0, 1].map((groupIdx) => (
                <div key={groupIdx} className="tech-marquee-group" aria-hidden={groupIdx === 1}>
                  {techItems.map((tech, idx) => (
                    <span
                      key={`${groupIdx}-${tech}-${idx}`}
                      className="hero-tech-item px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-social-list" aria-label="Profils sociaux">
            {socialLinks.map(({ icon, href, name }) => {
              const Icon = socialIconMap[icon];
              return (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ouvrir ${name}`}
                  whileHover={{ y: prefersReducedMotion ? 0 : -2, scale: prefersReducedMotion ? 1 : 1.02 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                  className="hero-social-link glass-button inline-flex min-h-11 w-full items-center justify-center gap-2 px-4 py-2 text-sm font-semibold uppercase outline-none transition sm:w-auto sm:justify-start"
                >
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </motion.a>
              );
            })}
          </div>

          <div className="hero-companies-section mt-6 w-full border-t-2 border-[var(--border)] pt-6">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-[var(--foreground)]">
              Entreprises avec lesquelles j&apos;ai collaboré
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
              {companies.map(({ name, image, link }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-none border-2 border-[var(--border)] bg-[var(--card)] shadow-[4px_4px_0_0_var(--border)]"
                >
                  <div className="hero-company-image relative w-full overflow-hidden bg-[var(--background)]">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {link && (
                      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      </div>
                    )}
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]">
                      {name}
                    </p>
                  </div>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Visiter ${name}`}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-none border-2 border-[var(--border)] bg-[var(--card)] p-0 shadow-[4px_4px_0_0_var(--border)] lg:flex lg:h-full lg:flex-col"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.75, ease: "easeOut", delay: 0.25 }}
      >
        <div className="absolute inset-0 scanlines" />
        <div className="relative z-10 flex flex-col gap-2 border-b-2 border-[var(--border)] bg-[var(--background)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--foreground)]">Stack signature</p>
          <span className="rounded-none border-2 border-[var(--accent)] bg-[var(--background)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] shadow-[4px_4px_0_0_var(--accent)]">
            Stable & Optimisé
          </span>
        </div>
        <div className="relative z-10 flex flex-col gap-4 p-4 lg:flex-1">
          <div className="w-full space-y-3 text-sm text-[var(--foreground)]">
              • Expertise en C++, Python et TypeScript.<br />• Adaptabilité, développement bas niveau. <br/>• Architectures cloud modernes.
            <p>• Deep Learning (CNN), intelligence artificiel.<br />• Adaptabilité en environnements complexes.</p>
            <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {["Full-Stack & Systèmes", "IA appliquée", "Automatisation", "Adaptabilité"].map((badge) => (
                <div
                  key={badge}
                  className="glass-button rounded-none px-3 py-2 text-center font-medium text-foreground shadow-[4px_4px_0_0_var(--border)] border-[var(--border)] w-full box-border"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <div className="stack-3d-crop">
            <Stack3D />
          </div>
          <Button asChild size="lg" className="gap-2 w-full justify-center mb-3">
            <Link href="#projects">
              <ArrowDown className="h-4 w-4" />
              Voir les projets
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
