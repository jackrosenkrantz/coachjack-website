"use server";

interface IntakeResult {
  ok: boolean;
  error?: string;
}

export async function submitIntake(formData: FormData): Promise<IntakeResult> {
  const portalUrl = process.env.PORTAL_APP_URL;
  const apiKey = process.env.PORTAL_INTAKE_API_KEY;

  if (!portalUrl || !apiKey) {
    console.error("[start] Missing PORTAL_APP_URL or PORTAL_INTAKE_API_KEY");
    return { ok: false, error: "Configuration error. Please try again later." };
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const company = (formData.get("company") as string)?.trim();
  const role = (formData.get("role") as string)?.trim();
  const navigating = (formData.get("navigating") as string)?.trim();
  const bestSelf = (formData.get("bestSelf") as string)?.trim();
  const website = (formData.get("website") as string)?.trim(); // honeypot

  if (!name || !email) {
    return { ok: false, error: "Name and email are required." };
  }

  if (!email.includes("@")) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    const res = await fetch(`${portalUrl}/api/intake`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Intake-Key": apiKey,
      },
      body: JSON.stringify({
        name,
        email,
        company,
        role,
        navigating,
        bestSelf,
        website,
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return {
        ok: false,
        error: data.error || "Something went wrong. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "We're setting things up — try again in a moment.",
    };
  }
}
