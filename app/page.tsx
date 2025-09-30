import { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Noname Security | Offensive + Defensive Güvenlik Ortağınız",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Noname Security",
  url: "https://www.nonamesecurity.com.tr",
  logo: "https://www.nonamesecurity.com.tr/og/default.jpg",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+90 312 255 15 30",
      email: "iletisim@nonamesecurity.com.tr",
      contactType: "customer support",
      availableLanguage: ["tr", "en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+90 850 300 00 30",
      contactType: "emergency",
      availableLanguage: ["tr", "en"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/nonamesecurity",
    "https://twitter.com/nonamesec",
    "https://www.youtube.com/@nonamesecurity",
  ],
};

export default function HomePage() {
  return (
    <div className="space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeContent />
    </div>
  );
}
