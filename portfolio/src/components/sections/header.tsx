import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function HeaderBar() {
  return (
	<header className="sticky top-0 z-30 border-b-2 border-[var(--border)] bg-[var(--background)]">
	  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
		<div className="flex items-center gap-3" aria-label="Identité du site">
		  <div/>
			<Image
				src="/pp.jpeg"
				alt="Photo de profil"
				width={40}
				height={40}
				className="object-cover shadow-sm border-2 border-[var(--accent)]"
			/>
		  <div className="flex flex-col text-xs font-semibold leading-4 uppercase tracking-[0.12em] text-[var(--foreground)]">
			<span className="font-[var(--font-pixel)] text-sm text-[var(--foreground)]">COËT Malo</span>
			<span className="text-[10px] text-[var(--foreground)]">étudiant informatique</span>
		  </div>
		</div>
		<nav aria-label="Navigation principale" className="flex items-center gap-3">
		  <Button asChild variant="subtle" size="sm" className="text-[11px]">
			<Link href="#projects">Projets</Link>
		  </Button>
		  <Button asChild variant="subtle" size="sm" className="text-[11px]">
			<Link href="#about">Profil</Link>
		  </Button>
		  <Button asChild variant="subtle" size="sm" className="text-[11px]">
			<Link href="#contact">Contact</Link>
		  </Button>
		  <ThemeToggle />
		</nav>
	  </div>
	</header>
  );
}

