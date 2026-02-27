"use client";

import React from "react";
import { motion } from "motion/react";
import { Timer, Waveform, Fingerprint } from "@phosphor-icons/react";

const PILLARS = [
  {
    icon: <Timer weight="duotone" className="w-5 h-5 text-teal-400" />,
    title: "Physics, not pixels",
    text: "Time blocks stretch and compress based on density. Your busiest hours physically rise to the surface.",
  },
  {
    icon: <Waveform weight="duotone" className="w-5 h-5 text-teal-400" />,
    title: "Gesture-native",
    text: "Every interaction is designed for your thumb. Press, drag, and scrub with sub-minute precision.",
  },
  {
    icon: <Fingerprint weight="duotone" className="w-5 h-5 text-teal-400" />,
    title: "Offline-first",
    text: "SQLite on device, PowerSync to the cloud. Your data lives on your phone, syncs when it can.",
  },
];

export function ValueStrip() {
  return (
    <section className="py-16 md:py-20 border-t border-zinc-800/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.12,
              }}
              className="flex gap-4"
            >
              <div className="shrink-0 mt-0.5">{pillar.icon}</div>
              <div>
                <h3 className="text-sm font-bold text-zinc-100 tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
