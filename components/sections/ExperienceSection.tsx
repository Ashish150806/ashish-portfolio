'use client';

import { motion } from "framer-motion";
import { Clock3, Sparkles } from "lucide-react";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_0_60px_rgba(56,189,248,0.08)] backdrop-blur-xl lg:p-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Journey
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Experience that blends research, internships, and product growth.</h2>
        </motion.div>

        <div className="relative ml-4 border-l border-cyan-400/20 pl-8">
          {experience.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="relative mb-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -left-[2.15rem] top-6 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-slate-400">{item.organization}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                  <Clock3 className="h-3.5 w-3.5" />
                  {item.period}
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
