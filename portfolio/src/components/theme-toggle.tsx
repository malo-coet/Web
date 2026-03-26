"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const resolved = mounted ? (theme === "system" ? systemTheme : theme) ?? resolvedTheme : undefined;
  const isResolved = typeof resolved === "string";
  const isDark = resolved === "dark";
  const label = isResolved ? (isDark ? "Basculer en thème clair" : "Basculer en thème sombre") : "Chargement du thème";

  return (
    <Button
      suppressHydrationWarning
      aria-label={label}
      aria-pressed={isResolved ? isDark : false}
      variant="ghost"
      size="icon"
      disabled={!isResolved}
      aria-busy={!isResolved}
      onClick={() => isResolved && setTheme(isDark ? "light" : "dark")}
      className="glass-button transition-transform duration-200 hover:-translate-y-0.5"
    >
      {isResolved ? (
        isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        <span className="h-5 w-5 rounded-full border border-border/60 bg-foreground/10" />
      )}
    </Button>
  );
}
