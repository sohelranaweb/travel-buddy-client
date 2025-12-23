export const dynamic = "force-dynamic";
import MySubscriptionsSkeleton from "@/components/modules/Traveler/TravelerSubscription/MySubscriptionSkeleton";
import SubscriptionList from "@/components/modules/Traveler/TravelerSubscription/SubscriptionList";
import { getMySubscription } from "@/services/traveler/subscription.service";
import { ISubscription } from "@/types/subscriptions.interface";
import { Suspense } from "react";

export default async function MySubscriptionsPage() {
  const response = await getMySubscription();
  const subscription: ISubscription | null = response?.data || null;

  console.log({ response });

  return (
    <Suspense fallback={<MySubscriptionsSkeleton />}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            My Subscriptions
          </h1>
          <p className="text-muted-foreground mt-2">
            View and manage your Subscription Plan
          </p>
        </div>

        {subscription ? (
          <SubscriptionList subscription={subscription} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">
              No Active Subscription
            </h3>
            <p className="text-muted-foreground">
              You don't have any active subscriptions yet.
            </p>
          </div>
        )}
      </div>
    </Suspense>
  );
}
