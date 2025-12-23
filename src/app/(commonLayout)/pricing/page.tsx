export const dynamic = "force-dynamic";
import SubscriptionPage from "@/components/modules/Pricing/Pricing";
import PricingSkeleton from "@/components/modules/Pricing/PricingSkeleton";
import { getSubscriptionPlan } from "@/services/admin/subscriptionPlansManagement";
import { Suspense } from "react";

const PricingPage = async () => {
  const result = await getSubscriptionPlan();
  return (
    <div>
      <Suspense fallback={<PricingSkeleton />}>
        <SubscriptionPage subscriptionData={result?.data}></SubscriptionPage>
      </Suspense>
    </div>
  );
};

export default PricingPage;
