export const dynamic = "force-dynamic";
import TravelPlansManagementHeader from "@/components/modules/Traveler/TravelPlanManagement/TravelPlanManagementHeader";
import TravelPlansFilter from "@/components/modules/Traveler/TravelPlanManagement/TravelPlansFilter";
import TravelPlansTable from "@/components/modules/Traveler/TravelPlanManagement/TravelPlansTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getMyTravelPlans } from "@/services/traveler/travelPlan.service";
import { Suspense } from "react";

const MyTravelPlansPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const travelPlansResult = await getMyTravelPlans(queryString);

  const totalPages = Math.ceil(
    (travelPlansResult?.meta?.total || 1) /
      (travelPlansResult?.meta?.limit || 1)
  );
  //   const travelPlans = travelPlansResult.data.data;
  //   //   console.log({ travelPlans });
  return (
    <div className="space-y-6">
      <TravelPlansManagementHeader />

      {/* Search, Filters */}
      <TravelPlansFilter></TravelPlansFilter>

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <TravelPlansTable travelPlans={travelPlansResult?.data?.data || []} />
        <TablePagination
          currentPage={travelPlansResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default MyTravelPlansPage;
