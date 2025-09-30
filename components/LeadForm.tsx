"use client";

import { useMemo, useState } from "react";
import { useUI, type LanguageCode } from "@/components/UIProvider";
import { getLeadFormCopy } from "@/content/contact";

type LeadFormProps = {
  formCopy?: ReturnType<typeof getLeadFormCopy>;
  language?: LanguageCode;
};

type FormStatus = "idle" | "loading" | "success" | "error";

type LeadPayload = {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  services: string[];
  goal: string;
  notes?: string;
  consent: true;
  language: LanguageCode;
  metadata: {
    path?: string;
    timezoneOffset?: number;
  };
};

export function LeadForm({ formCopy: externalCopy, language: forcedLanguage }: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [consent, setConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { language: contextLanguage } = useUI();
  const language = forcedLanguage ?? contextLanguage;
  const formCopy = useMemo(() => externalCopy ?? getLeadFormCopy(language), [externalCopy, language]);
  const isSubmitting = status === "loading";

  const consentRequiredMessage = useMemo(
    () => (language === "tr" ? "Lütfen KVKK onayını işaretleyin." : "Please check the KVKK consent."),
    [language]
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.reportValidity();

    if (!isValid) {
      setStatus("error");
      setErrorMessage(language === "tr" ? "Lütfen zorunlu alanları kontrol edin." : "Please check the required fields.");
      return;
    }

    if (!consent) {
      setStatus("error");
      setErrorMessage(consentRequiredMessage);
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    const formData = new FormData(form);
    const toStringValue = (value: FormDataEntryValue | null) => (typeof value === "string" ? value.trim() : "");

    const payload: LeadPayload = {
      fullName: toStringValue(formData.get("fullName")),
      company: toStringValue(formData.get("company")),
      email: toStringValue(formData.get("email")),
      phone: toStringValue(formData.get("phone")) || undefined,
      services: formData
        .getAll("services")
        .map((item) => (typeof item === "string" ? item : String(item)))
        .filter(Boolean),
      goal: toStringValue(formData.get("goal")),
      notes: toStringValue(formData.get("notes")) || undefined,
      consent: true,
      language,
      metadata: {
        path: typeof window !== "undefined" ? window.location.pathname : undefined,
        timezoneOffset: typeof window !== "undefined" ? new Date().getTimezoneOffset() : undefined,
      },
    };

    try {
      const response = await fetch("/api/forms/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        setStatus("error");
        setErrorMessage(
          data?.message ??
            (language === "tr"
              ? "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
              : "Something went wrong while sending the form. Please try again.")
        );
        return;
      }

      setStatus("success");
      form.reset();
      setConsent(false);
    } catch (error) {
      console.error("[LeadForm] submission failed", error);
      setStatus("error");
      setErrorMessage(
        language === "tr"
          ? "Ağ hatası nedeniyle form gönderilemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin."
          : "The form could not be sent due to a network error. Please check your connection and try again."
      );
    }
  };

  return (
    <form id="teklif-formu" className="space-y-6" onSubmit={onSubmit} noValidate>
      <div className="space-y-4">
        {formCopy.fields.map((field) => (
          <label key={field.name} className="form-label text-sm">
            {field.label[language]}
            {field.type === "multiselect" ? (
              <select
                name={field.name}
                multiple
                required={field.required}
                className="form-select min-h-[120px]"
                size={Math.min(field.options?.length ?? 4, 6)}
                disabled={isSubmitting}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label[language]}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                className="form-textarea min-h-28"
                disabled={isSubmitting}
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                className="form-input"
                disabled={isSubmitting}
              />
            )}
            {field.hint ? <span className="form-hint">{field.hint[language]}</span> : null}
          </label>
        ))}
      </div>
      <div className="flex items-start gap-3">
        <input
          id="kvkk-consent"
          type="checkbox"
          className="checkbox-control mt-1 h-5 w-5 rounded"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          disabled={isSubmitting}
        />
        <label htmlFor="kvkk-consent" className="text-sm text-[var(--color-muted)]">
          {formCopy.consent}
        </label>
      </div>
      <button
        type="submit"
        className="btn-primary w-full"
        aria-live="polite"
        aria-busy={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting
          ? language === "tr"
            ? "Gönderiliyor..."
            : "Sending..."
          : formCopy.submitLabel}
      </button>
      {status === "success" ? (
        <div className="toast success" role="status">
          {formCopy.success}
        </div>
      ) : null}
      {status === "error" && errorMessage ? (
        <div className="toast error" role="alert">
          {errorMessage}
        </div>
      ) : null}
      <p className="sr-only" aria-live="polite">
        {status === "success"
          ? formCopy.success
          : status === "error"
          ? errorMessage ?? formCopy.error
          : ""}
      </p>
    </form>
  );
}
