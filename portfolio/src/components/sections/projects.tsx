"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";

type ProjectsProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="space-y-8" aria-labelledby="projects-title">
      <div className="flex items-center justify-between">
        <div>
          <h2 id="projects-title" className="text-3xl font-semibold">
            Projets récents
          </h2>
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
            className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 backdrop-blur-lg outline-none focus-visible:ring-2 focus-visible:ring-accent"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.55, ease: "easeOut", delay: index * 0.05 }}
            tabIndex={0}
            aria-label={`Projet ${project.title}`}
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(91,127,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.14), transparent 35%)",
              }}
            />
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
  );
}
