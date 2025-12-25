"use server";

import { serverFetch } from "@/lib/server-fetch";

import { zodValidator } from "@/lib/zodValidator";
import {
  createTravelPlanZodSchema,
  updateTravelPlanZodSchema,
} from "@/zod/travelPlan.validation";
import { revalidatePath } from "next/cache";

export async function createTravelPlan(_prevState: any, formData: FormData) {
  // Build payload from formData
  const payload = {
    destination: formData.get("destination") as string,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    budgetMin: Number(formData.get("budgetMin")),
    budgetMax: Number(formData.get("budgetMax")),
    travelType: formData.get("travelType") as string,
    description: formData.get("description") as string,
  };

  // Validate data with Zod
  const validated = zodValidator(payload, createTravelPlanZodSchema);

  if (!validated.success) {
    console.error("CreateTravelPlan validation failed:", {
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

    const response = await serverFetch.post("/travelPlan/create-travelPlan", {
      body: JSON.stringify(validated.data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to create travel plan",
        formData: payload,
      };
    }

    return result;
  } catch (error: any) {
    console.error("Create Travel Plan error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create travel plan",
      formData: payload,
    };
  }
}

export async function getMyTravelPlans(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/travelPlan/my-travelPlans${queryString ? `?${queryString}` : ""}`
    );

    const result = await response.json();

    //     console.log("travelPlans", result);
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

export async function getAlTravelPlans(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/travelPlan${
        queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"
      }`
    );
    const result = await response.json();

    //     console.log("travelPlans", result);
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

export async function getTravelPlanById(id: string) {
  try {
    const response = await serverFetch.get(`/travelPlan/${id}`);
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

export async function updateTravelPlan(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const rawPayload: Record<string, any> = {};

  const destination = formData.get("destination");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const budgetMin = formData.get("budgetMin");
  const budgetMax = formData.get("budgetMax");
  const travelType = formData.get("travelType");
  const description = formData.get("description");

  if (destination) rawPayload.destination = destination as string;

  // Date কে ISO format এ convert করুন
  if (startDate) {
    rawPayload.startDate = new Date(startDate as string).toISOString();
  }
  if (endDate) {
    rawPayload.endDate = new Date(endDate as string).toISOString();
  }

  if (budgetMin) rawPayload.budgetMin = Number(budgetMin);
  if (budgetMax) rawPayload.budgetMax = Number(budgetMax);
  if (travelType) rawPayload.travelType = travelType as string;
  if (description !== null) rawPayload.description = description as string;

  // console.log("Payload before validation:", rawPayload);

  const validated = zodValidator(rawPayload, updateTravelPlanZodSchema);

  if (!validated.success && validated.errors) {
    // console.error("Validation failed:", validated.errors);
    return {
      success: false,
      message: "Validation failed",
      formData: rawPayload,
      errors: validated.errors,
    };
  }

  try {
    const response = await serverFetch.patch(`/travelPlan/update/${id}`, {
      body: JSON.stringify(validated.data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to update travel plan",
        formData: rawPayload,
      };
    }

    const result = await response.json();

    return {
      success: true,
      message: "Travel plan updated successfully",
      data: result.data,
    };
  } catch (error: any) {
    console.error("Update Travel Plan Error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update travel plan",
      formData: rawPayload,
    };
  }
}

export async function deleteTravelPlan(id: string) {
  try {
    const response = await serverFetch.delete(`/travelPlan/delete/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to delete travel plan",
      };
    }

    const result = await response.json();

    // Revalidate the travel plans page
    revalidatePath("/dashboard/my-travelPlans");

    return {
      success: true,
      message: result.message || "Travel plan deleted successfully",
    };
  } catch (error: any) {
    console.error("Delete Travel Plan Error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to delete travel plan",
    };
  }
}

export async function completedTrip(id: string) {
  try {
    const response = await serverFetch.patch(
      `/travel-buddies/plan/${id}/complete`
    );
    const result = await response.json();

    // console.log("travelPlan successful completed", result);
    return result;
  } catch (error: any) {
    // console.error("Error travelPlan completed:", error);
    return {
      success: false,
      data: [],
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to travel Plan complete",
    };
  }
}
