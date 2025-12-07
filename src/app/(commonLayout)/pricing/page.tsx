import SubscriptionPage from "@/components/modules/Pricing/Pricing";
import { getSubscriptionPlan } from "@/services/admin/subscriptionPlansManagement";

const PricingPage = async () => {
  const result = await getSubscriptionPlan();
  return (
    <div>
      <SubscriptionPage subscriptionData={result?.data}></SubscriptionPage>
    </div>
  );
};

export default PricingPage;
