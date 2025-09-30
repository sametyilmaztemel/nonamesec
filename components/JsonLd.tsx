export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data, null, 2);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
