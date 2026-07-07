'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Clock3, MapPin, Users } from "lucide-react";
import { experience, societies } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-background/60 p-8 shadow-[0_0_60px_rgba(139,92,246,0.10)] backdrop-blur-xl lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
            <Briefcase className="h-4 w-4" />
            Journey
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Internships, research, and the products I&apos;ve shipped along the way.
          </h2>
        </motion.div>

        {/* Work timeline */}
        <div className="relative ml-3 border-l border-violet-400/20 pl-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.title + item.organization}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative mb-8 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <span className="absolute -left-[2.6rem] top-7 h-4 w-4 rounded-full border-4 border-background bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.9)]" />

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                {/* details */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-violet-200">{item.organization}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
                      <Clock3 className="h-3.5 w-3.5" />
                      {item.period}
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5">{item.mode}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {item.location}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-sm leading-7 text-muted-foreground">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* screenshot */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-background/80 shadow-lg shadow-violet-950/30">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-2 truncate text-[11px] text-muted-foreground">{item.organization}</span>
                  </div>
                  <Image
                    src={item.image}
                    alt={`${item.organization} project screenshot`}
                    width={1200}
                    height={750}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & societies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-sm text-fuchsia-200">
            <Users className="h-4 w-4" />
            Leadership &amp; Societies
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {societies.map((soc) => (
              <div
                key={soc.organization}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-lg font-semibold text-white">{soc.organization}</p>
                <p className="mt-1 text-sm text-muted-foreground">{soc.note}</p>
                <div className="mt-4 space-y-3 border-l border-fuchsia-400/20 pl-4">
                  {soc.roles.map((role) => (
                    <div key={role.role} className="relative">
                      <span className="absolute -left-[1.32rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-fuchsia-400" />
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-white">{role.role}</p>
                        <span className="text-xs text-muted-foreground">{role.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
