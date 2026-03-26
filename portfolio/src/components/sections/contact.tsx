import { BriefcaseBusiness, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-8 py-12 text-slate-50 shadow-[var(--shadow-glow)]"
      aria-labelledby="contact-title"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(91,127,255,0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.2), transparent 35%)",
        }}
      />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h2 id="contact-title" className="text-3xl font-semibold">
            Un projet en tête ?
          </h2>
          <p className="max-w-2xl text-slate-200">
            Besoin d’un portfolio, d’un produit SaaS ou d’un design system solide ? Écrivons l’histoire ensemble.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2 bg-white text-slate-900 transition-transform hover:-translate-y-0.5 hover:bg-slate-100">
            <a href="mailto:malocoet@gmail.com" aria-label="Envoyer un mail">
              <Mail className="h-4 w-4" />
              Envoyer un message
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-white/30 text-slate-50 transition-transform hover:-translate-y-0.5 hover:bg-white/10"
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
        </div>
      </div>
    </section>
  );
}
