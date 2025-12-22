"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import SubscribersSearchFilter from "@/components/shared/SubscribersSearchFilter";

const SubscribersFilter = () => {
  const statusOptions = [
    { label: "All Status", value: "" },
    { label: "Active", value: "ACTIVE" },
    { label: "Pending", value: "PENDING" },
    { label: "Expired", value: "EXPIRED" },
    { label: "Cancelled", value: "CANCELLED" },
  ];
  return (
    <div className="space-y-3">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter
          paramName="searchTerm"
          placeholder="Search Plan Name..."
        />
        <RefreshButton />
      </div>

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3">
        {/* Email Filter */}
        {/* <SearchFilter paramName="email" placeholder="Email" /> */}

        {/* Contact Number Filter */}
        {/* <SearchFilter paramName="contactNumber" placeholder="Contact" /> */}

        {/* Amount Filter */}
        {/* <SearchFilter paramName="amount" placeholder="Amount" type="number" /> */}

        {/* Status Filter */}
        <SelectFilter
          paramName="status"
          options={statusOptions}
          placeholder="Status"
        />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default SubscribersFilter;
