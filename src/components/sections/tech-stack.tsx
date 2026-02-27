"use client";

import React from "react";
import { motion } from "motion/react";

const TECH = [
  { name: "Expo SDK 54", detail: "New Architecture", category: "Framework" },
  { name: "NativeWind v4", detail: "Tailwind for Native", category: "Styling" },
  { name: "Reanimated v3", detail: "UI-thread animations", category: "Motion" },
  { name: "React Native Skia", detail: "GPU-accelerated canvas", category: "Graphics" },
  { name: "Zustand", detail: "Lightweight state", category: "State" },
  { name: "PowerSync", detail: "Offline-first sync", category: "Database" },
  { name: "Supabase", detail: "Postgres + Auth", category: "Backend" },
  { name: "Gesture Handler", detail: "Native gestures", category: "Input" },
  { name: "HealthKit", detail: "Sleep & readiness", category: "Native" },
  { name: "RevenueCat", detail: "Subscriptions", category: "Monetization" },
];

export function TechSection() {
  return (
    <section id="tech" className="py-24 md:py-32 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-teal-400 mb-3">
            Built with
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-50">
            The stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-l border-zinc-800/40">
          {TECH.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="border-b border-r border-zinc-800/40 p-5 md:p-6 group hover:bg-zinc-900/50 transition-colors"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[2px] text-zinc-600 block mb-2">
                {item.category}
              </span>
              <h3 className="text-sm font-bold text-zinc-100 tracking-tight group-hover:text-teal-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-[11px] text-zinc-500 mt-1">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
