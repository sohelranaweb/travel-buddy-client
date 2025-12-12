export const dynamic = "force-dynamic";
import FindTravelBuddy from "@/components/modules/FindTravelBuddy/FindTravelBuddy";
import { getAlTravelPlans } from "@/services/traveler/travelPlan.service";

const FindTravelBuddyPage = async () => {
  const result = await getAlTravelPlans();
  const travelPlans = result.data;
  //   console.log("find travel buddy", travelPlans);
  return (
    <div>
      <FindTravelBuddy travelPlans={travelPlans}></FindTravelBuddy>
    </div>
  );
};

export default FindTravelBuddyPage;
