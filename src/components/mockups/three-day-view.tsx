"use client";

import React from "react";
import { useMockupTheme } from "@/lib/mockup-theme";

const DAYS = [
  { label: "Tue", num: "11", isToday: true },
  { label: "Wed", num: "12" },
  { label: "Thu", num: "13" },
];

const EVENTS = [
  { col: 0, startH: 9, dur: 1, title: "Standup", color: "#3B82F6" },
  { col: 0, startH: 11.5, dur: 1.5, title: "Sprint Plan", color: "#22c55e" },
  { col: 0, startH: 14, dur: 1, title: "Design Rev.", color: "#FF6B6B" },
  { col: 1, startH: 10, dur: 2, title: "Workshop", color: "#f59e0b" },
  { col: 1, startH: 15, dur: 0.75, title: "Yoga", color: "#0d9488" },
  { col: 2, startH: 9, dur: 1, title: "1:1 w/ PM", color: "#3B82F6" },
  { col: 2, startH: 13, dur: 1, title: "Code Review", color: "#a855f7" },
  { col: 2, startH: 16, dur: 1, title: "Book Club", color: "#0d9488" },
];

const HOUR_HEIGHT = 18;
const START_HOUR = 7;
const END_HOUR = 20;

const PALETTES = {
  dark: {
    bg: "#1A1A1A",
    headerBorder: "rgba(120,113,108,0.2)",
    dayLabelInactive: "#78716c",
    dayLabelActive: "#3B82F6",
    dayNumInactive: "#f5f5f4",
    dayNumActive: "white",
    todayCircleBg: "#3B82F6",
    allDayBg: "#3B82F6",
    allDayTextColor: "white",
    hourLabelColor: "#78716c",
    columnBorder: "rgba(120,113,108,0.2)",
    gridLine: "rgba(120,113,108,0.15)",
    eventTextColor: "white",
  },
  light: {
    bg: "#F5F0EB",
    headerBorder: "rgba(214,209,203,0.5)",
    dayLabelInactive: "#78716c",
    dayLabelActive: "#3B82F6",
    dayNumInactive: "#1c1917",
    dayNumActive: "white",
    todayCircleBg: "#3B82F6",
    allDayBg: "#3B82F6",
    allDayTextColor: "white",
    hourLabelColor: "#a89f97",
    columnBorder: "rgba(214,209,203,0.5)",
    gridLine: "rgba(214,209,203,0.4)",
    eventTextColor: "white",
  },
};

export function ThreeDayViewMockup() {
  const { theme } = useMockupTheme();
  const p = PALETTES[theme];
  const todayCol = 0;

  return (
    <div
      className="w-full h-full rounded-[2rem] p-3 flex flex-col overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: p.bg }}
    >
      {/* Day headers */}
      <div className="flex pb-2 mb-1" style={{ borderBottom: `1px solid ${p.headerBorder}` }}>
        <div className="w-[28px] shrink-0" />
        {DAYS.map((day, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <span
              className="text-[7px] font-semibold uppercase"
              style={{ color: i === todayCol ? p.dayLabelActive : p.dayLabelInactive }}
            >
              {day.label}
            </span>
            <div
              className="w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[1px]"
              style={{ backgroundColor: i === todayCol ? p.todayCircleBg : "transparent" }}
            >
              <span
                className="text-[11px] font-bold"
                style={{ color: i === todayCol ? p.dayNumActive : p.dayNumInactive }}
              >
                {day.num}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* All-day row */}
      <div className="flex pb-1 mb-1" style={{ borderBottom: `1px solid ${p.headerBorder}` }}>
        <div className="w-[28px] shrink-0" />
        <div className="flex-1 px-[1px]">
          <div className="h-[10px] rounded-[2px] px-1 flex items-center" style={{ backgroundColor: p.allDayBg }}>
            <span className="text-[5px] font-semibold truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" style={{ color: p.allDayTextColor }}>
              Conference Day 1
            </span>
          </div>
        </div>
        <div className="flex-1 px-[1px]">
          <div className="h-[10px] rounded-[2px] px-1 flex items-center" style={{ backgroundColor: p.allDayBg }}>
            <span className="text-[5px] font-semibold truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" style={{ color: p.allDayTextColor }}>
              Conference Day 2
            </span>
          </div>
        </div>
        <div className="flex-1 px-[1px]" />
      </div>

      {/* Time grid */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Time labels */}
        <div className="w-[28px] shrink-0 relative">
          {Array.from({ length: END_HOUR - START_HOUR }, (_, i) => i + START_HOUR).map(
            (hour) => (
              <div
                key={hour}
                className="absolute w-full text-right pr-1"
                style={{ top: (hour - START_HOUR) * HOUR_HEIGHT - 4 }}
              >
                <span
                  className="text-[6px] font-semibold font-mono tracking-wide"
                  style={{ color: p.hourLabelColor }}
                >
                  {hour < 12
                    ? `${hour}a`
                    : hour === 12
                      ? "12p"
                      : `${hour - 12}p`}
                </span>
              </div>
            ),
          )}
        </div>

        {/* 3 columns */}
        {DAYS.map((_, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 relative"
            style={{ borderLeft: `1px solid ${p.columnBorder}` }}
          >
            {/* Grid lines */}
            {Array.from(
              { length: END_HOUR - START_HOUR },
              (_, i) => i + START_HOUR,
            ).map((hour) => (
              <div
                key={hour}
                className="absolute left-0 right-0"
                style={{
                  top: (hour - START_HOUR) * HOUR_HEIGHT,
                  borderTop: `1px solid ${p.gridLine}`,
                }}
              />
            ))}

            {/* Events */}
            {EVENTS.filter((e) => e.col === colIdx).map((evt, i) => {
              const top = (evt.startH - START_HOUR) * HOUR_HEIGHT;
              const height = evt.dur * HOUR_HEIGHT;

              return (
                <div
                  key={i}
                  className="absolute left-[2px] right-[2px] rounded-[3px] overflow-hidden"
                  style={{
                    top,
                    height,
                    backgroundColor: evt.color,
                  }}
                >
                  <div className="px-[3px] py-[1px]">
                    <span
                      className="text-[6px] font-semibold block truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                      style={{ color: p.eventTextColor }}
                    >
                      {evt.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
