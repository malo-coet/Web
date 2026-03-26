"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type LoadingScreenProps = {
  isLoading: boolean;
};

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-foreground"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <motion.div
            className="relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 shadow-[var(--shadow-glow)] backdrop-blur-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: prefersReducedMotion ? 0 : [0, 4, -3, 0],
            }}
            transition={{ duration: 0.9, ease: "easeOut", repeat: prefersReducedMotion ? 0 : Infinity, repeatType: "reverse", repeatDelay: 0.4 }}
          >
            <motion.div
              className="absolute inset-2 rounded-[20px] bg-gradient-to-br from-blue-500/60 via-indigo-400/50 to-cyan-300/50 blur-lg"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: prefersReducedMotion ? 0.4 : [0.35, 0.75, 0.35] }}
              transition={{ duration: 1.6, repeat: prefersReducedMotion ? 0 : Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center gap-1 text-center"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <span className="text-sm font-semibold tracking-wide text-slate-100">Portfolio</span>
              <span className="text-xs text-slate-300">Chargement</span>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
