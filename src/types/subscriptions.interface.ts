import { ISubscriptionPlan } from "./subscriptionPlans.interface";
import { ITraveler } from "./traveler.interface";

export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  EXPIRED = "EXPIRED",
  CANCELED = "CANCELED",
}

export enum PaymentStatus {
  PAID = "PAID",
  UNPAID = "UNPAID",
}

export interface ISubscription {
  id: string;
  travelerId: string;
  planId: string;
  amount: number;

  startDate: string; // frontend gets ISO string from API
  endDate: string;

  status: SubscriptionStatus;

  createdAt: string;
  updatedAt: string;

  traveler?: ITraveler; // optional relation, or you can type it later
  plan?: ISubscriptionPlan;
  payment?: any;
}

export interface ISubscriptionFormData {
  subscriptionPlanId: string;
}
