"use client";

import React from "react";
import { motion } from "motion/react";
import { GithubLogo, Drop } from "@phosphor-icons/react";

export function FooterSection() {
  return (
    <footer className="py-20 md:py-28 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Drop weight="fill" className="w-5 h-5 text-teal-400" />
              <span className="text-lg font-bold tracking-tight text-zinc-50">
                Liquid Calendar
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[45ch] mb-8">
              A fluid, physics-based, offline-first smart calendar built for
              iOS. Internally codenamed Flux.
            </p>
            <a
              href="https://github.com/tanglefast23/liquid_calendar_gemini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 transition-all active:scale-[0.98]"
            >
              <GithubLogo weight="bold" className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>

          {/* Right — Links */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-8">
              <a href="#views" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                Views
              </a>
              <a href="#features" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                Features
              </a>
              <a href="#tech" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                Stack
              </a>
            </div>
            <p className="text-[11px] text-zinc-700 mt-4">
              Built with Expo, React Native, and a lot of spring physics.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
