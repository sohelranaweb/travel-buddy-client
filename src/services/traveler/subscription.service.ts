"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";
import { ISubscriptionFormData } from "@/types/subscriptions.interface";
// create subscription
export async function createSubscription(subscriptionPlanId: string) {
  try {
    const response = await serverFetch.post("/subscribe/create-subscribe", {
      body: JSON.stringify(subscriptionPlanId),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error creating appointment:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to book subscription",
    };
  }
}

export async function getMySubscription(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/subscribe/my-subscribe${
        queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"
      }`
    );
    const result = await response.json();
    //     console.log({ result });
    return result;
  } catch (error: any) {
    console.error("Error fetching subscription:", error);
    return {
      success: false,
      data: [],
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to fetch subscription",
    };
  }
}

export async function getAppointmentById(subscriptionId: string) {
  try {
    const response = await serverFetch.get(`/subscribe/${subscriptionId}`);
    const result = await response.json();

    if (result.success && result.data) {
      // Find the appointment by ID from the list
      const subscription = result.data.find(
        (apt: any) => apt.id === subscriptionId
      );

      if (subscription) {
        return {
          success: true,
          data: subscription,
        };
      } else {
        return {
          success: false,
          data: null,
          message: "Subscription not found",
        };
      }
    }

    return {
      success: false,
      data: null,
      message: result.message || "Failed to fetch Subscription",
    };
  } catch (error: any) {
    console.error("Error fetching subscription:", error);
    return {
      success: false,
      data: null,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to fetch subscription",
    };
  }
}

export async function changeAppointmentStatus(
  appointmentId: string,
  status: string
) {
  try {
    const response = await serverFetch.patch(
      `/appointment/status/${appointmentId}`,
      {
        body: JSON.stringify({ status }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error changing appointment status:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to change appointment status",
    };
  }
}
