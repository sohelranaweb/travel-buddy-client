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

export async function getMyTravelPlanRequestReceived() {
  try {
    const response = await serverFetch.get(`/buddy/get-request-received`);
    const result = await response.json();

    console.log("travelPlan Buddy", result);
    return result;
  } catch (error: any) {
    console.error("Error fetching travelPlans:", error);
    return {
      success: false,
      data: [],
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to fetch travelPlans",
    };
  }
}
export async function getMyBuddySentRequest() {
  try {
    const response = await serverFetch.get(`/buddy/my-sent-request`);
    const result = await response.json();

    console.log("My sent buddy request data", result);
    return result;
  } catch (error: any) {
    console.error("Error fetching my Sent buddy request:", error);
    return {
      success: false,
      data: [],
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to fetch sent my buddy request",
    };
  }
}
export async function getMyTrips() {
  try {
    const response = await serverFetch.get(`/travel-buddies/my-trips`);
    const result = await response.json();

    console.log("My trips data", result);
    return result;
  } catch (error: any) {
    console.error("Error fetching my trips data:", error);
    return {
      success: false,
      data: [],
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to fetch sent my trips data",
    };
  }
}

export async function acceptBuddyRequest(id: string) {
  try {
    const response = await serverFetch.patch(`/buddy/request/accept/${id}`);
    const result = await response.json();

    console.log("travelPlan Buddy accept", result);
    return result;
  } catch (error: any) {
    console.error("Error accept buddy request:", error);
    return {
      success: false,
      data: [],
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to accept Buddy Request",
    };
  }
}
