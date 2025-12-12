import ExploreTravelers from "@/components/modules/ExploreTraveler/ExploreTravelers";
import { getTravelers } from "@/services/admin/travelersManagement";

const ExploreTravelerPage = async () => {
  const result = await getTravelers();
  const travelers = result?.data || [];

  return <ExploreTravelers travelers={travelers} />;
};

export default ExploreTravelerPage;
