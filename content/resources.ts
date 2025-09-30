import type { LanguageCode } from "@/components/UIProvider";
import type { ResourceItem } from "./types";

type ResourceRaw = {
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  href: string;
  type: "blog" | "ebook" | "webinar";
  date?: string;
};

const blogPostsRaw: ResourceRaw[] = [
  {
    title: {
      tr: "OWASP Top 10 2024'te Öne Çıkan 5 Risk",
      en: "Top 5 Risks in the 2024 OWASP Top 10",
    },
    description: {
      tr: "Yeni OWASP Top 10 sürümündeki risklerin kurumlar için anlamını, önleyici kontroller ve hızlı kazanımlarla yorumladık.",
      en: "We break down what the new OWASP Top 10 means for organisations with preventative controls and quick wins.",
    },
    href: "/blog/owasp-top10-2024-one-cikan-riskler",
    type: "blog",
    date: "2024-07-12",
  },
  {
    title: {
      tr: "MITRE ATT&CK ile Red Team Senaryosu Tasarlamak",
      en: "Designing Red Team Scenarios with MITRE ATT&CK",
    },
    description: {
      tr: "Tehdit istihbaratı ve MITRE haritalarıyla kurumunuza özel red team senaryosunu nasıl kurgulayabilirsiniz?",
      en: "How to craft organisation-specific red team scenarios using threat intelligence and MITRE mapping.",
    },
    href: "/blog/mitre-red-team-senaryo",
    type: "blog",
    date: "2024-06-03",
  },
  {
    title: {
      tr: "KVKK Denetiminde Sık Kaçan Adımlar",
      en: "The KVKK Audit Steps Teams Often Miss",
    },
    description: {
      tr: "KVKK denetimleri öncesi dikkat edilmesi gereken teknik ve dokümantasyon maddelerini adım adım paylaştık.",
      en: "A step-by-step walkthrough of the technical and documentation tasks you can't miss before a KVKK audit.",
    },
    href: "/blog/kvkk-denetim-checklist",
    type: "blog",
    date: "2024-05-15",
  },
];

const ebooksRaw: ResourceRaw[] = [
  {
    title: {
      tr: "Pentest Öncesi Hazırlık Checklist'i",
      en: "Pentest Readiness Checklist",
    },
    description: {
      tr: "Penetrasyon testi öncesinde ekiplerin tamamlaması gereken teknik ve operasyonel maddeler listesi.",
      en: "Technical and operational steps your teams must complete before a penetration test.",
    },
    href: "/resources/pentest-readiness-checklist.pdf",
    type: "ebook",
  },
  {
    title: {
      tr: "KVKK Uyumunda 10 Adım",
      en: "10 Steps to KVKK Compliance",
    },
    description: {
      tr: "Veri envanteri, saklama politikaları ve denetim hazırlığı için uygulamalı checklist.",
      en: "A practical checklist covering data inventory, retention policies and audit readiness for KVKK.",
    },
    href: "/resources/kvkk-compliance-roadmap.pdf",
    type: "ebook",
  },
];

const webinarsRaw: ResourceRaw[] = [
  {
    title: {
      tr: "Red Team Playbook 2024",
      en: "Red Team Playbook 2024",
    },
    description: {
      tr: "Gerçek saldırı hikâyelerinden öğrenilen dersleri ve purple team entegrasyonunu paylaşıyoruz.",
      en: "Lessons from real attack stories and how to integrate purple teaming effectively.",
    },
    href: "/webinar/red-team-playbook-2024",
    type: "webinar",
  },
  {
    title: {
      tr: "Ransomware Olay Müdahalesinden Öğrendiklerimiz",
      en: "What We’ve Learned from Ransomware Incident Response",
    },
    description: {
      tr: "Fidye yazılımı olaylarından çıkarılan dersler ve hazırlık önerileri.",
      en: "Key takeaways and preparation guidance from real ransomware incidents.",
    },
    href: "/webinar/ransomware-olay-mudahale",
    type: "webinar",
  },
];

function mapResources(data: ResourceRaw[], language: LanguageCode): ResourceItem[] {
  return data.map((item) => ({
    title: item.title[language],
    description: item.description[language],
    href: item.href,
    type: item.type,
    date: item.date,
  }));
}

export function blogPosts(language: LanguageCode): ResourceItem[] {
  return mapResources(blogPostsRaw, language);
}

export function ebooks(language: LanguageCode): ResourceItem[] {
  return mapResources(ebooksRaw, language);
}

export function webinars(language: LanguageCode): ResourceItem[] {
  return mapResources(webinarsRaw, language);
}

export function getBlogPostBySlug(language: LanguageCode, slug: string) {
  const raw = blogPostsRaw.find((post) => post.href.split("/").pop() === slug);
  if (!raw) return undefined;
  return {
    title: raw.title[language],
    description: raw.description[language],
    href: raw.href,
    date: raw.date,
  };
}

export function getWebinarBySlug(language: LanguageCode, slug: string) {
  const raw = webinarsRaw.find((item) => item.href.split("/").pop() === slug);
  if (!raw) return undefined;
  return {
    title: raw.title[language],
    description: raw.description[language],
    href: raw.href,
  };
}
