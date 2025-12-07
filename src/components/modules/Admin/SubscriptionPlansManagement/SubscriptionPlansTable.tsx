"use client";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { ISubscriptionPlan } from "@/types/subscriptionPlans.interface";
import { deleteSubscriptionPlan } from "@/services/admin/subscriptionPlansManagement";
import { subscriptionPlansColumns } from "./SubscriptionPlanColumns";

interface SubscriptionPlanTableProps {
  subscriptionPlans: ISubscriptionPlan[];
}

const SubscriptionPlansTable = ({
  subscriptionPlans,
}: SubscriptionPlanTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingSubscriptionPlan, setDeletingSubscriptionPlan] =
    useState<ISubscriptionPlan | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = (subscriptionPlan: ISubscriptionPlan) => {
    setDeletingSubscriptionPlan(subscriptionPlan);
  };

  const confirmDelete = async () => {
    if (!deletingSubscriptionPlan) return;

    setIsDeletingDialog(true);
    const result = await deleteSubscriptionPlan(deletingSubscriptionPlan.id);
    setIsDeletingDialog(false);
    if (result.success) {
      toast.success(result.message || "Subscription Plan deleted successfully");
      setDeletingSubscriptionPlan(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete subscription plan");
    }
  };

  return (
    <>
      <ManagementTable
        data={subscriptionPlans}
        columns={subscriptionPlansColumns}
        onDelete={handleDelete}
        getRowKey={(subscriptionPlan) => subscriptionPlan.id}
        emptyMessage="No subscription Plan found"
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingSubscriptionPlan}
        onOpenChange={(open) => !open && setDeletingSubscriptionPlan(null)}
        onConfirm={confirmDelete}
        title="Delete Subscription Plan"
        description={`Are you sure you want to delete ${deletingSubscriptionPlan?.name}? This action cannot be undone.`}
        isDeleting={isDeletingDialog}
      />
    </>
  );
};

export default SubscriptionPlansTable;
