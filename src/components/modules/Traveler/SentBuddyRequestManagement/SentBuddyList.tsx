"use client";

import { useState } from "react";

interface BuddyRequest {
  id: string;
  travelPlanId: string;
  requesterId: string;
  status: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  travelPlan: {
    id: string;
    destination: string;
    startDate: string;
    endDate: string;
    budgetMin: number;
    budgetMax: number;
    travelType: string;
    description: string;
    traveler?: {
      name: string;
      email: string;
      profilePhoto: string;
      averageRating?: number;
      totalReviews?: number;
    };
  };
}

interface SentBuddyRequestsProps {
  requests: BuddyRequest[];
}

const SentBuddyList = ({ requests }: SentBuddyRequestsProps) => {
  const [filter, setFilter] = useState<
    "ALL" | "PENDING" | "ACCEPTED" | "REJECTED"
  >("ALL");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case "ACCEPTED":
        return "var(--chart-4)";
      case "REJECTED":
        return "var(--destructive)";
      case "PENDING":
        return "var(--chart-2)";
      default:
        return "var(--muted)";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toUpperCase()) {
      case "ACCEPTED":
        return "✓";
      case "REJECTED":
        return "✗";
      case "PENDING":
        return "⏳";
      default:
        return "○";
    }
  };

  const filteredRequests = requests.filter((request) => {
    if (filter === "ALL") return true;
    return request.status.toUpperCase() === filter;
  });

  const statusCounts = {
    ALL: requests.length,
    PENDING: requests.filter((r) => r.status.toUpperCase() === "PENDING")
      .length,
    ACCEPTED: requests.filter((r) => r.status.toUpperCase() === "ACCEPTED")
      .length,
    REJECTED: requests.filter((r) => r.status.toUpperCase() === "REJECTED")
      .length,
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div
          className="rounded-xl shadow-lg p-8 mb-8"
          style={{ background: "var(--primary)" }}
        >
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--primary-foreground)" }}
          >
            Sent Buddy Requests
          </h1>
          <p
            className="text-lg opacity-90"
            style={{ color: "var(--primary-foreground)" }}
          >
            Track your buddy requests and their status
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {(["ALL", "PENDING", "ACCEPTED", "REJECTED"] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className="px-6 py-3 rounded-lg font-bold transition-all whitespace-nowrap hover:opacity-90"
                style={{
                  background:
                    filter === status ? "var(--primary)" : "var(--card)",
                  color:
                    filter === status
                      ? "var(--primary-foreground)"
                      : "var(--foreground)",
                  border: `2px solid ${
                    filter === status ? "var(--primary)" : "var(--border)"
                  }`,
                }}
              >
                {status} ({statusCounts[status]})
              </button>
            )
          )}
        </div>

        {/* Requests List */}
        {filteredRequests.length > 0 ? (
          <div className="space-y-6">
            {filteredRequests.map((request) => (
              <div
                key={request.id}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                style={{ background: "var(--card)" }}
              >
                {/* Card Header */}
                <div className="p-6" style={{ background: "var(--muted)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h2
                          className="text-2xl font-bold"
                          style={{ color: "var(--primary)" }}
                        >
                          {request.travelPlan.destination}
                        </h2>
                        <span
                          className="px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2"
                          style={{
                            background: getStatusColor(request.status),
                            color: "var(--primary-foreground)",
                          }}
                        >
                          {getStatusIcon(request.status)}{" "}
                          {request.status.toUpperCase()}
                        </span>
                      </div>

                      {/* Traveler Info */}
                      {request.travelPlan.traveler && (
                        <div className="flex items-center gap-3">
                          <img
                            src={request.travelPlan.traveler.profilePhoto}
                            alt={request.travelPlan.traveler.name}
                            className="w-12 h-12 rounded-full object-cover border-3"
                            style={{ borderColor: "var(--primary)" }}
                          />
                          <div>
                            <p
                              className="font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {request.travelPlan.traveler.name}
                            </p>
                            <div className="flex items-center gap-3">
                              <p
                                className="text-sm"
                                style={{ color: "var(--muted-foreground)" }}
                              >
                                {request.travelPlan.traveler.email}
                              </p>
                              {request.travelPlan.traveler.averageRating && (
                                <div className="flex items-center gap-1">
                                  <span className="text-yellow-500">★</span>
                                  <span
                                    className="text-sm font-medium"
                                    style={{ color: "var(--muted-foreground)" }}
                                  >
                                    {request.travelPlan.traveler.averageRating}{" "}
                                    ({request.travelPlan.traveler.totalReviews})
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Trip Description */}
                  {request.travelPlan.description && (
                    <div className="mb-4">
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {request.travelPlan.description}
                      </p>
                    </div>
                  )}

                  {/* Travel Details Grid */}
                  <div
                    className="rounded-lg p-4 mb-4"
                    style={{ background: "var(--muted)" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <span
                          className="text-xs font-medium block mb-1"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          📅 Travel Dates
                        </span>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {formatDate(request.travelPlan.startDate)} -{" "}
                          {formatDate(request.travelPlan.endDate)}
                        </p>
                      </div>
                      <div>
                        <span
                          className="text-xs font-medium block mb-1"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          💰 Budget Range
                        </span>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "var(--foreground)" }}
                        >
                          ${request.travelPlan.budgetMin.toLocaleString()} - $
                          {request.travelPlan.budgetMax.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <span
                          className="text-xs font-medium block mb-1"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          🎒 Travel Type
                        </span>
                        <p
                          className="text-sm font-bold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {request.travelPlan.travelType}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div
                    className="rounded-lg p-4 mb-4"
                    style={{
                      background: "var(--muted)",
                      borderLeft: `4px solid ${getStatusColor(request.status)}`,
                    }}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-lg">💬</span>
                      <span
                        className="text-xs font-bold uppercase"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Your Message
                      </span>
                    </div>
                    <p
                      className="text-sm italic pl-7"
                      style={{ color: "var(--foreground)" }}
                    >
                      "{request.message}"
                    </p>
                  </div>

                  {/* Request Timeline */}
                  <div
                    className="flex items-center justify-between text-xs pt-4 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ color: "var(--muted-foreground)" }}>
                        📤 Sent:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {formatDate(request.createdAt)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "var(--muted-foreground)" }}>
                        🔄 Updated:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {formatDate(request.updatedAt)}
                      </span>
                    </div>
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
            <div className="text-6xl mb-4">
              {filter === "ALL"
                ? "📭"
                : filter === "PENDING"
                ? "⏳"
                : filter === "ACCEPTED"
                ? "✓"
                : "✗"}
            </div>
            <p
              className="text-xl font-medium mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              No {filter.toLowerCase()} requests found
            </p>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              {filter === "ALL"
                ? "You haven't sent any buddy requests yet"
                : `No ${filter.toLowerCase()} requests to display`}
            </p>
          </div>
        )}

        {/* Summary Stats */}
        {requests.length > 0 && (
          <div
            className="mt-8 rounded-xl shadow-lg p-6"
            style={{ background: "var(--card)" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              📊 Request Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className="rounded-lg p-4 text-center"
                style={{ background: "var(--muted)" }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {statusCounts.ALL}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Total Requests
                </p>
              </div>
              <div
                className="rounded-lg p-4 text-center"
                style={{ background: "var(--muted)" }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--chart-2)" }}
                >
                  {statusCounts.PENDING}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  ⏳ Pending
                </p>
              </div>
              <div
                className="rounded-lg p-4 text-center"
                style={{ background: "var(--muted)" }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--chart-4)" }}
                >
                  {statusCounts.ACCEPTED}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  ✓ Accepted
                </p>
              </div>
              <div
                className="rounded-lg p-4 text-center"
                style={{ background: "var(--muted)" }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--destructive)" }}
                >
                  {statusCounts.REJECTED}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  ✗ Rejected
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentBuddyList;
