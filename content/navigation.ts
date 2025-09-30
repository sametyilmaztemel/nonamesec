import type { LanguageCode } from "@/components/UIProvider";

type NavItem = { label: string; href: string };
type FooterColumn = { title: string; items: NavItem[] };
type CTA = { label: string; href: string };

type NavigationLocale = {
  main: NavItem[];
  footer: FooterColumn[];
  primaryCtas: CTA[];
  footerDescription: string;
  socialLabel: string;
  footerTopTitle: string;
  footerLegalTitle: string;
};

const navLocales: Record<LanguageCode, NavigationLocale> = {
  tr: {
    main: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Hizmetler", href: "/hizmetler" },
      { label: "Çözümler", href: "/cozumler" },
      { label: "Sektörler", href: "/sektorler" },
      { label: "Kaynaklar", href: "/kaynaklar" },
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
      { label: "Kariyer", href: "/kariyer" },
      { label: "İletişim", href: "/iletisim" },
    ],
    primaryCtas: [
      { label: "Ücretsiz Keşif & Teklif Al", href: "/iletisim#teklif-formu" },
      { label: "Ön Görüşme Planla", href: "/iletisim#randevu" },
    ],
    footer: [
      {
        title: "Yasal",
        items: [
          { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma" },
          { label: "Çerez Politikası", href: "/cerez-politikasi" },
          { label: "Sözleşmeler", href: "/sozlesmeler" },
        ],
      },
      {
        title: "Güvenlik",
        items: [
          { label: "Güvenlik Taahhüdü", href: "/guvenlik-taahhudu" },
          { label: "Sızma Testi Sorumluluk Reddi", href: "/sizma-testi-sorumluluk-reddi" },
        ],
      },
      {
        title: "Destek",
        items: [
          { label: "iletişim@nonamesecurity.com.tr", href: "mailto:iletisim@nonamesecurity.com.tr" },
          { label: "+90 (312) 255 15 30", href: "tel:+903122551530" },
          { label: "Destek Ekibi", href: "mailto:support@nonamesecurity.com.tr" },
        ],
      },
    ],
    footerDescription:
      "Offensive + Defensive yaklaşımımızla açıkları keşfeder, raporlar ve kapatırız. TR merkezli, global B2B kurumlara hazır ekip.",
    socialLabel: "Sosyal",
    footerTopTitle: "Noname Security",
    footerLegalTitle: "Yasal",
  },
  en: {
    main: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/hizmetler" },
      { label: "Solutions", href: "/cozumler" },
      { label: "Industries", href: "/sektorler" },
      { label: "Resources", href: "/kaynaklar" },
      { label: "About", href: "/hakkimizda" },
      { label: "Success Stories", href: "/basari-hikayeleri" },
      { label: "Careers", href: "/kariyer" },
      { label: "Contact", href: "/iletisim" },
    ],
    primaryCtas: [
      { label: "Book a Discovery Call", href: "/iletisim#teklif-formu" },
      { label: "Schedule Intro Meeting", href: "/iletisim#randevu" },
    ],
    footer: [
      {
        title: "Legal",
        items: [
          { label: "KVKK Privacy Notice", href: "/kvkk-aydinlatma" },
          { label: "Cookie Policy", href: "/cerez-politikasi" },
          { label: "Agreements", href: "/sozlesmeler" },
        ],
      },
      {
        title: "Security",
        items: [
          { label: "Security Commitment", href: "/guvenlik-taahhudu" },
          { label: "Pentest Liability Disclaimer", href: "/sizma-testi-sorumluluk-reddi" },
        ],
      },
      {
        title: "Support",
        items: [
          { label: "iletişim@nonamesecurity.com.tr", href: "mailto:iletisim@nonamesecurity.com.tr" },
          { label: "+90 (312) 255 15 30", href: "tel:+903122551530" },
          { label: "Support Desk", href: "mailto:support@nonamesecurity.com.tr" },
        ],
      },
    ],
    footerDescription:
      "We combine offensive and defensive expertise to discover, report and close security gaps. Istanbul-based, ready for global B2B programs.",
    socialLabel: "Social",
    footerTopTitle: "Noname Security",
    footerLegalTitle: "Legal",
  },
};

export function getMainNav(language: LanguageCode): NavItem[] {
  return navLocales[language]?.main ?? navLocales.tr.main;
}

export function getPrimaryCtas(language: LanguageCode): CTA[] {
  return navLocales[language]?.primaryCtas ?? navLocales.tr.primaryCtas;
}

export function getFooterColumns(language: LanguageCode): FooterColumn[] {
  return navLocales[language]?.footer ?? navLocales.tr.footer;
}

export function getFooterDescription(language: LanguageCode): string {
  return navLocales[language]?.footerDescription ?? navLocales.tr.footerDescription;
}

export function getFooterSocialLabel(language: LanguageCode): string {
  return navLocales[language]?.socialLabel ?? navLocales.tr.socialLabel;
}

export function getFooterTopTitle(language: LanguageCode): string {
  return navLocales[language]?.footerTopTitle ?? navLocales.tr.footerTopTitle;
}

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nonamesecurity" },
  { label: "Twitter", href: "https://twitter.com/nonamesec" },
  { label: "YouTube", href: "https://www.youtube.com/@nonamesecurity" },
];
