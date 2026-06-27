'use client';

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { skills } from "@/lib/data";

const SkillsGalaxy = dynamic(() => import("@/components/three/SkillsGalaxy").then((mod) => mod.SkillsGalaxy), {
  ssr: false,
  loading: () => <div className="h-[420px] animate-pulse rounded-[2rem] border border-white/10 bg-slate-900/80" />,
});

export function SkillsGalaxySection() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_0_70px_rgba(34,197,94,0.08)] backdrop-blur-xl lg:p-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              3D Skills Galaxy
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A living map of the toolkit I love working with.</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Drag, rotate, and click the nodes to explore my strongest technologies across frontend, backend, data, and tooling.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SkillsGalaxy skills={skills} />
          <div className="space-y-4">
            {[
              { title: "Frontend", color: "from-sky-500 to-cyan-400" },
              { title: "Backend", color: "from-emerald-500 to-lime-400" },
              { title: "Data / ML", color: "from-fuchsia-500 to-violet-400" },
              { title: "Tools", color: "from-orange-500 to-amber-400" },
            ].map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${group.color}`} />
                <p className="mt-3 text-lg font-semibold text-white">{group.title}</p>
                <p className="mt-1 text-sm text-slate-400">Color-coded clusters for the technologies I use most confidently.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
