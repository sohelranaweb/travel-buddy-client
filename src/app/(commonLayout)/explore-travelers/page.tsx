export const dynamic = "force-dynamic";
import ExploreTravelers from "@/components/modules/ExploreTraveler/ExploreTravelers";
import TravelBuddySkeleton from "@/components/modules/FindTravelBuddy/TravelBuddySkeleton";
import { getTravelers } from "@/services/admin/travelersManagement";
import { Suspense } from "react";

const ExploreTravelerPage = async () => {
  const result = await getTravelers();
  const travelers = result?.data || [];

  return (
    <div>
      <Suspense fallback={<TravelBuddySkeleton />}>
        <ExploreTravelers travelers={travelers} />
      </Suspense>
    </div>
  );
};

export default ExploreTravelerPage;
