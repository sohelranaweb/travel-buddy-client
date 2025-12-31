import { Suspense } from "react";

import { getMetaData } from "@/services/metaData/meta.service";
import TravelerDashboard from "@/components/modules/Traveler/TravelerDashboard/TravelerDashoard";
import TravelerDashboardSkeleton from "@/components/modules/Traveler/TravelerDashboard/TravelerDashboardSkeleton";

export const dynamic = "force-dynamic";

const TravelerDashboardPage = async () => {
  const metaDataResult = await getMetaData();
  const metaData = metaDataResult.data;

  return (
    <div>
      <Suspense fallback={<TravelerDashboardSkeleton />}>
        <TravelerDashboard metaData={metaData} />
      </Suspense>
    </div>
  );
};

export default TravelerDashboardPage;
