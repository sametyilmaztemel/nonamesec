import { NextResponse } from "next/server";
import {
  validateMeetingSubmission,
  type MeetingSubmission,
} from "@/lib/form-validation";

const WEBHOOK_URL = process.env.MEETING_FORM_WEBHOOK_URL;
const SHARED_SECRET = process.env.FORMS_SHARED_SECRET;

const messages = {
  tr: {
    success: "Görüşme talebinizi aldık. En kısa sürede ajanda davetini paylaşacağız.",
    validationError: "Zorunlu alanlarda eksik ya da hatalı bilgi var.",
    configError: "Görüşme planlama yapılandırılmadı. Lütfen yöneticiyle iletişime geçin.",
    upstreamError: "Sunucu yanıt vermedi. Lütfen tekrar deneyin.",
  },
  en: {
    success: "We received your meeting request and will send a calendar invite shortly.",
    validationError: "Some required fields are missing or invalid.",
    configError: "Meeting scheduling is not configured. Please contact an administrator.",
    upstreamError: "The server did not respond. Please try again later.",
  },
} as const;

type MessageKey = keyof (typeof messages)["tr"];

function getMessage(language: "tr" | "en", key: MessageKey) {
  return messages[language][key];
}

function withRequestMetadata(request: Request, submission: MeetingSubmission): MeetingSubmission {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",").map((value) => value.trim())[0];
  const userAgent = request.headers.get("user-agent") || undefined;

  return {
    ...submission,
    metadata: {
      ...(submission.metadata ?? {}),
      ip,
      userAgent,
      submittedAt: new Date().toISOString(),
    },
  };
}

async function deliverToWebhook(payload: unknown) {
  if (!WEBHOOK_URL) {
    return { ok: false, status: 503 } as const;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(SHARED_SECRET ? { "X-Forms-Secret": SHARED_SECRET } : {}),
      },
      body: JSON.stringify({ type: "meeting", payload }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    return { ok: response.ok, status: response.status } as const;
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}

export async function POST(request: Request) {
  const body = await request
    .json()
    .catch(() => ({ language: "tr" as const }));

  const { data, errors } = validateMeetingSubmission(body);
  const language: "tr" | "en" = data?.language ?? (body?.language === "en" ? "en" : "tr");

  if (errors.length) {
    return NextResponse.json({ message: getMessage(language, "validationError"), fields: errors }, { status: 422 });
  }

  if (!data) {
    return NextResponse.json({ message: getMessage(language, "validationError") }, { status: 400 });
  }

  const submission = withRequestMetadata(request, data);

  if (!WEBHOOK_URL) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[meeting-form] Dev submission", submission);
      return NextResponse.json({ message: getMessage(language, "success"), devMode: true });
    }

    return NextResponse.json({ message: getMessage(language, "configError") }, { status: 503 });
  }

  try {
    const result = await deliverToWebhook(submission);

    if (!result.ok) {
      return NextResponse.json({ message: getMessage(language, "upstreamError") }, { status: 502 });
    }

    return NextResponse.json({ message: getMessage(language, "success") });
  } catch (error) {
    console.error("[meeting-form] webhook error", error);
    return NextResponse.json({ message: getMessage(language, "upstreamError") }, { status: 502 });
  }
}
