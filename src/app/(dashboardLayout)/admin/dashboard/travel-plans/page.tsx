export const dynamic = "force-dynamic";
import TravelPlansManagement from "@/components/modules/Admin/TravelPlansManagement/TravelPlansManagement";
import { getAlTravelPlans } from "@/services/traveler/travelPlan.service";

const AllTravelPlansPage = async () => {
  const result = await getAlTravelPlans();
  //   const travelPlans = result.data;
  //   console.log(travelPlans);
  return (
    <div>
      <TravelPlansManagement travelPlans={result?.data}></TravelPlansManagement>
    </div>
  );
};

export default AllTravelPlansPage;
