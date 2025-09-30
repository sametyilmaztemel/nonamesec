import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { LanguageCode } from "@/components/UIProvider";
import { getWebinarBySlug } from "@/content/resources";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}): Promise<Metadata> {
  const language: LanguageCode = searchParams?.lang === "en" ? "en" : "tr";
  const webinar = getWebinarBySlug(language, params.slug);
  if (!webinar) {
    return {
      title: "Webinar bulunamadı",
    };
  }
  return {
    title: `${webinar.title} | Noname Security`,
    description: webinar.description,
  };
}

export default function WebinarDetail({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const language: LanguageCode = searchParams?.lang === "en" ? "en" : "tr";
  const webinar = getWebinarBySlug(language, params.slug);

  if (!webinar) {
    notFound();
  }

  const alternateLang: LanguageCode = language === "tr" ? "en" : "tr";

  return (
    <div className="container section-spacing space-y-12">
      <div className="space-y-3">
        <span className="badge">Webinar</span>
        <h1 className="text-3xl font-bold text-[var(--color-light)]">{webinar.title}</h1>
        <p className="text-lg text-[var(--color-muted)] leading-relaxed">{webinar.description}</p>
      </div>

      <div className="prose prose-invert max-w-3xl text-[var(--color-muted)]">
        <p>
          {language === "tr"
            ? "Webinar kaydına erişmek için müşteri temsilcinizle iletişime geçebilir veya bizimle form üzerinden temasa geçebilirsiniz."
            : "Reach out to your account manager or submit the contact form to access the full webinar recording."}
        </p>
        <p>
          {language === "tr"
            ? "Canlı oturum davetlerini almak için bültenimize abone olmayı unutmayın."
            : "Subscribe to our newsletter to receive invitations for upcoming live sessions."}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href={{ pathname: "/kaynaklar", hash: "webinar" }} className="btn-secondary">
          {language === "tr" ? "Kaynaklara dön" : "Back to resources"}
        </Link>
        <Link
          href={{ pathname: `/webinar/${params.slug}`, query: { lang: alternateLang } }}
          className="btn-secondary"
        >
          {alternateLang === "tr" ? "Türkçe görüntüle" : "View in English"}
        </Link>
      </div>
    </div>
  );
}
