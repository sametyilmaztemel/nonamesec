import type { LanguageCode } from "@/components/UIProvider";

export type CaseStudyLocale = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  industry: string;
  title: string;
  challenge: string;
  approach: string[];
  technicalFindings: string[];
  results: string[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
};

type CaseStudyRaw = {
  slug: string;
  metaTitle: { tr: string; en: string };
  metaDescription: { tr: string; en: string };
  industry: { tr: string; en: string };
  title: { tr: string; en: string };
  challenge: { tr: string; en: string };
  approach: { tr: string[]; en: string[] };
  technicalFindings: { tr: string[]; en: string[] };
  results: { tr: string[]; en: string[] };
  quote: { tr: string; en: string };
  quoteAuthor: string;
  quoteRole: { tr: string; en: string };
};

const caseStudiesRaw: CaseStudyRaw[] = [
  {
    slug: "finans-kart-basvuru-api",
    metaTitle: {
      tr: "Case Study | Finans Kart Başvuru API Güvenliği",
      en: "Case Study | Securing a Financial Card Application API",
    },
    metaDescription: {
      tr: "Finans kurumunda kart başvuru API'sinde bulunan kritik yetkisiz erişim açığının kapanışı ve denetim başarısı.",
      en: "Closing a critical authorisation gap in a financial card application API and passing regulatory audits.",
    },
    industry: { tr: "Finans", en: "Financial Services" },
    title: {
      tr: "Kart başvuru API'sinde kritik yetki açığının kapanışı",
      en: "Closing critical privilege gaps in a card application API",
    },
    challenge: {
      tr: "Finans kurumunun kart başvuru API'sinde tespit edilemeyen yetki esnekliği müşteri verilerini riske atıyor, denetimlerde kritik bulgu oluşturuyordu.",
      en: "A financial institution faced undetected privilege issues in its card application API, exposing customer data and triggering critical audit findings.",
    },
    approach: {
      tr: [
        "GraphQL ve REST uç noktalarına yönelik derinlemesine penetrasyon testi",
        "Yetki kontrolleri ve rate limiting açıklarının tespiti",
        "Geliştirme ekipleriyle sprint bazlı düzeltme oturumları",
        "Yeniden test ve BDDK raporlarına özel yönetici özeti",
      ],
      en: [
        "Deep penetration testing of GraphQL and REST endpoints",
        "Identified authorisation gaps and missing rate limiting",
        "Sprint-based remediation sessions with engineering",
        "Retesting plus executive summary tailored for BDDK",
      ],
    },
    technicalFindings: {
      tr: [
        "IDOR ile müşteri kimlik verilerine erişim",
        "Eksik rate limiting nedeniyle brute-force imkanı",
        "Detaylı loglama eksikliği",
      ],
      en: [
        "IDOR enabling access to customer identity data",
        "Brute-force exposure due to missing rate limiting",
        "Insufficient logging coverage for fraud scenarios",
      ],
    },
    results: {
      tr: [
        "12 gün içinde tüm kritik bulgular kapatıldı",
        "İzleme ve alarm kuralları iyileştirildi",
        "BDDK denetiminde kritik bulgu sıfırlandı",
      ],
      en: [
        "Closed all critical findings within 12 days",
        "Improved monitoring and alerting rules",
        "Zero critical observations in the next BDDK audit",
      ],
    },
    quote: {
      tr: "Noname Security ekibi bulguları sadece teknik açıdan değil, iş etkisiyle birlikte aktardı. Denetim sürecinde elimiz güçlendi.",
      en: "Noname Security explained findings with business impact, not just the technical detail. It strengthened our position with auditors.",
    },
    quoteAuthor: "CTO",
    quoteRole: { tr: "Banka CTO'su", en: "Bank CTO" },
  },
  {
    slug: "saas-ci-cd-pipeline",
    metaTitle: {
      tr: "Case Study | SaaS CI/CD Pipeline Güçlendirme",
      en: "Case Study | Securing a SaaS CI/CD Pipeline",
    },
    metaDescription: {
      tr: "CI/CD pipeline'da tespit edilen injection risklerinin giderilmesi ve DevSecOps kültürünün yerleşmesi.",
      en: "Eliminating injection risks in a SaaS CI/CD pipeline and embedding DevSecOps culture.",
    },
    industry: { tr: "SaaS", en: "SaaS" },
    title: {
      tr: "CI/CD pipeline güvenliğini hız kesmeden güçlendirmek",
      en: "Hardening CI/CD security without slowing delivery",
    },
    challenge: {
      tr: "Yüksek release temposuna sahip SaaS şirketi pipeline üzerinden yetkisiz kod çalıştırma riskleriyle karşı karşıyaydı.",
      en: "A fast-moving SaaS scale-up faced unauthorised code execution risks through its pipeline.",
    },
    approach: {
      tr: [
        "Pipeline yapılandırmaları ve secret yönetiminin incelenmesi",
        "Threat modeling ve secure code review sprintleri",
        "SAST/DAST entegrasyonlarının otomasyonu",
        "Geliştirici eğitimleri ve güvenli kodlama rehberleri",
      ],
      en: [
        "Reviewed pipeline configuration and secret management",
        "Threat modelling and secure code review sprints",
        "Automated SAST/DAST integrations across environments",
        "Delivered developer enablement and secure coding guides",
      ],
    },
    technicalFindings: {
      tr: [
        "Self-hosted runner'larda izolasyon eksikliği",
        "Hard-coded secret ve credentials",
        "Eksik imzalı artifact doğrulaması",
      ],
      en: [
        "Isolation gaps on self-hosted runners",
        "Hard-coded secrets and credentials",
        "Missing signed artifact validation",
      ],
    },
    results: {
      tr: [
        "Deployment süreleri artmadan güvenlik kontrolleri eklendi",
        "Bulgu kapanış süresi %50 kısaldı",
        "Kurumsal müşterilerden güvenlik onayı alındı",
      ],
      en: [
        "Added controls without increasing deployment times",
        "Cut remediation time by 50%",
        "Passed enterprise customer security reviews",
      ],
    },
    quote: {
      tr: "DevSecOps yolculuğumuzda Noname Security hem hızımızı düşürmedi hem de riskleri görünür kıldı.",
      en: "Noname Security kept our pace while making the risks visible throughout our DevSecOps journey.",
    },
    quoteAuthor: "VP of Engineering",
    quoteRole: { tr: "SaaS Şirketi Mühendislik VP'si", en: "VP of Engineering, SaaS Scale-up" },
  },
];

