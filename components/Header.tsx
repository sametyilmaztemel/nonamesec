"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  getMainNav,
  getPrimaryCtas,
} from "@/content/navigation";
import { useUI } from "@/components/UIProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useUI();
  const navItems = getMainNav(language);
  const primaryCtas = getPrimaryCtas(language);

  return (
    <header className="header-surface sticky top-0 z-50 backdrop-blur">
      <a className="skip-link" href="#ana-icerik">
        İçeriğe geç / Skip to content
      </a>
      <div className="container">
        <div className="flex items-center gap-6 py-4">
          <div className="flex items-center gap-4 shrink-0 pr-4">
            <Link href="/" className="flex items-center gap-4">
            <Image
              src="/nonamelogo.png"
              alt="Noname Security"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
              priority
            />
            <span className="text-xl font-semibold tracking-tight">Noname Security</span>
            </Link>
          </div>
          <nav
            className="hidden lg:flex flex-1 items-center justify-center gap-3 px-2"
            aria-label={language === "tr" ? "Ana menü" : "Main navigation"}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${isActive ? " nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:flex items-center justify-end gap-3 shrink-0 pl-4">
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <Link href={primaryCtas[0].href} className="btn-primary">
              {primaryCtas[0].label}
            </Link>
            <Link href={primaryCtas[1].href} className="btn-secondary">
              {primaryCtas[1].label}
            </Link>
          </div>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobil-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="theme-control lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full shrink-0"
          >
            <span className="sr-only">Menüyü aç / Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div id="mobil-menu" className="mobile-menu-surface lg:hidden pb-6">
            <nav
              className="flex flex-col gap-4 pt-4"
              aria-label={language === "tr" ? "Mobil menü" : "Mobile navigation"}
            >
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium ${pathname === item.href ? "text-[var(--color-accent)]" : "text-[var(--color-light)]"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between gap-3">
              <ThemeToggle compact />
              <LanguageSwitcher compact />
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link onClick={() => setMenuOpen(false)} href={primaryCtas[0].href} className="btn-primary">
                {primaryCtas[0].label}
              </Link>
              <Link onClick={() => setMenuOpen(false)} href={primaryCtas[1].href} className="btn-secondary">
                {primaryCtas[1].label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
