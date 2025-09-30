"use client";

import Link from "next/link";
import { useUI } from "@/components/UIProvider";
import { blogPosts, ebooks, webinars } from "@/content/resources";
import { SectionHeader } from "@/components/SectionHeader";

export function ResourcesContent() {
  const { language } = useUI();
  const posts = blogPosts(language);
  const ebooksList = ebooks(language);
  const webinarsList = webinars(language);

  const readMoreLabel = language === "tr" ? "Devamını oku" : "Read more";
  const downloadLabel = language === "tr" ? "İndir" : "Download";
  const watchLabel = language === "tr" ? "Kaydı izle" : "Watch recording";

  return (
    <div className="container section-spacing space-y-16">
      <SectionHeader
        eyebrow={language === "tr" ? "Kaynaklar" : "Resources"}
        title={
          language === "tr"
            ? "Ekibinizi güncel tutacak içerikler"
            : "Content to keep your team ahead"
        }
        description={
          language === "tr"
            ? "Threat intelligence içgörüleri, checklist'ler ve kayıtlı webinarlarla bilgi birikiminizi artırın."
            : "Deep dives, checklists and recorded sessions crafted by our consulting teams."
        }
      />

      <section id="blog">
        <SectionHeader
          eyebrow={language === "tr" ? "Blog" : "Blog"}
          title={language === "tr" ? "Son yayınlar" : "Latest posts"}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.href} className="card flex h-full flex-col gap-3 p-6">
              <span className="badge">
                {post.date
                  ? new Date(post.date).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US")
                  : "Blog"}
              </span>
              <h2 className="text-lg font-semibold text-[var(--color-light)]">{post.title}</h2>
              <p className="text-sm text-[var(--color-muted)]">{post.description}</p>
              <Link href={post.href} className="mt-auto text-sm text-[var(--color-accent)]">
                {readMoreLabel} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="checklist">
        <SectionHeader
          eyebrow={language === "tr" ? "E-kitaplar & Checklist" : "E-books & Checklists"}
          title={language === "tr" ? "İndirilebilir içerikler" : "Downloadable assets"}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ebooksList.map((ebook) => (
            <article key={ebook.href} className="card flex h-full flex-col gap-3 p-6">
              <span className="badge">Checklist</span>
              <h2 className="text-lg font-semibold text-[var(--color-light)]">{ebook.title}</h2>
              <p className="text-sm text-[var(--color-muted)]">{ebook.description}</p>
              <Link href={ebook.href} className="btn-primary mt-auto w-full">
                {downloadLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="webinar">
        <SectionHeader
          eyebrow={language === "tr" ? "Webinar & Video" : "Webinars & Video"}
          title={language === "tr" ? "Kaydedilmiş oturumlar" : "Recorded sessions"}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {webinarsList.map((webinar) => (
            <article key={webinar.href} className="card flex h-full flex-col gap-3 p-6">
              <span className="badge">Webinar</span>
              <h2 className="text-lg font-semibold text-[var(--color-light)]">{webinar.title}</h2>
              <p className="text-sm text-[var(--color-muted)]">{webinar.description}</p>
              <Link href={webinar.href} className="btn-secondary mt-auto w-full">
                {watchLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
