"use client";

import { useMemo, useState } from "react";
import { useUI, type LanguageCode } from "@/components/UIProvider";
import { getMeetingFormCopy } from "@/content/contact";

type MeetingFormProps = {
  formCopy?: ReturnType<typeof getMeetingFormCopy>;
  language?: LanguageCode;
};

type FormStatus = "idle" | "loading" | "success" | "error";

type MeetingPayload = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  timezone: string;
  topic: string;
  notes?: string;
  language: LanguageCode;
  metadata: {
    path?: string;
    timezoneOffset?: number;
  };
};

export function MeetingForm({ formCopy: externalCopy, language: forcedLanguage }: MeetingFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { language: contextLanguage } = useUI();
  const language = forcedLanguage ?? contextLanguage;
  const formCopy = useMemo(() => externalCopy ?? getMeetingFormCopy(language), [externalCopy, language]);
  const selectPlaceholder = language === "tr" ? "Seçiniz" : "Please choose";
  const isSubmitting = status === "loading";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.reportValidity();

    if (!isValid) {
      setStatus("error");
      setErrorMessage(language === "tr" ? "Lütfen zorunlu alanları kontrol edin." : "Please check the required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    const formData = new FormData(form);
    const toStringValue = (value: FormDataEntryValue | null) => (typeof value === "string" ? value.trim() : "");

    const payload: MeetingPayload = {
      fullName: toStringValue(formData.get("fullName")),
      email: toStringValue(formData.get("email")),
      phone: toStringValue(formData.get("phone")),
      country: toStringValue(formData.get("country")),
      timezone: toStringValue(formData.get("timezone")),
      topic: toStringValue(formData.get("topic")),
      notes: toStringValue(formData.get("notes")) || undefined,
      language,
      metadata: {
        path: typeof window !== "undefined" ? window.location.pathname : undefined,
        timezoneOffset: typeof window !== "undefined" ? new Date().getTimezoneOffset() : undefined,
      },
    };

    try {
      const response = await fetch("/api/forms/meeting", {
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
              ? "Görüşme talebi gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
              : "Something went wrong while sending the meeting request. Please try again.")
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("[MeetingForm] submission failed", error);
      setStatus("error");
      setErrorMessage(
        language === "tr"
          ? "Ağ hatası nedeniyle görüşme talebi gönderilemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin."
          : "The meeting request could not be sent due to a network error. Please check your connection and try again."
      );
    }
  };

  return (
    <form id="randevu" className="space-y-4" onSubmit={onSubmit} noValidate>
      {formCopy.fields.map((field) => (
        <label key={field.name} className="form-label text-sm">
          {field.label[language]}
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              required={field.required}
              className="form-textarea min-h-24"
              disabled={isSubmitting}
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="form-select"
              defaultValue=""
              disabled={isSubmitting}
            >
              <option value="" disabled>
                {selectPlaceholder}
              </option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label[language]}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              className="form-input"
              disabled={isSubmitting}
            />
          )}
        </label>
      ))}
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
          <div className="mt-2 text-xs text-[var(--color-muted)]">{formCopy.reschedule}</div>
        </div>
      ) : null}
      {status === "error" && errorMessage ? (
        <div className="toast error" role="alert">
          {errorMessage}
        </div>
      ) : null}
      <p className="sr-only" aria-live="polite">
        {status === "success" ? formCopy.success : status === "error" ? errorMessage ?? "" : ""}
      </p>
    </form>
  );
}
