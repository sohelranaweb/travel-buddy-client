/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { updateTravelerZodSchema } from "@/zod/traveler.validation";

/**
 * GET ALL Travelers
 * API: GET /traveler?queryParams
 */
export async function getTravelers(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/traveler${queryString ? `?${queryString}` : ""}`
    );
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

/**
 * GET Traveler BY ID
 * API: GET /traveler/:id
 */
export async function getTravelerById(id: string) {
  try {
    const response = await serverFetch.get(`/traveler/${id}`);
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

/**
 * UPDATE Traveler
 * API: PATCH /Traveler/:id
 */
export async function updateTraveler(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const validationPayload: any = {
    name: formData.get("name") as string,
    contactNumber: formData.get("contactNumber") as string,
    address: formData.get("address") as string,
  };

  const validation = zodValidator(validationPayload, updateTravelerZodSchema);
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
      errors: [{ field: "unknown", message: "Invalid data" }],
    };
  }
  try {
    const response = await serverFetch.patch(`/traveler/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Update Traveler error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update traveler",
      formData: validationPayload,
    };
  }
}

/**
 * SOFT DELETE TRAVELER
 * API: DELETE /traveler/soft/:id
 */
export async function softDeleteTraveler(id: string) {
  try {
    const response = await serverFetch.delete(`/traveler/soft/${id}`);
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

/**
 * HARD DELETE TRAVELER
 * API: DELETE /traveler/:id
 */
export async function deleteTraveler(id: string) {
  try {
    const response = await serverFetch.delete(`/traveler/${id}`);
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
