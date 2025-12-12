"use client";

import { useState } from "react";

interface Traveler {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  averageRating: number;
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

interface Trip {
  id: string;
  travelPlanId: string;
  buddyId: string;
  status: string;
  joinedAt: string;
  completedAt: string | null;
  leftAt: string | null;
  createdAt: string;
  updatedAt: string;
  travelPlan: TravelPlan;
}

interface MyTripsProps {
  trips: Trip[];
}

const MyTripsList = ({ trips }: MyTripsProps) => {
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const tripsData = Array.isArray(trips) ? trips : [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return days;
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterStatus("ALL");
  };

  const filteredTrips = tripsData.filter((trip) => {
    const matchesSearch =
      trip.travelPlan.destination
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      trip.travelPlan.traveler.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      trip.travelPlan.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "ALL" ||
      (filterStatus === "COMPLETED" && trip.status === "COMPLETED") ||
      (filterStatus === "PENDING" && trip.status === "PENDING") ||
      (filterStatus === "ACTIVE" && trip.status === "ACTIVE");

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "var(--chart-1)";
      case "ACTIVE":
        return "var(--chart-4)";
      case "PENDING":
        return "var(--chart-5)";
      default:
        return "var(--muted)";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "✓";
      case "ACTIVE":
        return "🚀";
      case "PENDING":
        return "⏳";
      default:
        return "•";
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div
          className="rounded-xl shadow-lg p-8 mb-6"
          style={{ background: "var(--primary)" }}
        >
          <div className="mb-6">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: "var(--primary-foreground)" }}
            >
              My Travel Trips
            </h1>
            <p
              className="text-lg opacity-90"
              style={{ color: "var(--primary-foreground)" }}
            >
              All your joined travel adventures
            </p>
          </div>

          {/* Search and Filter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Search Trips
              </label>
              <input
                type="text"
                placeholder="Search destination, traveler..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Filter by Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <option value="ALL">All Status</option>
                <option value="COMPLETED">Completed</option>
                <option value="ACTIVE">Active</option>
                <option value="PENDING">Pending</option>
              </select>
            </div>
          </div>

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

          <div
            className="mt-6 pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: "var(--primary-foreground)" }}
            >
              Found {filteredTrips.length} trips
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div
            className="rounded-lg shadow-lg p-6"
            style={{ background: "var(--card)" }}
          >
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              Total Trips
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              {tripsData.length}
            </div>
          </div>

          <div
            className="rounded-lg shadow-lg p-6"
            style={{ background: "var(--card)" }}
          >
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              Completed
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--chart-1)" }}
            >
              {tripsData.filter((t) => t.status === "COMPLETED").length}
            </div>
          </div>

          <div
            className="rounded-lg shadow-lg p-6"
            style={{ background: "var(--card)" }}
          >
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              Active
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--chart-4)" }}
            >
              {tripsData.filter((t) => t.status === "ACTIVE").length}
            </div>
          </div>

          <div
            className="rounded-lg shadow-lg p-6"
            style={{ background: "var(--card)" }}
          >
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              Pending
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--chart-5)" }}
            >
              {tripsData.filter((t) => t.status === "PENDING").length}
            </div>
          </div>
        </div>

        {/* Trips List */}
        {filteredTrips.length > 0 ? (
          <div className="space-y-6">
            {filteredTrips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                style={{ background: "var(--card)" }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Traveler Info */}
                    <div className="flex items-start gap-4 lg:w-1/4">
                      <img
                        src={trip.travelPlan.traveler.profilePhoto}
                        alt={trip.travelPlan.traveler.name}
                        className="w-20 h-20 rounded-full object-cover border-4"
                        style={{ borderColor: "var(--primary)" }}
                      />
                      <div>
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{ color: "var(--foreground)" }}
                        >
                          {trip.travelPlan.traveler.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-yellow-500">★</span>
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {trip.travelPlan.traveler.averageRating}
                          </span>
                        </div>
                        <p
                          className="text-sm"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {trip.travelPlan.traveler.email}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Trip Details */}
                    <div className="flex-1 lg:w-1/2">
                      <div className="flex items-start justify-between mb-3">
                        <h2
                          className="text-2xl font-bold"
                          style={{ color: "var(--primary)" }}
                        >
                          {trip.travelPlan.destination}
                        </h2>
                        <span
                          className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"
                          style={{
                            background: getStatusColor(trip.status),
                            color: "var(--primary-foreground)",
                          }}
                        >
                          {getStatusIcon(trip.status)} {trip.status}
                        </span>
                      </div>

                      <p
                        className="text-sm mb-4 line-clamp-2"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {trip.travelPlan.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p
                            className="text-xs mb-1"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            Travel Dates
                          </p>
                          <p
                            className="text-sm font-bold"
                            style={{ color: "var(--foreground)" }}
                          >
                            {formatDate(trip.travelPlan.startDate)} -{" "}
                            {formatDate(trip.travelPlan.endDate)}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            (
                            {calculateDuration(
                              trip.travelPlan.startDate,
                              trip.travelPlan.endDate
                            )}{" "}
                            days)
                          </p>
                        </div>

                        <div>
                          <p
                            className="text-xs mb-1"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            Budget Range
                          </p>
                          <p
                            className="text-sm font-bold"
                            style={{ color: "var(--foreground)" }}
                          >
                            ${trip.travelPlan.budgetMin.toLocaleString()} - $
                            {trip.travelPlan.budgetMax.toLocaleString()}
                          </p>
                        </div>

                        <div>
                          <p
                            className="text-xs mb-1"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            Travel Type
                          </p>
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold inline-block"
                            style={{
                              background: "var(--secondary)",
                              color: "var(--secondary-foreground)",
                            }}
                          >
                            {trip.travelPlan.travelType}
                          </span>
                        </div>

                        <div>
                          <p
                            className="text-xs mb-1"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            Joined At
                          </p>
                          <p
                            className="text-sm font-medium"
                            style={{ color: "var(--foreground)" }}
                          >
                            {formatDate(trip.joinedAt)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Timeline */}
                    <div
                      className="lg:w-1/4 border-l pl-6"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <h4
                        className="text-sm font-bold mb-4"
                        style={{ color: "var(--foreground)" }}
                      >
                        Trip Timeline
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{
                              background: "var(--chart-2)",
                              color: "var(--primary-foreground)",
                            }}
                          >
                            ✓
                          </div>
                          <div>
                            <p
                              className="text-xs font-medium"
                              style={{ color: "var(--muted-foreground)" }}
                            >
                              Joined
                            </p>
                            <p
                              className="text-sm font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {formatDate(trip.joinedAt)}
                            </p>
                          </div>
                        </div>

                        {trip.completedAt && (
                          <div className="flex items-start gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                              style={{
                                background: "var(--chart-1)",
                                color: "var(--primary-foreground)",
                              }}
                            >
                              ✓
                            </div>
                            <div>
                              <p
                                className="text-xs font-medium"
                                style={{ color: "var(--muted-foreground)" }}
                              >
                                Completed
                              </p>
                              <p
                                className="text-sm font-bold"
                                style={{ color: "var(--foreground)" }}
                              >
                                {formatDate(trip.completedAt)}
                              </p>
                            </div>
                          </div>
                        )}

                        {trip.leftAt && (
                          <div className="flex items-start gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                              style={{
                                background: "var(--destructive)",
                                color: "var(--primary-foreground)",
                              }}
                            >
                              ✗
                            </div>
                            <div>
                              <p
                                className="text-xs font-medium"
                                style={{ color: "var(--muted-foreground)" }}
                              >
                                Left
                              </p>
                              <p
                                className="text-sm font-bold"
                                style={{ color: "var(--foreground)" }}
                              >
                                {formatDate(trip.leftAt)}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    className="mt-6 pt-4 border-t flex gap-3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <button
                      className="px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90"
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      View Details
                    </button>
                    <button
                      className="px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90"
                      style={{
                        background: "var(--secondary)",
                        color: "var(--secondary-foreground)",
                      }}
                    >
                      Message Traveler
                    </button>
                  </div>
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
              No trips found
            </p>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Try adjusting your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTripsList;
