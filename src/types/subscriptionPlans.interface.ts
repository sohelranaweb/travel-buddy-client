export interface ISubscriptionPlan {
  id: string;
  name: string;
  price: number;
  durationInDays: number;
  features: string[];
  recommended: boolean;
  color: string;
}
