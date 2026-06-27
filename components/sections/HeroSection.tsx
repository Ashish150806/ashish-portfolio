'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Moon, Send, Sparkles, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/three/HeroBackground";
import { heroRoles, socialLinks } from "@/lib/data";

type HeroSectionProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export function HeroSection({ isDark, toggleTheme }: HeroSectionProps) {
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 55 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (typedRole === currentRole) {
          setIsDeleting(true);
          return;
        }
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
        return;
      }

      if (typedRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        return;
      }

      setTypedRole((prev) => prev.slice(0, -1));
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [typedRole, roleIndex, isDeleting]);

  return (
    <section className="relative isolate overflow-hidden px-6 py-10 sm:px-8 lg:px-12">
      <HeroBackground />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_0_80px_rgba(6,182,212,0.12)] backdrop-blur-xl sm:p-8 lg:p-12">
        <header className="flex items-center justify-between">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Ashish</div>
          <Button variant="outline" size="sm" onClick={toggleTheme} className="gap-2 border-cyan-400/30 bg-white/5 text-slate-100 hover:bg-white/10">
            {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? "Light" : "Dark"}
          </Button>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Building premium web experiences with a product mindset
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Hi, I&apos;m Ashish</span>
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                {typedRole}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              I design and build polished full-stack products, immersive interfaces, and data-informed experiences that feel sharp and thoughtful.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                <Link href="#projects">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-white/15 bg-white/5 text-slate-100 hover:bg-white/10">
                <Link href="#contact">
                  Connect <Send className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <Link key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:text-white">
                  {item.label === "GitHub" || item.label === "LinkedIn" ? <Globe className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                  <span>{item.handle}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-slate-950/95 p-6 shadow-2xl shadow-cyan-950/40">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Currently</p>
            <p className="mt-3 text-2xl font-semibold text-white">Open to opportunities</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              I am seeking collaborative roles where I can contribute to meaningful products, growth, and exceptional user value.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Focus: full-stack engineering, data-driven UI, and product refinement.</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Location: New Delhi, India • Remote-ready.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
