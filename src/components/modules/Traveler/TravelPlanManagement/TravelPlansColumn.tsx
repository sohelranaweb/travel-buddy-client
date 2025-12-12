"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";

import { Column } from "@/components/shared/ManagementTable";

import { ITravelPlan } from "@/types/travelPlan.interface";

export const travelPlansColumns: Column<ITravelPlan>[] = [
  {
    header: "Travel Type",
    accessor: (travelPlan) => (
      <div className="flex flex-col">
        <span className="text-sm">{travelPlan.travelType}</span>
      </div>
    ),
  },
  {
    header: "Destination",
    accessor: (travelPlan) => (
      <div className="flex flex-col">
        <span className="text-sm">{travelPlan.destination}</span>
      </div>
    ),
  },

  {
    header: "Start Date",
    accessor: (travelPlan) => <DateCell date={travelPlan.startDate} />,
    sortKey: "createdAt",
  },
  {
    header: "Created",
    accessor: (travelPlan) => <DateCell date={travelPlan.createdAt} />,
    sortKey: "createdAt",
  },

  {
    header: "isCompleted",
    accessor: (travelPlan) => (
      <span
        className="px-3 py-1 rounded-full text-xs font-semibold inline-block"
        style={{
          background: travelPlan.isCompleted
            ? "var(--chart-1)"
            : "var(--chart-4)",
          color: "var(--primary-foreground)",
        }}
      >
        {travelPlan.isCompleted ? "Completed" : "Ongoing"}
      </span>
    ),
  },
];
