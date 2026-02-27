"use client";

import React from "react";
import { motion } from "motion/react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

/* ─── Animated Feature Illustrations ─── */

function MagneticTetherVis() {
  const hours = [8, 9, 10, 11, 12, 13, 14];
  const heights = [18, 14, 38, 32, 14, 28, 14]; // accordion effect — busy hours inflate
  return (
    <div className="h-full w-full rounded-xl bg-zinc-900/80 border border-zinc-800/50 flex flex-col justify-center p-6 overflow-hidden">
      <span className="text-[9px] font-semibold uppercase tracking-[2px] text-teal-400/60 mb-4">
        Timeline reacts to your thumb
      </span>
      <div className="flex flex-col gap-[2px]">
        {hours.map((h, i) => (
          <motion.div
            key={h}
            className="flex items-center gap-2"
            initial={{ height: 14 }}
            animate={{ height: heights[i] }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: i * 0.12,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          >
            <span className="text-[7px] font-mono text-zinc-600 w-[24px] text-right shrink-0">
              {h > 12 ? `${h - 12}p` : `${h}a`}
            </span>
            <motion.div
              className="flex-1 rounded-[3px]"
              style={{
                height: "100%",
                backgroundColor: heights[i] > 20 ? "rgba(13,148,136,0.25)" : "rgba(63,63,70,0.15)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DormancyVis() {
  const blocks = [
    { label: "Sleep", h: 6, color: "rgba(63,63,70,0.1)", collapsed: true },
    { label: "7 AM", h: 14, color: "rgba(59,130,246,0.2)", collapsed: false },
    { label: "9 AM", h: 20, color: "rgba(34,197,94,0.25)", collapsed: false },
    { label: "Dead zone", h: 4, color: "rgba(63,63,70,0.08)", collapsed: true },
    { label: "2 PM", h: 18, color: "rgba(255,107,107,0.2)", collapsed: false },
    { label: "5 PM", h: 16, color: "rgba(13,148,136,0.25)", collapsed: false },
    { label: "Evening", h: 4, color: "rgba(63,63,70,0.08)", collapsed: true },
  ];

  return (
    <div className="h-full w-full rounded-xl bg-zinc-900/80 border border-zinc-800/50 flex flex-col justify-center p-6 overflow-hidden">
      <span className="text-[9px] font-semibold uppercase tracking-[2px] text-emerald-400/60 mb-4">
        Dead space collapses automatically
      </span>
      <div className="flex gap-[3px] items-end h-[140px]">
        {blocks.map((block, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[3px] relative flex items-end justify-center overflow-hidden"
            initial={{ height: "100%" }}
            animate={{
              height: block.collapsed ? "12%" : `${block.h * 5}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.8 + i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
            }}
            style={{ backgroundColor: block.color }}
          >
            {!block.collapsed && (
              <span className="text-[6px] font-semibold text-zinc-500 pb-1">
                {block.label}
              </span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[6px] text-zinc-700">Collapsed</span>
        <span className="text-[6px] text-emerald-500/60">Active hours expanded</span>
      </div>
    </div>
  );
}

function SmartInputVis() {
  const prompts = [
    "Lunch with Mika tomorrow at noon",
    "Team standup every weekday 9am",
    "Dentist next Thursday 2:30pm",
  ];

  return (
    <div className="h-full w-full rounded-xl bg-zinc-900/80 border border-zinc-800/50 flex flex-col justify-center p-6 overflow-hidden">
      <span className="text-[9px] font-semibold uppercase tracking-[2px] text-amber-400/60 mb-4">
        Natural language, zero friction
      </span>
      <div className="space-y-3">
        {prompts.map((prompt, i) => (
          <motion.div
            key={i}
            className="rounded-lg bg-zinc-800/60 border border-zinc-700/30 px-3 py-2 flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.8, duration: 0.4 }}
          >
            <motion.div
              className="w-[3px] h-full min-h-[14px] rounded-full bg-amber-400/50 shrink-0"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
            />
            <span className="text-[9px] text-zinc-400 font-mono">{prompt}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LoupeVis() {
  /* Simulates the long-press loupe: one cell scales up while neighbours dim */
  const cells = [
    { day: 9, events: [{ title: "Standup", color: "#3B82F6" }], density: 1 },
    { day: 10, events: [], density: 0 },
    {
      day: 11,
      events: [
        { title: "Sprint Plan", color: "#22c55e" },
        { title: "Dentist", color: "#FF6B6B" },
        { title: "Yoga", color: "#0d9488" },
      ],
      density: 3,
      isExpanded: true,
    },
    { day: 12, events: [{ title: "Board Pres.", color: "#f59e0b" }], density: 1 },
    { day: 13, events: [], density: 0 },
  ];

  return (
    <div className="h-full w-full rounded-xl bg-zinc-900/80 border border-zinc-800/50 flex flex-col justify-center p-6 overflow-hidden">
      <span className="text-[9px] font-semibold uppercase tracking-[2px] text-rose-400/60 mb-4">
        Long-press to magnify
      </span>
      <div className="flex items-center gap-[4px] h-[160px]">
        {cells.map((cell, i) => (
          <motion.div
            key={i}
            className="rounded-[6px] flex flex-col items-center overflow-hidden border"
            initial={{ flex: 1, opacity: 1 }}
            animate={{
              flex: cell.isExpanded ? 2.8 : 1,
              opacity: cell.isExpanded ? 1 : 0.3,
            }}
            transition={{
              type: "spring",
              stiffness: 210,
              damping: 28,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2.5,
            }}
            style={{
              height: "100%",
              backgroundColor: cell.isExpanded ? "#eff6ff" : "#ffffff",
              borderColor: cell.isExpanded ? "#3B82F6" : "rgba(228,228,231,1)",
            }}
          >
            <span
              className={`text-[8px] font-bold mt-[4px] ${cell.isExpanded ? "text-[#3B82F6]" : "text-zinc-800"
                }`}
            >
              {cell.day}
            </span>
            {cell.events.length > 0 && (
              <div className="w-full mt-[3px] px-[3px] flex flex-col gap-[2px]">
                {cell.events.map((evt, ei) => (
                  <motion.div
                    key={ei}
                    className="rounded-[2px] px-[3px] py-[1px]"
                    style={{ backgroundColor: evt.color + "E6" }}
                    initial={{ opacity: 0, scaleY: 0.5 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{
                      delay: 0.8 + ei * 0.12,
                      type: "spring",
                      stiffness: 150,
                      damping: 18,
                    }}
                  >
                    <span className="text-white text-[5px] font-semibold block truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                      {evt.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-3 justify-center">
        <motion.div
          className="w-[5px] h-[5px] rounded-full bg-[#3B82F6]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[7px] text-zinc-500 font-semibold">2.24x magnification</span>
      </div>
    </div>
  );
}

function CloudSyncVis() {
  return (
    <div className="h-full w-full rounded-xl bg-zinc-900/80 border border-zinc-800/50 flex flex-col items-center justify-center p-6 overflow-hidden">
      <span className="text-[9px] font-semibold uppercase tracking-[2px] text-sky-400/60 mb-5">
        Offline-first architecture
      </span>
      <div className="flex items-center gap-4">
        {/* Device */}
        <div className="w-[48px] h-[64px] rounded-lg border border-zinc-700/50 bg-zinc-800/80 flex items-center justify-center">
          <span className="text-[7px] font-mono text-zinc-500">SQLite</span>
        </div>
        {/* Sync arrows */}
        <div className="flex flex-col items-center gap-1">
          <motion.div
            className="w-[32px] h-[2px] bg-sky-400/40 rounded-full"
            animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="w-[32px] h-[2px] bg-sky-400/40 rounded-full"
            animate={{ scaleX: [1, 0.3, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        {/* Cloud */}
        <div className="w-[48px] h-[48px] rounded-xl border border-zinc-700/50 bg-zinc-800/80 flex items-center justify-center">
          <span className="text-[6px] font-mono text-sky-400/60">Cloud</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 mt-4">
        <motion.div
          className="w-[5px] h-[5px] rounded-full bg-emerald-400"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-[8px] text-emerald-400/70 font-semibold">Synced</span>
      </div>
    </div>
  );
}

function AppleCalSyncVis() {
  const events = [
    { title: "Work Calendar", color: "#3B82F6", count: 12 },
    { title: "Personal", color: "#22c55e", count: 5 },
    { title: "Liquid Calendar", color: "#0d9488", count: 8 },
  ];
  return (
    <div className="h-full w-full rounded-xl bg-zinc-900/80 border border-zinc-800/50 flex flex-col justify-center p-6 overflow-hidden">
      <span className="text-[9px] font-semibold uppercase tracking-[2px] text-zinc-500 mb-4">
        Two-way EventKit bridge
      </span>
      <div className="space-y-2">
        {events.map((cal, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 rounded-lg bg-zinc-800/40 px-3 py-2"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3, type: "spring", stiffness: 120, damping: 15 }}
          >
            <div
              className="w-[6px] h-[6px] rounded-full shrink-0"
              style={{ backgroundColor: cal.color }}
            />
            <span className="text-[9px] font-semibold text-zinc-300 flex-1">{cal.title}</span>
            <span className="text-[8px] font-mono text-zinc-600">{cal.count} events</span>
            <motion.div
              className="w-3 h-3 border border-zinc-700 rounded-sm flex items-center justify-center"
              animate={{ borderColor: ["rgba(63,63,70,0.5)", cal.color, "rgba(63,63,70,0.5)"] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-[1px]"
                animate={{ backgroundColor: ["transparent", cal.color, "transparent"] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Feature Content ─── */

const FEATURES_CONTENT = [
  {
    title: "Magnetic Tethers & Accordion Scrub",
    description:
      "The timeline reacts to your thumb. Hours physically inflate to give you room to tap. Under the hood, magnetic time boundaries gently deflect out of the way, keeping the screen uncluttered while you navigate with sub-minute precision.",
    content: <MagneticTetherVis />,
  },
  {
    title: "Algorithmic Dormancy",
    description:
      "Empty 3 AM slots automatically collapse. The engine scans your week for the largest contiguous void and compresses it, giving more screen real estate to the hours that actually matter. Your busiest periods naturally rise to the surface.",
    content: <DormancyVis />,
  },
  {
    title: "Fluid Smart Input",
    description:
      "Every new event begins with a single, physics-driven drop of ink. Drag your finger across the grid in one unbroken stroke for multi-day events. On-device AI parses natural language instantly. No rigid forms required.",
    content: <SmartInputVis />,
  },
  {
    title: "The Magnifying Loupe",
    description:
      "Long-press any day and watch it bloom. The cell inflates to 2.24 times its size with spring physics, revealing every hidden event, time slot, and detail buried beneath the fold. Neighbouring days gracefully dim and recede. No modal, no navigation, no lost context. Just hold, read, and release.",
    content: <LoupeVis />,
  },
  {
    title: "Offline-First with Cloud Sync",
    description:
      "Local-first performance powered by SQLite, seamlessly synced to Supabase via PowerSync. Works without internet, syncs when connected. Your data is always yours first.",
    content: <CloudSyncVis />,
  },
  {
    title: "Two-Way Apple Calendar Sync",
    description:
      "Full read/write integration with native iOS Calendar. Events from your existing calendars appear seamlessly, and events you create flow back to Apple Calendar without friction.",
    content: <AppleCalSyncVis />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-teal-400 mb-3">
            Under the hood
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-50 max-w-[25ch]">
            Intelligence you can feel, not just see
          </h2>
        </motion.div>

        <StickyScroll content={FEATURES_CONTENT} />
      </div>
    </section>
  );
}
