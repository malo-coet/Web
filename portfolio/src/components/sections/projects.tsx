"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";
import Link from "next/link";

type ProjectsProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="space-y-8" aria-labelledby="projects-title">
      <div className="flex items-center justify-between">
        <div>
          <h2 id="projects-title" className="font-[var(--font-pixel)] text-2xl uppercase tracking-[0.18em] text-[var(--foreground)]">
            Projets récents
          </h2>
          <p className="text-[var(--foreground)]">Sélection de travaux IA et Full-Stack aux architectures robustes.</p>
        </div>
        <Button variant="subtle" className="gap-2">
          Tout voir
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group relative overflow-hidden rounded-none border-2 border-[var(--border)] bg-[var(--card)] p-6 outline-none shadow-[4px_4px_0_0_var(--border)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
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
                  "repeating-linear-gradient(90deg, rgba(78,82,69,0.25), rgba(78,82,69,0.25) 2px, transparent 2px, transparent 6px)",
              }}
            />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="text-[var(--foreground)]">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-none border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[var(--foreground)] shadow-[4px_4px_0_0_var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
                <Link href={project.link}>
                    <Button variant="ghost" className="gap-2 text-sm">
                        Ouvrir le cas
                        <ArrowUpRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
