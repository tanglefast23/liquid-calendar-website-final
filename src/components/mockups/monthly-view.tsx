"use client";

import React from "react";
import { useMockupTheme } from "@/lib/mockup-theme";

const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MOCK_EVENTS: Record<number, { title: string; color: string }[]> = {
  3: [{ title: "Team Standup", color: "#3B82F6" }],
  5: [
    { title: "Design Review", color: "#22c55e" },
    { title: "Lunch w/ Mara", color: "#f59e0b" },
  ],
  8: [{ title: "Sprint Planning", color: "#3B82F6" }],
  11: [
    { title: "Dentist", color: "#FF6B6B" },
    { title: "Pick up Rx", color: "#a855f7" },
    { title: "Yoga", color: "#0d9488" },
  ],
  14: [{ title: "Board Pres.", color: "#f59e0b" }],
  17: [{ title: "Flight to PDX", color: "#3B82F6" }],
  18: [{ title: "Conference", color: "#22c55e" }],
  19: [{ title: "Conference", color: "#22c55e" }],
  22: [
    { title: "1:1 w/ Kiera", color: "#FF6B6B" },
    { title: "Groceries", color: "#a855f7" },
  ],
  25: [{ title: "Book Club", color: "#0d9488" }],
  28: [{ title: "Rent Due", color: "#FF6B6B" }],
};

const PALETTES = {
  dark: {
    bg: "#1A1A1A",
    headerText: "#f5f5f4",
    dayHeaderText: "#a89f97",
    cellBg: "#1C1C1E",
    cellBorder: "rgba(120,113,108,0.3)",
    emptyBg: "transparent",
    todayBorder: "#3B82F6",
    todayBg: "rgba(30,58,138,0.3)",
    todayText: "#3B82F6",
    dayText: "#f5f5f4",
    eventOpacity: "E6",
    eventTextColor: "white",
  },
  light: {
    bg: "#F5F0EB",
    headerText: "#1c1917",
    dayHeaderText: "#78716c",
    cellBg: "#FFFFFF",
    cellBorder: "rgba(214,209,203,0.5)",
    emptyBg: "transparent",
    todayBorder: "#3B82F6",
    todayBg: "rgba(59,130,246,0.08)",
    todayText: "#3B82F6",
    dayText: "#1c1917",
    eventOpacity: "D9",
    eventTextColor: "white",
  },
};

export function MonthlyViewMockup() {
  const { theme } = useMockupTheme();
  const p = PALETTES[theme];

  const today = 11;
  const daysInMonth = 31;
  const startOffset = 2;

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const rows: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return (
    <div
      className="w-full h-full rounded-[2rem] p-4 flex flex-col overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: p.bg }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="text-xl font-bold tracking-tight" style={{ color: p.headerText }}>
          February
        </span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 5L6 8L9 5" stroke={p.headerText} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-[2px] mb-1 px-[2px]">
        {DAYS_OF_WEEK.map((d) => (
          <div key={d} className="text-center">
            <span className="text-[8px] font-semibold" style={{ color: p.dayHeaderText }}>{d}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-1 flex flex-col gap-[2px]">
        {rows.map((row, ri) => (
          <div key={ri} className="flex-1 flex gap-[2px]">
            {row.map((day, ci) => {
              const events = day ? (MOCK_EVENTS[day] ?? []) : [];
              const density = events.length;
              const isToday = day === today;
              const flexGrow = day ? 1 + density * 1.5 : 0.5;

              return (
                <div
                  key={ci}
                  style={{
                    flex: flexGrow,
                    backgroundColor: isToday ? p.todayBg : day ? p.cellBg : p.emptyBg,
                    borderColor: isToday ? p.todayBorder : p.cellBorder,
                  }}
                  className={`rounded-[6px] p-[3px] flex flex-col items-center overflow-hidden transition-all border ${
                    isToday ? "border-2" : day ? "border" : "border-0"
                  } ${!day ? "opacity-20" : density === 0 ? "opacity-50" : ""}`}
                >
                  {day && (
                    <>
                      <span
                        className="text-[8px] font-bold leading-none"
                        style={{ color: isToday ? p.todayText : p.dayText }}
                      >
                        {day}
                      </span>
                      {events.length > 0 && (
                        <div className="w-full mt-[2px] flex flex-col gap-[1px]">
                          {events.slice(0, 3).map((evt, ei) => (
                            <div
                              key={ei}
                              className="rounded-[2px] px-[2px] py-[1px]"
                              style={{ backgroundColor: evt.color + p.eventOpacity }}
                            >
                              <span
                                className="text-[5px] font-semibold leading-none block truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
                                style={{ color: p.eventTextColor }}
                              >
                                {evt.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
