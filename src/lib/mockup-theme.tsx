"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type MockupTheme = "dark" | "light";

interface MockupThemeContextValue {
  theme: MockupTheme;
  toggle: () => void;
}

const MockupThemeContext = createContext<MockupThemeContextValue>({
  theme: "light",
  toggle: () => { },
});

export function MockupThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<MockupTheme>("light");
  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  return (
    <MockupThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </MockupThemeContext.Provider>
  );
}

export function useMockupTheme() {
  return useContext(MockupThemeContext);
}
