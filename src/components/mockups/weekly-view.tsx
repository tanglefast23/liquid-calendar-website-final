"use client";

import React from "react";
import { useMockupTheme } from "@/lib/mockup-theme";

const DAYS = [
  { letter: "S", num: "9", month: "FEB" },
  { letter: "M", num: "10" },
  { letter: "T", num: "11", isToday: true },
  { letter: "W", num: "12" },
  { letter: "T", num: "13" },
  { letter: "F", num: "14" },
  { letter: "S", num: "15" },
];

const EVENTS = [
  { col: 0, startH: 9, endH: 10, title: "Standup", color: "#3B82F6" },
  { col: 1, startH: 10, endH: 11.5, title: "Sprint Plan", color: "#FF6B6B" },
  { col: 1, startH: 14, endH: 15, title: "Lunch w/ KL", color: "#f59e0b" },
  { col: 2, startH: 9, endH: 10, title: "1:1 w/ PM", color: "#3B82F6" },
  { col: 2, startH: 15, endH: 16, title: "Retro", color: "#a855f7" },
  { col: 3, startH: 11, endH: 13, title: "Code Review", color: "#22c55e" },
  { col: 4, startH: 10, endH: 11, title: "Design Sync", color: "#22c55e" },
  { col: 4, startH: 15, endH: 16, title: "Yoga", color: "#0d9488" },
];

const PALETTES = {
  dark: {
    bg: "#1C1C2E",
    dayTextInactive: "rgba(255,255,255,0.4)",
    dayTextActive: "#3B82F6",
    dayNumInactive: "rgba(255,255,255,0.8)",
    dayNumActive: "white",
    todayCircleBg: "#3B82F6",
    todayBarBg: "#3B82F6",
    monthLabel: "#60A5FA",
    topoLines: [
      { hour: 4, color: "rgba(45, 212, 191, 0.4)", label: "4a" },
      { hour: 8, color: "rgba(96, 165, 250, 0.4)", label: "8a" },
      { hour: 12, color: "rgba(255, 255, 255, 0.25)", label: "12p" },
      { hour: 16, color: "rgba(192, 132, 252, 0.4)", label: "4p" },
      { hour: 20, color: "rgba(251, 146, 60, 0.4)", label: "8p" },
    ],
    eventTextColor: "white",
  },
  light: {
    bg: "#F5F0EB",
    dayTextInactive: "rgba(120,113,108,0.7)",
    dayTextActive: "#3B82F6",
    dayNumInactive: "#1c1917",
    dayNumActive: "white",
    todayCircleBg: "#3B82F6",
    todayBarBg: "#3B82F6",
    monthLabel: "#3B82F6",
    topoLines: [
      { hour: 4, color: "rgba(13, 148, 136, 0.25)", label: "4a" },
      { hour: 8, color: "rgba(59, 130, 246, 0.25)", label: "8a" },
      { hour: 12, color: "rgba(120, 113, 108, 0.2)", label: "12p" },
      { hour: 16, color: "rgba(168, 85, 247, 0.25)", label: "4p" },
      { hour: 20, color: "rgba(245, 158, 11, 0.25)", label: "8p" },
    ],
    eventTextColor: "white",
  },
};

export function WeeklyViewMockup() {
  const { theme } = useMockupTheme();
  const p = PALETTES[theme];

  const todayCol = 2;
  const totalHeight = 300;
  const headerHeight = 52;
  const gridHeight = totalHeight - headerHeight;
  const startHour = 4;
  const endHour = 22;
  const hourHeight = gridHeight / (endHour - startHour);
  const colWidth = 100 / 7;

  return (
    <div
      className="w-full h-full rounded-[2rem] overflow-hidden relative transition-colors duration-300"
      style={{ backgroundColor: p.bg }}
    >
      {/* SVG Topographic contour lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox={`0 0 300 ${totalHeight}`}
      >
        {p.topoLines.map(({ hour, color, label }, i) => {
          const y = headerHeight + (hour - startHour) * hourHeight;
          const points = DAYS.map((_, ci) => {
            const x = (ci / 6) * 300;
            const jitter = Math.sin(ci * 1.3 + i * 2) * 5;
            return { x, y: y + jitter };
          });

          let d = `M 0 ${points[0].y}`;
          for (let j = 1; j < points.length; j++) {
            const prev = points[j - 1];
            const curr = points[j];
            d += ` C ${prev.x + (curr.x - prev.x) * 0.4} ${prev.y}, ${prev.x + (curr.x - prev.x) * 0.6} ${curr.y}, ${curr.x} ${curr.y}`;
          }

          return (
            <g key={i}>
              <path d={d} fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 6" />
              <text
                x="4"
                y={y - 3}
                fill={color.replace(/[\d.]+\)$/, "0.8)")}
                fontSize="5"
                fontWeight="700"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Day header row */}
      <div className="relative z-10 flex px-1" style={{ height: headerHeight }}>
        {DAYS.map((day, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-center">
            {i === 0 && (
              <span
                className="text-[5px] font-bold uppercase tracking-wider mb-[1px]"
                style={{ color: p.monthLabel }}
              >
                FEB
              </span>
            )}
            {i !== 0 && <div className="h-[7px]" />}
            <span
              className="text-[6px] font-semibold"
              style={{ color: i === todayCol ? p.dayTextActive : p.dayTextInactive }}
            >
              {day.letter}
            </span>
            <div
              className="w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[1px]"
              style={{ backgroundColor: i === todayCol ? p.todayCircleBg : "transparent" }}
            >
              <span
                className="text-[9px] font-bold"
                style={{ color: i === todayCol ? p.dayNumActive : p.dayNumInactive }}
              >
                {day.num}
              </span>
            </div>
            {i === todayCol && (
              <div
                className="w-full h-[2px] mt-1 rounded-full"
                style={{ backgroundColor: p.todayBarBg }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="relative z-10" style={{ height: gridHeight }}>
        {EVENTS.map((evt, i) => {
          const top = (evt.startH - startHour) * hourHeight;
          const height = (evt.endH - evt.startH) * hourHeight;
          const left = `${evt.col * colWidth + colWidth * 0.08}%`;
          const width = `${colWidth * 0.84}%`;

          return (
            <div
              key={i}
              className="absolute rounded-md px-[4px] py-[2px] border overflow-hidden"
              style={{
                top, left, width, height,
                backgroundColor: evt.color + "E6",
                borderColor: evt.color,
              }}
            >
              <span
                className="text-[6px] font-semibold block truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                style={{ color: p.eventTextColor }}
              >
                {evt.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
