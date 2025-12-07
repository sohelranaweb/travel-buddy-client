"use client";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import SubscriptionPlansFormDialog from "./SubscriptionPlansFormDialog";

const SubscriptionPlansManagementHeader = () => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSuccess = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <>
      <SubscriptionPlansFormDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={handleSuccess}
      />

      <ManagementPageHeader
        title="Subscription Plan Management"
        description="Manage Subscription Plan information and details"
        action={{
          label: "Add Subscription Plan",
          icon: Plus,
          onClick: () => setIsDialogOpen(true),
        }}
      />
    </>
  );
};

export default SubscriptionPlansManagementHeader;
