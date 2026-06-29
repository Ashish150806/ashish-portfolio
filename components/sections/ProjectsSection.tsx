'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubMark } from "@/components/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Featured work</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Products and experiments I&apos;ve built.
            </h2>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Each project pairs a sharp UI with a practical problem — from a 100+
            society platform to a TF-IDF search engine.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const hasLive = Boolean(project.liveUrl);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-white/10 bg-background/70 shadow-[0_0_50px_rgba(139,92,246,0.08)] backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-[0_0_60px_rgba(217,70,239,0.22)]">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                      <div className="rounded-full border border-violet-400/25 bg-violet-500/10 p-2 text-violet-200 transition group-hover:bg-violet-500/20">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-4 pt-2">
                      {hasLive && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-200"
                        >
                          <ExternalLink className="h-4 w-4" /> Live
                        </Link>
                      )}
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-white"
                      >
                        <GithubMark className="h-4 w-4" /> GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
