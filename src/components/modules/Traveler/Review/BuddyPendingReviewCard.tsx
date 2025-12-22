// "use client";
// import { Calendar, MapPin, DollarSign, User, Clock } from "lucide-react";
// interface Traveler {
//   id: string;
//   name: string;
//   email: string;
//   profilePhoto: string;
// }

// interface Buddy {
//   id: string;
//   name: string;
//   email: string;
//   profilePhoto: string;
// }

// interface TravelPlan {
//   id: string;
//   travelerId: string;
//   destination: string;
//   startDate: string;
//   endDate: string;
//   budgetMin: number;
//   budgetMax: number;
//   travelType: string;
//   description: string;
//   isCompleted: boolean;
//   createdAt: string;
//   updatedAt: string;
//   traveler: Traveler;
// }

// export interface PendingReview {
//   id: string;
//   travelPlanId: string;
//   buddyId: string;
//   status: string;
//   joinedAt: string;
//   completedAt: string;
//   leftAt: string | null;
//   createdAt: string;
//   updatedAt: string;
//   travelPlan: TravelPlan;
//   buddy: Buddy;
//   reviews: any[];
// }
// const PendingReviewCard = ({ review }: { review: PendingReview }) => {
//   const { travelPlan, buddy, joinedAt, completedAt } = review;
//   const {
//     traveler,
//     destination,
//     startDate,
//     endDate,
//     budgetMin,
//     budgetMax,
//     description,
//   } = travelPlan;

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const calculateDuration = (start: string, end: string) => {
//     const days = Math.ceil(
//       (new Date(end).getTime() - new Date(start).getTime()) /
//         (1000 * 60 * 60 * 24)
//     );
//     return `${days} days`;
//   };

//   return (
//     <div className="bg-card rounded-(--radius) shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-border">
//       <div className="bg-primary p-4">
//         <h3 className="text-primary-foreground text-xl font-semibold">
//           {destination}
//         </h3>
//         <p className="text-primary-foreground/80 text-sm mt-1">
//           Trip Completed - Review Pending
//         </p>
//       </div>

//       <div className="p-6">
//         {/* Traveler Info */}
//         <div className="flex items-center mb-4 pb-4 border-b border-border">
//           <img
//             src={traveler.profilePhoto}
//             alt={traveler.name}
//             className="w-12 h-12 rounded-full object-cover mr-3"
//           />
//           <div>
//             <p className="font-medium text-card-foreground">{traveler.name}</p>
//             <p className="text-sm text-muted-foreground">Traveler</p>
//           </div>
//         </div>

//         {/* Buddy Info */}
//         <div className="flex items-center mb-4 pb-4 border-b border-border">
//           <img
//             src={buddy.profilePhoto}
//             alt={buddy.name}
//             className="w-12 h-12 rounded-full object-cover mr-3"
//           />
//           <div>
//             <p className="font-medium text-card-foreground">{buddy.name}</p>
//             <p className="text-sm text-muted-foreground">Travel Buddy</p>
//           </div>
//         </div>

//         {/* Trip Details */}
//         <div className="space-y-3">
//           <div className="flex items-start">
//             <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3 shrink-0" />
//             <div>
//               <p className="text-sm text-muted-foreground">Travel Dates</p>
//               <p className="font-medium text-foreground">
//                 {formatDate(startDate)} - {formatDate(endDate)}
//               </p>
//               <p className="text-xs text-muted-foreground">
//                 {calculateDuration(startDate, endDate)}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <DollarSign className="w-5 h-5 text-secondary mt-0.5 mr-3 shrink-0" />
//             <div>
//               <p className="text-sm text-muted-foreground">Budget Range</p>
//               <p className="font-medium text-foreground">
//                 ${budgetMin.toLocaleString()} - ${budgetMax.toLocaleString()}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <MapPin className="w-5 h-5 text-destructive mt-0.5 mr-3 shrink-0" />
//             <div>
//               <p className="text-sm text-muted-foreground">Description</p>
//               <p className="text-foreground">{description}</p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <Clock className="w-5 h-5 text-chart-3 mt-0.5 mr-3 shrink-0" />
//             <div>
//               <p className="text-sm text-muted-foreground">Completed On</p>
//               <p className="font-medium text-foreground">
//                 {formatDate(completedAt)}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Action Button */}
//         <button className="w-full mt-6 bg-primary hover:opacity-90 text-primary-foreground font-medium py-3 px-4 rounded-(--radius) transition-opacity duration-200">
//           Write Review
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PendingReviewCard;

"use client";
import { useState } from "react";
import { Calendar, MapPin, DollarSign, Clock, Star } from "lucide-react";
import { createBuddyReview } from "@/services/traveler/review.service";
import { toast } from "sonner";

interface Traveler {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
}

interface Buddy {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
}

interface TravelPlan {
  id: string;
  travelerId: string;
  destination: string;
  startDate: string;
  endDate: string;
  budgetMin: number;
  budgetMax: number;
  travelType: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  traveler: Traveler;
}

export interface PendingReview {
  id: string;
  travelPlanId: string;
  buddyId: string;
  status: string;
  joinedAt: string;
  completedAt: string;
  leftAt: string | null;
  createdAt: string;
  updatedAt: string;
  travelPlan: TravelPlan;
  buddy: Buddy;
  reviews: any[];
}

const BuddyPendingReviewCard = ({ review }: { review: PendingReview }) => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { travelPlan, buddy, joinedAt, completedAt } = review;
  const {
    traveler,
    destination,
    startDate,
    endDate,
    budgetMin,
    budgetMax,
    description,
  } = travelPlan;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const calculateDuration = (start: string, end: string) => {
    const days = Math.ceil(
      (new Date(end).getTime() - new Date(start).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return `${days} days`;
  };

  const handleSubmitReview = async () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    if (!comment.trim()) {
      alert("Please write a comment");
      return;
    }

    setIsSubmitting(true);
    try {
      const reviewData = {
        rating,
        comment: comment.trim(),
      };

      console.log("Submitting review:", reviewData);

      // Replace this with your actual API call
      // const response = await fetch('/api/reviews', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(reviewData)
      // });

      const result = await createBuddyReview(review.id, reviewData);
      console.log("review create by buddy for host", result);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Review submitted successfully!");
      setShowForm(false);
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-(--radius) shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-border">
      <div className="bg-primary p-4">
        <h3 className="text-primary-foreground text-xl font-semibold">
          {destination}
        </h3>
        <p className="text-primary-foreground/80 text-sm mt-1">
          Trip Completed - Review Pending
        </p>
      </div>

      <div className="p-6">
        {/* Traveler Info */}
        <div className="flex items-center mb-4 pb-4 border-b border-border">
          <img
            src={traveler.profilePhoto}
            alt={traveler.name}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <div>
            <p className="font-medium text-card-foreground">{traveler.name}</p>
            <p className="text-sm text-muted-foreground">Traveler</p>
          </div>
        </div>

        {/* Buddy Info */}
        <div className="flex items-center mb-4 pb-4 border-b border-border">
          <img
            src={buddy.profilePhoto}
            alt={buddy.name}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <div>
            <p className="font-medium text-card-foreground">{buddy.name}</p>
            <p className="text-sm text-muted-foreground">Travel Buddy</p>
          </div>
        </div>

        {/* Trip Details */}
        <div className="space-y-3">
          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Travel Dates</p>
              <p className="font-medium text-foreground">
                {formatDate(startDate)} - {formatDate(endDate)}
              </p>
              <p className="text-xs text-muted-foreground">
                {calculateDuration(startDate, endDate)}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <DollarSign className="w-5 h-5 text-secondary mt-0.5 mr-3 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Budget Range</p>
              <p className="font-medium text-foreground">
                ${budgetMin.toLocaleString()} - ${budgetMax.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-destructive mt-0.5 mr-3 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Description</p>
              <p className="text-foreground">{description}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="w-5 h-5 text-chart-3 mt-0.5 mr-3 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Completed On</p>
              <p className="font-medium text-foreground">
                {formatDate(completedAt)}
              </p>
            </div>
          </div>
        </div>

        {/* Review Form / Action Button */}
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full mt-6 bg-primary hover:opacity-90 text-primary-foreground font-medium py-1 px-2 rounded-(--radius) transition-opacity duration-200 cursor-pointer"
          >
            Write Review
          </button>
        ) : (
          <div className="mt-6 p-4 bg-muted/50 rounded-(--radius) border border-border">
            <h4 className="font-semibold text-foreground mb-4">
              Write Your Review
            </h4>

            {/* Star Rating */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">Rating *</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label className="text-sm text-muted-foreground mb-2 block">
                Comment *
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience with this travel buddy..."
                className="w-full p-3 bg-background border border-input rounded-(--radius) text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px] resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleSubmitReview}
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:opacity-90 text-primary-foreground font-medium py-1 px-2 rounded-(--radius) transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setRating(0);
                  setComment("");
                }}
                disabled={isSubmitting}
                className="flex-1 bg-secondary hover:opacity-90 text-secondary-foreground font-medium py-1 px-2 rounded-(--radius) transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuddyPendingReviewCard;
