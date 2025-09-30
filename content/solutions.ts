export const solutions = [
  {
    slug: "noname-threat-ai",
    name: "Noname Threat AI",
    metaTitle: "Noname Threat AI | Anomali Tespiti & SOC Entegrasyonu",
    metaDescription:
      "Ağ trafiği ve loglardan anomalileri yakalayan AI modülü. Şeffaflık, yanlış pozitif azaltma ve SOC orkestrasyonu.",
    ogTitle: "Noname Threat AI: SOC'unuzu güçlendiren şeffaf yapay zekâ",
    ogDescription:
      "Açıklanabilir AI ile ağ ve log anomalilerini yakalayın, SOC operasyonlarını hızlandırın.",
    ogImage: "/og/threat-ai.jpg",
    heroTitle: "Noname Threat AI ile SOC'unuzu güçlendirin.",
    heroSummary:
      "Noname Threat AI, ağ trafiği ve loglardan davranışsal anomalileri çıkarır; açıklanabilirlik katmanı sayesinde analistlerin güvenini kazanır ve SOC/MDR hizmetimizle entegre çalışır.",
    highlights: [
      {
        title: "Davranışsal Anomali Tespiti",
        description:
          "Ağ trafiği, uç nokta telemetrisi ve IAM loglarını korele ederek IoC'siz tehditleri ortaya çıkarır.",
      },
      {
        title: "Yanlış Pozitif Azaltma",
        description:
          "Önceliklendirilmiş risk skorlaması ve analist geri bildirim döngüsüyle triage süresini kısaltır.",
      },
      {
        title: "Şeffaflık Katmanı",
        description:
          "Her uyarı için feature importance ve MITRE eşleşmeleri sunarak açıklanabilirlik sağlar.",
      },
      {
        title: "SOC Entegrasyonu",
        description:
          "SIEM, SOAR ve ticketing sistemleriyle API tabanlı entegre olur; otomasyon tetikler.",
      },
    ],
    useCases: [
      "İç tehdit ve hesap ele geçirme tespiti",
      "IoC'siz anomalileri yakalama",
      "Finansal dolandırıcılık göstergeleri",
      "OT ağ trafiği anomalileri",
    ],
    limitations: [
      "Model eğitimi için minimum 30 gün log verisi gerektirir",
      "Üçüncü taraf veri paylaşımı için müşteri onayı gerekir",
      "İnsan onayı olmadan otomatik müdahale önerilmez",
    ],
    responsibleUse:
      "Şeffaflık dokümanı, veri mahremiyeti kontrolleri ve model bias denetimleri düzenli aralıklarla paylaşılır.",
    ctas: [
      { label: "Demo talep et", href: "/iletisim#randevu" },
      { label: "Teknik doküman indir", href: "/kaynaklar#whitepaper" },
    ],
    placeholders: {
      dashboard: "/assets/screens/threat-ai-dashboard.webp",
      alerts: "/assets/screens/threat-ai-alerts.webp",
    },
  },
];
