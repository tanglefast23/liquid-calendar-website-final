"use client";

import React from "react";
import { motion } from "motion/react";
import { AppViewsGrid } from "@/components/ui/app-views-grid";
import { MonthlyViewMockup } from "@/components/mockups/monthly-view";
import { WeeklyViewMockup } from "@/components/mockups/weekly-view";
import { DayViewMockup } from "@/components/mockups/day-view";
import { ThreeDayViewMockup } from "@/components/mockups/three-day-view";

const VIEW_CARDS = [
  {
    id: 1,
    title: "The Elastic Bento Grid",
    subtitle: "Monthly View",
    description:
      "Days dynamically stretch and breathe based on how busy you are, creating an immediate visual heatmap of your month. Press and hold any day, and the UI seamlessly magnifies under your thumb, pulling your schedule into focus without ever leaving the month view. It is time you can actually feel.",
    component: <MonthlyViewMockup />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "The Topographic Loom",
    subtitle: "Weekly View",
    description:
      "Your schedule visualized as a continuous topographic flow. Algorithmic Dormancy collapses dead space while magnetic tethers react to your thumb. The Accordion Scrub physically inflates hours as you drag, giving you room to tap with sub-minute precision.",
    component: <WeeklyViewMockup />,
    className: "md:col-span-1",
  },
  {
    id: 3,
    title: "Cockpit Mode",
    subtitle: "Day View",
    description:
      "When you zoom into a single day, the calendar intelligently condenses your schedule. A breathing Now indicator anchors your present state, while fluid Quick-Add zones let you tap and snap new events into existence. No endless scrolling through empty hours.",
    component: <DayViewMockup />,
    className: "md:col-span-1",
  },
  {
    id: 4,
    title: "The Three-Day Horizon",
    subtitle: "3-Day View",
    description:
      "The sweet spot between weekly overview and daily detail. See your immediate future at a glance with full event blocks, all-day banners, and the same tap-to-create simplicity found across every view.",
    component: <ThreeDayViewMockup />,
    className: "md:col-span-3 [&>div]:max-h-[320px]",
  },
];

export function ViewsSection() {
  return (
    <section id="views" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header — left-aligned (variance 8) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-teal-400 mb-3">
            Four ways to see your time
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-50 max-w-[20ch]">
            Every view tells a different story
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed max-w-[55ch]">
            Tap any view to explore how Liquid Calendar reimagines the way you
            interact with your schedule.
          </p>
        </motion.div>

        <AppViewsGrid cards={VIEW_CARDS} />
      </div>
    </section>
  );
}
