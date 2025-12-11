import NotFound from "@/app/not-found";
import TravelPlanDetail from "@/components/modules/FindTravelBuddy/TravelPlanDetail";
import { getTravelPlanById } from "@/services/traveler/travelPlan.service";

interface TravelPlanDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const TravelPlanDetailPage = async ({ params }: TravelPlanDetailPageProps) => {
  const { id } = await params;

  const response = await getTravelPlanById(id);

  if (!response?.success || !response?.data) {
    return NotFound();
  }

  const travelPlan = response.data;

  return <TravelPlanDetail travelPlan={travelPlan} />;
};

export default TravelPlanDetailPage;
