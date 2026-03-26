import { BriefcaseBusiness, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-none border-2 border-[var(--border)] bg-[var(--card)] px-8 py-12 text-[var(--foreground)] shadow-[4px_4px_0_0_var(--border)]"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 opacity-25" style={{ background: "repeating-linear-gradient(90deg, rgba(78,82,69,0.5), rgba(78,82,69,0.5) 2px, transparent 2px, transparent 6px)" }} />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h2 id="contact-title" className="font-[var(--font-pixel)] text-2xl uppercase tracking-[0.18em] text-[var(--foreground)]">
            Envie de discuter ?
          </h2>
          <p className="max-w-2xl text-[var(--foreground)]">
            Discutons d’un parcours construit autour de la rigueur, de l’adaptabilité et d’expériences concrètes.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
          >
            <a
                href="https://www.linkedin.com/in/malo-co%C3%ABt-00256b268/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir LinkedIn"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:malocoet@gmail.com" aria-label="Envoyer un mail">
              <Mail className="h-4 w-4" />
              Envoyer un mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
