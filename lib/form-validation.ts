const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

export type LanguageCode = "tr" | "en";

export type LeadSubmission = {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  services: string[];
  goal: string;
  notes?: string;
  consent: true;
  language: LanguageCode;
  metadata?: FormMetadata;
};

export type MeetingSubmission = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  timezone: string;
  topic: string;
  notes?: string;
  language: LanguageCode;
  metadata?: FormMetadata;
};

type FormMetadata = {
  path?: string;
  timezoneOffset?: number;
  ip?: string;
  userAgent?: string;
  submittedAt?: string;
};

type ValidationResult<T> = {
  data?: T;
  errors: string[];
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function sanitizeOptionalString(value: unknown, maxLength: number): string | undefined {
  const sanitized = sanitizeString(value, maxLength);
  return sanitized ? sanitized : undefined;
}

function parseMetadata(value: unknown): FormMetadata | undefined {
  if (!isObject(value)) {
    return undefined;
  }

  const metadata: FormMetadata = {};
  const path = sanitizeString(value.path, 200);
  const timezoneOffset = typeof value.timezoneOffset === "number" ? Math.trunc(value.timezoneOffset) : undefined;

  if (path) {
    metadata.path = path;
  }
  if (typeof timezoneOffset === "number" && Number.isFinite(timezoneOffset)) {
    metadata.timezoneOffset = timezoneOffset;
  }

  return Object.keys(metadata).length > 0 ? metadata : undefined;
}

export function validateLeadSubmission(input: unknown): ValidationResult<LeadSubmission> {
  if (!isObject(input)) {
    return { errors: ["invalid_payload"] };
  }

  const errors: string[] = [];
  const language: LanguageCode = input.language === "en" ? "en" : "tr";
  const consent = input.consent === true;

  const fullName = sanitizeString(input.fullName, 120);
  const company = sanitizeString(input.company, 160);
  const email = sanitizeString(input.email, 200).toLowerCase();
  const phone = sanitizeOptionalString(input.phone, 40);
  const goal = sanitizeString(input.goal, 240);
  const notes = sanitizeOptionalString(input.notes, 1000);

  const servicesRaw = Array.isArray(input.services) ? input.services : [];
  const services = servicesRaw
    .map((item) => sanitizeString(item, 120))
    .filter((item) => item.length > 0)
    .slice(0, 10);

  if (!fullName) {
    errors.push("fullName");
  }

  if (!company) {
    errors.push("company");
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push("email");
  }

  if (!services.length) {
    errors.push("services");
  }

  if (!goal) {
    errors.push("goal");
  }

  if (!consent) {
    errors.push("consent");
  }

  if (phone && phone.length < 6) {
    errors.push("phone");
  }

  if (errors.length) {
    return { errors };
  }

  const metadata = parseMetadata(input.metadata);

  return {
    data: {
      fullName,
      company,
      email,
      phone,
      services,
      goal,
      notes,
      consent: true,
      language,
      metadata,
    },
    errors: [],
  };
}

export function validateMeetingSubmission(input: unknown): ValidationResult<MeetingSubmission> {
  if (!isObject(input)) {
    return { errors: ["invalid_payload"] };
  }

  const errors: string[] = [];
  const language: LanguageCode = input.language === "en" ? "en" : "tr";

  const fullName = sanitizeString(input.fullName, 120);
  const email = sanitizeString(input.email, 200).toLowerCase();
  const phone = sanitizeString(input.phone, 40);
  const country = sanitizeString(input.country, 120);
  const timezone = sanitizeString(input.timezone, 80);
  const topic = sanitizeString(input.topic, 120);
  const notes = sanitizeOptionalString(input.notes, 1000);

  if (!fullName) {
    errors.push("fullName");
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push("email");
  }

  if (!phone || phone.length < 6) {
    errors.push("phone");
  }

  if (!country) {
    errors.push("country");
  }

  if (!timezone) {
    errors.push("timezone");
  }

  if (!topic) {
    errors.push("topic");
  }

  if (errors.length) {
    return { errors };
  }

  const metadata = parseMetadata(input.metadata);

  return {
    data: {
      fullName,
      email,
      phone,
      country,
      timezone,
      topic,
      notes,
      language,
      metadata,
    },
    errors: [],
  };
}
