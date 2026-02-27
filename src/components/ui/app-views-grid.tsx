"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type ViewCard = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  component: React.ReactNode;
  className: string;
};

export function AppViewsGrid({ cards }: { cards: ViewCard[] }) {
  const [selected, setSelected] = useState<ViewCard | null>(null);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          className={cn(card.className)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: i * 0.1,
          }}
        >
          <motion.div
            onClick={() => setSelected(selected?.id === card.id ? null : card)}
            className={cn(
              "relative overflow-hidden cursor-pointer group",
              selected?.id === card.id
                ? "rounded-2xl fixed inset-4 md:inset-[10%] z-50 flex flex-col"
                : "rounded-2xl h-full w-full border border-zinc-800/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]",
            )}
            layoutId={`card-${card.id}`}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
            whileHover={
              selected?.id !== card.id
                ? { scale: 1.015, transition: { type: "spring", stiffness: 300, damping: 20 } }
                : undefined
            }
          >
            {/* Inner refraction border (liquid glass) */}
            {selected?.id !== card.id && (
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-20 border border-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
            )}

            {/* Mockup component as thumbnail */}
            <div className="relative w-full h-full min-h-[280px] md:min-h-[320px] bg-zinc-900/80">
              <div className="absolute inset-0 p-2">
                {card.component}
              </div>

              {/* Gradient overlay with title */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-end p-6 rounded-2xl transition-all duration-300",
                  selected?.id === card.id
                    ? "bg-zinc-950/85"
                    : "bg-gradient-to-t from-zinc-950/95 via-zinc-950/30 to-transparent group-hover:from-zinc-950/80",
                )}
              >
                {selected?.id !== card.id && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-teal-400 mb-1.5">
                      {card.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-zinc-50 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to explore
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {selected?.id === card.id && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.12, type: "spring", stiffness: 150, damping: 20 }}
                  className="absolute inset-0 flex flex-col justify-end p-8 md:p-12"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-teal-400 mb-2">
                    {card.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-bold text-zinc-50 tracking-tighter mb-4">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-[55ch]">
                    {card.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(null);
                    }}
                    className="mt-8 self-start px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-950 bg-zinc-50 hover:bg-zinc-200 transition-colors active:scale-[0.97]"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}

      {/* Backdrop */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
