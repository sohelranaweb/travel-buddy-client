import SubscriptionPlansManagementHeader from "@/components/modules/Admin/SubscriptionPlansManagement/SubscriptionPlansManagementHeader";
import SubscriptionPlansTable from "@/components/modules/Admin/SubscriptionPlansManagement/SubscriptionPlansTable";
import RefreshButton from "@/components/shared/RefreshButton";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getSubscriptionPlan } from "@/services/admin/subscriptionPlansManagement";
import { Suspense } from "react";

const AdminSubscriptionPlansManagementPage = async () => {
  const result = await getSubscriptionPlan();
  return (
    <div className="space-y-6">
      <SubscriptionPlansManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <SubscriptionPlansTable subscriptionPlans={result.data} />
      </Suspense>
    </div>
  );
};

export default AdminSubscriptionPlansManagementPage;
