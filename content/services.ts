import type { LanguageCode } from "@/components/UIProvider";
import type { CTA, FAQ, ServiceContent, ExampleFinding } from "./types";

type LocalizedString = { tr: string; en: string };

type LocalizedList = { tr: string[]; en: string[] };

type ExampleFindingRaw = {
  title: LocalizedString;
  riskLevel: ExampleFinding["riskLevel"];
  impact: LocalizedString;
  remediation: LocalizedString;
};

type ServiceRaw = {
  slug: string;
  serviceType: LocalizedString;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  ogTitle: LocalizedString;
  ogDescription: LocalizedString;
  ogImage: string;
  heroTitle: LocalizedString;
  heroSummary: LocalizedString;
  coverage: LocalizedList;
  methodology: LocalizedList;
  deliverables: LocalizedList;
  expectations: LocalizedList;
  timeline: LocalizedString;
  effectiveness: LocalizedString;
  exampleFinding: ExampleFindingRaw;
  pricing: LocalizedString;
  ctas: { tr: CTA[]; en: CTA[] };
  faqs: { tr: FAQ[]; en: FAQ[] };
  schemaDescription: LocalizedString;
};

const servicesRaw: ServiceRaw[] = [
  {
    slug: "penetrasyon-testi",
    serviceType: { tr: "Penetrasyon Testi", en: "Penetration Testing" },
    metaTitle: {
      tr: "Penetrasyon Testi | Offensive Güvenlik Uzmanları | Noname Security",
      en: "Penetration Testing | Offensive Security Experts | Noname Security",
    },
    metaDescription: {
      tr: "Web, API, mobil, ağ, kablosuz, bulut ve OT ortamlarınız için kapsamlı penetrasyon testleri. Önceliklendirilmiş rapor ve yeniden test desteği.",
      en: "Comprehensive penetration tests for web, API, mobile, network, wireless, cloud and OT environments with prioritised reporting and retesting support.",
    },
    ogTitle: {
      tr: "Penetrasyon Testi ile Açıkları Önceden Kapatın",
      en: "Find and Close Security Gaps Before Attackers",
    },
    ogDescription: {
      tr: "İş etkisine göre önceliklendirilmiş bulgular ve düzeltme rehberliği sunan penetrasyon testleri.",
      en: "Penetration tests that prioritise findings by business impact and guide remediation.",
    },
    ogImage: "/og/penetrasyon.jpg",
    heroTitle: {
      tr: "Penetrasyon testleriyle saldırganlardan önce davranın.",
      en: "Stay ahead of attackers with thorough penetration testing.",
    },
    heroSummary: {
      tr: "Sektör lideri metodolojilerle web, mobil, ağ, bulut ve OT ortamlarınızı test ediyor; çıplak teknik bulguyu iş etkisine dönüştüren raporlarla ekiplerinizi hızlandırıyoruz. Yeniden test dahil uçtan uca kapatma desteği sağlıyoruz.",
      en: "We test your web, mobile, network, cloud and OT environments with leading methodologies and deliver reports that translate raw findings into business impact. Retesting support keeps remediation on track.",
    },
    coverage: {
      tr: [
        "Web uygulamaları (OWASP Top 10, API v4)",
        "REST & GraphQL API güvenlik testleri",
        "Mobil (iOS, Android) uygulamalar",
        "Ağ / iç ağ ve kablosuz altyapılar",
        "Bulut servisleri (AWS, Azure, GCP)",
        "IoT / OT / SCADA bileşenleri",
        "Sosyal mühendislik destekli senaryolar",
        "Denetim hazırlığına özel test paketleri",
      ],
      en: [
        "Web applications (OWASP Top 10, API v4)",
        "REST & GraphQL API security testing",
        "Mobile applications (iOS, Android)",
        "Network / internal network and wireless infrastructure",
        "Cloud services (AWS, Azure, GCP)",
        "IoT / OT / SCADA components",
        "Social engineering-assisted scenarios",
        "Audit-aligned test packs",
      ],
    },
    methodology: {
      tr: [
        "OWASP WSTG / ASVS / MSTG",
        "PTES ve NIST SP 800-115",
        "MITRE ATT&CK kıyaslamaları",
        "BDDK, KVKK, PCI DSS gereksinimleri",
        "Risk bazlı raporlama ve önceliklendirme",
      ],
      en: [
        "OWASP WSTG / ASVS / MSTG",
        "PTES and NIST SP 800-115",
        "MITRE ATT&CK mapping",
        "BDDK, KVKK, PCI DSS references",
        "Risk-based reporting and prioritisation",
      ],
    },
    deliverables: {
      tr: [
        "Yönetici özeti ve risk öncelik matrisi",
        "Detaylı teknik rapor ve PoC materyalleri",
        "Düzeltme önerileri ve sprint backlog önerisi",
        "İlk yeniden test ve kapanış doğrulaması",
        "Opsiyonel düzeltme atölyesi (2 saat)",
      ],
      en: [
        "Executive summary with risk priority matrix",
        "Detailed technical report and proof-of-concept artefacts",
        "Remediation recommendations and sprint backlog guidance",
        "Initial retest and closure validation",
        "Optional remediation workshop (2 hours)",
      ],
    },
    expectations: {
      tr: [
        "Test edilecek varlık listesi ve erişim bilgilerinin paylaşılması",
        "Yetkilendirme (NDA, sorumluluk reddi) süreçlerinin tamamlanması",
        "Test penceresi ve bakım zamanlarının tanımlanması",
        "Vaka iletişimi için birincil/muadili temas noktası",
        "Varlıkların KVKK kapsamındaki kullanıcılarının bilgilendirilmesi",
      ],
      en: [
        "Asset inventory and access details provided ahead of testing",
        "Completion of authorisation (NDA, liability) paperwork",
        "Defined maintenance windows and testing slots",
        "Primary / backup contacts for engagement updates",
        "Notification of any KVKK data subjects if required",
      ],
    },
    timeline: {
      tr: "Standart web uygulaması için 5-10 iş günü, karma OT/IoT kapsamlarında 15+ gün. Süre kapsam, erişim ve varlık sayısına göre değişir.",
      en: "5-10 business days for a standard web application, 15+ days for complex OT/IoT scopes. Timelines vary with scope, access and asset count.",
    },
    effectiveness: {
      tr: "Düzeltme planı oturumları ve yeniden testler bulgu kapanış süresini hızlandırır, yönetim raporları regülatör beklentilerini karşılar.",
      en: "Remediation planning sessions and retesting accelerate closure while executive reporting meets regulator expectations.",
    },
    exampleFinding: {
      title: {
        tr: "Yetkisiz dosya yükleme ile uzak komut çalıştırma",
        en: "Unauthorised file upload leading to remote command execution",
      },
      riskLevel: "kritik",
      impact: {
        tr: "Üretim sunucularında yetkisiz kod çalıştırılması, hassas verilerin sızması ve hizmet kesintisi riski.",
        en: "Unauthorised code execution on production hosts leading to data leakage and potential downtime.",
      },
      remediation: {
        tr: "Dosya tipi/MIME doğrulaması, izole yükleme dizinleri ve EDR tabanlı tarama süreçleri.",
        en: "Enforce file type/MIME validation, isolate uploads and add EDR scanning prior to processing.",
      },
    },
    pricing: {
      tr: "Kapsam bazlı fiyatlandırma: varlık sayısı, teknoloji yığını, test süresi ve yeniden test gereksinimlerine göre tekliflendirilir.",
      en: "Scope-based pricing factoring asset count, technology stack, test effort and retesting needs.",
    },
    ctas: {
      tr: [
        { label: "Teklif iste", href: "/iletisim#teklif-formu" },
        { label: "Örnek rapor indir", href: "https://www.nonamesecurity.com.tr/resources/ornek-pentest-raporu.pdf" },
      ],
      en: [
        { label: "Request a proposal", href: "/iletisim#teklif-formu" },
        { label: "Download sample report", href: "https://www.nonamesecurity.com.tr/resources/ornek-pentest-raporu.pdf" },
      ],
    },
    faqs: {
      tr: [
        {
          question: "Hangi ortamları test ediyorsunuz?",
          answer: "Web, mobil, API, ağ, kablosuz, bulut ve OT dahil tüm kritik varlıkları kapsayacak şekilde test ediyoruz.",
        },
        {
          question: "Canlı sistemlerde kesinti riski var mı?",
          answer: "Ön üretim ortamları tercih edilir; üretimde test gerekiyorsa risk azaltma planı ve bakım penceresiyle ilerleriz.",
        },
        {
          question: "Yeniden test ücrete dahil mi?",
          answer: "İlk yeniden test kapsam bazlı teklifin parçasıdır; ek döngüler için uygun zaman planlanır.",
        },
        {
          question: "Bulgu doğrulaması nasıl yapılıyor?",
          answer: "Canlı demo veya kayıtlı PoC ile bulguları doğrular, ekiplerinize aktarırız.",
        },
        {
          question: "Regülasyon gereksinimleriyle uyumlu mu?",
          answer: "BDDK, KVKK, PCI DSS ve ISO 27001 gerekliliklerini hizalıyoruz.",
        },
      ],
      en: [
        {
          question: "Which environments do you test?",
          answer: "We cover web, mobile, API, network, wireless, cloud and OT assets end to end.",
        },
        {
          question: "Is there downtime risk on production systems?",
          answer: "We prefer staging; when production is required we follow a risk reduction plan and maintenance window.",
        },
        {
          question: "Is retesting included?",
          answer: "The first retest is included; further cycles are scheduled as needed.",
        },
        {
          question: "How do you validate findings?",
          answer: "We provide live demos or recorded PoC artefacts so your teams can reproduce issues.",
        },
        {
          question: "Will this align with our regulatory obligations?",
          answer: "Reports align with BDDK, KVKK, PCI DSS and ISO 27001 expectations.",
        },
      ],
    },
    schemaDescription: {
      tr: "Web, API, mobil, ağ, kablosuz, bulut ve OT sistemleriniz için kapsamlı penetrasyon testleri. Önceliklendirilmiş rapor ve yeniden test desteği.",
      en: "Comprehensive penetration testing for web, API, mobile, network, wireless, cloud and OT systems with prioritised reporting and retesting support.",
    },
  },
  {
    slug: "red-team",
    serviceType: { tr: "Red Team / Adversary Simulation", en: "Red Team / Adversary Simulation" },
    metaTitle: {
      tr: "Red Team & Adversary Simulation | Saldırgan Gibi Düşünün",
      en: "Red Team & Adversary Simulation | Think Like an Adversary",
    },
    metaDescription: {
      tr: "Gerçek saldırgan taktikleriyle kurumunuzun algılama ve müdahale kabiliyetini test edin. MITRE ATT&CK uyumlu senaryolar, SOC koçluğu ve raporlar.",
      en: "Test your detection and response with real adversary tactics. MITRE ATT&CK aligned scenarios, SOC coaching and actionable reporting.",
    },
    ogTitle: {
      tr: "Red Team ile Gerçeğe En Yakın Saldırı Simülasyonu",
      en: "Red Team for Realistic Attack Simulation",
    },
    ogDescription: {
      tr: "Görünmeyeni görün, tehdit avı yeteneklerinizi güçlendirin.",
      en: "See what you’re missing and strengthen your threat hunting capability.",
    },
    ogImage: "/og/redteam.jpg",
    heroTitle: {
      tr: "Gerçekçi saldırı senaryolarıyla savunmayı güçlendirin.",
      en: "Strengthen your defence with realistic attack scenarios.",
    },
    heroSummary: {
      tr: "Adversary simulation programımız, MITRE ATT&CK taktikleriyle kurum içi algılama ve müdahale kabiliyetinizi ölçer; blue team koçluğu ve purple team atölyeleriyle kapanış süresini kısaltır.",
      en: "Our adversary simulation programme measures your detection and response maturity using MITRE ATT&CK tactics, then accelerates closure through blue team coaching and purple team workshops.",
    },
    coverage: {
      tr: [
        "Fiziksel ve dijital keşif faaliyetleri",
        "Spear-phishing, smishing ve pretexting kampanyaları",
        "Lateral movement, privilege escalation senaryoları",
        "Data exfiltration yollarının test edilmesi",
        "Purple team atölyeleri ve SOC koçluğu",
        "TIBER-EU ve kritik altyapı senaryoları",
      ],
      en: [
        "Physical and digital reconnaissance",
        "Spear-phishing, smishing and pretexting campaigns",
        "Lateral movement and privilege escalation scenarios",
        "Data exfiltration pathway testing",
        "Purple team workshops and SOC coaching",
        "TIBER-EU and critical infrastructure scenarios",
      ],
    },
    methodology: {
      tr: [
        "MITRE ATT&CK taktik, teknik ve prosedürleri",
        "TIBER-EU ve CBEST referansları",
        "Red Teaming Guide ve Zero Trust prensipleri",
        "Tehdit istihbaratı ile senaryo uyarlaması",
      ],
      en: [
        "MITRE ATT&CK tactics, techniques and procedures",
        "TIBER-EU and CBEST references",
        "Red Teaming Guide and Zero Trust principles",
        "Scenario tailoring with threat intelligence",
      ],
    },
    deliverables: {
      tr: [
        "Saldırı hikâyesi ve zaman çizelgesi",
        "TTP matrisi ve algılama boşluk analizi",
        "Purple team oturum çıktıları",
        "İyileştirme yol haritası ve hızlı kazanımlar",
        "Yönetici sunumu ve SOC koçluk notları",
      ],
      en: [
        "Attack narrative with timeline",
        "TTP matrix and detection gap analysis",
        "Purple team workshop outputs",
        "Remediation roadmap and quick wins",
        "Executive readout and SOC coaching notes",
      ],
    },
    expectations: {
      tr: [
        "Yönetim sponsoru ve yetkilendirme onaylarının alınması",
        "Algılama araçlarına (SIEM, EDR) kontrollü erişim",
        "Kriz iletişim planı ve eskalasyon zincirinin paylaşımı",
        "Hukuk ve uyum ekiplerinin bilgilendirilmesi",
        "Operasyonel riskler doğrultusunda kapsam sınırlarının belirlenmesi",
      ],
      en: [
        "Executive sponsorship and formal authorisation",
        "Controlled access to detection tooling (SIEM, EDR)",
        "Shared crisis communication plan and escalation chain",
        "Alignment with legal and compliance stakeholders",
        "Defined scope boundaries aligned to operational risk",
      ],
    },
    timeline: {
      tr: "Hazırlık 2-3 hafta, icra 3-6 hafta, raporlama ve koçluk 1-2 hafta; hedeflenen derinliğe göre değişir.",
      en: "Preparation 2-3 weeks, execution 3-6 weeks, reporting and coaching 1-2 weeks; varies with scenario depth.",
    },
    effectiveness: {
      tr: "SOC ekibiyle canlı teyit oturumları ve log analizi algılama olgunluğunu artırır; iyileştirme planları kurumsal hafızaya kazınır.",
      en: "Live validation with the SOC and log analysis boost detection maturity, while remediation plans become institutional knowledge.",
    },
    exampleFinding: {
      title: {
        tr: "Güvenilmeyen PowerShell script ile lateral movement",
        en: "Lateral movement via untrusted PowerShell script",
      },
      riskLevel: "yüksek",
      impact: {
        tr: "Domain admin ayrıcalığı kazanımı, kritik finansal sistemlere yetkisiz erişim ve veri sızıntısı riski.",
        en: "Domain admin privileges obtained, enabling unauthorised access to critical financial systems and data leakage.",
      },
      remediation: {
        tr: "PowerShell kısıtlama politikaları, Just Enough Administration ve EDR davranış kurallarının güncellenmesi.",
        en: "Harden PowerShell policies, enforce Just Enough Administration and update EDR behavioural rules.",
      },
    },
    pricing: {
      tr: "Senaryo kapsamı, süresi, fiziksel bileşenler ve purple team desteğine göre proje bazlı fiyatlandırılır.",
      en: "Project-based pricing driven by scenario scope, duration, physical components and purple team support.",
    },
    ctas: {
      tr: [
        { label: "Teklif iste", href: "/iletisim#teklif-formu" },
        { label: "Ön görüşme planla", href: "/iletisim#randevu" },
      ],
      en: [
        { label: "Request pricing", href: "/iletisim#teklif-formu" },
        { label: "Schedule a scoping call", href: "/iletisim#randevu" },
      ],
    },
    faqs: {
      tr: [
        {
          question: "Red team ile penetrasyon testi arasındaki fark nedir?",
          answer: "Penetrasyon testi belirli varlıkları hedeflerken red team bütünsel bir saldırı hikâyesi ve algılama testini içerir.",
        },
        {
          question: "SOC ekibi testten haberdar olmalı mı?",
          answer: "Algılama kabiliyetini ölçmek için sınırlı paylaşım yapılır; plan yönetimce onaylanır.",
        },
        {
          question: "Fiziksel testler dahil mi?",
          answer: "İsteğe bağlı olarak badge klonlama, tailgating gibi senaryoları kapsıyoruz.",
        },
        {
          question: "Purple team hizmeti sunuyor musunuz?",
          answer: "Evet, tespit boşluklarını kapatmak için ortak çalıştaylar düzenliyoruz.",
        },
        {
          question: "Rapor nasıl yapılandırılır?",
          answer: "TTP bazlı anlatım, zaman çizelgesi, log örnekleri ve önerilen karşı önlemler içerir.",
        },
      ],
      en: [
        {
          question: "How is red teaming different from penetration testing?",
          answer: "Pen tests target specific assets; red teaming delivers an end-to-end attack narrative and detection assessment.",
        },
        {
          question: "Should our SOC know about the exercise?",
          answer: "We limit disclosure to measure detection capability, following an agreed management plan.",
        },
        {
          question: "Do you include physical testing?",
          answer: "Optional modules cover badge cloning, tailgating and other physical intrusion tactics.",
        },
        {
          question: "Do you offer purple teaming?",
          answer: "Yes, collaborative workshops help close detection gaps quickly.",
        },
        {
          question: "What does the report look like?",
          answer: "It includes a TTP-based narrative, timeline, log extracts and recommended countermeasures.",
        },
      ],
    },
    schemaDescription: {
      tr: "Gerçek saldırgan taktikleriyle kurumunuzun algılama ve müdahale kabiliyetini test edin. MITRE ATT&CK uyumlu senaryolar, SOC koçluğu ve raporlar.",
      en: "Test your detection and response with real adversary tactics. MITRE ATT&CK aligned scenarios, SOC coaching and reporting.",
    },
  },
  {
    slug: "sosyal-muhendislik",
    serviceType: { tr: "Sosyal Mühendislik", en: "Social Engineering" },
    metaTitle: {
      tr: "Sosyal Mühendislik Testleri | Phishing, Vishing, USB Drop",
      en: "Social Engineering Exercises | Phishing, Vishing, USB Drops",
    },
    metaDescription: {
      tr: "İnsan faktörünüzü phishing, smishing, vishing ve USB drop senaryolarıyla test edin. Farkındalık raporu ve eğitim önerileri alın.",
      en: "Test the human layer with phishing, smishing, vishing and USB drop scenarios. Receive awareness reports and training guidance.",
    },
    ogTitle: {
      tr: "Sosyal Mühendislik ile İnsan Güvenlik Zincirini Güçlendirin",
      en: "Strengthen the Human Security Chain",
    },
    ogDescription: {
      tr: "Farkındalık skorlarınızı ölçün, davranışsal riskleri azaltın.",
      en: "Measure awareness scores and reduce behavioural risk.",
    },
    ogImage: "/og/social.jpg",
    heroTitle: {
      tr: "İnsan katmanını test edin, güvenli kültürü güçlendirin.",
      en: "Test the human layer and reinforce security culture.",
    },
    heroSummary: {
      tr: "Saldırganların en sevdiği yüzey olan insan faktörünü gerçekçi kampanyalarla test ediyoruz. Davranış analizi, farkındalık skorları ve eğitim önerileriyle sürdürülebilir değişim yaratıyoruz.",
      en: "We simulate real-world attacks on the human layer—an attacker’s favourite vector—and drive sustainable change with behaviour analytics, awareness scoring and training plans.",
    },
    coverage: {
      tr: [
        "E-posta phishing ve spear-phishing senaryoları",
        "SMS smishing ve çok faktörlü dolandırıcılık testleri",
        "Vishing (sesli arama) ve call center manipülasyonu",
        "USB drop ve fiziksel sosyal mühendislik",
        "Onsite ziyaret ve prosedür denetimleri",
        "Politika ve farkındalık materyali değerlendirmesi",
      ],
      en: [
        "Email phishing and spear-phishing scenarios",
        "SMS smishing and MFA bypass simulations",
        "Vishing (voice) and call centre manipulation",
        "USB drops and physical social engineering",
        "Onsite visits with policy adherence checks",
        "Policy and awareness collateral review",
      ],
    },
    methodology: {
      tr: [
        "SANS Security Awareness ve NIST SP 800-50 çerçeveleri",
        "MITRE ATT&CK (Initial Access, Impact) eşlemesi",
        "Davranışsal analitik ve farkındalık skor kartı",
        "KVKK uyumlu veri işleme prosedürleri",
      ],
      en: [
        "SANS Security Awareness and NIST SP 800-50 frameworks",
        "MITRE ATT&CK (Initial Access, Impact) mapping",
        "Behaviour analytics with awareness scorecards",
        "KVKK-compliant data processing procedures",
      ],
    },
    deliverables: {
      tr: [
        "Kampanya sonuç raporu ve metrikler",
        "Departman bazlı farkındalık skor kartı",
        "Olay hikâyeleri ve ekran görüntüleri",
        "Hedefli eğitim ve iletişim öneri listesi",
        "Yönetici özeti ve trend analizi",
      ],
      en: [
        "Campaign results report with metrics",
        "Awareness scorecards by department",
        "Incident narratives with screenshots",
        "Targeted training and comms recommendations",
        "Executive summary and trend analysis",
      ],
    },
    expectations: {
      tr: [
        "Segment bazlı çalışan listesinin KVKK uyumlu paylaşılması",
        "Kampanya takvimi, izinler ve iletişim onayları",
        "Fiziksel testler için erişim izinleri ve güvenlik protokolleri",
        "Olay bildirim ve kriz iletişim sürecinin tanımlanması",
        "Kampanya sonrası bilgilendirme politikasının belirlenmesi",
      ],
      en: [
        "KVKK-compliant employee lists segmented for campaigns",
        "Agreed campaign schedule, permissions and communications approvals",
        "Physical test access permissions and security procedures",
        "Defined incident notification and crisis communication plan",
        "Clarity on post-campaign employee notifications",
      ],
    },
    timeline: {
      tr: "Planlama 1 hafta, kampanya yürütme 2-4 hafta, raporlama 1 hafta; tekrarlayan programlarla yıllık döngüler kurulabilir.",
      en: "Planning 1 week, execution 2-4 weeks, reporting 1 week; annual recurring programmes available.",
    },
    effectiveness: {
      tr: "Anonim sonuçlar, tekrarlayan kampanyalar ve hedefli eğitimlerle davranışsal risklerde ölçülebilir düşüş sağlanır.",
      en: "Anonymous results, recurring campaigns and targeted training drive measurable reductions in behavioural risk.",
    },
    exampleFinding: {
      title: {
        tr: "Finans ekiplerine yönelik sahte fatura e-postası tıklaması",
        en: "Finance team clicked a fake invoice lure",
      },
      riskLevel: "orta",
      impact: {
        tr: "Finansal dolandırıcılık, kimlik bilgisi hırsızlığı ve ödemelerde yetkisiz değişiklik riski.",
        en: "Risk of financial fraud, credential theft and unauthorised payment changes.",
      },
      remediation: {
        tr: "Çok faktörlü doğrulama zorunluluğu, ödeme onay süreçlerinin gözden geçirilmesi ve hedefli farkındalık eğitimi.",
        en: "Enforce MFA, tighten payment approval workflows and deliver targeted awareness training.",
      },
    },
    pricing: {
      tr: "Kullanıcı sayısı, senaryo çeşitliliği ve kampanya sıklığına göre kapsam bazlı fiyatlandırma yapılır.",
      en: "Scope-based pricing driven by user volume, scenario variety and campaign cadence.",
    },
    ctas: {
      tr: [
        { label: "Teklif iste", href: "/iletisim#teklif-formu" },
        { label: "Farkındalık kataloğunu indir", href: "/kaynaklar#checklist" },
      ],
      en: [
        { label: "Request a proposal", href: "/iletisim#teklif-formu" },
        { label: "Download awareness catalogue", href: "/kaynaklar#checklist" },
      ],
    },
    faqs: {
      tr: [
        { question: "Kaç kullanıcı ile test yapıyorsunuz?", answer: "Segmentasyonla 50 kişiden 5.000+ kullanıcıya kadar kampanyalar yönetiyoruz." },
        { question: "KVKK'ya uygun mu?", answer: "Kişisel veri işleme metinleri ve anonim raporlama ile KVKK gereksinimlerine uyuyoruz." },
        { question: "Tekrarlayan kampanyalar sunuyor musunuz?", answer: "Yıllık abonelik veya dönemsel planlarla sürekli iyileştirme sağlıyoruz." },
        { question: "Çalışanlara ceza veriliyor mu?", answer: "Ceza değil davranış değişimi hedeflenir; sonuçlar anonim paylaşılır." },
        { question: "Eğitim entegrasyonu var mı?", answer: "Farkındalık ve teknik eğitim modüllerini kampanya sonuçlarına göre öneriyoruz." },
      ],
      en: [
        { question: "How many users can you test?", answer: "We run segmented campaigns from 50 to 5,000+ users." },
        { question: "Is it KVKK compliant?", answer: "Yes, we use approved notices and anonymised reporting to stay compliant." },
        { question: "Do you provide recurring programmes?", answer: "Annual subscriptions or periodic campaigns keep improvement continuous." },
        { question: "Do employees get penalised?", answer: "No—results are anonymised. The goal is behaviour change, not punishment." },
        { question: "Do you link campaigns with training?", answer: "We recommend awareness and technical modules based on campaign outcomes." },
      ],
    },
    schemaDescription: {
      tr: "Phishing, smishing, vishing ve USB drop senaryolarıyla insan faktörünüzü test edin. Farkındalık raporu ve eğitim önerileri alın.",
      en: "Test the human factor with phishing, smishing, vishing and USB drops. Receive awareness reporting and training recommendations.",
    },
  },
  {
    slug: "uygulama-guvenligi",
    serviceType: { tr: "Uygulama Güvenliği", en: "Application Security" },
    metaTitle: {
      tr: "Uygulama Güvenliği | Threat Modeling, Secure Code Review",
      en: "Application Security | Threat Modeling, Secure Code Review",
    },
    metaDescription: {
      tr: "Threat modeling, secure code review, SAST/DAST/IAST orkestrasyonu ile DevSecOps hızını artırın. CI/CD entegrasyonu ve güvenli SDLC danışmanlığı.",
      en: "Accelerate DevSecOps with threat modelling, secure code review and SAST/DAST/IAST orchestration. CI/CD integration and secure SDLC advisory.",
    },
    ogTitle: {
      tr: "Uygulama Güvenliğini SDLC'ye Dokuyun",
      en: "Weave Application Security into Your SDLC",
    },
    ogDescription: {
      tr: "Threat modeling'den pipeline entegrasyonuna uçtan uca destek.",
      en: "End-to-end support from threat modelling to pipeline integration.",
    },
    ogImage: "/og/appsec.jpg",
    heroTitle: {
      tr: "Koddan üretime güvenliği sürekli hale getirin.",
      en: "Make security continuous from code to production.",
    },
    heroSummary: {
      tr: "Threat modeling, secure code review ve otomasyon orkestrasyonuyla yazılım yaşam döngünüzdeki riskleri erken yakalar, güvenli kodlama kültürünü pekiştiririz.",
      en: "We catch risks early across the software lifecycle with threat modelling, secure code review and automation orchestration, reinforcing secure coding culture.",
    },
    coverage: {
      tr: [
        "Threat modeling atölyeleri ve diyagramlama",
        "Manuel + otomatik secure code review",
        "SAST/DAST/IAST/SCA entegrasyonu",
        "Güvenli API tasarım rehberleri",
        "Pipeline policy ve güvenlik kapıları",
        "Geliştirici odaklı güvenli kodlama eğitimleri",
      ],
      en: [
        "Threat modelling workshops and diagramming",
        "Manual plus automated secure code review",
        "SAST/DAST/IAST/SCA integration",
        "Secure API design guidelines",
        "Pipeline policy and security gates",
        "Developer-focused secure coding enablement",
      ],
    },
    methodology: {
      tr: [
        "OWASP ASVS/MASVS ve SAMM",
        "BSIMM ve NIST SSDF prensipleri",
        "ISO 27034 uygulama güvenliği çerçevesi",
        "CI/CD güvenlik olgunluğu ölçümleri",
      ],
      en: [
        "OWASP ASVS/MASVS and SAMM",
        "BSIMM and NIST SSDF principles",
        "ISO 27034 application security framework",
        "CI/CD security maturity assessments",
      ],
    },
    deliverables: {
      tr: [
        "Threat model diyagramları ve risk listesi",
        "Kod inceleme raporu ve snippet bazlı öneriler",
        "Pipeline iyileştirme planı ve politika seti",
        "Güvenli kodlama rehberi ve checklist",
        "DevSecOps olgunluk skor kartı",
      ],
      en: [
        "Threat model diagrams with risk register",
        "Code review report with annotated recommendations",
        "Pipeline improvement plan and policy set",
        "Secure coding guide and checklist",
        "DevSecOps maturity scorecard",
      ],
    },
    expectations: {
      tr: [
        "Kaynak kod ve repository erişimlerinin sağlanması",
        "Build pipeline'larına okuma yetkisi verilmesi",
        "Sprint takvimi ve ekip temas noktalarının paylaşılması",
        "Gizlilik için NDA süreçlerinin tamamlanması",
        "Geri bildirim döngüleri için teknik ekip koordinasyonu",
      ],
      en: [
        "Provide repository access to source code",
        "Read access to build pipelines",
        "Share sprint cadence and team contacts",
        "Complete NDA and confidentiality steps",
        "Coordinate feedback loops with engineering leads",
      ],
    },
    timeline: {
      tr: "Threat modeling 2-4 atölye, kod inceleme sprint bazlı, pipeline orkestrasyonu 4-8 hafta; kapsam ve ekip hızına göre değişir.",
      en: "Threat modelling 2-4 workshops, code review on sprint cadence, pipeline orchestration 4-8 weeks depending on scope and squad availability.",
    },
    effectiveness: {
      tr: "Dev, QA ve güvenlik ekiplerinin ortak KPI'larıyla güvenli kodlama kültürü oluşur; üretim öncesi riskler erken aşamada kapanır.",
      en: "Shared KPIs across dev, QA and security embed secure coding culture and close risks before production.",
    },
    exampleFinding: {
      title: {
        tr: "JWT doğrulama eksikliğiyle kimlik taklidi",
        en: "JWT validation gaps enable identity impersonation",
      },
      riskLevel: "yüksek",
      impact: {
        tr: "Yetkisiz kullanıcıların oturum açması, kişisel veri ve işlem manipülasyonu riski.",
        en: "Unauthorised users can hijack sessions, risking personal data and transaction integrity.",
      },
      remediation: {
        tr: "JWT imza doğrulaması, süre sonu ve anahtar döngüsünü zorunlu kılın; ek yetkilendirme kontrolleri uygulayın.",
        en: "Enforce JWT signature validation, expirations and key rotation; add downstream authorisation checks.",
      },
    },
    pricing: {
      tr: "Uygulama sayısı, kod hacmi, pipeline entegrasyon derinliği ve eğitim ihtiyacına göre kapsam bazlı fiyatlandırılır.",
      en: "Scope-based pricing factoring app count, codebase size, pipeline integration depth and training needs.",
    },
    ctas: {
      tr: [
        { label: "Teklif iste", href: "/iletisim#teklif-formu" },
        { label: "Güvenli SDLC checklist'ini indir", href: "/kaynaklar#checklist" },
      ],
      en: [
        { label: "Request a proposal", href: "/iletisim#teklif-formu" },
        { label: "Download secure SDLC checklist", href: "/kaynaklar#checklist" },
      ],
    },
    faqs: {
      tr: [
        { question: "Threat modeling'i kimlerle yapıyorsunuz?", answer: "Ürün, mühendislik ve güvenlik ekiplerini aynı masada buluşturuyoruz." },
        { question: "Hangi dillerde kod incelemesi yapıyorsunuz?", answer: "Java, .NET, Node.js, Python, Go, PHP, Swift ve Kotlin dahil yaygın yığınları destekliyoruz." },
        { question: "Otomasyon araçlarını siz mi sağlıyorsunuz?", answer: "Mevcut lisanslarınızı optimize eder, gerekirse yeni araç önerileri sunarız." },
        { question: "CI/CD entegrasyonu ne kadar sürer?", answer: "Pipeline karmaşıklığına göre 2-6 hafta arasında tamamlanır." },
        { question: "Eğitim veriyor musunuz?", answer: "Geliştirici odaklı secure coding workshop'ları planlayabiliriz." },
      ],
      en: [
        { question: "Who joins the threat modelling sessions?", answer: "We bring product, engineering and security stakeholders together." },
        { question: "Which languages do you review?", answer: "We support Java, .NET, Node.js, Python, Go, PHP, Swift, Kotlin and more." },
        { question: "Do you provide tooling?", answer: "We optimise existing licences and recommend tools when gaps exist." },
        { question: "How long does CI/CD integration take?", answer: "Typically 2-6 weeks depending on pipeline complexity." },
        { question: "Do you deliver training?", answer: "Yes, we run developer-focused secure coding workshops." },
      ],
    },
    schemaDescription: {
      tr: "Threat modeling, secure code review ve otomasyon orkestrasyonu ile DevSecOps hızınızı artırın.",
      en: "Accelerate DevSecOps with threat modelling, secure code review and automation orchestration.",
    },
  },
  {
    slug: "bulut-guvenligi",
    serviceType: { tr: "Bulut Güvenliği Değerlendirmeleri", en: "Cloud Security Assessments" },
    metaTitle: {
      tr: "Bulut Güvenliği Değerlendirmeleri | AWS, Azure, GCP",
      en: "Cloud Security Assessments | AWS, Azure, GCP",
    },
    metaDescription: {
      tr: "Çoklu bulut ortamlarınız için yapılandırma denetimleri, IaC incelemeleri ve Zero Trust mimari önerileri. CIS, NIST ve yerel uyum.",
      en: "Configuration reviews, IaC analysis and Zero Trust recommendations for multi-cloud estates. CIS, NIST and local compliance ready.",
    },
    ogTitle: {
      tr: "Bulutta Görünürlük ve Kontrol",
      en: "Visibility and Control in the Cloud",
    },
    ogDescription: {
      tr: "AWS, Azure, GCP için sürekli güvenlik değerlendirmeleri.",
      en: "Continuous security assessments for AWS, Azure and GCP.",
    },
    ogImage: "/og/cloud.jpg",
    heroTitle: {
      tr: "Bulut altyapınızı görünür ve yönetilebilir hale getirin.",
      en: "Make your cloud estate visible and manageable.",
    },
    heroSummary: {
      tr: "CIS benchmark'ları, NIST kontrolleri ve yerel regülasyonlarla uyumlu bulut denetimleri yapıyoruz. IaC taraması, erişim modeli incelemesi ve sürekli iyileştirme önerileri sunuyoruz.",
      en: "We benchmark your cloud against CIS, NIST and local regulations, reviewing IaC, access models and delivering continuous improvement guidance.",
    },
    coverage: {
      tr: [
        "AWS, Azure, GCP hesap ve proje denetimleri",
        "SaaS platform güvenliği (M365, Salesforce vb.)",
        "Kubernetes ve container güvenlik değerlendirmeleri",
        "IaC (Terraform, CloudFormation) şablon taraması",
        "Zero Trust ağ ve erişim mimarisi",
        "Veri kaybı önleme ve şifreleme kontrolleri",
      ],
      en: [
        "AWS, Azure, GCP account and project reviews",
        "SaaS platform security (M365, Salesforce, etc.)",
        "Kubernetes and container security assessments",
        "IaC template scanning (Terraform, CloudFormation)",
        "Zero Trust network and access architecture",
        "Data loss prevention and encryption controls",
      ],
    },
    methodology: {
      tr: [
        "CIS Benchmarks",
        "NIST CSF / 800-53",
        "ISO 27017 ve ISO 27018",
        "BDDK bulut rehberi ve yerel gereklilikler",
      ],
      en: [
        "CIS Benchmarks",
        "NIST CSF / 800-53",
        "ISO 27017 and ISO 27018",
        "BDDK cloud guidance and local requirements",
      ],
    },
    deliverables: {
      tr: [
        "Yanlış yapılandırma raporu ve risk önceliklendirmesi",
        "IaC şablon önerileri ve politika güncellemeleri",
        "Zero Trust yol haritası",
        "Erişim modeli ve kimlik yönetimi raporu",
        "Eğitim ve runbook taslakları",
      ],
      en: [
        "Misconfiguration report with prioritised risks",
        "IaC improvement suggestions and policy updates",
        "Zero Trust roadmap",
        "Access model and identity management review",
        "Training and runbook templates",
      ],
    },
    expectations: {
      tr: [
        "Read-only hesap erişimleri veya güvenli konfigürasyon çıktıları",
        "Ağ diyagramları ve veri sınıflandırma bilgileri",
        "Değişiklik takvimi ve sorumluların paylaşılması",
        "Gizlilik sözleşmeleri ve erişim kayıtlarının onaylanması",
        "Olay müdahale planlarının gözden geçirilmesi",
      ],
      en: [
        "Read-only access or secure configuration exports",
        "Network diagrams and data classification details",
        "Change calendar and accountable owners",
        "Completed confidentiality and access logging agreements",
        "Review of incident response plans",
      ],
    },
    timeline: {
      tr: "2-4 hafta aralığında tamamlanır; süre hesap sayısı, servis çeşitliliği ve IaC kapsamına göre değişir.",
      en: "2-4 weeks depending on account volume, service diversity and IaC scope.",
    },
    effectiveness: {
      tr: "Sürekli izleme önerileri ve runbook taslaklarıyla bulut güvenliği operasyonlarının olgunluğu artar.",
      en: "Continuous monitoring recommendations and runbook templates raise cloud security operations maturity.",
    },
    exampleFinding: {
      title: {
        tr: "Public S3 bucket üzerinden hassas veri sızıntısı",
        en: "Sensitive data exposed via public S3 bucket",
      },
      riskLevel: "kritik",
      impact: {
        tr: "KVKK kapsamındaki kişisel verilerin yetkisiz erişime açılması ve olası idari para cezaları.",
        en: "Unauthorised access to KVKK-protected personal data with potential regulatory fines.",
      },
      remediation: {
        tr: "Bucket policy sıkılaştırılması, şifreleme, erişim loglarının aktif edilmesi ve DLP uyarılarının yapılandırılması.",
        en: "Tighten bucket policies, enforce encryption, enable access logging and configure DLP alerts.",
      },
    },
    pricing: {
      tr: "Hesap sayısı, servis çeşitliliği, IaC kapsamı ve raporlama derinliğine göre kapsam bazlı fiyatlandırılır.",
      en: "Scope-based pricing according to account count, service breadth, IaC scope and reporting depth.",
    },
    ctas: {
      tr: [
        { label: "Teklif iste", href: "/iletisim#teklif-formu" },
        { label: "Bulut güvenliği checklist'i indir", href: "/kaynaklar#checklist" },
      ],
      en: [
        { label: "Request a proposal", href: "/iletisim#teklif-formu" },
        { label: "Download cloud security checklist", href: "/kaynaklar#checklist" },
      ],
    },
    faqs: {
      tr: [
        { question: "Hangi bulut sağlayıcılarını destekliyorsunuz?", answer: "AWS, Azure, GCP'nin yanı sıra SaaS platformları ve hibrit ortamları kapsıyoruz." },
        { question: "Değerlendirme sırasında üretim etkilenir mi?", answer: "Read-only erişimlerle çalışırız; üretimde değişiklik yapmayız." },
        { question: "IaC incelemesi yapıyor musunuz?", answer: "Terraform ve CloudFormation şablonlarını güvenlik kontrollerine göre tararız." },
        { question: "Zero Trust desteği veriyor musunuz?", answer: "Erişim modeli ve mikro segmentasyon önerileriyle yol haritası çıkarırız." },
        { question: "Sürekli izleme sağlıyor musunuz?", answer: "SOC/MDR ekibimizle entegrasyon yapabilir, otomatik uyarıları yapılandırabiliriz." },
      ],
      en: [
        { question: "Which cloud providers do you cover?", answer: "AWS, Azure, GCP plus key SaaS platforms and hybrid estates." },
        { question: "Will production be impacted?", answer: "We operate with read-only access and make no production changes." },
        { question: "Do you review Infrastructure as Code?", answer: "Yes, we scan Terraform and CloudFormation templates against best practices." },
        { question: "Do you provide Zero Trust guidance?", answer: "We produce roadmaps covering access models and micro-segmentation." },
        { question: "Can you set up continuous monitoring?", answer: "We can integrate with our SOC/MDR team and configure automated alerts." },
      ],
    },
    schemaDescription: {
      tr: "Çoklu bulut ortamlarınız için yapılandırma denetimleri, IaC incelemeleri ve Zero Trust mimari önerileri.",
      en: "Configuration assessments, IaC reviews and Zero Trust recommendations for multi-cloud estates.",
    },
  },
  {
    slug: "soc-mdr",
    serviceType: { tr: "SOC/MDR", en: "SOC/MDR" },
    metaTitle: {
      tr: "SOC/MDR 24/7 İzleme | Noname Security",
      en: "SOC/MDR 24/7 Monitoring | Noname Security",
    },
    metaDescription: {
      tr: "24/7 SIEM, EDR, XDR izleme; tehdit avı, olay yanıt ve raporlama. SLA'lı MDR hizmetiyle tehditleri dakikalar içinde yakalayın.",
      en: "24/7 SIEM, EDR and XDR monitoring with threat hunting, incident response and reporting. Catch threats in minutes with SLA-backed MDR.",
    },
    ogTitle: {
      tr: "24/7 görünürlük ve hızlı müdahale sağlayan MDR hizmeti",
      en: "MDR that delivers 24/7 visibility and rapid response",
    },
    ogDescription: {
      tr: "MITRE ATT&CK uyumlu use-case'lerle yanlış pozitifleri azaltın.",
      en: "Reduce false positives with MITRE ATT&CK aligned use cases.",
    },
    ogImage: "/og/mdr.jpg",
    heroTitle: {
      tr: "24/7 görünürlük ve hızlı müdahale sağlayan MDR hizmeti.",
      en: "Managed detection and response with 24/7 visibility and rapid action.",
    },
    heroSummary: {
      tr: "SOC analistlerimiz SIEM, EDR ve XDR verilerini sürekli izler; makine öğrenimi tabanlı uyarılarla yanlış pozitifleri filtreler, ilk yanıt SLA'sı 15 dakikadır.",
      en: "Our SOC analysts watch SIEM, EDR and XDR telemetry around the clock, filtering noise with ML-driven detections and delivering a 15-minute first-response SLA.",
    },
    coverage: {
      tr: [
        "SIEM yönetimi ve kural geliştirme",
        "EDR/XDR entegrasyonu ve korelasyon",
        "Threat hunting ve proaktif analiz",
        "Use case geliştirme ve tuning sprintleri",
        "Aylık yönetici raporlaması",
        "SOAR ve otomasyon geliştirme",
      ],
      en: [
        "SIEM management and use-case engineering",
        "EDR/XDR integration and correlation",
        "Threat hunting and proactive analytics",
        "Use-case tuning sprints",
        "Monthly executive reporting",
        "SOAR automation development",
      ],
    },
    methodology: {
      tr: [
        "MITRE ATT&CK TTP haritalaması",
        "SANS Incident Handling adımları",
        "ISO 27035 olay yönetimi",
        "FIRST tavsiyeleri ve tehdit istihbaratı entegrasyonu",
      ],
      en: [
        "MITRE ATT&CK TTP mapping",
        "SANS Incident Handling lifecycle",
        "ISO 27035 incident management",
        "FIRST guidance and threat intelligence integration",
      ],
    },
    deliverables: {
      tr: [
        "Günlük alarm ve vaka bildirimi",
        "Haftalık operasyon raporu",
        "Aylık yönetici özeti ve KPI'lar",
        "Olay sonrası rapor ve lesson learned",
        "Playbook güncellemeleri ve otomasyon backlog'u",
      ],
      en: [
        "Daily alert and case notifications",
        "Weekly operational report",
        "Monthly executive summary with KPIs",
        "Post-incident report and lessons learned",
        "Playbook updates and automation backlog",
      ],
    },
    expectations: {
      tr: [
        "Log kaynaklarına erişim ve agent dağıtımı",
        "Oturum açma yetkileri ve entegrasyon API anahtarları",
        "İletişim ve eskalasyon zincirinin paylaşılması",
        "Kritik varlık envanteri ve ağ diyagramları",
        "SLA onayları ve kriz iletişim planı",
      ],
      en: [
        "Provide log source access and deploy agents",
        "Share authentication details and integration API keys",
        "Agree communication and escalation paths",
        "Deliver critical asset inventory and network diagrams",
        "Confirm SLAs and crisis communication plan",
      ],
    },
    timeline: {
      tr: "Onboarding 4-6 hafta; ilk ay yoğun tuning, sonrasında 24/7 operasyon sürekli devam eder.",
      en: "Onboarding 4-6 weeks with an intensive tuning month, then continuous 24/7 operations.",
    },
    effectiveness: {
      tr: "Yanlış pozitiflerde %30-50 azalma, tespit ve müdahale sürelerinde ölçülebilir iyileşme sağlanır.",
      en: "Expect 30-50% fewer false positives and measurable improvements in detection and response times.",
    },
    exampleFinding: {
      title: {
        tr: "EDR ile tespit edilen PowerShell tabanlı crypto-miner",
        en: "PowerShell-based crypto miner detected via EDR",
      },
      riskLevel: "orta",
      impact: {
        tr: "Sunucu performansının düşmesi, enerji maliyeti artışı ve itibar riski.",
        en: "Degraded server performance, higher energy costs and reputational exposure.",
      },
      remediation: {
        tr: "IOC'lerin bloklanması, zafiyet yamalarının uygulanması ve kullanıcı farkındalık eğitimi.",
        en: "Block IOCs, apply missing patches and reinforce user awareness.",
      },
    },
    pricing: {
      tr: "Kaynak sayısı, log hacmi, SLA seviyesi ve otomasyon kapsamına göre kapsam bazlı fiyatlandırma yapılır.",
      en: "Scope-based pricing considering source count, log volume, SLA tier and automation scope.",
    },
    ctas: {
      tr: [
        { label: "Teklif iste", href: "/iletisim#teklif-formu" },
        { label: "SOC tanıtım dokümanını indir", href: "/kaynaklar#whitepaper" },
      ],
      en: [
        { label: "Request a proposal", href: "/iletisim#teklif-formu" },
        { label: "Download SOC brochure", href: "/kaynaklar#whitepaper" },
      ],
    },
    faqs: {
      tr: [
        { question: "Hangi SIEM ve EDR araçlarını destekliyorsunuz?", answer: "Splunk, Sentinel, QRadar, Elastic, CrowdStrike, Microsoft Defender ve daha fazlasını destekliyoruz." },
        { question: "SLA'nız nedir?", answer: "Kritik uyarılarda 15 dakika içinde ilk yanıt, yüksek uyarılarda 30 dakika sağlıyoruz." },
        { question: "Log saklama sorumluluğu kimde?", answer: "Opsiyonel log arşiv hizmeti sunuyoruz; dileyen müşteriler kendi depolarını kullanabilir." },
        { question: "SOC dil desteği var mı?", answer: "Türkçe ve İngilizce 7/24 destek veriyoruz." },
        { question: "Otomasyon geliştiriyor musunuz?", answer: "SOAR üzerinde onaylı otomasyon senaryoları geliştiriyoruz." },
      ],
      en: [
        { question: "Which SIEM and EDR platforms do you support?", answer: "Splunk, Sentinel, QRadar, Elastic, CrowdStrike, Microsoft Defender and more." },
        { question: "What SLA do you commit to?", answer: "15-minute first response for critical alerts, 30 minutes for high severity." },
        { question: "Who owns log retention?", answer: "We offer optional log archiving or can work with your existing storage." },
        { question: "Do you support multiple languages?", answer: "Yes, the SOC operates 24/7 in Turkish and English." },
        { question: "Do you build automations?", answer: "We develop approved SOAR automations tailored to your environment." },
      ],
    },
    schemaDescription: {
      tr: "24/7 SIEM, EDR, XDR izleme; tehdit avı, olay yanıt ve raporlama. SLA'lı MDR hizmetiyle tehditleri dakikalar içinde yakalayın.",
      en: "24/7 SIEM, EDR and XDR monitoring with threat hunting, incident response and reporting backed by MDR SLAs.",
    },
  },
  {
    slug: "olay-mudahalesi",
    serviceType: { tr: "Olay Müdahalesi", en: "Incident Response" },
    metaTitle: {
      tr: "Olay Müdahalesi & Forensic Destek | Noname Security",
      en: "Incident Response & Forensics Support | Noname Security",
    },
    metaDescription: {
      tr: "IR playbook, dijital delil toplama, root cause analizi ve geri kazanım planı. 24/7 IR retainer.",
      en: "IR playbooks, digital forensics, root cause analysis and recovery planning with a 24/7 IR retainer.",
    },
    ogTitle: {
      tr: "İhlal anında yanınızda olacak müdahale ekibi",
      en: "Incident responders on your side when a breach hits",
    },
    ogDescription: {
      tr: "Kritik olaylarda dakikalar içinde yanınızdayız.",
      en: "We mobilise within minutes for critical incidents.",
    },
    ogImage: "/og/ir.jpg",
    heroTitle: {
      tr: "İhlal anında yanınızda olacak müdahale ekibi.",
      en: "An incident response team ready when breaches occur.",
    },
    heroSummary: {
      tr: "IR uzmanlarımız olay tespiti sonrası dakikalar içinde müdahale ederek zarar alanını daraltır. Forensics ile kök nedeni bulur, geri dönüş planı oluştururuz.",
      en: "Our IR specialists contain threats within minutes, conduct forensics to identify root cause and orchestrate recovery.",
    },
    coverage: {
      tr: [
        "IR retainer ve 7/24 hotline",
        "Containment, eradication, recovery adımları",
        "Dijital adli bilişim (disk, bellek, ağ)",
        "Ransomware ve veri sızıntısı müdahalesi",
        "Kriz iletişimi ve paydaş yönetimi",
        "Olay sonrası ders çıkarma ve tatbikat",
      ],
      en: [
        "IR retainer with 24/7 hotline",
        "Containment, eradication and recovery execution",
        "Digital forensics (disk, memory, network)",
        "Ransomware and data leakage response",
        "Crisis communications and stakeholder management",
        "Post-incident lessons learned and exercises",
      ],
    },
    methodology: {
      tr: [
        "NIST 800-61",
        "ISO 27035",
        "FIRST incident response tavsiyeleri",
        "Forensic readiness prensipleri",
      ],
      en: [
        "NIST 800-61",
        "ISO 27035",
        "FIRST incident response guidance",
        "Forensic readiness principles",
      ],
    },
    deliverables: {
      tr: [
        "IR playbook ve runbook revizyonları",
        "Olay zaman çizelgesi ve delil zinciri",
        "Root cause analizi ve etki raporu",
        "Kurtarma planı ve önleyici öneriler",
        "Tatbikat ve tabletop senaryoları",
      ],
      en: [
        "Updated IR playbooks and runbooks",
        "Incident timeline with evidence chain",
        "Root cause analysis and impact report",
        "Recovery plan with preventive recommendations",
        "Tabletop and simulation scenarios",
      ],
    },
    expectations: {
      tr: [
        "IR temas listesinin paylaşılması",
        "Sistem görüntüleri ve log erişimleri",
        "Yönetim sponsoru ve kriz iletişim onayları",
        "Sigorta ve hukuk ekipleriyle koordinasyon",
        "Kritik sistemlerin yedek planlarının iletilmesi",
      ],
      en: [
        "Provide IR contact lists",
        "Supply system images and log access",
        "Executive sponsorship and crisis approvals",
        "Coordinate with insurance and legal teams",
        "Share backup plans for critical systems",
      ],
    },
    timeline: {
      tr: "Hazırlık 2 hafta, olay bazlı SLA: kritik olaylarda 15 dakikada ilk temas; müdahale süresi olay kapsamına göre değişir.",
      en: "Preparation 2 weeks. Incident SLA: 15-minute first touch for critical cases; response duration varies by scope.",
    },
    effectiveness: {
      tr: "Tatbikat ve lesson learned oturumlarıyla olaylara hazırlık artar; retainer modeli sayesinde olay anında hızlı mobilizasyon sağlanır.",
      en: "Exercises and lessons learned sessions build readiness while the retainer guarantees rapid mobilisation.",
    },
    exampleFinding: {
      title: {
        tr: "Ransomware lateral movement ile dosya sunucularını şifreledi",
        en: "Ransomware leveraged lateral movement to encrypt file servers",
      },
      riskLevel: "kritik",
      impact: {
        tr: "Operasyon durması, veri kaybı, regülasyon cezası riski ve müşteri güven kaybı.",
        en: "Operational downtime, data loss, regulatory penalty risk and customer trust erosion.",
      },
      remediation: {
        tr: "Ağ segmentasyonu, offline yedek testleri, EDR kural setlerinin güçlendirilmesi ve kimlik güvenliği iyileştirmeleri.",
        en: "Implement network segmentation, validate offline backups, harden EDR rules and improve identity security.",
      },
    },
    pricing: {
      tr: "Retainer kapsamı, SLA seviyesi, olay sonrası raporlama derinliği ve tatbikat sıklığına göre fiyatlandırılır.",
      en: "Pricing reflects retainer scope, SLA tier, post-incident reporting depth and exercise cadence.",
    },
    ctas: {
      tr: [
        { label: "IR retainer teklifi al", href: "/iletisim#teklif-formu" },
        { label: "Kriz tatbikatı planla", href: "/iletisim#randevu" },
      ],
      en: [
        { label: "Request IR retainer pricing", href: "/iletisim#teklif-formu" },
        { label: "Plan a crisis exercise", href: "/iletisim#randevu" },
      ],
    },
    faqs: {
      tr: [
        { question: "IR retainer nedir?", answer: "Yıl boyu hazır bekleyen ve olay anında belirlenen SLA'larla devreye giren müdahale abonelik modelidir." },
        { question: "Tatbikat sunuyor musunuz?", answer: "Evet, tabletop ve teknik tatbikatlarla ekiplerinizi hazırlıyoruz." },
        { question: "Dijital delil toplama nasıl yönetiliyor?", answer: "Delil zincirine uygun olarak imaj alınır, hash değerleri kayıt altına alınır." },
        { question: "Hukuki süreçlerde destek sağlıyor musunuz?", answer: "Hukuk ekibinizle koordineli hareket eder, teknik rapor ve ifadeleri hazırlamada destek veririz." },
        { question: "Retainer kapsamında hangi SLA'lar var?", answer: "Kritik olaylarda 15 dakika, yüksek olaylarda 30 dakika içinde ilk temas sağlanır." },
      ],
      en: [
        { question: "What is an IR retainer?", answer: "A subscription that keeps the response team on standby with agreed SLAs for rapid mobilisation." },
        { question: "Do you run exercises?", answer: "Yes, we deliver tabletop and technical simulations to prepare teams." },
        { question: "How do you handle digital evidence?", answer: "We capture images following chain-of-custody with recorded hashes." },
        { question: "Do you support legal proceedings?", answer: "We coordinate with your legal counsel and provide technical documentation or testimony." },
        { question: "What SLAs are included?", answer: "15-minute first touch for critical incidents and 30 minutes for high severity cases." },
      ],
    },
    schemaDescription: {
      tr: "IR playbook, dijital delil toplama, root cause analizi ve geri kazanım planı. 24/7 IR retainer.",
      en: "Incident response playbooks, digital forensics, root cause analysis and recovery planning with a 24/7 IR retainer.",
    },
  },
  {
    slug: "danismanlik",
    serviceType: { tr: "Danışmanlık", en: "Compliance Advisory" },
    metaTitle: {
      tr: "KVKK, ISO 27001, PCI DSS Danışmanlığı | Noname Security",
      en: "KVKK, ISO 27001, PCI DSS Advisory | Noname Security",
    },
    metaDescription: {
      tr: "KVKK, ISO 27001, PCI DSS, NIST CSF ve Zero Trust için gap analizi, dokümantasyon ve sertifikasyon yol haritası.",
      en: "Gap analysis, documentation and certification roadmaps for KVKK, ISO 27001, PCI DSS, NIST CSF and Zero Trust.",
    },
    ogTitle: {
      tr: "Uyumunuzu hızlandırın, denetim stresini azaltın",
      en: "Accelerate compliance and reduce audit stress",
    },
    ogDescription: {
      tr: "Gap analizi, politika setleri ve denetim prova oturumları.",
      en: "Gap analysis, policy packs and audit rehearsal sessions.",
    },
    ogImage: "/og/compliance.jpg",
    heroTitle: {
      tr: "Uyumunuzu hızlandırın, denetim stresini azaltın.",
      en: "Accelerate compliance and lower audit stress.",
    },
    heroSummary: {
      tr: "Regülasyon deneyimine sahip danışmanlarımız gap analizinden denetim öncesi hazırlığa kadar tüm süreci yönetir; denetçi diliyle raporlayıp kurum içi sahiplenmeyi artırırız.",
      en: "Our seasoned consultants manage the entire journey—from gap analysis to pre-audit readiness—speaking the auditors’ language and driving internal ownership.",
    },
    coverage: {
      tr: [
        "KVKK veri envanteri ve süreç analizi",
        "ISO 27001 ISMS kurulumu ve iç denetim",
        "PCI DSS gereklilikleri ve teknik kontroller",
        "NIST CSF / 800-53 olgunluk analizi",
        "Zero Trust stratejisi ve yol haritası",
        "Politika, prosedür ve sözleşme setleri",
      ],
      en: [
        "KVKK data inventory and process analysis",
        "ISO 27001 ISMS implementation and internal audit",
        "PCI DSS requirements and technical controls",
        "NIST CSF / 800-53 maturity assessment",
        "Zero Trust strategy and roadmap",
        "Policies, procedures and contractual clauses",
      ],
    },
    methodology: {
      tr: [
        "İlgili çerçevelere özel gereksinim katalogları",
        "Risk bazlı yaklaşım ve iş etkisi değerlendirmesi",
        "Denetim provası ve readiness değerlendirmesi",
        "KPI ve olgunluk seviyelerini izleme",
      ],
      en: [
        "Framework-specific requirement catalogues",
        "Risk-based approach with business impact mapping",
        "Audit rehearsals and readiness assessments",
        "Tracking maturity with KPIs",
      ],
    },
    deliverables: {
      tr: [
        "Gap analizi raporu ve aksiyon planı",
        "Politika ve prosedür seti",
        "Denetim prova oturumu ve soru bankası",
        "Yönetici dashboard ve olgunluk skor kartı",
        "Eğitim planı ve farkındalık materyalleri",
      ],
      en: [
        "Gap analysis report with action plan",
        "Policy and procedure suite",
        "Audit rehearsal sessions with question banks",
        "Executive dashboard and maturity scorecard",
        "Training plan and awareness materials",
      ],
    },
    expectations: {
      tr: [
        "Mevcut dokümantasyonun paylaşılması",
        "Süreç sahipleri ve paydaşların belirlenmesi",
        "Denetim takvimi ve hedeflerin netleştirilmesi",
        "Yönetim sponsorluğu ve karar mekanizmaları",
        "Gizlilik sözleşmeleri ve veri erişim izinleri",
      ],
      en: [
        "Provide existing documentation",
        "Identify process owners and stakeholders",
        "Clarify audit timelines and objectives",
        "Secure executive sponsorship and decision paths",
        "Complete confidentiality and data access approvals",
      ],
    },
    timeline: {
      tr: "KVKK projeleri 6-12 hafta, ISO 27001 3-6 ay, PCI DSS 8-16 hafta; kapsam ve paydaş hızına bağlıdır.",
      en: "KVKK projects run 6-12 weeks, ISO 27001 3-6 months, PCI DSS 8-16 weeks—subject to scope and stakeholder velocity.",
    },
    effectiveness: {
      tr: "Steering committee ve KPI takibiyle kurum içi sahiplenme artar, denetimlerde kritik bulgu sayısı düşer.",
      en: "Steering committees and KPI tracking build ownership and reduce critical audit findings.",
    },
    exampleFinding: {
      title: {
        tr: "KVKK veri saklama politikası belirsiz",
        en: "Ambiguous KVKK data retention policy",
      },
      riskLevel: "yüksek",
      impact: {
        tr: "Yetkisiz veri tutma nedeniyle idari para cezası ve itibar kaybı riski.",
        en: "Risk of regulatory fines and reputational impact for retaining personal data beyond legal limits.",
      },
      remediation: {
        tr: "Veri imha takvimleri oluşturun, onay mekanizmaları tanımlayın ve farkındalık eğitimleri düzenleyin.",
        en: "Establish data disposal schedules, define approval workflows and deliver awareness training.",
      },
    },
    pricing: {
      tr: "Çerçeve kapsamı, dokümantasyon derinliği, saha ziyareti sayısı ve eğitim ihtiyacına göre fiyatlandırılır.",
      en: "Pricing depends on framework scope, documentation depth, onsite visits and training requirements.",
    },
    ctas: {
      tr: [
        { label: "Uyum yol haritası talep et", href: "/iletisim#teklif-formu" },
        { label: "Denetim provası planla", href: "/iletisim#randevu" },
      ],
      en: [
        { label: "Request a compliance roadmap", href: "/iletisim#teklif-formu" },
        { label: "Plan an audit rehearsal", href: "/iletisim#randevu" },
      ],
    },
    faqs: {
      tr: [
        { question: "Sertifikasyon süresi ne kadar?", answer: "Çerçeveye göre değişir; ISO 27001 için ortalama 3-6 ay, PCI DSS için 2-4 ay planlanır." },
        { question: "Dokümantasyonu kim hazırlar?", answer: "Politika ve prosedürleri birlikte hazırlar, onay sonrası kurum içi sahiplenme sağlanır." },
        { question: "Paydaş katılımı nasıl sağlanıyor?", answer: "Steering committee toplantıları ve atölyelerle tüm paydaşlar sürece dahil edilir." },
        { question: "Denetçi ile iletişimi kim yürütüyor?", answer: "Hazırlık sürecinde danışmanlarımız, resmi denetimde kurum temsilcileriyle koordineli ilerler." },
        { question: "Veri işleme envanterini nasıl oluşturuyorsunuz?", answer: "Süreç sahipleriyle anket ve atölyeler yaparak veri varlık haritası oluşturuyoruz." },
      ],
      en: [
        { question: "How long do certifications take?", answer: "Varies by framework—ISO 27001 typically 3-6 months, PCI DSS 2-4 months." },
        { question: "Who prepares the documentation?", answer: "We co-author policies and procedures, driving internal ownership during approval." },
        { question: "How do you engage stakeholders?", answer: "Through steering committees and collaborative workshops." },
        { question: "Who handles auditor communication?", answer: "Our consultants lead during readiness; formal audits run with your representatives." },
        { question: "How is the data inventory created?", answer: "We run surveys and workshops with process owners to map data assets." },
      ],
    },
    schemaDescription: {
      tr: "KVKK, ISO 27001, PCI DSS, NIST CSF ve Zero Trust için gap analizi, dokümantasyon ve sertifikasyon yol haritası.",
      en: "Gap analysis, documentation and certification roadmaps for KVKK, ISO 27001, PCI DSS, NIST CSF and Zero Trust.",
    },
  },
  {
    slug: "egitimler",
    serviceType: { tr: "Eğitimler", en: "Training" },
    metaTitle: {
      tr: "Siber Güvenlik Eğitimleri | Farkındalık & Teknik",
      en: "Cybersecurity Training | Awareness & Technical",
    },
    metaDescription: {
      tr: "Farkındalık, SOC analisti, web/app pentest ve bulut güvenliği eğitimleri. Temel, orta, ileri seviyelerde, yerinde veya uzaktan.",
      en: "Awareness, SOC analyst, web/app pentest and cloud security training. Foundational to advanced, onsite or remote.",
    },
    ogTitle: {
      tr: "Ekiplerinizi saldırganlara karşı güçlendirin",
      en: "Equip your teams against attackers",
    },
    ogDescription: {
      tr: "Modüler farkındalık ve teknik eğitim katalogları.",
      en: "Modular awareness and technical training catalogue.",
    },
    ogImage: "/og/training.jpg",
    heroTitle: {
      tr: "Ekiplerinizi saldırganlara karşı güçlendirin.",
      en: "Empower your teams to outpace attackers.",
    },
    heroSummary: {
      tr: "Farkındalık ve teknik eğitim kataloglarımız sektöre özel vakalar ve hands-on laboratuvarlarla desteklenir. Katılımcılar sertifika veya katılım belgesi alır.",
      en: "Our awareness and technical catalogues blend sector-specific scenarios with hands-on labs, delivering certificates or attendance records for every participant.",
    },
    coverage: {
      tr: [
        "Farkındalık modülleri (Temel, Orta, İleri)",
        "SOC analisti bootcamp (5 gün)",
        "Web/App pentest eğitimi (4 gün)",
        "Cloud security pratiği (3 gün)",
        "Güvenli kodlama ve DevSecOps atölyeleri",
        "Yerinde veya uzaktan esnek takvim",
      ],
      en: [
        "Awareness tracks (Fundamental, Intermediate, Advanced)",
        "SOC analyst bootcamp (5 days)",
        "Web/App pentest training (4 days)",
        "Cloud security labs (3 days)",
        "Secure coding and DevSecOps workshops",
        "Flexible onsite or remote delivery",
      ],
    },
    methodology: {
      tr: [
        "Yetişkin öğrenme prensipleri",
        "Hands-on laboratuvar ve vaka çalışmaları",
        "Ön test / son test performans ölçümü",
        "Sertifika & katılım belgesi çıktı yönetimi",
      ],
      en: [
        "Adult learning principles",
        "Hands-on labs and case studies",
        "Pre-test / post-test performance measurement",
        "Certificate and attendance management",
      ],
    },
    deliverables: {
      tr: [
        "Katılım ve başarı sertifikaları",
        "Eğitim slaytları ve kayıt erişimi",
        "Laboratuvar ortamı ve kullanıcı hesapları",
        "Kurumsal raporlama ve skor kartı",
        "Ön koşul ve devam planı önerileri",
      ],
      en: [
        "Attendance and achievement certificates",
        "Slide decks and recording access",
        "Lab environments and user accounts",
        "Corporate reporting and scorecards",
        "Prerequisite and follow-up plan guidance",
      ],
    },
    expectations: {
      tr: [
        "Katılımcı listesi ve e-posta adresleri",
        "Teknik eğitimler için lab ortamı veya VPN",
        "Takvim ve saat dilimi tercihlerinin paylaşılması",
        "Kurumsal marka gereksinimleri",
        "KVKK ve gizlilik onaylarının sağlanması",
      ],
      en: [
        "Participant lists with email addresses",
        "Lab environment or VPN for technical tracks",
        "Preferred schedule and time zones",
        "Branding requirements",
        "KVKK and privacy consents",
      ],
    },
    timeline: {
      tr: "Takvime bağlı; farkındalık modülleri 2 saat - 2 gün, teknik bootcamp 3-5 gün sürer. Talebe göre tekrar edilebilir.",
      en: "Timing depends on the track—awareness modules span 2 hours to 2 days, technical bootcamps 3-5 days—with repeatability on demand.",
    },
    effectiveness: {
      tr: "Ön-son test skorları ve aksiyon planlarıyla öğrenme kalıcı hale getirilir, ekip yetkinlikleri ölçülebilir.",
      en: "Pre/post assessments and action plans ensure retention and measurable capability uplift.",
    },
    exampleFinding: {
      title: {
        tr: "Web pentest eğitiminde veri tabanı enjeksiyonu farkındalığı",
        en: "Database injection awareness in web pentest training",
      },
      riskLevel: "düşük",
      impact: {
        tr: "Geliştiricilerin güvenli kodlama pratiklerini benimsemesiyle üretim açıklarının azalması.",
        en: "Production defects drop as developers adopt secure coding practices.",
      },
      remediation: {
        tr: "Parametrik sorgular, ORM güvenlik ayarları ve giriş doğrulama kontrolleri uygulanır.",
        en: "Enforce parameterised queries, ORM hardening and robust input validation.",
      },
    },
    pricing: {
      tr: "Katılımcı sayısı, modül seçimi, eğitim formatı (yerinde/uzaktan) ve sertifika gereksinimlerine göre kapsam bazlı fiyatlandırılır.",
      en: "Scope-based pricing reflecting participant volume, module mix, delivery format and certification requirements.",
    },
    ctas: {
      tr: [
        { label: "Eğitim takvimini gör", href: "/kaynaklar#webinar" },
        { label: "Kurumsal eğitim teklifi al", href: "/iletisim#teklif-formu" },
      ],
      en: [
        { label: "View training calendar", href: "/kaynaklar#webinar" },
        { label: "Request corporate training", href: "/iletisim#teklif-formu" },
      ],
    },
    faqs: {
      tr: [
        { question: "Katılım belgesi veriyor musunuz?", answer: "Evet, tüm katılımcılara Türkçe ve İngilizce sertifika veya katılım belgesi sunuyoruz." },
        { question: "Eğitim dili nedir?", answer: "Varsayılan Türkçe; talebe göre İngilizce oturumlar planlanabilir." },
        { question: "Uzaktan eğitim altyapısı nasıl?", answer: "Güvenli video platformu ve interaktif lab ortamları kullanıyoruz." },
        { question: "Minimum katılımcı sayısı var mı?", answer: "Kurumsal eğitimlerde minimum 8, açık sınıflarda tek katılımcı ile ilerleyebiliriz." },
        { question: "İçeriği özelleştiriyor musunuz?", answer: "Sektör ve teknoloji yığınına göre vakaları uyarlıyoruz." },
      ],
      en: [
        { question: "Do you provide certificates?", answer: "Yes, every attendee receives a Turkish and English certificate or attendance record." },
        { question: "What is the training language?", answer: "Turkish by default with optional English sessions." },
        { question: "How do remote classes run?", answer: "Secure video delivery with interactive labs." },
        { question: "Is there a minimum participant count?", answer: "Corporate sessions require 8 participants; open classes can run with a single enrolment." },
        { question: "Can you tailor the content?", answer: "We customise scenarios based on industry and tech stack." },
      ],
    },
    schemaDescription: {
      tr: "Farkındalık ve teknik siber güvenlik eğitimleri. Temel, orta, ileri seviye, yerinde veya uzaktan seçenekler.",
      en: "Awareness and technical cybersecurity training, from foundational to advanced, delivered onsite or remotely.",
    },
  },
  // Additional service definitions (red team, etc.) should follow the same structure with translations.
];

