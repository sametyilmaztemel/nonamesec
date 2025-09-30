export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="space-y-4" role="list">
      {items.map((item, idx) => (
        <details
          key={idx}
          className="card p-4"
          role="listitem"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-3 text-left text-base font-semibold text-[var(--color-light)]">
            <span>{item.question}</span>
            <span className="text-[var(--color-muted)]">+</span>
          </summary>
          <div className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
