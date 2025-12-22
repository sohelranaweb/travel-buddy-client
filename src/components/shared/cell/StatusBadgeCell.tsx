// "use client";

// import { Badge } from "@/components/ui/badge";

// interface StatusBadgeCellProps {
//   isDeleted?: boolean;
//   activeText?: string;
//   deletedText?: string;
//   status?: string;
// }

// export function StatusBadgeCell({
//   isDeleted,
//   status,
//   activeText = "Active",
//   deletedText = "Deleted",
// }: StatusBadgeCellProps) {
//   return (
//     <Badge variant={isDeleted ? "destructive" : "default"}>
//       {isDeleted ? deletedText : activeText}
//     </Badge>
//   );
// }

"use client";

import { Badge } from "@/components/ui/badge";

interface StatusBadgeCellProps {
  isDeleted?: boolean;
  activeText?: string;
  deletedText?: string;
  status?: string;
}

export function StatusBadgeCell({
  isDeleted,
  status,
  activeText = "Active",
  deletedText = "Deleted",
}: StatusBadgeCellProps) {
  // Jodi status prop pathano hoy
  if (status !== undefined) {
    const getStatusVariant = (
      status: string
    ): "default" | "destructive" | "secondary" | "outline" => {
      const upperStatus = status.toUpperCase();

      if (upperStatus === "ACTIVE") return "default";
      if (upperStatus === "PENDING") return "secondary";
      if (upperStatus === "EXPIRED") return "destructive";
      if (upperStatus === "CANCELLED") return "outline";

      return "default";
    };

    return (
      <Badge variant={getStatusVariant(status)}>
        {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
      </Badge>
    );
  }

  // Jodi isDeleted prop pathano hoy
  return (
    <Badge variant={isDeleted ? "destructive" : "default"}>
      {isDeleted ? deletedText : activeText}
    </Badge>
  );
}