export function getCaseStudies(language: LanguageCode) {
  return caseStudiesRaw.map<CaseStudyLocale>((item) => ({
    slug: item.slug,
    metaTitle: item.metaTitle[language],
    metaDescription: item.metaDescription[language],
    industry: item.industry[language],
    title: item.title[language],
    challenge: item.challenge[language],
    approach: item.approach[language],
    technicalFindings: item.technicalFindings[language],
    results: item.results[language],
    quote: item.quote[language],
    quoteAuthor: item.quoteAuthor,
    quoteRole: item.quoteRole[language],
  }));
}

export function getCaseStudyBySlug(slug: string, language: LanguageCode): CaseStudyLocale | undefined {
  const raw = caseStudiesRaw.find((item) => item.slug === slug);
  if (!raw) return undefined;
  return {
    slug: raw.slug,
    metaTitle: raw.metaTitle[language],
    metaDescription: raw.metaDescription[language],
    industry: raw.industry[language],
    title: raw.title[language],
    challenge: raw.challenge[language],
    approach: raw.approach[language],
    technicalFindings: raw.technicalFindings[language],
    results: raw.results[language],
    quote: raw.quote[language],
    quoteAuthor: raw.quoteAuthor,
    quoteRole: raw.quoteRole[language],
  };
}
