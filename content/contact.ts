import type { LanguageCode } from "@/components/UIProvider";

type LocalizedString = { tr: string; en: string };

type FieldOption = {
  value: string;
  label: LocalizedString;
};

type LeadField = {
  name: string;
  type: "text" | "email" | "tel" | "textarea" | "multiselect" | "select";
  required: boolean;
  label: LocalizedString;
  hint?: LocalizedString;
  options?: FieldOption[];
};

type MeetingField = Omit<LeadField, "hint"> & { hint?: never };

type LeadCopy = {
  title: LocalizedString;
  description: LocalizedString;
  submitLabel: LocalizedString;
  consent: LocalizedString;
  success: LocalizedString;
  error: LocalizedString;
  fields: LeadField[];
};

type MeetingCopy = {
  title: LocalizedString;
  description: LocalizedString;
  submitLabel: LocalizedString;
  success: LocalizedString;
  reschedule: LocalizedString;
  fields: MeetingField[];
};

export const contactInfo = {
  email: "iletisim@nonamesecurity.com.tr",
  supportEmail: "support@nonamesecurity.com.tr",
  phone: "+90 (312) 255 15 30",
  irHotline: "+90 (850) 300 00 30",
  address: "İvedik OSB Mah. Teknopark Ankara, 2224 Cad. No: 1, Yenimahalle / Ankara",
  responseSla: {
    tr: "İlk yanıt ≤4 saat, kritik olay yanıtı ≤15 dakika",
    en: "First response ≤4h, critical incident ≤15 minutes",
  },
  mapEmbed: "https://maps.google.com/?q=Teknopark+Ankara,+2224.+Cadde+No:1,+Yenimahalle,+Ankara",
};

export const contactChannels = [
  {
    label: { tr: "Genel E-posta", en: "General Email" },
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    label: { tr: "Destek E-posta", en: "Support Email" },
    value: contactInfo.supportEmail,
    href: `mailto:${contactInfo.supportEmail}`,
  },
  {
    label: { tr: "Telefon", en: "Phone" },
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    label: { tr: "IR Hotline", en: "IR Hotline" },
    value: contactInfo.irHotline,
    href: `tel:${contactInfo.irHotline.replace(/[^+\d]/g, "")}`,
  },
  {
    label: { tr: "Adres", en: "Address" },
    value: contactInfo.address,
    href: contactInfo.mapEmbed,
  },
];

export const downloadableAssets = [
  {
    title: { tr: "Pentest Hazırlık Checklist", en: "Pentest Readiness Checklist" },
    description: {
      tr: "Teknik ve operasyonel hazırlık adımlarını içeren PDF.",
      en: "PDF covering technical and operational readiness tasks.",
    },
    href: "/resources/pentest-readiness-checklist.pdf",
  },
  {
    title: { tr: "KVKK Uyum Yol Haritası", en: "KVKK Compliance Roadmap" },
    description: {
      tr: "KVKK uyumluluğu için politika ve süreç kontrol listesini içerir.",
      en: "Checklist outlining policy and process steps for KVKK compliance.",
    },
    href: "/resources/kvkk-compliance-roadmap.pdf",
  },
];

const leadFormContent: LeadCopy = {
  title: {
    tr: "Ücretsiz keşif ve teklif formu",
    en: "Free discovery & proposal form",
  },
  description: {
    tr: "İhtiyaçlarınızı birkaç soruda paylaşın; 4 saat içinde dönüş yapıp ihtiyaca özel çözüm sunalım.",
    en: "Share your needs in a few questions; we’ll respond within 4 hours with a tailored proposal.",
  },
  submitLabel: {
    tr: "Formu gönder",
    en: "Submit form",
  },
  consent: {
    tr: "Verilerimin KVKK Aydınlatma Metni kapsamında işlenmesine onay veriyorum.",
    en: "I consent to data processing under the KVKK Privacy Notice.",
  },
  success: {
    tr: "Teşekkürler! 4 saat içinde dönüş yapacağız.",
    en: "Thank you! We’ll get back within 4 hours.",
  },
  error: {
    tr: "Sunucuya ulaşılamadı, lütfen tekrar deneyin.",
    en: "We couldn’t reach the server, please try again.",
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
      label: {
        tr: "Ad Soyad",
        en: "Full Name",
      },
      hint: {
        tr: "Resmi evraklarınızla uyumlu olsun.",
        en: "Please match your official documents.",
      },
    },
    {
      name: "company",
      type: "text",
      required: true,
      label: {
        tr: "Kurum Adı",
        en: "Company",
      },
      hint: {
        tr: "Teklif ve faturalandırmada kullanılacak kurum adı.",
        en: "Name to be used on proposal & invoicing.",
      },
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: {
        tr: "Kurumsal E-posta",
        en: "Business Email",
      },
      hint: {
        tr: "Kişisel e-posta yerine kurumsal alan adı tercih edin.",
        en: "Use your corporate domain rather than a personal address.",
      },
    },
    {
      name: "phone",
      type: "tel",
      required: false,
      label: {
        tr: "Telefon (opsiyonel)",
        en: "Phone (optional)",
      },
      hint: {
        tr: "Uluslararası kodla paylaşabilirsiniz. Hızlı geri dönüş için önerilir.",
        en: "Add country code. Recommended for faster turnaround.",
      },
    },
    {
      name: "services",
      type: "multiselect",
      required: true,
      label: {
        tr: "İlgilendiğiniz Hizmetler",
        en: "Interested Services",
      },
      hint: {
        tr: "Birden fazla seçenek işaretleyebilirsiniz.",
        en: "Select all that apply.",
      },
      options: [
        {
          value: "penetration-testing",
          label: {
            tr: "Penetrasyon Testi",
            en: "Penetration Testing",
          },
        },
        {
          value: "red-team",
          label: {
            tr: "Red Team",
            en: "Red Team",
          },
        },
        {
          value: "soc-mdr",
          label: {
            tr: "SOC/MDR",
            en: "SOC/MDR",
          },
        },
        {
          value: "incident-response",
          label: {
            tr: "Olay Müdahalesi",
            en: "Incident Response",
          },
        },
        {
          value: "compliance",
          label: {
            tr: "Danışmanlık",
            en: "Advisory & Compliance",
          },
        },
        {
          value: "training",
          label: {
            tr: "Eğitim",
            en: "Training",
          },
        },
        {
          value: "other",
          label: {
            tr: "Diğer",
            en: "Other",
          },
        },
      ],
    },
    {
      name: "goal",
      type: "text",
      required: true,
      label: {
        tr: "Test sonrası öncelikli hedefiniz",
        en: "Primary outcome after engagement",
      },
      hint: {
        tr: "Örn: Regülasyon uyumu, bulgu kapanış süresi, müşteri denetimi.",
        en: "e.g. Compliance, remediation speed, customer audit.",
      },
    },
    {
      name: "notes",
      type: "textarea",
      required: false,
      label: {
        tr: "Notlar",
        en: "Notes",
      },
      hint: {
        tr: "Zamanlama, kapsam veya özel gereksinimlerinizi ekleyin.",
        en: "Share timing, scope, or special requirements.",
      },
    },
  ],
};

