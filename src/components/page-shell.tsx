"use client";

import React from "react";
import { MockupThemeProvider } from "@/lib/mockup-theme";

export function PageShell({ children }: { children: React.ReactNode }) {
  return <MockupThemeProvider>{children}</MockupThemeProvider>;
}
