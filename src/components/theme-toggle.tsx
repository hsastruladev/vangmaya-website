"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("vangmaya-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
    document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
    setIsDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    window.localStorage.setItem("vangmaya-theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <button
      aria-label={isDark ? "లైట్ మోడ్‌కు మారండి" : "డార్క్ మోడ్‌కు మారండి"}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M20.1 15.1A8.5 8.5 0 0 1 8.9 3.9 8.7 8.7 0 1 0 20.1 15.1Z" />
        </svg>
      )}
    </button>
  );
}
