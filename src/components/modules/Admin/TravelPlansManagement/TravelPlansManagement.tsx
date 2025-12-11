"use client";

import { useState } from "react";

interface Traveler {
  id: string;
  email: string;
  name: string;
  contactNumber: string | null;
  profilePhoto: string;
  address: string | null;
  gender: string | null;
  bio: string | null;
  averageRating: number;
  totalReviews: number;
  isSubscribed: boolean;
}

interface TravelPlan {
  id: string;
  travelerId: string;
  destination: string;
  startDate: string;
  endDate: string;
  budgetMin: number;
  budgetMax: number;
  travelType: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  traveler: Traveler;
}

interface TravelPlansManagementProps {
  travelPlans: TravelPlan[];
}

const TravelPlansManagement = ({ travelPlans }: TravelPlansManagementProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Safety check for travelPlans
  const plans = Array.isArray(travelPlans) ? travelPlans : [];

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Reset filters
  const handleReset = () => {
    setSearchTerm("");
    setFilterType("ALL");
    setFilterStatus("ALL");
    setCurrentPage(1);
  };
  // Filter travel plans
  const filteredPlans = plans.filter((plan) => {
    const matchesSearch =
      plan.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.traveler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "ALL" || plan.travelType === filterType;
    const matchesStatus =
      filterStatus === "ALL" ||
      (filterStatus === "COMPLETED" && plan.isCompleted) ||
      (filterStatus === "UPCOMING" && !plan.isCompleted);

    return matchesSearch && matchesType && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPlans.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlans = filteredPlans.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Travel Plans Management
          </h1>
          <p className="text-gray-600">
            Total Plans: {filteredPlans.length} of {plans.length}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Total Plans
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {plans.length}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Completed
            </div>
            <div className="text-2xl font-bold text-green-600">
              {plans.filter((p) => p.isCompleted).length}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Upcoming
            </div>
            <div className="text-2xl font-bold text-yellow-600">
              {plans.filter((p) => !p.isCompleted).length}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Total Budget Range
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {plans.length > 0 ? (
                <>
                  ${Math.min(...plans.map((p) => p.budgetMin)).toLocaleString()}
                  - $
                  {Math.max(...plans.map((p) => p.budgetMax)).toLocaleString()}
                </>
              ) : (
                "N/A"
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search destination, traveler..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Travel Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="ALL">All Types</option>
                <option value="SOLO">Solo</option>
                <option value="FRIENDS">Friends</option>
                <option value="FAMILY">Family</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="ALL">All Status</option>
                <option value="COMPLETED">Completed</option>
                <option value="UPCOMING">Upcoming</option>
              </select>
            </div>
            <div>
              <button
                onClick={handleReset}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Traveler
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPlans.map((plan) => (
                  <tr
                    key={plan.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Traveler */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={plan.traveler.profilePhoto}
                          alt={plan.traveler.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {plan.traveler.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {plan.traveler.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Destination */}
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {plan.destination}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {plan.description}
                      </div>
                    </td>

                    {/* Dates */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDate(plan.startDate)}
                      </div>
                      <div className="text-sm text-gray-500">
                        to {formatDate(plan.endDate)}
                      </div>
                    </td>

                    {/* Budget */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${plan.budgetMin.toLocaleString()} - $
                        {plan.budgetMax.toLocaleString()}
                      </div>
                    </td>

                    {/* Type */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          plan.travelType === "SOLO"
                            ? "bg-purple-100 text-purple-800"
                            : plan.travelType === "FRIENDS"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {plan.travelType}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          plan.isCompleted
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {plan.isCompleted ? "Completed" : "Upcoming"}
                      </span>
                    </td>

                    {/* Rating */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="ml-1 text-sm text-gray-900">
                          {plan.traveler.averageRating}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          ({plan.traveler.totalReviews})
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredPlans.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No travel plans found</p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your filters
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredPlans.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
            <div className="flex items-center justify-between">
              {/* Page Info */}
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(endIndex, filteredPlans.length)}
                </span>{" "}
                of <span className="font-medium">{filteredPlans.length}</span>{" "}
                results
              </div>

              {/* Pagination Buttons */}
              <div className="flex gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelPlansManagement;
