
export const dynamic = "force-dynamic";

import MyTripsList from "@/components/modules/Traveler/TripsManagement.tsx/MyTripsList";
import { getMyTrips } from "@/services/traveler/findBuddy";
// artifact component import করুন

const MyTripsPage = async () => {
  const result = await getMyTrips();

  return <MyTripsList trips={result?.data || []} />;
};

export default MyTripsPage;
