import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeaderBar } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { highlights, projects, socialLinks } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
        <div className="absolute left-[10%] top-[12%] h-64 w-64 rounded-full bg-blue-500/20" />
        <div className="absolute right-[6%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/20" />
        <div className="absolute bottom-[10%] right-[22%] h-52 w-52 rounded-full bg-emerald-400/15" />
      </div>

      <HeaderBar />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-14 lg:px-8">
        <HeroSection highlights={highlights} socialLinks={socialLinks} />
        <ProjectsSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
