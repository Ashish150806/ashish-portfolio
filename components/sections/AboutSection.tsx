'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { education, stats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-background/60 p-8 shadow-[0_0_60px_rgba(139,92,246,0.10)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            I turn real-world problems into polished software.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            I&apos;m Ashish — a B.Tech Software Engineering student at Delhi
            Technological University. I build full-stack web apps with React,
            Next.js, and Express, with a solid grounding in data structures,
            algorithms, and OOP.
          </p>
          <p className="text-lg leading-8 text-muted-foreground">
            I&apos;m comfortable across the stack — from designing REST APIs and
            authentication to crafting interactive, responsive interfaces — and I
            enjoy blending engineering with data to ship things that are genuinely
            useful.
          </p>

          <div className="space-y-3 pt-1">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-white">{edu.institution}</p>
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {edu.degree} · {edu.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            className="gap-2 border-violet-400/30 bg-white/5 text-foreground hover:bg-violet-500/10"
          >
            <a href="#contact">
              Let&apos;s talk <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 via-background/80 to-background/95 p-4"
          >
            <Image
              src="/ashish-design.jpeg"
              alt="Portrait of Ashish, Software Engineering student at DTU"
              width={1085}
              height={1450}
              quality={70}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
            />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <p className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
