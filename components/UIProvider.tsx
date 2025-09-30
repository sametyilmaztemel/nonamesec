"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";
export type LanguageCode = "tr" | "en";

type UIContextValue = {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
};

const UIContext = createContext<UIContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "noname-ui-theme";
const LANGUAGE_STORAGE_KEY = "noname-ui-language";

function getInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return "tr";
  }
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored === "tr" || stored === "en") {
    return stored;
  }
  const browser = (navigator.language || navigator.languages?.[0] || "tr").toLowerCase();
  return browser.startsWith("tr") ? "tr" : "en";
}

type UIProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  defaultLanguage?: LanguageCode;
};

export function UIProvider({ children, defaultTheme, defaultLanguage }: UIProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme ?? "light");
  const [language, setLanguage] = useState<LanguageCode>(() => defaultLanguage ?? getInitialLanguage());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else if (defaultTheme) {
      setTheme(defaultTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, defaultTheme);
    } else {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      const fallbackTheme: ThemeMode = prefersDark ? "dark" : "light";
      setTheme(fallbackTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, fallbackTheme);
    }

    if (storedLanguage === "tr" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    } else if (defaultLanguage) {
      setLanguage(defaultLanguage);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, defaultLanguage);
    } else {
      const browser = (navigator.language || navigator.languages?.[0] || "tr").toLowerCase();
      const locale = browser.startsWith("tr") ? "tr" : "en";
      setLanguage(locale);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    }
  }, [defaultTheme, defaultLanguage]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<UIContextValue>(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
      setTheme,
      language,
      setLanguage,
    }),
    [theme, language]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}
