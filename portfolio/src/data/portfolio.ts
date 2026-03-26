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

export type CompanyCollaboration = {
  name: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "HARMONIA : AI Audio Engine",
    description:
        "Système d'inférence basé sur BERT-tiny pour la génération de paramètres VST. Mapping de prompts textuels vers des presets JUCE/C++ via une API optimisée.",
    link: "https://github.com/Harmonia-EIP/Harmonia-AI",
    stack: ["Python", "PyTorch", "Flask", "C++"],
  },
  {
    title: "NEMITIS : SaaS / Full-Stack",
    description:
        "Participation au développement et à l’évolution de la plateforme Nemitis : amélioration, nouvelles fonctionnalités et prise en compte des retours utilisateurs.",
    link: "https://www.nemitis.com/",
    stack: ["Full-stack", "Angular", "NestJS"],
  },
];

export const highlights: Highlight[] = [
  { title: "5 ans", subtitle: "Expérience académique" },
  { title: "2", subtitle: "Expériences pro" },
  { title: ">30", subtitle: "Technos explorés" },
];

export const techMarqueeItems = [
  "C++",
  "Docker",
  "Git",
  "Python",
  "JS",
  "GraphQL",
  "SQL",
  "Windows",
  "Linux",
  "MacOS",
  "C",
  "Assembleur",
  "React",
  "HTML",
  "PHP",
  "Tensorflow",
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

export const companyCollaborations: CompanyCollaboration[] = [
  { name: "Visiativ", image: "/visiativ.jpg", link: "https://www.visiativ.com/" },
  { name: "Nemitis", image: "/Nemitis.png", link: "https://www.nemitis.com/" },
];

export const aboutBadges = ["C", "Pyhton", "GraphQL"];

export const aboutPillars = [
  {
    title: "SOFTWARE ENGINEERING",
    copy:
        "Conception de systèmes critiques et architectures distribuées. Expertise consolidée via le cursus Epitech et une immersion académique à Beijing Jiaotong University en Chine.",
  },
  {
    title: "AI RESEARCH & DEV",
    copy:
        "Implémentation de modèles de Deep Learning (CNN) et NLP (BERT). Développement d'Harmonia : interface IA pour le traitement du signal et la génération de paramètres audio.",
  },
  {
    title: "INDUSTRIAL AUTOMATION",
    copy:
        "Optimisation de workflows et automatisation de processus métiers (expérience Visiativ). Maîtrise de la gestion de données SQL et du déploiement de solutions scalables.",
  },
];
