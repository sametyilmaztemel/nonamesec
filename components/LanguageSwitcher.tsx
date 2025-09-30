"use client";

import { useUI } from "@/components/UIProvider";

type LanguageSwitcherProps = {
  compact?: boolean;
};

const LANGUAGES: { code: "tr" | "en"; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useUI();

  return (
    <div
      className={`language-switch${compact ? " language-switch--compact" : ""}`}
      aria-label="Dil seçimi"
    >
      {LANGUAGES.map((item) => {
        const isActive = language === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`language-pill${isActive ? " active" : ""}`}
            aria-pressed={isActive}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
