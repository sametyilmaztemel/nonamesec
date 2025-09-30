import { Metadata } from "next";
import { CaseStudiesContent } from "@/components/CaseStudiesContent";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri | Problemden KPI'ya",
  description:
    "Problem → Yaklaşım → Teknik bulguların iş etkisi → Sonuç KPI'ları → Müşteri alıntısı formatında başarı hikayelerimiz.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
