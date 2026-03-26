"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutBadges, aboutPillars } from "@/data/portfolio";

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="grid gap-8 rounded-3xl border border-border/80 bg-card p-8 shadow-[var(--shadow-card)] backdrop-blur" aria-labelledby="about-title">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h2 id="about-title" className="text-3xl font-semibold">
            À propos
          </h2>
          <p className="text-muted">Craft, performance et pédagogie produit.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted">
          {aboutBadges.map((badge) => (
            <span key={badge} className="rounded-full bg-foreground/5 px-3 py-1">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {aboutPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="glass-panel relative rounded-2xl p-5"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: "easeOut", delay: index * 0.05 }}
          >
            <h3 className="mb-2 text-lg font-semibold">{pillar.title}</h3>
            <p className="text-muted text-sm">{pillar.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
