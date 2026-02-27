"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import type { DockItem } from "@/components/ui/floating-dock";
import {
  House,
  SquaresFour,
  Stack,
  Sun,
  Moon,
} from "@phosphor-icons/react";
import { useMockupTheme } from "@/lib/mockup-theme";

function ThemeToggleIcon() {
  const { theme } = useMockupTheme();

  return (
    <AnimatePresence mode="wait">
      {theme === "light" ? (
        <motion.div
          key="sun"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="w-full h-full flex items-center justify-center"
        >
          <Sun weight="bold" className="w-full h-full text-amber-400" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="w-full h-full flex items-center justify-center"
        >
          <Moon weight="bold" className="w-full h-full text-blue-400" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navigation() {
  const { toggle } = useMockupTheme();

  const navItems: DockItem[] = [
    {
      title: "Home",
      icon: <House weight="bold" className="w-full h-full text-zinc-300" />,
      href: "#hero",
    },
    {
      title: "Views",
      icon: <SquaresFour weight="bold" className="w-full h-full text-zinc-300" />,
      href: "#views",
    },
    {
      title: "Stack",
      icon: <Stack weight="bold" className="w-full h-full text-zinc-300" />,
      href: "#tech",
    },

    {
      title: "Toggle Light/Dark",
      icon: <ThemeToggleIcon />,
      onClick: toggle,
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={navItems}
        desktopClassName="bg-zinc-900/90 backdrop-blur-md border border-zinc-800/50 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
        mobileClassName="fixed bottom-6 right-6"
      />
    </div>
  );
}
