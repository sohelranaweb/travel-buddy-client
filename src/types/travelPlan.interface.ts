export type TravelType = "SOLO" | "FAMILY" | "FRIENDS";

export interface ITravelPlan {
  id: string;
  travelerId: string;
  destination: string;
  startDate: string;
  endDate: string;
  budgetMin: number;
  budgetMax: number;
  travelType: TravelType;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}
