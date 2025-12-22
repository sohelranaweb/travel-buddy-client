import { SubscriptionStatus } from "./subscriptions.interface";

interface Traveler {
  id: string;
  email: string;
  name: string;
  contactNumber: string | null;
  profilePhoto: string | null;
  address: string;
  gender: string | null;
  bio: string | null;
  travelInterests: string[];
  visitedCountries: string[];
  currentLocation: string | null;
  averageRating: number;
  totalReviews: number;
  isSubscribed: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  durationInDays: number;
  features: string[];
  recommended: boolean;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISubscriber {
  id: string;
  travelerId: string;
  planId: string;
  amount: number;
  startDate: string;
  endDate: string;
  status: SubscriptionStatus;
  createdAt: string;
  updatedAt: string;
  traveler: Traveler;
  plan: Plan;
}