const meetingFormContent: MeetingCopy = {
  title: {
    tr: "15 dakikalık ön görüşme planlayın",
    en: "Schedule a 15-minute intro call",
  },
  description: {
    tr: "Takvimimizden size uygun zaman dilimini seçin; ön değerlendirme için uzmanımızla görüşün.",
    en: "Pick a suitable slot from our calendar and meet an expert for a quick assessment.",
  },
  submitLabel: {
    tr: "Görüşmeyi planla",
    en: "Schedule call",
  },
  success: {
    tr: "Toplantınız planlandı! Ajandanıza davet gönderdik.",
    en: "Your meeting is booked! We’ve sent the invite.",
  },
  reschedule: {
    tr: "Plan değiştiyse buradan iptal edin.",
    en: "Need to reschedule? Cancel here.",
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
      label: {
        tr: "Ad Soyad",
        en: "Full Name",
      },
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: {
        tr: "Kurumsal E-posta",
        en: "Business Email",
      },
    },
    {
      name: "phone",
      type: "tel",
      required: true,
      label: {
        tr: "Telefon",
        en: "Phone",
      },
    },
    {
      name: "country",
      type: "text",
      required: true,
      label: {
        tr: "Ülke",
        en: "Country",
      },
    },
    {
      name: "timezone",
      type: "text",
      required: true,
      label: {
        tr: "Tercih edilen saat dilimi",
        en: "Preferred timezone",
      },
    },
    {
      name: "topic",
      type: "select",
      required: true,
      label: {
        tr: "Görüşme konusu",
        en: "Meeting topic",
      },
      options: [
        {
          value: "penetration-testing",
          label: {
            tr: "Penetrasyon Testi",
            en: "Penetration Testing",
          },
        },
        {
          value: "red-team",
          label: {
            tr: "Red Team",
            en: "Red Team",
          },
        },
        {
          value: "soc-mdr",
          label: {
            tr: "SOC/MDR",
            en: "SOC/MDR",
          },
        },
        {
          value: "compliance",
          label: {
            tr: "Uyum Danışmanlığı",
            en: "Compliance Advisory",
          },
        },
        {
          value: "training",
          label: {
            tr: "Eğitim",
            en: "Training",
          },
        },
        {
          value: "other",
          label: {
            tr: "Diğer",
            en: "Other",
          },
        },
      ],
    },
    {
      name: "notes",
      type: "textarea",
      required: false,
      label: {
        tr: "Ek not",
        en: "Additional notes",
      },
    },
  ],
};

export function getLeadFormCopy(language: LanguageCode) {
  return {
    ...leadFormContent,
    title: leadFormContent.title[language],
    description: leadFormContent.description[language],
    submitLabel: leadFormContent.submitLabel[language],
    consent: leadFormContent.consent[language],
    success: leadFormContent.success[language],
    error: leadFormContent.error[language],
    fields: leadFormContent.fields,
  };
}

export function getMeetingFormCopy(language: LanguageCode) {
  return {
    ...meetingFormContent,
    title: meetingFormContent.title[language],
    description: meetingFormContent.description[language],
    submitLabel: meetingFormContent.submitLabel[language],
    success: meetingFormContent.success[language],
    reschedule: meetingFormContent.reschedule[language],
    fields: meetingFormContent.fields,
  };
}
