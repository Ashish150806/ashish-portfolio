'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/icons";
import { contactLinks, profile, socialLinks } from "@/lib/data";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-6 pb-24 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-background/60 p-8 shadow-[0_0_60px_rgba(217,70,239,0.10)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Let&apos;s build something memorable.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              I&apos;m open to internships, collaborations, and thoughtful product
              builds. Drop a message or reach me directly.
            </p>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available: <span className="font-semibold text-white">Open to opportunities</span>
            </div>
            <div className="space-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground transition hover:border-violet-400/30 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <SocialIcon name={item.icon} className="h-4 w-4 text-violet-300" />
                    {item.label}
                  </span>
                  <span className="font-medium text-white">{item.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-background/95 via-background/80 to-violet-500/10 p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="name">Name</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-background/80 px-4 py-3 text-foreground outline-none transition focus:border-violet-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-background/80 px-4 py-3 text-foreground outline-none transition focus:border-violet-400/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-background/80 px-4 py-3 text-foreground outline-none transition focus:border-violet-400/50"
                  placeholder="Tell me about your idea..."
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-[0_0_24px_rgba(167,139,250,0.35)] hover:opacity-90"
              >
                Send Message <Send className="h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Opens your email client — no data is stored.
              </p>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground transition hover:border-violet-400/40 hover:text-white"
                >
                  <SocialIcon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <footer className="mt-10 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
          <p className="font-mono uppercase tracking-[0.3em] text-gradient-name">{profile.shortName}</p>
          <p>© {2026} {profile.name}. Built with Next.js, Three.js &amp; Framer Motion.</p>
        </footer>
      </div>
    </section>
  );
}
