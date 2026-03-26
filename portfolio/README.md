# Portfolio Next.js (dark mode + glassmorphism)

Page d’accueil portfolio animée (hero, projets, about, contact) avec micro-interactions, framer-motion, glassmorphism et dark mode. Composants au format shadcn/ui (`src/components/ui`).

## Stack
- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4 + tokens inline (`src/app/globals.css`)
- shadcn-style UI (`src/components/ui/button.tsx`, `hero-block-shadcnui.tsx`)
- Animations: Framer Motion
- Dark mode: next-themes (class-based)
- Icônes: lucide-react

## Installer
```bash
cd public/portfolio
npm install
npm run dev
```
Visiter http://localhost:3000 pour la page principale, http://localhost:3000/demo pour la démo isolée du hero shadcn.

## Scripts
- `npm run dev` : dev server
- `npm run build` : build prod
- `npm run start` : servir le build
- `npm run lint` : ESLint strict

## Structure utile
- `src/app/page.tsx` : page d’accueil complète (hero, projets, about, contact, loader)
- `src/app/demo/page.tsx` : rendu isolé du hero fourni
- `src/components/ui/hero-block-shadcnui.tsx` : composant hero à réutiliser
- `src/components/ui/button.tsx` : bouton shadcn/cva
- `src/components/theme-toggle.tsx` : switch dark/light
- `src/components/loading-screen.tsx` : écran de chargement animé
- `src/app/globals.css` : tokens couleurs, glassmorphism, backgrounds

## Personnalisation rapide
- Hero principal (`src/app/page.tsx`)
  - Titre/accroche : remplace le texte dans la section d’en-tête.
  - CTA : boutons dans le bloc hero (label + liens).
  - Statistiques : tableau `highlights` (titre + sous-titre).
  - Réseaux : remplace les `href` dans les icônes GitHub/LinkedIn/Mail.
- Projets (`projects` dans `src/app/page.tsx`)
  - Ajoute/édite `title`, `description`, `stack` et `link` pour chaque projet.
  - Le bouton « Ouvrir le cas » peut pointer vers un case study externe.
- À propos
  - Cartes dans la section `about` : édite le contenu des trois `<motion.div>`.
  - Badges stack (React/Next/TS) en haut de section.
- Contact
  - CTA email / LinkedIn : remplace les `href` dans les boutons.
- Hero fourni (shadcn)
  - Voir `src/components/ui/hero-block-shadcnui.tsx`. Texte et liens sont statiques, modifie selon besoin. Utilise le `Button` commun.
- Thème / glassmorphism
  - Couleurs et opacités : tokens au début de `src/app/globals.css` (variables `--background`, `--card`, `--accent`, etc.).
  - Rayons/ombres : `--radius`, `--shadow-card`, `--shadow-glow`.
  - Classes utilitaires : `.glass-panel`, `.glass-button`, `.dot-grid`, `.noise-overlay`.

## À savoir (shadcn/ui)
- Dossier par défaut des composants UI : `src/components/ui`. Garder cette convention pour la compatibilité shadcn.
- `button.tsx` suit la signature shadcn (variants `default | outline | ghost | subtle`, tailles `sm | default | lg | icon`).
- Ajoute d’autres composants : créer de nouveaux fichiers dans `src/components/ui` en réutilisant `cn` (`src/lib/utils.ts`).

## Animations & accessibilité
- Framer Motion : transitions d’entrée, hover micro-interactions, loader animé.
- Respect `prefers-reduced-motion` pour réduire les animations (loader et cartes).
- Dark mode persistant via `next-themes` (attribut `class`).

## Déploiement
```bash
npm run build
npm run start
```
Déployer ensuite sur Vercel ou tout hébergeur Node (dossier `.next`).
