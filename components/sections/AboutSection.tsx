'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_0_60px_rgba(59,130,246,0.08)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">I bridge product, code, and data into polished digital experiences.</h2>
          <p className="text-lg leading-8 text-slate-300">
            I&apos;m Ashish — a software engineering student at DTU with a strong instinct for turning real-world problems into elegant web products. My work blends full-stack development, thoughtful UI, and analytical depth.
          </p>
          <p className="text-lg leading-8 text-slate-300">
            From authentication systems to interactive portfolios, I focus on building experiences that are performant, readable, and genuinely useful.
          </p>
          <Button asChild variant="outline" className="gap-2 border-cyan-400/30 bg-white/5 text-slate-100 hover:bg-cyan-500/10">
            <a href="#contact">
              Let&apos;s talk <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-slate-950/95 p-4">
            <Image src="/profile-placeholder.svg" alt="Ashish portrait placeholder" width={900} height={900} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
