import z from "zod";

export const createSubscriptionPlanZodSchema = z.object({
  name: z.string({
    error: "Name is required!",
  }),
  price: z.number({
    error: "Price is required!",
  }),
  durationInDays: z.number({
    error: "Duration is required!",
  }),
});
