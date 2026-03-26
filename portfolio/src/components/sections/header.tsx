import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function HeaderBar() {
  return (
	<header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
	  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
		<div className="flex items-center gap-3" aria-label="Identité du site">
		  <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-600 to-slate-900 shadow-[var(--shadow-glow)]" />
		  <div className="flex flex-col text-sm font-semibold leading-4">
			<span>Folio</span>
			<span className="text-xs text-muted">Full Stack / Design Systems</span>
		  </div>
		</div>
		<nav aria-label="Navigation principale" className="flex items-center gap-3">
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
		</nav>
	  </div>
	</header>
  );
}

