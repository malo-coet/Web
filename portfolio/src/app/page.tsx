import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeaderBar } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { highlights, projects, socialLinks, techMarqueeItems, companyCollaborations } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground noise-overlay">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 blur-3xl retro-brush" />
        <div className="absolute left-[8%] top-[16%] h-64 w-64 rounded-full bg-[rgba(32,246,255,0.24)]" />
        <div className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-[rgba(255,58,242,0.22)]" />
        <div className="absolute bottom-[12%] right-[22%] h-52 w-52 rounded-full bg-[rgba(123,91,255,0.2)]" />
      </div>

      <HeaderBar />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-14 lg:px-8">
        <HeroSection highlights={highlights} socialLinks={socialLinks} techItems={techMarqueeItems} companies={companyCollaborations} />
        <ProjectsSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
