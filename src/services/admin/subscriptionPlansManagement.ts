/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createSubscriptionPlanZodSchema } from "@/zod/subscriptionPlan.validation";

import { revalidateTag } from "next/cache";

export async function createSubscriptionPlan(
  _prevState: any,
  formData: FormData
) {
  // Build validation payload
  const validationPayload = {
    name: formData.get("name"),
    price: Number(formData.get("price")),
    durationInDays: Number(formData.get("duration")),
  };

  console.log({ validationPayload });
  /*
    // Server-side validation
        const validation = createScheduleZodSchema.safeParse(validationPayload);
        if (!validation.success) {
            const errors = validation.error.issues.map((err: any) => ({
                field: err.path[0] as string,
                message: err.message,
            }));
            return {
                success: false,
                message: "Validation failed",
                formData: validationPayload,
                errors,
            };
        }
    */

  const validation = zodValidator(
    validationPayload,
    createSubscriptionPlanZodSchema
  );

  if (!validation.success && validation.errors) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
      errors: validation.errors,
    };
  }

  if (!validation.data) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
    };
  }

  try {
    const response = await serverFetch.post(
      "/subscriptionPlan/create-subscriptionPlan",
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      }
    );

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Create Subscription Plan error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create subscription plan",
      formData: validationPayload,
    };
  }
}

export async function getSubscriptionPlan() {
  try {
    const response = await serverFetch.get("/subscriptionPlan", {
      cache: "force-cache",
      next: { tags: ["supbscriptionPlan-list"] },
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

export async function deleteSubscriptionPlan(id: string) {
  try {
    const response = await serverFetch.delete(`/subscriptionPlan/delete/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}
