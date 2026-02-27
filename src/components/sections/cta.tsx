"use client";

import React from "react";
import { motion } from "motion/react";
import { GithubLogo, ArrowRight } from "@phosphor-icons/react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-50 mb-4">
            Time you can actually feel
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            Liquid Calendar is open source and built in public. Follow
            development, explore the code, or contribute.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/tanglefast23/liquid_calendar_gemini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-500 text-zinc-950 text-sm font-semibold hover:bg-teal-400 transition-colors active:scale-[0.98]"
            >
              <GithubLogo weight="bold" className="w-4 h-4" />
              View on GitHub
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
