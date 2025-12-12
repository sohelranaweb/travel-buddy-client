export const dynamic = "force-dynamic";
import BuddyRequestList from "@/components/modules/Traveler/BuddyRequestManagement/BuddyRequestList";
import { getMyTravelPlanRequestReceived } from "@/services/traveler/findBuddy";

const BuddyRequestPage = async () => {
  const result = await getMyTravelPlanRequestReceived();

  return <BuddyRequestList requests={result.data || []} />;
};

export default BuddyRequestPage;
