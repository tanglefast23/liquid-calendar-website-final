"use client";

import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MonthlyViewMockup } from "@/components/mockups/monthly-view";
import { Drop, ArrowDown } from "@phosphor-icons/react";
import { useMockupTheme } from "@/lib/mockup-theme";

export function HeroSection() {
  const { theme } = useMockupTheme();
  const phoneFrameBg = theme === "dark" ? "bg-zinc-900" : "bg-zinc-200";
  const phoneBorder = theme === "dark" ? "border-zinc-700/50" : "border-zinc-400/50";
  const notchBg = theme === "dark" ? "bg-zinc-900" : "bg-zinc-200";

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Ambient gradient orb — top-right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-600/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left — Text content (asymmetric, left-aligned per taste skill) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="md:pr-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 mb-8"
            >
              <Drop weight="fill" className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-zinc-400">
                Built for iOS
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-zinc-50 mb-6">
              Liquid
              <br />
              <span className="text-teal-400">Calendar</span>
            </h1>

            <TextGenerateEffect
              words="A physics-based calendar where time breathes, hours stretch, and your schedule flows like water under your fingertips."
              className="max-w-[50ch]"
              duration={0.4}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100, damping: 20 }}
              className="flex items-center gap-4 mt-10"
            >
              <a
                href="#views"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 text-zinc-950 text-sm font-semibold hover:bg-teal-400 transition-colors active:scale-[0.98]"
              >
                Explore the Views
                <ArrowDown weight="bold" className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/tanglefast23/liquid_calendar_gemini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 transition-all"
              >
                View Source
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Phone mockup with Monthly view */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
            className="flex justify-center md:justify-end perspective-[1200px]"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className={`w-[260px] md:w-[300px] aspect-[9/19.5] rounded-[2.5rem] border-[3px] ${phoneBorder} ${phoneFrameBg} p-[6px] shadow-[0_20px_60px_-15px_rgba(13,148,136,0.15)] transition-colors duration-300`}>
                {/* Notch */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] ${notchBg} rounded-b-2xl z-10 transition-colors duration-300`} />
                {/* Screen */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <MonthlyViewMockup />
                </div>
              </div>

              {/* Floating accent ring */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-teal-500/20"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 rounded-full border border-teal-500/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown weight="bold" className="w-5 h-5 text-zinc-600" />
      </motion.div>
    </section>
  );
}
