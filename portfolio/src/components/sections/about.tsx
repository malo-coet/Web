"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutBadges, aboutPillars } from "@/data/portfolio";

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="grid gap-8 rounded-none border-2 border-[var(--border)] bg-[var(--card)] p-8 shadow-[4px_4px_0_0_var(--border)]" aria-labelledby="about-title">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h2 id="about-title" className="font-[var(--font-pixel)] text-2xl uppercase tracking-[0.18em] text-[var(--foreground)]">
            À propos
          </h2>
          <p className="text-[var(--foreground)]">Conception, implémentation et optimisation.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-[12px] text-muted">
          {aboutBadges.map((badge) => (
            <span key={badge} className="rounded-none border-2 border-[var(--border)] bg-[var(--background)] px-3 py-1 uppercase tracking-[0.14em] text-[var(--foreground)] shadow-[4px_4px_0_0_var(--border)]">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {aboutPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="glass-panel relative overflow-hidden rounded-none p-5"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: "easeOut", delay: index * 0.05 }}
          >
            <div className="absolute inset-0 scanlines" />
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{pillar.title}</h3>
              <p className="text-[var(--foreground)] text-sm">{pillar.copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
