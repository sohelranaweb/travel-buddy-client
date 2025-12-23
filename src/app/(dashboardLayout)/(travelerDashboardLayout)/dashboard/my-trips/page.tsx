export const dynamic = "force-dynamic";

import BuddyRequestsSkeleton from "@/components/modules/Traveler/BuddyRequestManagement/BuddyRequestsSkeleton";
import MyTripsList from "@/components/modules/Traveler/TripsManagement.tsx/MyTripsList";
import { getMyTrips } from "@/services/traveler/findBuddy";
import { Suspense } from "react";
// artifact component import করুন

const MyTripsPage = async () => {
  const result = await getMyTrips();

  return (
    <Suspense fallback={<BuddyRequestsSkeleton />}>
      <MyTripsList trips={result?.data || []} />
    </Suspense>
  );
};

export default MyTripsPage;
