"use client";

import { useState } from "react";
import TravelPlanModal from "./TravelPlanModal";
import { sendBuddyRequest } from "@/services/traveler/findBuddy";
import { toast } from "sonner";

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

interface FindTravelBuddyProps {
  travelPlans: TravelPlan[];
}

const FindTravelBuddy = ({ travelPlans }: FindTravelBuddyProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [filterStatus, setFilterStatus] = useState("UPCOMING");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<TravelPlan | null>(null);
  const cardsPerPage = 6;

  const plans = Array.isArray(travelPlans) ? travelPlans : [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterType("ALL");
    setFilterStatus("UPCOMING");
    setCurrentPage(1);
  };

  const openModal = (plan: TravelPlan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  const handleConnect = async (travelPlanId: string, message: string) => {
    try {
      // Create FormData for the server action
      const formData = new FormData();
      formData.append("travelPlanId", travelPlanId);
      formData.append("message", message);

      // Call the server action
      const result = await sendBuddyRequest(null, formData);

      if (!result.success) {
        throw new Error(result.message || "Failed to send buddy request");
      }

      // Show success message
      toast.success("Buddy request sent successfully!");
    } catch (error: any) {
      // Show error message
      toast.error(error.message || "Failed to send buddy request");
      throw error; // Re-throw to let modal handle it
    }
  };

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

  const totalPages = Math.ceil(filteredPlans.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentPlans = filteredPlans.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header with Search and Filters */}
        <div
          className="rounded-xl shadow-lg p-8 mb-8"
          style={{ background: "var(--primary)" }}
        >
          <div className="mb-6">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: "var(--primary-foreground)" }}
            >
              Find Your Travel Buddy
            </h1>
            <p
              className="text-lg opacity-90"
              style={{ color: "var(--primary-foreground)" }}
            >
              Discover fellow travelers and join exciting adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Search Destinations
              </label>
              <input
                type="text"
                placeholder="Search destination, traveler..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              />
            </div>

            {/* Travel Type */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Travel Type
              </label>
              <select
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <option value="ALL">All Types</option>
                <option value="SOLO">Solo</option>
                <option value="FRIENDS">Friends</option>
                <option value="FAMILY">Family</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => {
                  setFilterStatus(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <option value="ALL">All Status</option>
                <option value="COMPLETED">Completed</option>
                <option value="UPCOMING">Upcoming</option>
              </select>
            </div>
          </div>

          {/* Reset Button */}
          <div className="mt-4">
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90"
              style={{
                background: "var(--secondary)",
                color: "var(--secondary-foreground)",
              }}
            >
              Reset Filters
            </button>
          </div>

          {/* Results Info */}
          <div
            className="mt-6 pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: "var(--primary-foreground)" }}
            >
              Found {filteredPlans.length} travel plans
            </p>
          </div>
        </div>

        {/* Travel Plans Cards */}
        {currentPlans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                style={{ background: "var(--card)" }}
              >
                {/* Card Header with Traveler Info */}
                <div className="p-6" style={{ background: "var(--muted)" }}>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={plan.traveler.profilePhoto}
                      alt={plan.traveler.name}
                      className="w-16 h-16 rounded-full object-cover border-4"
                      style={{ borderColor: "var(--primary)" }}
                    />
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {plan.traveler.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {plan.traveler.averageRating} (
                          {plan.traveler.totalReviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Destination */}
                  <h2
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--primary)" }}
                  >
                    {plan.destination}
                  </h2>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Description */}
                  <p
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {plan.description}
                  </p>

                  {/* Details Grid */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Dates:
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {formatDate(plan.startDate)} -{" "}
                        {formatDate(plan.endDate)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Budget:
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        ${plan.budgetMin.toLocaleString()} - $
                        {plan.budgetMax.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Type:
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background:
                            plan.travelType === "SOLO"
                              ? "var(--chart-3)"
                              : plan.travelType === "FRIENDS"
                              ? "var(--chart-2)"
                              : "var(--chart-1)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {plan.travelType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Status:
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: plan.isCompleted
                            ? "var(--chart-1)"
                            : "var(--chart-4)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {plan.isCompleted ? "Completed" : "Upcoming"}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <button
                    onClick={() => openModal(plan)}
                    className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 cursor-pointer"
                    style={{
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 rounded-xl"
            style={{ background: "var(--card)" }}
          >
            <p
              className="text-xl font-medium mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              No travel plans found
            </p>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Try adjusting your filters
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredPlans.length > 0 && (
          <div
            className="rounded-xl shadow-lg p-6"
            style={{ background: "var(--card)" }}
          >
            <div className="flex items-center justify-between">
              <div
                className="text-sm font-medium"
                style={{ color: "var(--foreground)" }}
              >
                Showing {startIndex + 1} -{" "}
                {Math.min(endIndex, filteredPlans.length)} of{" "}
                {filteredPlans.length} results
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-40"
                  style={{
                    background:
                      currentPage === 1 ? "var(--muted)" : "var(--secondary)",
                    color:
                      currentPage === 1
                        ? "var(--muted-foreground)"
                        : "var(--secondary-foreground)",
                  }}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className="px-4 py-2 rounded-lg font-medium transition-all"
                      style={{
                        background:
                          currentPage === page
                            ? "var(--primary)"
                            : "var(--secondary)",
                        color:
                          currentPage === page
                            ? "var(--primary-foreground)"
                            : "var(--secondary-foreground)",
                      }}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-40"
                  style={{
                    background:
                      currentPage === totalPages
                        ? "var(--muted)"
                        : "var(--secondary)",
                    color:
                      currentPage === totalPages
                        ? "var(--muted-foreground)"
                        : "var(--secondary-foreground)",
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Modal Component */}
      <TravelPlanModal
        plan={selectedPlan}
        onClose={closeModal}
        onConnect={handleConnect}
      />
    </div>
  );
};

export default FindTravelBuddy;
