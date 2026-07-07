'use client';

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useInViewOnce } from "@/lib/lazy";
import { skillGroups, skills } from "@/lib/data";

// Shared skeleton — identical whether we're waiting to scroll into view or
// waiting for the dynamic chunk to load, so the swap is seamless and the
// 420px box reserves space (no layout shift).
const GalaxySkeleton = () => (
  <div className="h-[420px] animate-pulse rounded-[2rem] border border-white/10 bg-background/80" />
);

const SkillsGalaxy = dynamic(() => import("@/components/three/SkillsGalaxy").then((mod) => mod.SkillsGalaxy), {
  ssr: false,
  loading: () => <GalaxySkeleton />,
});

export function SkillsGalaxySection() {
  // Skills is below the fold — defer downloading/executing the Three.js chunk
  // until the section is about to enter the viewport.
  const galaxyRef = useRef<HTMLDivElement>(null);
  const showGalaxy = useInViewOnce(galaxyRef);

  return (
    <section id="skills" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-background/60 p-8 shadow-[0_0_70px_rgba(217,70,239,0.08)] backdrop-blur-xl lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
              <Sparkles className="h-4 w-4" />
              3D Skills Galaxy
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              A living map of the toolkit I love working with.
            </h2>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Drag and rotate the galaxy, then hover or click the nodes — each
            cluster is a part of my stack, from languages to data &amp; BI.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div ref={galaxyRef}>
            {showGalaxy ? <SkillsGalaxy skills={skills} /> : <GalaxySkeleton />}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const items = skills.filter((s) => s.group === group.key);
              return (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${group.gradient}`} />
                    <p className="text-base font-semibold text-white">{group.key}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <span
                        key={s.name}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
