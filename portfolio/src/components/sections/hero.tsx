"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Sparkles, GitBranch, BriefcaseBusiness, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Highlight, SocialLink } from "@/data/portfolio";

type HeroProps = {
  highlights: Highlight[];
  socialLinks: SocialLink[];
};

export function HeroSection({ highlights, socialLinks }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const iconMap = {
    github: GitBranch,
    linkedin: BriefcaseBusiness,
    mail: Mail,
  } as const;

  const stagger = useMemo(
    () => ({
      initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: prefersReducedMotion ? 0.2 : 0.6, ease: "easeOut" },
    }),
    [prefersReducedMotion]
  );

  return (
    <section className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="hero-title">
      <motion.div {...stagger} className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur dark:bg-white/5">
          <Sparkles className="h-4 w-4 text-blue-500" />
          Disponible pour missions freelances / remote
        </div>

        <div className="space-y-4">
          <motion.h1
            id="hero-title"
            className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Développeur full stack qui conçoit des expériences fluides, ultra rapides et élégantes.
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-muted"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.65, delay: 0.2, ease: "easeOut" }}
          >
            J’assemble Next.js, shadcn/ui et un sens aigu du détail pour livrer des produits qui respirent la qualité :
            micro-interactions soignées, dark mode natif et performances notées vertes sur Lighthouse.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="#projects">
              <ArrowDown className="h-4 w-4" />
              Voir les projets
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Download className="h-4 w-4" />
            Télécharger le CV
          </Button>
          <div className="flex gap-3 text-muted" aria-label="Profils sociaux">
            {socialLinks.map(({ icon, href, name }) => {
              const Icon = iconMap[icon];
              return (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ouvrir ${name}`}
                whileHover={{ y: prefersReducedMotion ? 0 : -2, scale: prefersReducedMotion ? 1 : 1.05 }}
                whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/70 text-foreground shadow-[var(--shadow-card)] outline-none backdrop-blur transition focus-visible:ring-2 focus-visible:ring-accent dark:bg-white/5"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
            })}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center md:max-w-lg">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              className="glass-panel rounded-2xl px-4 py-5"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.2, duration: prefersReducedMotion ? 0.2 : 0.5, ease: "easeOut" }}
            >
              <div className="text-2xl font-semibold">{item.title}</div>
              <div className="text-xs uppercase tracking-[0.12em] text-muted">{item.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-3xl border border-border/80 bg-white/60 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl dark:bg-white/5"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.75, ease: "easeOut", delay: 0.25 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent dark:from-white/5" />
        <div className="relative z-10 space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Stack signature</p>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
              Stable & Typée
            </span>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p>
              • Next.js 15 App Router + React 19<br />• Tailwind CSS + shadcn/ui tokens custom<br />• Framer Motion (scroll + micro-interactions)
            </p>
            <p>• Dark mode natif via next-themes<br />• Animations respectueuses (prefers-reduced-motion)</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {["Framer Motion", "21st.dev UI", "Glassmorphism", "Edge-ready"].map((badge) => (
              <div
                key={badge}
                className="glass-button rounded-xl px-3 py-2 text-center font-medium text-foreground shadow-[var(--shadow-card)]"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
