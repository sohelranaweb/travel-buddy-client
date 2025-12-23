export const dynamic = "force-dynamic";
import BuddyRequestList from "@/components/modules/Traveler/BuddyRequestManagement/BuddyRequestList";
import BuddyRequestsSkeleton from "@/components/modules/Traveler/BuddyRequestManagement/BuddyRequestsSkeleton";
import { getMyTravelPlanRequestReceived } from "@/services/traveler/findBuddy";
import { Suspense } from "react";

const BuddyRequestPage = async () => {
  const result = await getMyTravelPlanRequestReceived();

  return (
    <Suspense fallback={<BuddyRequestsSkeleton />}>
      <BuddyRequestList requests={result.data || []} />
    </Suspense>
  );
};

export default BuddyRequestPage;
