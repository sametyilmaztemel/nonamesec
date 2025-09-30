import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { LanguageCode } from "@/components/UIProvider";
import { getBlogPostBySlug } from "@/content/resources";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}): Promise<Metadata> {
  const language: LanguageCode = searchParams?.lang === "en" ? "en" : "tr";
  const post = getBlogPostBySlug(language, params.slug);
  if (!post) {
    return {
      title: "Kaynak bulunamadı",
    };
  }
  return {
    title: `${post.title} | Noname Security`,
    description: post.description,
  };
}

export default function BlogDetail({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const language: LanguageCode = searchParams?.lang === "en" ? "en" : "tr";
  const post = getBlogPostBySlug(language, params.slug);

  if (!post) {
    notFound();
  }

  const alternateLang: LanguageCode = language === "tr" ? "en" : "tr";

  return (
    <div className="container section-spacing space-y-12">
      <div className="space-y-3">
        <span className="badge">{language === "tr" ? "Blog" : "Blog"}</span>
        <h1 className="text-3xl font-bold text-[var(--color-light)]">{post.title}</h1>
        {post.date ? (
          <p className="text-sm text-[var(--color-muted)]">
            {new Date(post.date).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US")}
          </p>
        ) : null}
        <p className="text-lg text-[var(--color-muted)] leading-relaxed">{post.description}</p>
      </div>

      <div className="prose prose-invert max-w-3xl text-[var(--color-muted)]">
        <p>
          {language === "tr"
            ? "Bu özet sayfa, blog içeriğimizin kritik derslerini ve önerilerini sunar. Tam makaleyi Kaynaklar bölümündeki formu doldurarak talep edebilirsiniz."
            : "This summary highlights the key lessons and recommendations from our full article. Request the full piece via the form on the Resources hub."}
        </p>
        <p>
          {language === "tr"
            ? "Daha fazla teknik analiz ve vaka çalışması için bültenimize abone olun."
            : "Subscribe to our briefings for deeper technical analysis and case studies."}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href={{ pathname: "/kaynaklar", hash: "blog" }} className="btn-secondary">
          {language === "tr" ? "Kaynaklara dön" : "Back to resources"}
        </Link>
        <Link
          href={{ pathname: `/blog/${params.slug}`, query: { lang: alternateLang } }}
          className="btn-secondary"
        >
          {alternateLang === "tr" ? "Türkçe görüntüle" : "View in English"}
        </Link>
      </div>
    </div>
  );
}
