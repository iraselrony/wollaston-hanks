/**
 * Form submission service using Web3Forms (https://web3forms.com).
 *
 * Setup:
 *  1. Sign up at web3forms.com (free, no credit card)
 *  2. Verify the recipient email (e.g. contact@wollastonhanks.com)
 *  3. Copy the Access Key
 *  4. Set VITE_WEB3FORMS_KEY in your Vercel project environment variables
 *
 * Once a CMS/backend is added (Payload, Strapi, Supabase, custom API),
 * swap the endpoint here — every form on the site uses this single function.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type SubmitFormPayload = Record<string, string | number | undefined>;

export interface SubmitFormResult {
  ok: boolean;
  message: string;
}

export async function submitForm(
  formType: "submit-opportunity" | "contact",
  data: SubmitFormPayload,
): Promise<SubmitFormResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

  if (!accessKey) {
    // Development / pre-launch fallback so the UI still confirms submissions.
    // Replace by setting VITE_WEB3FORMS_KEY in production.
    console.warn(
      "[submitForm] VITE_WEB3FORMS_KEY is not set. Submission was not sent. Configure the key in Vercel env vars to enable email delivery.",
    );
    return {
      ok: true,
      message:
        "Submission received. (Email delivery is not yet configured — set VITE_WEB3FORMS_KEY in environment.)",
    };
  }

  const subjectMap = {
    "submit-opportunity": "New Opportunity Submission — Wollaston Hanks",
    contact: "New Contact Enquiry — Wollaston Hanks",
  } as const;

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: subjectMap[formType],
        from_name: "Wollaston Hanks Website",
        botcheck: "",
        form_type: formType,
        ...data,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { ok: true, message: "Submission received." };
    }

    return {
      ok: false,
      message: result.message ?? "Submission could not be sent. Please try again or email contact@wollastonhanks.com directly.",
    };
  } catch (error) {
    console.error("[submitForm] Network error:", error);
    return {
      ok: false,
      message:
        "Network error. Please check your connection or email contact@wollastonhanks.com directly.",
    };
  }
}
