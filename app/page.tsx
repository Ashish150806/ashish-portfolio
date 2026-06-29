import { Navbar } from "@/components/sections/Navbar";
import { OrbBackground } from "@/components/sections/OrbBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsGalaxySection } from "@/components/sections/SkillsGalaxySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <OrbBackground />
      <Navbar />
      <main id="top" className="text-foreground">
        <HeroSection />
        <AboutSection />
        <SkillsGalaxySection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
