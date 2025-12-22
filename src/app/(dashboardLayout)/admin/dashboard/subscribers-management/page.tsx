export const dynamic = "force-dynamic";
import SubscribersTable from "@/components/modules/Admin/SubscribersManagement/SubscribersTable";
import SubscribersManagementHeader from "@/components/modules/Admin/SubscribersManagement/SubscribersManagementHeader";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getAllSubscribers } from "@/services/admin/subscribersManagement";
import { Suspense } from "react";
import SubscribersFilter from "@/components/modules/Admin/SubscribersManagement/SubscribersFilter";

const SubscribersManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const subscribersResult = await getAllSubscribers(queryString);
  const totalPages = Math.ceil(
    (subscribersResult?.meta?.total || 1) /
      (subscribersResult?.meta?.limit || 1)
  );
  // console.log(subscribersResult);
  return (
    <div className="space-y-6">
      <SubscribersManagementHeader />

      {/* Search, Filters */}
      <SubscribersFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <SubscribersTable subscribers={subscribersResult?.data || []} />
        <TablePagination
          currentPage={subscribersResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default SubscribersManagementPage;
