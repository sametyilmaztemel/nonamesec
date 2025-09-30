"use client";

import Image from "next/image";
import Link from "next/link";
import {
  getFooterColumns,
  getFooterDescription,
  getFooterSocialLabel,
  getFooterTopTitle,
  getPrimaryCtas,
  socialLinks,
} from "@/content/navigation";
import { useUI } from "@/components/UIProvider";

export function Footer() {
  const { language } = useUI();
  const footerColumns = getFooterColumns(language);
  const ctas = getPrimaryCtas(language);
  const description = getFooterDescription(language);
  const socialLabel = getFooterSocialLabel(language);
  const topTitle = getFooterTopTitle(language);

  return (
    <footer className="footer-surface mt-20">
      <div className="container py-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/nonamelogo.png"
                alt={topTitle}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-semibold">{topTitle}</span>
            </Link>
            <p className="footer-muted text-sm max-w-xs">{description}</p>
            <div className="flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Link key={`footer-cta-${cta.href}`} href={cta.href} className="btn-secondary">
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="footer-heading text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm footer-muted">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="footer-heading text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              {socialLabel}
            </h3>
            <ul className="space-y-3 text-sm footer-muted">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="footer-muted mt-6 space-y-1 text-xs">
              <p>iletisim@nonamesecurity.com.tr</p>
              <p>+90 (312) 255 15 30</p>
              <p>İvedik OSB Mah. Teknopark Ankara, 2224 Cad. No:1, Yenimahalle / Ankara</p>
            </div>
          </div>
        </div>
        <div className="section-divider border-t pt-6 text-xs footer-muted flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Noname Security.</span>
          <div className="flex gap-4">
            <Link href="/sitemap.xml">Sitemap</Link>
            <Link href="/robots.txt">Robots.txt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
