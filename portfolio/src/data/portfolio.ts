export type Project = {
  title: string;
  description: string;
  link: string;
  stack: string[];
};

export type Highlight = {
  title: string;
  subtitle: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const projects: Project[] = [
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

export const highlights: Highlight[] = [
  { title: "12+", subtitle: "projets shipped" },
  { title: "98%", subtitle: "Web Vitals green" },
  { title: "<50ms", subtitle: "latence edge" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/malo-coet", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/malo-co%C3%ABt-00256b268/",
    icon: "linkedin",
  },
  { name: "Mail", href: "mailto:malocoet@gmail.com", icon: "mail" },
];

export const aboutBadges = ["React 19", "Next.js 15", "TypeScript strict"];

export const aboutPillars = [
  {
    title: "Design Systems",
    copy:
      "Création de tokens, librairies shadcn/ui, documentation Storybook et pipelines CI pour garantir la cohérence multi-projets.",
  },
  {
    title: "Performance & DX",
    copy:
      "Budgets Web Vitals, profiling React/Next, stratégie edge/cache, outillage dev (lint, tests visuels, conventions Git).",
  },
  {
    title: "Mentoring produit",
    copy: "Ateliers design/tech, revues de code, pair programming et parcours onboarding pour équipes produit.",
  },
];
