import SubscriptionList from "@/components/modules/Traveler/TravelerSubscription/SubscriptionList";
import { getMySubscription } from "@/services/traveler/subscription.service";

import { ISubscription } from "@/types/subscriptions.interface";

export default async function MySubscriptionsPage() {
  const response = await getMySubscription();
  const subscription: ISubscription[] = response?.data || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Subscriptions</h1>
        <p className="text-muted-foreground mt-2">
          View and manage your Subscription Plan
        </p>
      </div>

      <SubscriptionList subscription={subscription} />
    </div>
  );
}
