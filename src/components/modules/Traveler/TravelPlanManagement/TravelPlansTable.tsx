// "use client";

// import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
// import ManagementTable from "@/components/shared/ManagementTable";
// import { softDeleteAdmin } from "@/services/admin/adminsManagement";
// import { IAdmin } from "@/types/admin.interface";
// import { useRouter } from "next/navigation";
// import { useState, useTransition } from "react";
// import { toast } from "sonner";

// import { ITravelPlan } from "@/types/travelPlan.interface";
// import { travelPlansColumns } from "./TravelPlansColumn";
// import TravelPlanViewDetailDialog from "./TravelPlanViewDetailDialog";
// import TravelPlanFormDialog from "./TravelPlanFormDialog";
// import { deleteTravelPlan } from "@/services/traveler/travelPlan.service";

// interface TravelPlansTableProps {
//   travelPlans: ITravelPlan[];
// }

// const TravelPlansTable = ({ travelPlans }: TravelPlansTableProps) => {
//   const router = useRouter();
//   const [, startTransition] = useTransition();
//   const [deletingTravelPlan, setDeletingTravelPlan] =
//     useState<ITravelPlan | null>(null);
//   const [viewingTravelPlan, setViewingTravelPlan] =
//     useState<ITravelPlan | null>(null);
//   const [editingTravelPlan, setEditingTravelPlan] =
//     useState<ITravelPlan | null>(null);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleRefresh = () => {
//     startTransition(() => {
//       router.refresh();
//     });
//   };

//   const handleView = (travelPlan: ITravelPlan) => {
//     setViewingTravelPlan(travelPlan);
//   };

//   const handleEdit = (travelPlan: ITravelPlan) => {
//     setEditingTravelPlan(travelPlan);
//   };

//   const handleDelete = (travelPlan: ITravelPlan) => {
//     setDeletingTravelPlan(travelPlan);
//   };

//   const confirmDelete = async () => {
//     if (!deletingTravelPlan) return;

//     setIsDeleting(true);
//     const result = await deleteTravelPlan(deletingTravelPlan.id!);
//     setIsDeleting(false);

//     if (result.success) {
//       toast.success(result.message || "Admin deleted successfully");
//       setDeletingTravelPlan(null);
//       handleRefresh();
//     } else {
//       toast.error(result.message || "Failed to delete admin");
//     }
//   };

//   return (
//     <>
//       <ManagementTable
//         data={travelPlans}
//         columns={travelPlansColumns}
//         onView={handleView}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//         getRowKey={(travelPlan) => travelPlan.id!}
//         emptyMessage="No Travel Plans found"
//       />

//       {/* Edit Admin Form Dialog */}
//       <TravelPlanFormDialog
//         open={!!editingTravelPlan}
//         onClose={() => setEditingTravelPlan(null)}
//         travelPlan={editingTravelPlan!}
//         onSuccess={() => {
//           setEditingTravelPlan(null);
//           handleRefresh();
//         }}
//       />

//       {/* View Admin Detail Dialog */}
//       <TravelPlanViewDetailDialog
//         open={!!viewingTravelPlan}
//         onClose={() => setViewingTravelPlan(null)}
//         travelPlan={viewingTravelPlan}
//       />

//       {/* Delete Confirmation Dialog */}
//       <DeleteConfirmationDialog
//         open={!!deletingTravelPlan}
//         onOpenChange={(open) => !open && setDeletingTravelPlan(null)}
//         onConfirm={confirmDelete}
//         title="Delete Admin"
//         description={`Are you sure you want to delete ${deletingTravelPlan?.travelType}? This action cannot be undone.`}
//         isDeleting={isDeleting}
//       />
//     </>
//   );
// };

// export default TravelPlansTable;

"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { ITravelPlan } from "@/types/travelPlan.interface";
import { travelPlansColumns } from "./TravelPlansColumn";
import TravelPlanViewDetailDialog from "./TravelPlanViewDetailDialog";
import TravelPlanFormDialog from "./TravelPlanFormDialog";
import { deleteTravelPlan } from "@/services/traveler/travelPlan.service";

interface TravelPlansTableProps {
  travelPlans: ITravelPlan[];
}

const TravelPlansTable = ({ travelPlans }: TravelPlansTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [viewingTravelPlan, setViewingTravelPlan] =
    useState<ITravelPlan | null>(null);
  const [editingTravelPlan, setEditingTravelPlan] =
    useState<ITravelPlan | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (travelPlan: ITravelPlan) => {
    setViewingTravelPlan(travelPlan);
  };

  const handleEdit = (travelPlan: ITravelPlan) => {
    setEditingTravelPlan(travelPlan);
  };

  // Direct delete without confirmation
  const handleDelete = async (travelPlan: ITravelPlan) => {
    if (!travelPlan) return;

    setIsDeleting(true);
    const result = await deleteTravelPlan(travelPlan.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Travel Plan deleted successfully");
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete Travel Plan");
    }
  };

  return (
    <>
      <ManagementTable
        data={travelPlans}
        columns={travelPlansColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete} // directly call delete
        getRowKey={(travelPlan) => travelPlan.id!}
        emptyMessage="No Travel Plans found"
      />

      {/* Edit Form Dialog */}
      <TravelPlanFormDialog
        open={!!editingTravelPlan}
        onClose={() => setEditingTravelPlan(null)}
        travelPlan={editingTravelPlan!}
        onSuccess={() => {
          setEditingTravelPlan(null);
          handleRefresh();
        }}
      />

      {/* View Detail Dialog */}
      <TravelPlanViewDetailDialog
        open={!!viewingTravelPlan}
        onClose={() => setViewingTravelPlan(null)}
        travelPlan={viewingTravelPlan}
      />
    </>
  );
};

export default TravelPlansTable;
