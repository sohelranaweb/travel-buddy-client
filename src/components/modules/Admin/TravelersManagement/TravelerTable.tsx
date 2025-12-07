"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { softDeleteTraveler } from "@/services/admin/travelersManagement";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import TravelerFormDialog from "./TravelerFormDialog";

import { ITraveler } from "@/types/traveler.interface";
import { travelersColumns } from "./TravelersColumn";
import TravelerViewDetailDialog from "./TravelerViewDetailDialog";

interface TravelersTableProps {
  travelers: ITraveler[];
}

const TravelersTable = ({ travelers }: TravelersTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingTraveler, setDeletingTraveler] = useState<ITraveler | null>(
    null
  );
  const [viewingTraveler, setViewingTraveler] = useState<ITraveler | null>(
    null
  );
  const [editingTraveler, setEditingTraveler] = useState<ITraveler | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (traveler: ITraveler) => {
    setViewingTraveler(traveler);
  };

  const handleEdit = (traveler: ITraveler) => {
    setEditingTraveler(traveler);
  };

  const handleDelete = (Traveler: ITraveler) => {
    setDeletingTraveler(Traveler);
  };

  const confirmDelete = async () => {
    if (!deletingTraveler) return;

    setIsDeleting(true);
    const result = await softDeleteTraveler(deletingTraveler.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Traveler deleted successfully");
      setDeletingTraveler(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete traveler");
    }
  };

  return (
    <>
      <ManagementTable
        data={travelers}
        columns={travelersColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(traveler) => traveler.id!}
        emptyMessage="No travelers found"
      />

      {/* Edit Traveler Form Dialog */}
      <TravelerFormDialog
        open={!!editingTraveler}
        onClose={() => setEditingTraveler(null)}
        traveler={editingTraveler!}
        onSuccess={() => {
          setEditingTraveler(null);
          handleRefresh();
        }}
      />

      {/* View Traveler Detail Dialog */}
      <TravelerViewDetailDialog
        open={!!viewingTraveler}
        onClose={() => setViewingTraveler(null)}
        traveler={viewingTraveler}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingTraveler}
        onOpenChange={(open) => !open && setDeletingTraveler(null)}
        onConfirm={confirmDelete}
        title="Delete Traveler"
        description={`Are you sure you want to delete ${deletingTraveler?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default TravelersTable;
