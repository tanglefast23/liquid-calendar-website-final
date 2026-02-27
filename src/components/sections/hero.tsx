"use client";

import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedCarousel } from "@/components/ui/animated-carousel";
import { Drop, ArrowDown, AppleLogo } from "@phosphor-icons/react";
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

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left — Text content (asymmetric, left-aligned per taste skill) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="lg:pr-4"
          >


            <h1 className="text-[5.5rem] sm:text-[7.5rem] md:text-[8.5rem] lg:text-[10rem] font-black tracking-[-0.06em] leading-[0.8] mb-8 select-none">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-500 pb-2">
                Liquid
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-teal-200 via-teal-400 to-teal-700 filter drop-shadow-[0_0_30px_rgba(45,212,191,0.4)] pb-4">
                Calendar.
              </span>
            </h1>

            <TextGenerateEffect
              words="A physics-based calendar where time breathes, hours stretch, and your schedule flows like water under your fingertips."
              className="max-w-[45ch] text-lg md:text-xl font-medium leading-relaxed"
              duration={0.4}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100, damping: 20 }}
              className="flex items-center gap-4 mt-10"
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black border border-zinc-800 text-sm font-semibold text-white hover:bg-zinc-900 transition-all"
              >
                <AppleLogo weight="fill" className="w-5 h-5 mb-0.5" />
                <div className="flex flex-col items-start leading-none pr-2">
                  <span className="text-[10px] text-zinc-400">Download on the</span>
                  <span className="text-sm">App Store</span>
                </div>
                <div className="w-[1px] h-6 bg-zinc-700/50" />
                <Drop weight="fill" className="w-5 h-5 text-teal-400" />
              </a>
              <a
                href="#views"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 text-zinc-950 text-sm font-semibold hover:bg-teal-400 transition-colors active:scale-[0.98]"
              >
                Explore the Views
                <ArrowDown weight="bold" className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Phone mockup with Monthly view */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
            className="flex justify-center md:justify-center perspective-[1200px]"
          >
            <div className="relative">
              {/* Carousel Mockup */}
              <AnimatedCarousel
                className="w-[260px] md:w-[300px]"
                items={[
                  "/screenshots/screen_01_monthly_view.png",
                  "/screenshots/screen_02_monthly_view_wide.png",
                  "/screenshots/screen_03_monthly_view_zoom.png",
                  "/screenshots/screen_04_monthly_view_dark_mode.png",
                  "/screenshots/screen_05_monthly_view_multi_add.png",
                  "/screenshots/screen_06_weekly_view_one_page.png",
                  "/screenshots/screen_07_weekly_view_collasped.png",
                  "/screenshots/screen_08_daily_view_compact.png",
                  "/screenshots/screen_08_weekly_view_scrub.png",
                  "/screenshots/screen_09_daily_view_text_size.png",
                ]}
              />

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
