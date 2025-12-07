import { Column } from "@/components/shared/ManagementTable";
import { ISubscriptionPlan } from "@/types/subscriptionPlans.interface";

export const subscriptionPlansColumns: Column<ISubscriptionPlan>[] = [
  {
    header: "Name",
    accessor: (subscriptionPlan) => subscriptionPlan.name,
  },
  {
    header: "Price",
    accessor: (subscriptionPlan) => subscriptionPlan.price,
  },
  {
    header: "Duration In Days",
    accessor: (subscriptionPlan) => subscriptionPlan.durationInDays,
  },
];
