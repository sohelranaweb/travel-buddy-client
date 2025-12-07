import TravelersFilter from "@/components/modules/Admin/TravelersManagement/TravelersFilter";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getTravelers } from "@/services/admin/travelersManagement";
import { Suspense } from "react";
import TravelersTable from "@/components/modules/Admin/TravelersManagement/TravelerTable";

const AdminPatientsManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const patientsResult = await getTravelers(queryString);

  const totalPages = Math.ceil(
    (patientsResult?.meta?.total || 1) / (patientsResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <ManagementPageHeader
        title="Travelers Management"
        description="Manage Travelers information and details"
      />

      {/* Search, Filters */}
      <TravelersFilter />

      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <TravelersTable travelers={patientsResult?.data || []} />
        <TablePagination
          currentPage={patientsResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminPatientsManagementPage;
