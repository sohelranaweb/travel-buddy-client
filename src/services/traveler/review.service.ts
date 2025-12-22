"use server";
import { serverFetch } from "@/lib/server-fetch";
import { revalidatePath } from "next/cache";
export async function getHostPendingReviews() {
  try {
    const response = await serverFetch.get(`/reviews/pending-as-host`);
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
export async function getBuddyPendingReviews() {
  try {
    const response = await serverFetch.get("/reviews/pending-as-buddy");
    const result = await response.json();

    // console.log("pending", result);
    return result;
  } catch (error: any) {
    // console.error("Error fetching pending reviews:", error);
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

// export async function createReview(
//   travelBuddyId: string,
//   data: { rating: number; comment?: string }
// ) {
//   const response = await serverFetch.post(`/reviews/${travelBuddyId}`, {
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//       // Add auth token from cookies
//     },
//   });

//   const result = await response.json();

//   // Check if request failed
//   if (!response.ok) {
//     throw new Error(result.message || "Failed to create review");
//   }

//   // Revalidate the pending reviews page
//   revalidatePath("/dashboard/my-pending-reviews");

//   return result;
// }

export async function createHostReview(
  travelBuddyId: string,
  data: { rating: number; comment?: string }
) {
  const response = await serverFetch.post(
    `/reviews/create-as-host/${travelBuddyId}`,
    {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Check if request failed BEFORE reading the body
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message || "Failed to create review");
  }

  const result = await response.json();

  // Revalidate the pending reviews page
  revalidatePath("/dashboard/host-pending-reviews");

  return result;
}
export async function createBuddyReview(
  travelBuddyId: string,
  data: { rating: number; comment?: string }
) {
  const response = await serverFetch.post(
    `/reviews/create-as-buddy/${travelBuddyId}`,
    {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Check if request failed BEFORE reading the body
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message || "Failed to create review");
  }

  const result = await response.json();

  // Revalidate the pending reviews page
  revalidatePath("/dashboard/buddy-pending-reviews");

  return result;
}
