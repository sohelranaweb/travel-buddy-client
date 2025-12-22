"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { softDeleteAdmin } from "@/services/admin/adminsManagement";
import { IAdmin } from "@/types/admin.interface";
import { ISubscription } from "@/types/subscriptions.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { subscribersColumns } from "./SubscribersColumns";
import { ISubscriber } from "@/types/subscriber.interface";

interface SubcribersTableProps {
  subscribers: ISubscriber[];
}

const SubscribersTable = ({ subscribers }: SubcribersTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingSubscriber, setDeletingSubscriber] = useState<ISubscriber | null>(
    null
  );
  const [viewingSubscriber, setViewingSubscriber] = useState<ISubscriber | null>(
    null
  );
  const [editingSubscriber, setEditingSubscriber] = useState<ISubscriber | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (subscriber: ISubscriber) => {
    setViewingSubscriber(subscriber);
  };

  const handleEdit = (subscriber: ISubscriber) => {
    setEditingSubscriber(subscriber);
  };

  const handleDelete = (subscriber: ISubscriber) => {
    setDeletingSubscriber(subscriber);
  };

  const confirmDelete = async () => {
    if (!deletingSubscriber) return;

    setIsDeleting(true);
    const result = await softDeleteAdmin(deletingSubscriber.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Admin deleted successfully");
      setDeletingSubscriber(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete admin");
    }
  };

  return (
    <>
      <ManagementTable
        data={subscribers}
        columns={subscribersColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(admin) => admin.id!}
        emptyMessage="No Subscribers found"
      />

      {/* Edit Admin Form Dialog */}
      {/* <AdminFormDialog
        open={!!editingAdmin}
        onClose={() => setEditingAdmin(null)}
        admin={editingAdmin!}
        onSuccess={() => {
          setEditingAdmin(null);
          handleRefresh();
        }}
      /> */}

      {/* View Admin Detail Dialog */}
      {/* <AdminViewDetailDialog
        open={!!viewingAdmin}
        onClose={() => setViewingAdmin(null)}
        admin={viewingAdmin}
      /> */}

      {/* Delete Confirmation Dialog */}
      {/* <DeleteConfirmationDialog
        open={!!deletingAdmin}
        onOpenChange={(open) => !open && setDeletingAdmin(null)}
        onConfirm={confirmDelete}
        title="Delete Admin"
        description={`Are you sure you want to delete ${deletingAdmin?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      /> */}
    </>
  );
};

export default SubscribersTable;
