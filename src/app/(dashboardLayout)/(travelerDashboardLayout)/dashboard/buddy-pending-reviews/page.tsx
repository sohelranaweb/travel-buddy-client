export const dynamic = "force-dynamic";
import { getBuddyPendingReviews } from "@/services/traveler/review.service";

import PendingReviewCard, {
  PendingReview,
} from "@/components/modules/Traveler/Review/PendingReviewCard";
import BuddyPendingReviewCard from "@/components/modules/Traveler/Review/BuddyPendingReviewCard";

const BuddyPendingReviewsPage = async () => {
  const result = await getBuddyPendingReviews();

  if (!result?.data || result?.data?.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No Pending Reviews
          </h2>
          <p className="text-gray-500">
            You don't have any completed trips to review yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Pending Reviews
          </h1>
          <p className="text-gray-600">
            You have {result?.data?.length}{" "}
            {result.length === 1 ? "review" : "reviews"} waiting
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {result?.data?.map((review: PendingReview) => (
            <BuddyPendingReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuddyPendingReviewsPage;
