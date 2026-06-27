'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured work</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">A curated set of products and interactive experiments.</h2>
          </div>
          <p className="max-w-2xl text-slate-300">Each project is designed as a story: a sharp UI, a practical problem, and a polished outcome.</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} whileHover={{ y: -8, scale: 1.01, rotate: -0.5 }} className={`${project.span} group`}>
              <Card className="h-full overflow-hidden border-white/10 bg-slate-950/80 shadow-[0_0_50px_rgba(59,130,246,0.09)] backdrop-blur-xl">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <div className="rounded-full border border-cyan-400/25 bg-cyan-500/10 p-2 text-cyan-200">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-7 text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-3">
                    <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                      Live Demo
                    </Link>
                    <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white">
                      <Globe className="h-4 w-4" /> GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
