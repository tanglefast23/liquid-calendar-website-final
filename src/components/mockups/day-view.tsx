"use client";

import React from "react";
import { motion } from "motion/react";
import { useMockupTheme } from "@/lib/mockup-theme";

const EVENTS = [
  { startH: 9, startM: 0, dur: 60, title: "Team Standup", color: "#3B82F6" },
  { startH: 11, startM: 30, dur: 90, title: "Sprint Planning", color: "#22c55e" },
  { startH: 14, startM: 0, dur: 60, title: "Design Review w/ Kiera", color: "#FF6B6B" },
  { startH: 16, startM: 0, dur: 45, title: "Yoga Flow", color: "#0d9488" },
];

const HOUR_HEIGHT = 28;

const PALETTES = {
  dark: {
    bg: "#1A1A1A",
    headerDayColor: "#FF6B6B",
    headerDateColor: "#f5f5f4",
    headerMonthColor: "#78716c",
    headerBorder: "rgba(255,107,107,0.2)",
    badgeBg: "rgba(59,130,246,0.2)",
    badgeText: "#3B82F6",
    hourLabelColor: "#78716c",
    gridLineColor: "rgba(120,113,108,0.3)",
    eventBgAlpha: "18",
    nowLineColor: "#FF6B6B",
  },
  light: {
    bg: "#F5F0EB",
    headerDayColor: "#FF6B6B",
    headerDateColor: "#1c1917",
    headerMonthColor: "#78716c",
    headerBorder: "rgba(255,107,107,0.15)",
    badgeBg: "rgba(59,130,246,0.1)",
    badgeText: "#3B82F6",
    hourLabelColor: "#a89f97",
    gridLineColor: "rgba(214,209,203,0.5)",
    eventBgAlpha: "22",
    nowLineColor: "#FF6B6B",
  },
};

export function DayViewMockup() {
  const { theme } = useMockupTheme();
  const p = PALETTES[theme];

  const nowHour = 10;
  const nowMinute = 42;
  const nowY = (nowHour - 6) * HOUR_HEIGHT + (nowMinute / 60) * HOUR_HEIGHT;

  return (
    <div
      className="w-full h-full rounded-[2rem] p-4 flex flex-col overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: p.bg }}
    >
      {/* Header */}
      <div className="flex items-baseline gap-[4px] pb-2 mb-1" style={{ borderBottom: `1px solid ${p.headerBorder}` }}>
        <span className="text-[8px] font-semibold tracking-[1.5px] uppercase" style={{ color: p.headerDayColor }}>
          Tuesday
        </span>
        <span className="text-[22px] font-extrabold leading-none font-mono" style={{ color: p.headerDateColor }}>
          11
        </span>
        <span className="text-[9px] font-medium ml-[2px]" style={{ color: p.headerMonthColor }}>
          Feb 2026
        </span>
        <div className="ml-auto flex items-center gap-1 px-2 py-[2px] rounded" style={{ backgroundColor: p.badgeBg }}>
          <span className="text-[7px] font-semibold" style={{ color: p.badgeText }}>Compact</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 relative overflow-hidden">
        {Array.from({ length: 14 }, (_, i) => i + 6).map((hour) => (
          <div key={hour} className="flex" style={{ height: HOUR_HEIGHT }}>
            <div className="w-[32px] shrink-0 flex items-start justify-end pr-1">
              <span
                className="text-[7px] font-semibold -translate-y-[3px] font-mono tracking-wide"
                style={{ color: p.hourLabelColor }}
              >
                {hour < 12 ? `${hour}a` : hour === 12 ? "12p" : `${hour - 12}p`}
              </span>
            </div>
            <div className="flex-1" style={{ borderTop: `1px solid ${p.gridLineColor}` }} />
          </div>
        ))}

        {/* Events */}
        <div className="absolute top-0 bottom-0" style={{ left: 32, right: 4 }}>
          {EVENTS.map((evt, i) => {
            const top = (evt.startH - 6) * HOUR_HEIGHT + (evt.startM / 60) * HOUR_HEIGHT;
            const height = (evt.dur / 60) * HOUR_HEIGHT;

            return (
              <div
                key={i}
                className="absolute left-[2px] right-0 rounded-[3px] overflow-hidden flex"
                style={{ top, height, backgroundColor: `${evt.color}${p.eventBgAlpha}` }}
              >
                <div className="w-[3px] shrink-0" style={{ backgroundColor: evt.color }} />
                <div className="flex-1 px-[4px] py-[2px]">
                  <span className="text-[8px] font-semibold block truncate" style={{ color: evt.color }}>
                    {evt.title}
                  </span>
                  {height > 18 && (
                    <span className="text-[6px] font-semibold opacity-70 font-mono" style={{ color: evt.color }}>
                      {evt.startH > 12
                        ? `${evt.startH - 12}:${String(evt.startM).padStart(2, "0")} pm`
                        : `${evt.startH}:${String(evt.startM).padStart(2, "0")} am`}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Now indicator */}
          <div className="absolute left-0 right-0 flex items-center" style={{ top: nowY }}>
            <motion.div
              className="w-[6px] h-[6px] rounded-full shrink-0 -ml-[3px]"
              style={{ backgroundColor: p.nowLineColor }}
              animate={{ opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <div className="flex-1 h-[1px]" style={{ backgroundColor: p.nowLineColor }} />
          </div>
        </div>
      </div>
    </div>
  );
}
