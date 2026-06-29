'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/icons";
import { HeroBackground } from "@/components/three/HeroBackground";
import { heroRoles, profile, socialLinks } from "@/lib/data";

export function HeroSection() {
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 55 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (typedRole === currentRole) {
          window.setTimeout(() => setIsDeleting(true), 1100);
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
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-40">
      <HeroBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
            <Sparkles className="h-4 w-4" />
            {profile.tagline}
          </div>

          <h1 className="text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="block text-foreground/90">Hi, I&apos;m</span>
            <span className="mt-2 block text-gradient-name">{profile.name}</span>
          </h1>

          <p className="mt-5 flex items-center gap-2 text-xl text-muted-foreground sm:text-2xl">
            <span className="font-medium text-fuchsia-300">{typedRole}</span>
            <span className="inline-block h-6 w-[2px] animate-pulse bg-fuchsia-400" />
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-[0_0_30px_rgba(167,139,250,0.35)] hover:opacity-90"
            >
              <Link href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-white/15 bg-white/5 text-foreground hover:bg-white/10"
            >
              <Link href="#contact">
                Contact Me <Send className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground transition hover:border-violet-400/50 hover:text-white"
              >
                <SocialIcon name={item.icon} className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-[2rem] border border-violet-400/15 bg-gradient-to-br from-violet-500/10 via-background/80 to-background/95 p-6 shadow-2xl shadow-violet-950/40 backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Currently</p>
          <p className="mt-3 flex items-center gap-2 text-2xl font-semibold text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Software Development Intern at Scott Law Firm — open to collaborative
            roles where I can build meaningful products.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Focus: full-stack engineering, data-driven UI, and product refinement.
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
              <MapPin className="h-4 w-4 text-violet-300" />
              {profile.location} • Remote-ready
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
