import type { LanguageCode } from "@/components/UIProvider";
import type { SectorContent } from "./types";

const sectorsRaw = [
  {
    slug: "finans",
    name: { tr: "Finans", en: "Financial Services" },
    metaTitle: {
      tr: "Finans Sektörü Siber Güvenliği | BDDK Uyumlu",
      en: "Financial Services Cybersecurity | BDDK Ready",
    },
    metaDescription: {
      tr: "Banka, ödeme kuruluşu ve fintech'ler için pentest, red team, SOC ve uyum desteği. BDDK ve KVKK gereksinimlerine uyum sağlayın.",
      en: "Pentest, red team, SOC and compliance support for banks, payment institutions and fintechs. Stay aligned with BDDK and KVKK.",
    },
    heroTitle: {
      tr: "Finansal verinizi ve operasyonlarınızı 7/24 koruyun.",
      en: "Protect financial data and operations 24/7.",
    },
    summary: {
      tr: "Regüle sektör standartlarına hakim ekibimizle core banking, ödeme sistemleri ve dijital kanallarınızı test eder, 7/24 SOC operasyonuyla koruruz.",
      en: "We test core banking, payment systems and digital channels with regulatory-aware experts and shield them with 24/7 SOC operations.",
    },
    painPoints: {
      tr: [
        "Kritik finansal veriler ve dolandırıcılık baskısı",
        "BDDK, KVKK, PCI DSS denetimleri",
        "Sürekli hizmet beklentisi ve performans riskleri",
        "Üçüncü taraf entegrasyonlarının açtığı saldırı yüzeyi",
      ],
      en: [
        "Critical financial data and fraud pressure",
        "BDDK, KVKK, PCI DSS audit demands",
        "Always-on service expectations and performance risk",
        "Third-party integration expanding the attack surface",
      ],
    },
    approach: {
      tr: [
        "BDDK rehberlerine uyumlu penetrasyon ve red team testleri",
        "Kart sistemi güvenlik denetimleri ve PCI DSS hazırlıkları",
        "24/7 SOC/MDR ile SWIFT, core banking ve mobil kanalların izlenmesi",
        "Olay müdahalesi ve kriz iletişim desteği",
      ],
      en: [
        "Penetration and red team testing aligned with BDDK guidance",
        "Card system security assessments and PCI DSS preparation",
        "24/7 SOC/MDR monitoring SWIFT, core banking and mobile channels",
        "Incident response and crisis communications support",
      ],
    },
    featuredServices: ["penetrasyon-testi", "red-team", "soc-mdr", "danismanlik"],
    kpi: {
      tr: "Ortalama tespit süresi %45 kısaldı, BDDK denetimlerinde 0 kritik bulgu, fraud kayıplarında %30 azalma.",
      en: "Detection time reduced by 45%, zero critical findings in BDDK audits, fraud losses down 30%.",
    },
    ctas: {
      tr: [
        { label: "Finans güvenlik danışmanlığı al", href: "/iletisim#teklif-formu" },
        { label: "Örnek finans raporu indir", href: "/kaynaklar#whitepaper" },
      ],
      en: [
        { label: "Request financial security advisory", href: "/iletisim#teklif-formu" },
        { label: "Download sample financial report", href: "/kaynaklar#whitepaper" },
      ],
    },
  },
  {
    slug: "e-ticaret-perakende",
    name: { tr: "E-ticaret & Perakende", en: "E-commerce & Retail" },
    metaTitle: {
      tr: "E-ticaret Siber Güvenliği | PCI DSS, Fraud Önleme",
      en: "E-commerce Security | PCI DSS & Fraud Prevention",
    },
    metaDescription: {
      tr: "Ödeme güvenliği, DDoS dayanıklılığı ve kampanya dönemi koruması için entegre çözümler.",
      en: "Integrated defences for payment security, DDoS resilience and peak campaign protection.",
    },
    heroTitle: {
      tr: "Yoğun kampanya dönemlerinde hizmet ve güvenliği birlikte yönetin.",
      en: "Maintain performance and security during peak campaigns.",
    },
    summary: {
      tr: "Ani trafik artışları ve ödeme dolandırıcılıklarına karşı proaktif koruma sağlar, müşteri deneyimini kesintisiz tutarız.",
      en: "We protect you against traffic spikes and payment fraud so the customer experience stays seamless.",
    },
    painPoints: {
      tr: [
        "Ödeme sahtekârlığı ve hesap ele geçirme",
        "Kampanya dönemlerinde DDoS ve bot saldırıları",
        "PCI DSS uyumu ve kart verisi korunması",
        "Çoklu tedarikçi entegrasyonu kaynaklı riskler",
      ],
      en: [
        "Payment fraud and account takeover",
        "DDoS and bot attacks during promotions",
        "PCI DSS compliance and cardholder data protection",
        "Risks from multi-vendor integrations",
      ],
    },
    approach: {
      tr: [
        "Web, API ve mobil kanallar için kapsamlı penetrasyon testleri",
        "Bot yönetimi ve antifraud danışmanlığı",
        "SOC/MDR ile gerçek zamanlı DDoS ve anomali izleme",
        "PCI DSS gereksinimlerine yönelik politika ve süreç rehberliği",
      ],
      en: [
        "Comprehensive web, API and mobile penetration testing",
        "Bot management and anti-fraud advisory",
        "Real-time DDoS and anomaly monitoring with SOC/MDR",
        "Policy and process guidance for PCI DSS compliance",
      ],
    },
    featuredServices: ["penetrasyon-testi", "soc-mdr", "uygulama-guvenligi", "danismanlik"],
    kpi: {
      tr: "Checkout başarısızlıklarında %25 azalma, fraud geri ödeme kayıplarında %35 düşüş.",
      en: "Checkout failures down 25%, fraud chargebacks reduced by 35%.",
    },
    ctas: {
      tr: [
        { label: "PCI hazırlık checklist'i indir", href: "/kaynaklar#checklist" },
        { label: "Teklif iste", href: "/iletisim#teklif-formu" },
      ],
      en: [
        { label: "Download PCI readiness checklist", href: "/kaynaklar#checklist" },
        { label: "Request a proposal", href: "/iletisim#teklif-formu" },
      ],
    },
  },
  {
    slug: "saglik",
    name: { tr: "Sağlık", en: "Healthcare" },
    metaTitle: {
      tr: "Sağlık Sektörü Siber Güvenliği | PHI Koruması",
      en: "Healthcare Cybersecurity | PHI Protection",
    },
    metaDescription: {
      tr: "Hastane, klinik ve sağlık teknolojileri için PHI koruması, KVKK uyumu, OT/IoT güvenliği ve olay müdahalesi.",
      en: "PHI protection, KVKK compliance, OT/IoT security and incident response for hospitals, clinics and health tech.",
    },
    heroTitle: {
      tr: "Hasta verilerini ve kritik hizmet sürekliliğini koruyun.",
      en: "Protect patient data and critical care continuity.",
    },
    summary: {
      tr: "Elektronik hasta kayıtları, tıbbi cihazlar ve tele-sağlık platformlarınızda güvenlik, erişilebilirlik ve uyumluluğu birlikte sağlarız.",
      en: "We secure EHR, medical devices and telehealth platforms while safeguarding availability and compliance.",
    },
    painPoints: {
      tr: [
        "PHI veri sızıntısı ve fidye yazılımları",
        "KVKK ve sağlık regülasyonları",
        "OT/IoT cihaz güvenliği ve yama zorlukları",
        "İş sürekliliği ve hasta güvenliği",
      ],
      en: [
        "PHI leakage and ransomware",
        "KVKK and healthcare regulations",
        "OT/IoT device security and patching",
        "Business continuity and patient safety",
      ],
    },
    approach: {
      tr: [
        "HBS (Hastane Bilgi Sistemleri) ve tıbbi cihazlar için penetrasyon testleri",
        "Olay müdahalesi ve kriz tatbikatları",
        "SOC/MDR ile 7/24 izleme",
        "KVKK uyum danışmanlığı ve veri sınıflandırma",
      ],
      en: [
        "Penetration testing for HIS and medical devices",
        "Incident response and crisis simulations",
        "24/7 SOC/MDR monitoring",
        "KVKK compliance advisory and data classification",
      ],
    },
    featuredServices: ["penetrasyon-testi", "soc-mdr", "olay-mudahalesi", "danismanlik"],
    kpi: {
      tr: "Fidye yazılımı kapanış süresi %60 kısaldı, uyum denetimlerinde kritik bulgu sıfırlandı.",
      en: "Ransomware containment time reduced by 60%, zero critical audit findings.",
    },
    ctas: {
      tr: [
        { label: "Sağlık güvenliği danışmanlığı", href: "/iletisim#teklif-formu" },
        { label: "Olay planı talep et", href: "/iletisim#randevu" },
      ],
      en: [
        { label: "Request healthcare security advisory", href: "/iletisim#teklif-formu" },
        { label: "Plan an incident drill", href: "/iletisim#randevu" },
      ],
    },
  },
  {
    slug: "uretim-ot",
    name: { tr: "Üretim & OT", en: "Manufacturing & OT" },
    metaTitle: {
      tr: "Üretim & OT Güvenliği | SCADA ve Endüstriyel Siber Güvenlik",
      en: "Manufacturing & OT Security | SCADA & Industrial Cyber",
    },
    metaDescription: {
      tr: "SCADA/ICS sistemleri, OT ağları ve üretim operasyonları için güvenlik değerlendirmeleri, red team ve SOC entegrasyonu.",
      en: "Security assessments for SCADA/ICS, OT networks and manufacturing operations, plus red teaming and SOC integration.",
    },
    heroTitle: {
      tr: "Üretim hatlarınızı ve OT ağınızı durmadan koruyun.",
      en: "Keep your production lines and OT networks resilient.",
    },
    summary: {
      tr: "Üretim ve OT ortamlarında kesintisiz operasyon, güvenlik ve güvenilirliği birlikte yönetiyoruz; saldırgan simülasyonlarıyla riskleri görünür kılıyoruz.",
      en: "We balance uptime, safety and security in manufacturing and OT environments, exposing risks with adversary simulation.",
    },
    painPoints: {
      tr: [
        "OT ağ segmentasyonu eksikliği",
        "Legacy sistemlerde yama zorlukları",
        "SCADA'ya yönelik artan saldırılar",
        "Fiziksel ve siber güvenlik entegrasyonu",
      ],
      en: [
        "Insufficient OT network segmentation",
        "Patching constraints on legacy systems",
        "Rising attacks on SCADA",
        "Physical and cyber integration challenges",
      ],
    },
    approach: {
      tr: [
        "OT/SCADA için özel penetrasyon testleri",
        "Red team senaryoları ve fiziksel güvenlik testleri",
        "SOC/MDR ile OT protokol analizi",
        "Olay müdahalesi ve güvenli restart planları",
      ],
      en: [
        "Specialised penetration tests for OT/SCADA",
        "Red team scenarios with physical security modules",
        "SOC/MDR monitoring of OT protocols",
        "Incident response and safe restart playbooks",
      ],
    },
    featuredServices: ["penetrasyon-testi", "red-team", "soc-mdr", "olay-mudahalesi"],
    kpi: {
      tr: "Üretim duruşlarında %40 azalma, güvenlik olaylarına müdahale süresinde %50 iyileşme.",
      en: "Production downtime cut by 40%, incident response time improved by 50%.",
    },
    ctas: {
      tr: [
        { label: "OT güvenlik değerlendirmesi iste", href: "/iletisim#teklif-formu" },
        { label: "Red team senaryosu planla", href: "/iletisim#randevu" },
      ],
      en: [
        { label: "Request an OT security assessment", href: "/iletisim#teklif-formu" },
        { label: "Plan an OT red team scenario", href: "/iletisim#randevu" },
      ],
    },
  },
  {
    slug: "enerji",
    name: { tr: "Enerji", en: "Energy" },
    metaTitle: {
      tr: "Enerji Sektörü Siber Güvenliği | Kritik Altyapı",
      en: "Energy Sector Cybersecurity | Critical Infrastructure",
    },
    metaDescription: {
      tr: "Enerji üretim, dağıtım ve altyapı şirketleri için OT güvenliği, olay müdahalesi, red team ve regülasyon uyumu.",
      en: "OT security, incident response, red teaming and compliance for energy generation, distribution and infrastructure.",
    },
    heroTitle: {
      tr: "Kritik altyapınızı kesintiye uğratmadan koruyun.",
      en: "Protect critical infrastructure without disrupting service.",
    },
    summary: {
      tr: "Elektrik, doğalgaz ve yenilenebilir enerji altyapılarında regülatif gereksinimleri karşılayacak siber güvenlik programları tasarlarız.",
      en: "We build cyber programmes that satisfy regulatory expectations for electricity, gas and renewable infrastructure.",
    },
    painPoints: {
      tr: [
        "Kritik altyapı hedefli saldırılar",
        "Uyum gereksinimleri (EPDK, NERC CIP)",
        "Uzaktan erişim ve bakım süreçleri",
        "OT/IT entegrasyonu",
      ],
      en: [
        "Attacks targeting critical infrastructure",
        "Compliance demands (EPDK, NERC CIP)",
        "Remote access and maintenance procedures",
        "OT/IT integration",
      ],
    },
    approach: {
      tr: [
        "SCADA ve alt istasyon ağları için red team testleri",
        "Olay müdahalesi ve kriz simülasyonları",
        "SOC/MDR ile saha cihazı izleme",
        "Uyum danışmanlığı ve raporlama",
      ],
      en: [
        "Red team exercises for SCADA and substation networks",
        "Incident response and crisis simulations",
        "SOC/MDR monitoring of field devices",
        "Compliance advisory and reporting",
      ],
    },
    featuredServices: ["red-team", "soc-mdr", "olay-mudahalesi", "danismanlik"],
    kpi: {
      tr: "Cihaz güvenlik olaylarında %55 azalma, regülatör denetimlerinden başarılı sonuç.",
      en: "Device security incidents down 55%, regulator audits passed successfully.",
    },
    ctas: {
      tr: [
        { label: "Enerji güvenliği teklif iste", href: "/iletisim#teklif-formu" },
        { label: "Kriz tatbikatı planla", href: "/iletisim#randevu" },
      ],
      en: [
        { label: "Request energy security proposal", href: "/iletisim#teklif-formu" },
        { label: "Plan a crisis simulation", href: "/iletisim#randevu" },
      ],
    },
  },
  {
    slug: "saas-startup",
    name: { tr: "SaaS & Startup", en: "SaaS & Startups" },
    metaTitle: {
      tr: "SaaS & Scale-up Güvenliği | DevSecOps ve Uyum",
      en: "SaaS & Scale-up Security | DevSecOps & Compliance",
    },
    metaDescription: {
      tr: "Hızla ölçeklenen SaaS ve startup'lar için uygulama güvenliği, bulut değerlendirmesi, SOC ve uyum danışmanlığı.",
      en: "Application security, cloud assessments, SOC and compliance advisory for fast-scaling SaaS startups.",
    },
    heroTitle: {
      tr: "Ürününüzü hızla büyütürken güvenliği yerleşik hale getirin.",
      en: "Embed security while your product scales fast.",
    },
    summary: {
      tr: "DevSecOps, bulut güvenliği ve müşteri uyum taleplerine yanıt verecek çevik güvenlik programları oluşturuyoruz.",
      en: "We create agile security programmes that satisfy DevSecOps, cloud security and enterprise customer requirements.",
    },
    painPoints: {
      tr: [
        "Hızlı release döngülerinde güvenlik yetiştirme",
        "Kurumsal müşterilerin uyum talepleri",
        "Bulut ve multi-tenant güvenlik",
        "Güvenli kodlama kültürü",
      ],
      en: [
        "Keeping security aligned with rapid releases",
        "Meeting enterprise security questionnaires",
        "Cloud and multi-tenant security",
        "Building a secure coding culture",
      ],
    },
    approach: {
      tr: [
        "Uygulama güvenliği ve secure code review programları",
        "Bulut güvenliği değerlendirmeleri ve IaC taraması",
        "SOC/MDR ile erken aşama izleme",
        "Müşteri güvenlik soru listeleri ve RFP desteği",
      ],
      en: [
        "Application security and secure code review programmes",
        "Cloud security assessments and IaC scanning",
        "Early-stage SOC/MDR monitoring",
        "Support for customer security questionnaires and RFPs",
      ],
    },
    featuredServices: ["uygulama-guvenligi", "bulut-guvenligi", "soc-mdr", "egitimler"],
    kpi: {
      tr: "Güvenlik bulgularının kapanış süresi %50 kısaldı, müşteri denetimlerinde onay oranı %95'e çıktı.",
      en: "Remediation timelines reduced by 50%, customer security approvals reached 95%.",
    },
    ctas: {
      tr: [
        { label: "SaaS güvenlik planı oluştur", href: "/iletisim#teklif-formu" },
        { label: "Demo talep et", href: "/cozumler/noname-threat-ai" },
      ],
      en: [
        { label: "Build your SaaS security plan", href: "/iletisim#teklif-formu" },
        { label: "Request a demo", href: "/cozumler/noname-threat-ai" },
      ],
    },
  },
  {
    slug: "kamu",
    name: { tr: "Kamu", en: "Public Sector" },
    metaTitle: {
      tr: "Kamu Kurumları Siber Güvenliği | Ulusal Standartlara Uyum",
      en: "Public Sector Cybersecurity | National Standards",
    },
    metaDescription: {
      tr: "Kamu kurumları ve belediyeler için sızma testi, SOC, olay müdahalesi ve ulusal standartlara uyum danışmanlığı.",
      en: "Pen testing, SOC, incident response and national-standard compliance for public institutions and municipalities.",
    },
    heroTitle: {
      tr: "Kamu hizmetlerinde güvenlik ve sürekliliği birlikte sağlayın.",
      en: "Deliver secure and continuous public services.",
    },
    summary: {
      tr: "Kamu kurumlarının ulusal siber güvenlik stratejilerine uyumlu, vatandaş verisini koruyan ve hizmet sürekliliğini garantileyen çözümler sunuyoruz.",
      en: "We align with national cybersecurity strategies to protect citizen data and service uptime for public agencies.",
    },
    painPoints: {
      tr: [
        "Kamuya yönelik gelişmiş saldırılar",
        "Ulusal standart ve yönergelere uyum",
        "Kısıtlı bütçe ve insan kaynağı",
        "Çoklu lokasyon yönetimi",
      ],
      en: [
        "Advanced attacks against public sector",
        "Complying with national standards and directives",
        "Limited budget and skilled workforce",
        "Managing multiple locations",
      ],
    },
    approach: {
      tr: [
        "Ulusal stratejiye uyumlu penetrasyon testleri",
        "SOC/MDR ve olay müdahalesi ile 7/24 izleme",
        "KVKK ve kamuya özel uyum danışmanlığı",
        "Eğitim ve farkındalık programları",
      ],
      en: [
        "Penetration testing aligned with national cybersecurity strategy",
        "24/7 SOC/MDR and incident response",
        "KVKK and public-sector compliance advisory",
        "Education and awareness programmes",
      ],
    },
    featuredServices: ["penetrasyon-testi", "soc-mdr", "olay-mudahalesi", "egitimler"],
    kpi: {
      tr: "Vatandaş hizmet kesintilerinde %30 azalma, siber olay müdahale süresi %55 iyileşti.",
      en: "Citizen service disruptions down 30%, incident response time improved by 55%.",
    },
    ctas: {
      tr: [
        { label: "Kamu güvenlik danışmanlığı", href: "/iletisim#teklif-formu" },
        { label: "Eğitim kataloğunu indir", href: "/kaynaklar#webinar" },
      ],
      en: [
        { label: "Request public sector advisory", href: "/iletisim#teklif-formu" },
        { label: "Download training catalogue", href: "/kaynaklar#webinar" },
      ],
    },
  },
];

export function getSectors(language: LanguageCode): SectorContent[] {
  return sectorsRaw.map((sector) => ({
    slug: sector.slug,
    name: sector.name[language],
    metaTitle: sector.metaTitle[language],
    metaDescription: sector.metaDescription[language],
    heroTitle: sector.heroTitle[language],
    summary: sector.summary[language],
    painPoints: sector.painPoints[language],
    approach: sector.approach[language],
    featuredServices: sector.featuredServices,
    kpi: sector.kpi[language],
    ctas: sector.ctas[language],
  }));
}

export function getSectorBySlug(slug: string, language: LanguageCode): SectorContent | undefined {
  const sector = sectorsRaw.find((item) => item.slug === slug);
  if (!sector) return undefined;
  return {
    slug: sector.slug,
    name: sector.name[language],
    metaTitle: sector.metaTitle[language],
    metaDescription: sector.metaDescription[language],
    heroTitle: sector.heroTitle[language],
    summary: sector.summary[language],
    painPoints: sector.painPoints[language],
    approach: sector.approach[language],
    featuredServices: sector.featuredServices,
    kpi: sector.kpi[language],
    ctas: sector.ctas[language],
  };
}
