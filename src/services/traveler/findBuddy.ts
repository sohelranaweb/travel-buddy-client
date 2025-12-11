"use server";

import { z } from "zod";

import { zodValidator } from "@/lib/zodValidator"; // Your zodValidator utility
import { serverFetch } from "@/lib/server-fetch";

// Zod schema for buddy request validation
const sendBuddyRequestZodSchema = z.object({
  travelPlanId: z.string().uuid("Invalid travel plan ID"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters"),
});

export async function sendBuddyRequest(_prevState: any, formData: FormData) {
  // Build payload from formData
  const payload = {
    travelPlanId: formData.get("travelPlanId") as string,
    message: formData.get("message") as string,
  };

  // Validate data with Zod
  const validated = zodValidator(payload, sendBuddyRequestZodSchema);

  if (!validated.success) {
    console.error("SendBuddyRequest validation failed:", {
      payload,
      errors: validated.errors,
    });
    return {
      success: false,
      message: "Validation failed",
      formData: payload,
      errors: validated.errors,
    };
  }

  try {
    // serverFetch already:
    // ✔ reads accessToken from cookie
    // ✔ refreshes token if expired
    // ✔ injects Cookie header
    //
    // So you do not need to manually read cookies here!

    const response = await serverFetch.post("/buddy/request", {
      body: JSON.stringify(validated.data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to send buddy request",
        formData: payload,
      };
    }

    return result;
  } catch (error: any) {
    console.error("Send Buddy Request error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to send buddy request",
      formData: payload,
    };
  }
}
