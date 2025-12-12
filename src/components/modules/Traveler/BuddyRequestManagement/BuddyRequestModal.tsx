"use client";

import { useState } from "react";

interface Requester {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  bio: string | null;
  averageRating: number;
  totalReviews: number;
  travelInterests: string[];
  visitedCountries: string[];
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
}

interface BuddyRequest {
  id: string;
  travelPlanId: string;
  requesterId: string;
  status: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  requester: Requester;
  travelPlan: TravelPlan;
}

interface BuddyRequestModalProps {
  request: BuddyRequest | null;
  onClose: () => void;
  onAccept: (requestId: string) => Promise<void> | void;
  onReject: (requestId: string) => Promise<void> | void;
}

const BuddyRequestModal = ({
  request,
  onClose,
  onAccept,
  onReject,
}: BuddyRequestModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!request) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "var(--chart-4)";
      case "ACCEPTED":
        return "var(--chart-1)";
      case "REJECTED":
        return "var(--destructive)";
      default:
        return "var(--muted)";
    }
  };

  const handleAccept = async () => {
    setIsProcessing(true);
    try {
      await onAccept(request.id);
      onClose();
    } catch (error) {
      console.error("Failed to accept request:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    setIsProcessing(true);
    try {
      await onReject(request.id);
      onClose();
    } catch (error) {
      console.error("Failed to reject request:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
      onClick={onClose}
    >
      <div
        className="rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        style={{ background: "var(--card)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="p-6 sticky top-0 z-10"
          style={{ background: "var(--primary)" }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Buddy Request Details
              </h2>
              <span
                className="px-4 py-2 rounded-full text-sm font-bold inline-block"
                style={{
                  background: getStatusColor(request.status),
                  color: "var(--primary-foreground)",
                }}
              >
                {request.status}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-3xl font-bold ml-4 hover:opacity-80 transition-all"
              style={{ color: "var(--primary-foreground)" }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Requester Info */}
          <div
            className="rounded-lg p-6 mb-6"
            style={{ background: "var(--muted)" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              About the Requester
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={request.requester.profilePhoto}
                alt={request.requester.name}
                className="w-24 h-24 rounded-full object-cover border-4"
                style={{ borderColor: "var(--primary)" }}
              />
              <div className="flex-1">
                <h4
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {request.requester.name}
                </h4>
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {request.requester.email}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-xl">★</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {request.requester.averageRating} (
                    {request.requester.totalReviews} reviews)
                  </span>
                </div>
              </div>
            </div>
            {request.requester.bio && (
              <p
                className="text-sm mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                {request.requester.bio}
              </p>
            )}
          </div>

          {/* Travel Plan Details */}
          <div
            className="rounded-lg p-6 mb-6"
            style={{ background: "var(--muted)" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Your Travel Plan
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4
                  className="text-xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  📍 {request.travelPlan.destination}
                </h4>
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background:
                      request.travelPlan.travelType === "SOLO"
                        ? "var(--chart-3)"
                        : request.travelPlan.travelType === "FRIENDS"
                        ? "var(--chart-2)"
                        : "var(--chart-1)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {request.travelPlan.travelType}
                </span>
              </div>

              <div>
                <span
                  className="text-sm font-medium block mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Description
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--foreground)" }}
                >
                  {request.travelPlan.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span
                    className="text-sm font-medium block mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Start Date
                  </span>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {formatDate(request.travelPlan.startDate)}
                  </p>
                </div>
                <div>
                  <span
                    className="text-sm font-medium block mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    End Date
                  </span>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {formatDate(request.travelPlan.endDate)}
                  </p>
                </div>
                <div className="col-span-2">
                  <span
                    className="text-sm font-medium block mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Budget Range
                  </span>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    ${request.travelPlan.budgetMin.toLocaleString()} - $
                    {request.travelPlan.budgetMax.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Request Message */}
          <div
            className="rounded-lg p-6 mb-6"
            style={{ background: "var(--muted)" }}
          >
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Their Message
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              "{request.message}"
            </p>
            <p
              className="text-xs mt-4"
              style={{ color: "var(--muted-foreground)" }}
            >
              Sent on {formatDate(request.createdAt)}
            </p>
          </div>

          {request.status !== "PENDING" && (
            <div
              className="text-center py-4 rounded-lg"
              style={{ background: "var(--muted)" }}
            >
              <p
                className="text-sm font-medium"
                style={{ color: "var(--muted-foreground)" }}
              >
                This request has been {request.status.toLowerCase()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuddyRequestModal;
