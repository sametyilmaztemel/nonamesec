import type { Metadata } from "next";
import { ResourcesContent } from "@/components/ResourcesContent";

export const metadata: Metadata = {
  title: "Kaynaklar | Blog, E-kitap, Webinar",
  description:
    "Siber güvenlik trendleri, OWASP, MITRE ATT&CK, pentest checklist ve KVKK uyum rehberleri. Blog, e-kitap ve webinar kaynaklarımızı keşfedin.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
