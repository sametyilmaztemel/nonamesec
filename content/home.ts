import type { LanguageCode } from "@/components/UIProvider";

export type HomeHero = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  highlights: string[];
};

export type ServiceSummary = {
  slug: string;
  title: string;
  problem: string;
  outcome: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  timeline: string;
  owners: string;
};

export type LeadMagnet = {
  title: string;
  description: string;
  href: string;
};

export type HomeContent = {
  slogans: string[];
  hero: HomeHero;
  trustBadges: {
    clients: string[];
    certifications: string[];
  };
  servicesSummary: ServiceSummary[];
  processSteps: ProcessStep[];
  leadMagnet: LeadMagnet;
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    contactCtas: { label: string; href: string }[];
    secondaryCta: { label: string; href: string };
  };
};

const homeLocales: Record<LanguageCode, HomeContent> = {
  tr: {
    slogans: [
      "Saldırgan gibi düşünür, kurumsal riskinizi yönetiriz.",
      "Uzman kadro, ölçülebilir siber dayanıklılık.",
      "Danışmandan öte, güvenlik ekibiniziz.",
    ],
    hero: {
      title: "Saldırgan gibi düşünür, işiniz gibi koruruz.",
      description:
        "15+ yıl deneyimli CREST ve SANS sertifikalı ekibimiz; BIST30 bankalarından küresel SaaS liderlerine kadar 24/7 koruma sağlıyor. Ofansif içgörüyü, operasyonel savunma ve uyum uzmanlığıyla birleştiriyoruz.",
      primaryCta: { label: "Ücretsiz Keşif & Teklif Al", href: "/iletisim#teklif-formu" },
      secondaryCta: { label: "Örnek Raporu İncele", href: "https://www.nonamesecurity.com.tr/resources/ornek-pentest-raporu.pdf" },
      highlights: [
        ">250 tamamlanan penetrasyon & red team projesi",
        "%92 kritik bulgu 15 gün içinde kapatıldı",
        "7/24 SOC ekibiyle 6 dakikalık ilk müdahale",
      ],
    },
    trustBadges: {
      clients: [
        "BIST30 Finans Kurumu",
        "Küresel SaaS Platformu",
        "Enerji & Üretim Holding",
        "InsurTech Scale-Up",
        "Sağlık Teknolojileri Grubu",
        "Perakende E-ticaret Lideri",
      ],
      certifications: ["OSCP", "OSWE", "CRTO", "CEH", "CISSP"],
    },
    servicesSummary: [
      {
        slug: "penetrasyon-testi",
        title: "Penetrasyon Testi",
        problem: "Web, mobil ve bulut varlıklarınızda görünmeyen açıklar",
        outcome: "Önceliklendirilmiş bulgular ve yeniden test ile hızlı kapanış",
      },
      {
        slug: "red-team",
        title: "Red Team",
        problem: "Algılama ve müdahalenin gerçek saldırganlar karşısında sınanmaması",
        outcome: "MITRE ATT&CK uyumlu senaryolarla algılama olgunluğunu ölçün",
      },
      {
        slug: "soc-mdr",
        title: "SOC/MDR",
        problem: "24/7 izleme ve hızlı yanıt için kısıtlı kaynak",
        outcome: "15 dakikalık SLA'lı MDR ile sürekli görünürlük",
      },
      {
        slug: "olay-mudahalesi",
        title: "Olay Müdahalesi",
        problem: "Fidye yazılımlarında geciken müdahale",
        outcome: "Dakikalar içinde mobilize olan IR ekibi ve forensics",
      },
      {
        slug: "danismanlik",
        title: "Uyum Danışmanlığı",
        problem: "KVKK, ISO 27001 ve PCI DSS süreçlerinde belirsizlik",
        outcome: "Gap analizi ve politika setleriyle denetim başarısı",
      },
      {
        slug: "egitimler",
        title: "Eğitimler",
        problem: "Ekiplerde güvenlik farkındalığı ve teknik yetkinlik açığı",
        outcome: "Modüler farkındalık ve teknik eğitimlerle ölçülebilir gelişim",
      },
      {
        slug: "uygulama-guvenligi",
        title: "Uygulama Güvenliği",
        problem: "Hızlı release döngülerinde güvenlik açığı",
        outcome: "Threat modeling ve secure code review ile DevSecOps hızlandırma",
      },
      {
        slug: "bulut-guvenligi",
        title: "Bulut Güvenliği",
        problem: "Çoklu bulut yapılandırmalarında görünürlük eksikliği",
        outcome: "CIS benchmark ve IaC denetimleriyle kontrolü geri alın",
      },
    ],
    processSteps: [
      {
        title: "Keşif & Hedef Belirleme",
        description: "Varlıkları, öncelikleri ve iş hedeflerini netleştirir, kapsamı birlikte şekillendiririz.",
        timeline: "2-5 iş günü",
        owners: "Çözüm mimarı + müşteri temsilcisi",
      },
      {
        title: "Sözleşme & Kapsam",
        description: "NDA, KVKK ve sorumluluk redleriyle yasal çerçeveyi tamamlar, kapsam dokümanını onaylarız.",
        timeline: "1-3 iş günü",
        owners: "Hukuk + güvenlik danışmanı",
      },
      {
        title: "Test & Doğrulama",
        description: "Hizmete göre penetrasyon, red team veya SOC tuning sprintleri yürütürüz.",
        timeline: "5-30 iş günü",
        owners: "Offensive/Defensive ekip",
      },
      {
        title: "Rapor & Düzeltme Kılavuzu",
        description: "Önceliklendirilmiş raporları paylaşır, düzeltme atölyeleri ve yeniden testlerle kapanışa eşlik ederiz.",
        timeline: "3-10 iş günü",
        owners: "Danışman + müşteri ekip liderleri",
      },
    ],
    leadMagnet: {
      title: "Pentest Öncesi Hazırlık Checklist'i",
      description: "Teknik ekiplerin teste hazır olup olmadığını doğrulayan 20 maddelik liste.",
      href: "https://www.nonamesecurity.com.tr/resources/pentest-checklist.pdf",
    },
    closing: {
      eyebrow: "Hazır mısınız?",
      title: "Saldırganlar beklemiyor. Siz de beklemeyin.",
      description:
        "CISO odaklı raporlama, teknik yeniden testler ve yönetim sunumlarıyla uçtan uca güvenlik desteği sunuyoruz. Ekibimizle tanışın, risklerinizi birlikte yönetin.",
      contactCtas: [
        { label: "Ücretsiz Keşif & Teklif Al", href: "/iletisim#teklif-formu" },
        { label: "Ön Görüşme Planla", href: "/iletisim#randevu" },
      ],
      secondaryCta: { label: "Uzmanla konuş", href: "/iletisim" },
    },
  },
  en: {
    slogans: [
      "Offensive insight, enterprise-scale resilience.",
      "Professional teams. Predictable outcomes.",
      "We become the security chapter of your business plan.",
    ],
    hero: {
      title: "Think like an attacker, protect like it’s your business.",
      description:
        "A CREST-aligned team of senior red teamers, DFIR leads and compliance architects delivers end-to-end security for financial services, SaaS scale-ups and critical infrastructure programmes.",
      primaryCta: { label: "Book a Discovery Call", href: "/iletisim#teklif-formu" },
      secondaryCta: { label: "View Sample Report", href: "https://www.nonamesecurity.com.tr/resources/ornek-pentest-raporu.pdf" },
      highlights: [
        ">250 offensive engagements delivered globally",
        "92% of critical issues resolved within 15 days",
        "First SOC response in six minutes, 24/7/365",
      ],
    },
    trustBadges: {
      clients: [
        "BIST30 Financial Institution",
        "Global SaaS Platform",
        "Energy & Manufacturing Group",
        "InsurTech Scale-Up",
        "Healthcare Technology Network",
        "Retail & E-commerce Leader",
      ],
      certifications: ["OSCP", "OSWE", "CRTO", "CEH", "CISSP"],
    },
    servicesSummary: [
      {
        slug: "penetrasyon-testi",
        title: "Penetration Testing",
        problem: "Hidden gaps across your web, mobile and cloud assets",
        outcome: "Prioritised findings with retesting for rapid closure",
      },
      {
        slug: "red-team",
        title: "Red Team",
        problem: "Detection and response untested against real adversaries",
        outcome: "MITRE ATT&CK aligned scenarios that pressure-test detection maturity",
      },
      {
        slug: "soc-mdr",
        title: "SOC/MDR",
        problem: "Limited resources for 24/7 monitoring and rapid response",
        outcome: "Managed detection with 15-minute SLA for constant visibility",
      },
      {
        slug: "olay-mudahalesi",
        title: "Incident Response",
        problem: "Delayed action during ransomware events",
        outcome: "Mobilised IR team with forensics in minutes",
      },
      {
        slug: "danismanlik",
        title: "Compliance Advisory",
        problem: "Uncertainty navigating KVKK, ISO 27001 and PCI DSS",
        outcome: "Gap assessments and policy packs that pass audits",
      },
      {
        slug: "egitimler",
        title: "Training",
        problem: "Low security awareness and technical capability",
        outcome: "Modular awareness and technical tracks with measurable uplift",
      },
      {
        slug: "uygulama-guvenligi",
        title: "Application Security",
        problem: "Security debt in fast release cycles",
        outcome: "Threat modelling and secure code review embedded in DevSecOps",
      },
      {
        slug: "bulut-guvenligi",
        title: "Cloud Security",
        problem: "Limited visibility across multi-cloud configurations",
        outcome: "CIS benchmark and IaC reviews to regain control",
      },
    ],
    processSteps: [
      {
        title: "Discovery & Objectives",
        description: "Clarify assets, priorities and business goals to shape the engagement together.",
        timeline: "2-5 business days",
        owners: "Solution architect + client lead",
      },
      {
        title: "Contract & Scope",
        description: "Complete NDA, KVKK and liability documents, then lock scope for delivery.",
        timeline: "1-3 business days",
        owners: "Legal + security consultant",
      },
      {
        title: "Testing & Validation",
        description: "Execute penetration tests, red team scenarios or SOC tuning sprints as planned.",
        timeline: "5-30 business days",
        owners: "Offensive/Defensive squads",
      },
      {
        title: "Report & Remediation Guidance",
        description: "Deliver prioritised reports, run remediation workshops and retest closures.",
        timeline: "3-10 business days",
        owners: "Consultant + client leads",
      },
    ],
    leadMagnet: {
      title: "Pentest Readiness Checklist",
      description: "20-point list to confirm your teams are ready before testing starts.",
      href: "https://www.nonamesecurity.com.tr/resources/pentest-checklist.pdf",
    },
    closing: {
      eyebrow: "Ready to move?",
      title: "Attackers aren’t waiting. Neither should you.",
      description:
        "Expose your risks with a free discovery call and review our sample report to validate our output.",
      contactCtas: [
        { label: "Book a Discovery Call", href: "/iletisim#teklif-formu" },
        { label: "Schedule Intro Meeting", href: "/iletisim#randevu" },
      ],
      secondaryCta: { label: "Talk to an expert", href: "/iletisim" },
    },
  },
};

export function getHomeContent(language: LanguageCode): HomeContent {
  return homeLocales[language] ?? homeLocales.tr;
}
