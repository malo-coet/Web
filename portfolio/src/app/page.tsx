"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
import { LoadingScreen } from "@/components/loading-screen";

const projects = [
  {
    title: "AI Developer Console",
    description:
      "Dashboard Next.js optimisé pour orchestrer des workloads IA, monitorer les tâches et analyser les performances.",
    link: "#",
    stack: ["Next.js", "Edge Functions", "Framer Motion"],
  },
  {
    title: "Realtime Collaboration Kit",
    description:
      "Suite collaborative (docs + canvas) avec présence en temps réel, modes clair/sombre et permissions granulaires.",
    link: "#",
    stack: ["WebSockets", "Tailwind", "tRPC"],
  },
  {
    title: "Design System 21st.dev",
    description:
      "Bibliothèque de composants shadcn/ui custom + tokens, déployée sur plusieurs produits avec CI design tokens.",
    link: "#",
    stack: ["shadcn/ui", "Storybook", "Tokens"],
  },
];

const highlights = [
  {
    title: "12+",
    subtitle: "projets shipped",
  },
  {
    title: "98%",
    subtitle: "Web Vitals green",
  },
  {
    title: "<50ms",
    subtitle: "latence edge",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 850);
    return () => clearTimeout(timer);
  }, []);

  const stagger = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
    }),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <LoadingScreen isLoading={isLoading} />

      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
        <div className="absolute left-[10%] top-[12%] h-64 w-64 rounded-full bg-blue-500/20" />
        <div className="absolute right-[6%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/20" />
        <div className="absolute bottom-[10%] right-[22%] h-52 w-52 rounded-full bg-emerald-400/15" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-600 to-slate-900 shadow-[var(--shadow-glow)]" />
            <div className="flex flex-col text-sm font-semibold leading-4">
              <span>Folio</span>
              <span className="text-xs text-muted">Full Stack / Design Systems</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="subtle" size="sm" className="glass-button text-sm">
              <Link href="#projects">Projets</Link>
            </Button>
            <Button asChild variant="subtle" size="sm" className="glass-button text-sm">
              <Link href="#about">Profil</Link>
            </Button>
            <Button asChild variant="subtle" size="sm" className="glass-button text-sm">
              <Link href="#contact">Contact</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-14 lg:px-8">
        <section className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...stagger} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur dark:bg-white/5">
              <Sparkles className="h-4 w-4 text-blue-500" />
              Disponible pour missions freelances / remote
            </div>
            <div className="space-y-4">
              <motion.h1
                className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                Développeur full stack qui conçoit des expériences fluides, ultra rapides et élégantes.
              </motion.h1>
              <motion.p
                className="max-w-2xl text-lg text-muted"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              >
                Je assemble Next.js, shadcn/ui et un sens aigu du détail pour livrer des produits qui respirent la qualité : micro-interactions soignées, dark mode natif et performances notées vertes sur Lighthouse.
              </motion.p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="gap-2">
                <ArrowDown className="h-4 w-4" />
                Voir les projets
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Télécharger le CV
              </Button>
              <div className="flex gap-3 text-muted">
                {[
                  { Icon: GitBranch, href: "https://github.com/malo-coet" },
                  {
                    Icon: BriefcaseBusiness,
                    href: "https://www.linkedin.com/in/malo-co%C3%ABt-00256b268/",
                  },
                  { Icon: Mail, href: "mailto:malocoet@gmail.com" },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/70 text-foreground shadow-[var(--shadow-card)] backdrop-blur dark:bg-white/5"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center md:max-w-lg">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="glass-panel rounded-2xl px-4 py-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  <div className="text-2xl font-semibold">{item.title}</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-muted">{item.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-3xl border border-border/80 bg-white/60 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl dark:bg-white/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
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
                  <div key={badge} className="glass-button rounded-xl px-3 py-2 text-center font-medium text-foreground shadow-[var(--shadow-card)]">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Projets récents</h2>
              <p className="text-muted">Sélection de travaux orientés performance, DX et finitions.</p>
            </div>
            <Button variant="subtle" className="gap-2 glass-button">
              Tout voir
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 backdrop-blur-lg"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut", delay: index * 0.05 }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 20% 20%, rgba(91,127,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.14), transparent 35%)" }} />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="text-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-foreground/5 px-3 py-1 text-foreground/80 shadow-inner shadow-white/5 backdrop-blur dark:bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="gap-2 text-sm">
                    Ouvrir le cas
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-8 rounded-3xl border border-border/80 bg-card p-8 shadow-[var(--shadow-card)] backdrop-blur">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">À propos</h2>
              <p className="text-muted">Craft, performance et pédagogie produit.</p>
            </div>
            <div className="flex gap-3 text-sm text-muted">
              <span className="rounded-full bg-foreground/5 px-3 py-1">React 19</span>
              <span className="rounded-full bg-foreground/5 px-3 py-1">Next.js 15</span>
              <span className="rounded-full bg-foreground/5 px-3 py-1">TypeScript strict</span>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <motion.div
              className="glass-panel relative rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="mb-2 text-lg font-semibold">Design Systems</h3>
              <p className="text-muted text-sm">
                Création de tokens, librairies shadcn/ui, documentation Storybook et pipelines CI pour garantir la cohérence multi-projets.
              </p>
            </motion.div>
            <motion.div
              className="glass-panel relative rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              <h3 className="mb-2 text-lg font-semibold">Performance & DX</h3>
              <p className="text-muted text-sm">
                Budgets Web Vitals, profiling React/Next, stratégie edge/cache, outillage dev (lint, tests visuels, conventions Git).<br />
              </p>
            </motion.div>
            <motion.div
              className="glass-panel relative rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="mb-2 text-lg font-semibold">Mentoring produit</h3>
              <p className="text-muted text-sm">
                Ateliers design/tech, revues de code, pair programming et mise en place de parcours onboarding pour équipes produit.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-8 shadow-[var(--shadow-card)] backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,127,255,0.16),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.16),transparent_35%)] opacity-80" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Section Hero shadcn/ui (démo)</h2>
              <p className="text-muted">
                Le composant fourni a été intégré tel quel dans `components/ui/hero-block-shadcnui.tsx`. Vous pouvez l’utiliser seul ou mélanger son style avec la page principale.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur-lg">
              <HeroBlock />
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-8 py-12 text-slate-50 shadow-[var(--shadow-glow)]">
          <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(circle at 20% 20%, rgba(91,127,255,0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.2), transparent 35%)" }} />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Un projet en tête ?</h2>
              <p className="max-w-2xl text-slate-200">
                Besoin d’un portfolio, d’un produit SaaS ou d’un design system solide ? Écrivons l’histoire ensemble.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
                <a href="mailto:malocoet@gmail.com">
                  <Mail className="h-4 w-4" />
                  Envoyer un message
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-white/30 text-slate-50 hover:bg-white/10"
              >
                <a
                  href="https://www.linkedin.com/in/malo-co%C3%ABt-00256b268/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BriefcaseBusiness className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {!prefersReducedMotion && !isLoading ? (
          <motion.div
            className="pointer-events-none fixed inset-x-0 bottom-6 z-20 flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            <div className="glass-button flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted shadow-[var(--shadow-card)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Prêt en production
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
