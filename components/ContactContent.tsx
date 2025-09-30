"use client";

import Link from "next/link";
import {
  contactInfo,
  contactChannels,
  getLeadFormCopy,
  getMeetingFormCopy,
  downloadableAssets,
} from "@/content/contact";
import { LeadForm } from "@/components/LeadForm";
import { MeetingForm } from "@/components/MeetingForm";
import { SectionHeader } from "@/components/SectionHeader";
import { useUI } from "@/components/UIProvider";

const pageCopy = {
  tr: {
    badge: "İletişim",
    title: "Uzmanlarımızla şimdi konuşun",
    intro:
      "Sızma testinden SOC operasyonlarına kadar projeleri yöneten kıdemli danışmanlarımız, formu doldurmanızdan itibaren 4 saat içinde size dönüş yapar. Kritik olaylar için IR hotline hattımız 7/24 aktiftir.",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    supportLabel: "Destek",
    formEyebrow: "Teklif Formu",
    formTitle: "Ücretsiz keşif ve teklif formu",
    formDescription: "KVKK uyumlu formla ihtiyacınızı paylaşın; 4 saat içinde geri dönüş sağlayalım.",
    meetingTitle: "Ön görüşme planla",
    meetingDescription: "15 dakikalık hızlı değerlendirme için uygun zamanı seçin; uzmanımızla tanışın.",
    officeTitle: "Ofis ve SLA",
    securityTitle: "Güven unsurları",
    viewOnMap: "Haritada görüntüle",
    channelsTitle: "İletişim kanalları",
    downloadsTitle: "PDF dokümanları",
    securityPoints: [
      "KVKK uyumlu veri işleme",
      "reCAPTCHA v3 / Cloudflare Turnstile koruması",
      "Tüm iletişimlerde TLS 1.3 ve HSTS",
    ],
  },
  en: {
    badge: "Contact",
    title: "Talk to our experts today",
    intro:
      "Share your scope and one of our senior consultants will respond within 4 hours. For urgent incidents the IR hotline is staffed 24/7 by our DFIR leads.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    supportLabel: "Support",
    formEyebrow: "Discovery Form",
    formTitle: "Free discovery and proposal",
    formDescription: "Tell us what you need in a privacy-compliant form; we respond within 4 hours.",
    meetingTitle: "Schedule an intro meeting",
    meetingDescription: "Pick a 15-minute slot that fits you and meet one of our specialists.",
    officeTitle: "Office & SLA",
    securityTitle: "Trust essentials",
    viewOnMap: "View on map",
    channelsTitle: "Contact channels",
    downloadsTitle: "Downloadable PDFs",
    securityPoints: [
      "KVKK-compliant data processing",
      "reCAPTCHA v3 / Cloudflare Turnstile protection",
      "TLS 1.3 and HSTS on every channel",
    ],
  },
};

export function ContactContent() {
  const { language } = useUI();
  const copy = pageCopy[language];
  const responseSla = contactInfo.responseSla[language];
  const leadFormCopy = getLeadFormCopy(language);
  const meetingFormCopy = getMeetingFormCopy(language);
  const channels = contactChannels.map((item) => ({
    label: item.label[language],
    value: item.value,
    href: item.href,
    external: item.href.startsWith("http"),
  }));
  const downloads = downloadableAssets.map((item) => ({
    title: item.title[language],
    description: item.description[language],
    href: item.href,
  }));

  return (
    <div className="container section-spacing space-y-16">
      <header className="space-y-5">
        <div className="badge">{copy.badge}</div>
        <h1 className="text-4xl font-bold text-[var(--color-light)]">{copy.title}</h1>
        <p className="max-w-3xl text-lg text-[var(--color-muted)] leading-relaxed">
          {copy.intro.replace("IR hotline", `IR hotline ${contactInfo.irHotline}`)}
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-[var(--color-muted)]">
          <span>
            {copy.emailLabel}: <Link href={`mailto:${contactInfo.email}`} className="text-[var(--color-accent)]">{contactInfo.email}</Link>
          </span>
          <span>
            {copy.phoneLabel}: <Link href={`tel:${contactInfo.phone}`} className="text-[var(--color-accent)]">{contactInfo.phone}</Link>
          </span>
          <span>
            {copy.supportLabel}: <Link href={`mailto:${contactInfo.supportEmail}`} className="text-[var(--color-accent)]">{contactInfo.supportEmail}</Link>
          </span>
        </div>
      </header>

      <section className="grid gap-12 lg:grid-cols-[2fr,1fr]">
        <div className="card flex flex-col gap-6 p-6 lg:p-8">
          <SectionHeader
            eyebrow={copy.formEyebrow}
            title={copy.formTitle}
            description={copy.formDescription}
          />
          <LeadForm formCopy={leadFormCopy} language={language} />
        </div>
        <aside className="space-y-6">
          <div className="card flex flex-col gap-4 p-6">
            <h2 className="text-xl font-semibold text-[var(--color-light)]">{copy.meetingTitle}</h2>
            <p className="text-sm text-[var(--color-muted)]">{copy.meetingDescription}</p>
            <MeetingForm formCopy={meetingFormCopy} language={language} />
          </div>
          <div className="card flex flex-col gap-3 p-6">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">{copy.officeTitle}</h2>
            <p className="text-sm text-[var(--color-muted)]">{contactInfo.address}</p>
            <p className="text-sm text-[var(--color-muted)]">SLA: {responseSla}</p>
            <Link
              href={contactInfo.mapEmbed}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.viewOnMap}
            </Link>
          </div>
          <div className="card flex flex-col gap-3 p-6">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">{copy.securityTitle}</h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-[var(--color-muted)]">
              {copy.securityPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card flex flex-col gap-3 p-6">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">{copy.channelsTitle}</h2>
            <ul className="space-y-2 text-sm">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <Link
                    href={channel.href}
                    className="text-[var(--color-accent)]"
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                  >
                    {channel.label}: {channel.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="card flex flex-col gap-3 p-6">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">{copy.downloadsTitle}</h2>
            <ul className="space-y-3 text-sm text-[var(--color-muted)]">
              {downloads.map((asset) => (
                <li key={asset.href} className="flex flex-col gap-1">
                  <span className="font-semibold text-[var(--color-light)]">{asset.title}</span>
                  <span>{asset.description}</span>
                  <Link
                    href={asset.href}
                    className="btn-secondary w-max"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === "tr" ? "PDF indir" : "Download PDF"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
