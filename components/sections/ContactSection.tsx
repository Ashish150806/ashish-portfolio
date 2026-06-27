'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactLinks, socialLinks } from "@/lib/data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="px-6 pb-20 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something memorable.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            I&apos;m currently open to opportunities and always excited to hear about thoughtful product ideas, internships, or modern web builds.
          </p>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200">
            Availability: <span className="font-semibold text-white">Open to opportunities</span>
          </div>
          <div className="space-y-3">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-white">
                <span>{item.label}</span>
                <span className="font-medium text-white">{item.value}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-cyan-500/10 p-6">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">Name</label>
              <input id="name" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">Email</label>
              <input id="email" type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="message">Message</label>
              <textarea id="message" rows={4} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Tell me about your idea..." />
            </div>
            <Button type="submit" className="w-full gap-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400">
              Send Message <Send className="h-4 w-4" />
            </Button>
            {submitted && <p className="text-sm text-cyan-300">Thanks — this UI is ready for your real backend later.</p>}
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
                {item.label === "GitHub" || item.label === "LinkedIn" ? <Globe className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
