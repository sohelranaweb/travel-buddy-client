"use server";
import { serverFetch } from "@/lib/server-fetch";
import { revalidatePath } from "next/cache";
export async function getMyPendingReviews() {
  try {
    const response = await serverFetch.get(`/reviews/pending`);
    const result = await response.json();

    // console.log("pending", result);
    return result;
  } catch (error: any) {
    console.error("Error fetching pending reviews:", error);
    return {
      success: false,
      data: [],
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to fetch pending reviews",
    };
  }
}

export async function createReview(
  travelBuddyId: string,
  data: { rating: number; comment?: string }
) {
  const response = await serverFetch.post(`/reviews/${travelBuddyId}`, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // Add auth token from cookies
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create review");
  }

  const result = await response.json();

  // Revalidate the pending reviews page
  revalidatePath("/traveler/reviews/pending");

  return result;
}