function mapExampleFinding(raw: ExampleFindingRaw, language: LanguageCode): ExampleFinding {
  return {
    title: raw.title[language],
    riskLevel: raw.riskLevel,
    impact: raw.impact[language],
    remediation: raw.remediation[language],
  };
}

function mapFaqs(raw: { tr: FAQ[]; en: FAQ[] }, language: LanguageCode): FAQ[] {
  return raw[language] ?? raw.tr;
}

function mapCtas(raw: { tr: CTA[]; en: CTA[] }, language: LanguageCode): CTA[] {
  return raw[language] ?? raw.tr;
}

function mapStrings(raw: LocalizedList, language: LanguageCode): string[] {
  return raw[language] ?? raw.tr;
}

function mapService(raw: ServiceRaw, language: LanguageCode): ServiceContent {
  return {
    slug: raw.slug,
    name: raw.serviceType[language],
    serviceType: raw.serviceType[language],
    metaTitle: raw.metaTitle[language],
    metaDescription: raw.metaDescription[language],
    ogTitle: raw.ogTitle[language],
    ogDescription: raw.ogDescription[language],
    ogImage: raw.ogImage,
    heroTitle: raw.heroTitle[language],
    heroSummary: raw.heroSummary[language],
    coverage: mapStrings(raw.coverage, language),
    methodology: mapStrings(raw.methodology, language),
    deliverables: mapStrings(raw.deliverables, language),
    expectations: mapStrings(raw.expectations, language),
    timeline: raw.timeline[language],
    effectiveness: raw.effectiveness[language],
    exampleFinding: mapExampleFinding(raw.exampleFinding, language),
    pricing: raw.pricing[language],
    ctas: mapCtas(raw.ctas, language),
    faqs: mapFaqs(raw.faqs, language),
    schemaDescription: raw.schemaDescription[language],
  };
}

export function getServices(language: LanguageCode): ServiceContent[] {
  return servicesRaw.map((service) => mapService(service, language));
}

export function getServiceBySlug(slug: string, language: LanguageCode): ServiceContent | undefined {
  const raw = servicesRaw.find((service) => service.slug === slug);
  return raw ? mapService(raw, language) : undefined;
}
