"use client";

import React from "react";

export function FooterSection() {
  return (
    <footer className="py-20 md:py-28 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-3">
            <div className="flex gap-8">
              <a href="#views" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                Views
              </a>
              <a href="#features" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                Features
              </a>
              <a href="#tech" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                Stack
              </a>
              <a
                href="/privacy-policy"
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            <p className="text-[11px] text-zinc-700 mt-4">
              Built with Expo, React Native, and a lot of spring physics.
            </p>
        </div>
      </div>
    </footer>
  );
}
