export type CTA = {
  label: string;
  href: string;
};

export type ExampleFinding = {
  title: string;
  riskLevel: "kritik" | "yüksek" | "orta" | "düşük";
  impact: string;
  remediation: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  heroTitle: string;
  heroSummary: string;
  coverage: string[];
  methodology: string[];
  deliverables: string[];
  expectations: string[];
  timeline: string;
  effectiveness: string;
  exampleFinding: ExampleFinding;
  pricing: string;
  ctas: CTA[];
  faqs: FAQ[];
  serviceType: string;
  schemaDescription: string;
};

export type SectorContent = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  summary: string;
  painPoints: string[];
  approach: string[];
  featuredServices: string[];
  kpi: string;
  ctas: CTA[];
};

export type ResourceItem = {
  title: string;
  description: string;
  href: string;
  type: "blog" | "ebook" | "webinar";
  date?: string;
};

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
