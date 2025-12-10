import { z } from "zod";

export const createTravelPlanZodSchema = z.object({
  destination: z.string().min(1, "Destination is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  budgetMin: z.number().min(1, "Minimum budget required"),
  budgetMax: z.number().min(1, "Maximum budget required"),
  travelType: z.string(),
  description: z.string().optional(),
});

export const updateTravelPlanZodSchema = z.object({
  destination: z.string().min(1).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  budgetMin: z.number().positive().optional(),
  budgetMax: z.number().positive().optional(),
  travelType: z.enum(["FAMILY", "SOLO", "COUPLE", "FRIENDS"]).optional(),
  description: z.string().optional(),
});
