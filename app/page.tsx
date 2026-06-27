'use client';

import { useEffect, useState } from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsGalaxySection } from "@/components/sections/SkillsGalaxySection";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <main className={isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}>
      <HeroSection isDark={isDark} toggleTheme={() => setIsDark((value) => !value)} />
      <AboutSection />
      <SkillsGalaxySection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
