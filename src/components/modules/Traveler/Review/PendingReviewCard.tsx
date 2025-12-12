"use client";
import { Calendar, MapPin, DollarSign, User, Clock } from "lucide-react";
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
const PendingReviewCard = ({ review }: { review: PendingReview }) => {
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

        {/* Action Button */}
        <button className="w-full mt-6 bg-primary hover:opacity-90 text-primary-foreground font-medium py-3 px-4 rounded-(--radius) transition-opacity duration-200">
          Write Review
        </button>
      </div>
    </div>
  );
};

export default PendingReviewCard;
