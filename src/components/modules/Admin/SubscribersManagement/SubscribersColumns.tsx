"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";
import { IAdmin } from "@/types/admin.interface";
import { ISubscriber } from "@/types/subscriber.interface";
import { ISubscription } from "@/types/subscriptions.interface";

export const subscribersColumns: Column<ISubscriber>[] = [
  {
    header: "Traveler",
    accessor: (subscriber) => (
      <UserInfoCell
        name={subscriber?.traveler?.name}
        email={subscriber?.traveler?.email}
        photo={subscriber?.traveler?.profilePhoto}
      />
    ),
  },
  {
    header: "Plan Name",
    accessor: (subscriber) => (
      <div className="flex flex-col">
        <span className="text-sm">{subscriber.plan.name}</span>
      </div>
    ),
  },
  {
    header: "Amount",
    accessor: (subscriber) => (
      <div className="flex flex-col">
        <span className="text-sm">$ {subscriber.plan.price}</span>
      </div>
    ),
  },
  {
    header: "Duration",
    accessor: (subscriber) => (
      <div className="flex flex-col">
        <span className="text-sm">{subscriber.plan.durationInDays} days</span>
      </div>
    ),
  },
  {
    header: "Status",
    accessor: (subscriber) => <StatusBadgeCell status={subscriber.status} />,
  },
  {
    header: "Start Date",
    accessor: (subscriber) => <DateCell date={subscriber?.startDate} />,
  },
  {
    header: "End Date",
    accessor: (subscriber) => <DateCell date={subscriber?.endDate} />,
  },
];
