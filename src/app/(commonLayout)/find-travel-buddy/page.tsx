export const dynamic = "force-dynamic";
import FindTravelBuddy from "@/components/modules/FindTravelBuddy/FindTravelBuddy";
import TravelBuddySkeleton from "@/components/modules/FindTravelBuddy/TravelBuddySkeleton";
import { getAlTravelPlans } from "@/services/traveler/travelPlan.service";
import { Suspense } from "react";

const FindTravelBuddyPage = async () => {
  const result = await getAlTravelPlans();
  const travelPlans = result.data;
  //   console.log("find travel buddy", travelPlans);
  return (
    <div>
      <Suspense fallback={<TravelBuddySkeleton />}>
        <FindTravelBuddy travelPlans={travelPlans}></FindTravelBuddy>
      </Suspense>
    </div>
  );
};

export default FindTravelBuddyPage;
