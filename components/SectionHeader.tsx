import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <div className="section-subtitle text-base text-[var(--color-muted)]">{description}</div>
      ) : null}
    </div>
  );
}
