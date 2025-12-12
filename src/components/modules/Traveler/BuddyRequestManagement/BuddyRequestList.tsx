// "use client";

// import { useState } from "react";
// import BuddyRequestModal from "./BuddyRequestModal";

// interface Requester {
//   id: string;
//   name: string;
//   email: string;
//   profilePhoto: string;
//   bio: string | null;
//   averageRating: number;
//   totalReviews: number;
//   travelInterests: string[];
//   visitedCountries: string[];
// }

// interface TravelPlan {
//   id: string;
//   travelerId: string;
//   destination: string;
//   startDate: string;
//   endDate: string;
//   budgetMin: number;
//   budgetMax: number;
//   travelType: string;
//   description: string;
//   isCompleted: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// interface BuddyRequest {
//   id: string;
//   travelPlanId: string;
//   requesterId: string;
//   status: string;
//   message: string;
//   createdAt: string;
//   updatedAt: string;
//   requester: Requester;
//   travelPlan: TravelPlan;
// }

// interface BuddyRequestListProps {
//   requests: BuddyRequest[];
// }

// const BuddyRequestList = ({ requests }: BuddyRequestListProps) => {
//   const [selectedRequest, setSelectedRequest] = useState<BuddyRequest | null>(
//     null
//   );
//   const [filterStatus, setFilterStatus] = useState("ALL");

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "PENDING":
//         return "var(--chart-4)";
//       case "ACCEPTED":
//         return "var(--chart-1)";
//       case "REJECTED":
//         return "var(--destructive)";
//       default:
//         return "var(--muted)";
//     }
//   };

//   const filteredRequests = requests.filter((request) => {
//     if (filterStatus === "ALL") return true;
//     return request.status === filterStatus;
//   });

//   const handleAccept = async (requestId: string) => {
//     console.log("Accepting request:", requestId);
//     // Call your accept API here
//   };

//   const handleReject = async (requestId: string) => {
//     console.log("Rejecting request:", requestId);
//     // Call your reject API here
//   };

//   return (
//     <div className="min-h-screen" style={{ background: "var(--background)" }}>
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Header */}
//         <div
//           className="rounded-xl shadow-lg p-8 mb-8"
//           style={{ background: "var(--primary)" }}
//         >
//           <div className="mb-6">
//             <h1
//               className="text-4xl font-bold mb-2"
//               style={{ color: "var(--primary-foreground)" }}
//             >
//               Buddy Requests
//             </h1>
//             <p
//               className="text-lg opacity-90"
//               style={{ color: "var(--primary-foreground)" }}
//             >
//               Manage travel buddy requests for your trips
//             </p>
//           </div>

//           {/* Filter */}
//           <div className="flex items-center gap-4">
//             <label
//               className="text-sm font-medium"
//               style={{ color: "var(--primary-foreground)" }}
//             >
//               Filter by Status:
//             </label>
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2"
//               style={{
//                 background: "var(--card)",
//                 borderColor: "var(--border)",
//                 color: "var(--foreground)",
//               }}
//             >
//               <option value="ALL">All Requests</option>
//               <option value="PENDING">Pending</option>
//               <option value="ACCEPTED">Accepted</option>
//               <option value="REJECTED">Rejected</option>
//             </select>
//           </div>

//           <div
//             className="mt-6 pt-4 border-t"
//             style={{ borderColor: "rgba(255,255,255,0.2)" }}
//           >
//             <p
//               className="text-sm font-medium"
//               style={{ color: "var(--primary-foreground)" }}
//             >
//               {filteredRequests.length} request(s) found
//             </p>
//           </div>
//         </div>

//         {/* Request Cards */}
//         {filteredRequests.length > 0 ? (
//           <div className="space-y-4">
//             {filteredRequests.map((request) => (
//               <div
//                 key={request.id}
//                 className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
//                 style={{ background: "var(--card)" }}
//               >
//                 <div className="p-6">
//                   <div className="flex items-start gap-6">
//                     {/* Requester Info */}
//                     <img
//                       src={request.requester.profilePhoto}
//                       alt={request.requester.name}
//                       className="w-20 h-20 rounded-full object-cover border-4"
//                       style={{ borderColor: "var(--primary)" }}
//                     />

//                     <div className="flex-1">
//                       {/* Top Row */}
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <h3
//                             className="text-xl font-bold mb-1"
//                             style={{ color: "var(--foreground)" }}
//                           >
//                             {request.requester.name}
//                           </h3>
//                           <p
//                             className="text-sm mb-2"
//                             style={{ color: "var(--muted-foreground)" }}
//                           >
//                             {request.requester.email}
//                           </p>
//                           <div className="flex items-center gap-2">
//                             <span className="text-yellow-500 text-lg">★</span>
//                             <span
//                               className="text-sm font-medium"
//                               style={{ color: "var(--muted-foreground)" }}
//                             >
//                               {request.requester.averageRating} (
//                               {request.requester.totalReviews} reviews)
//                             </span>
//                           </div>
//                         </div>

//                         <span
//                           className="px-4 py-2 rounded-full text-sm font-bold"
//                           style={{
//                             background: getStatusColor(request.status),
//                             color: "var(--primary-foreground)",
//                           }}
//                         >
//                           {request.status}
//                         </span>
//                       </div>

//                       {/* Travel Plan Info */}
//                       <div
//                         className="rounded-lg p-4 mb-4"
//                         style={{ background: "var(--muted)" }}
//                       >
//                         <div className="flex items-center justify-between mb-2">
//                           <h4
//                             className="text-lg font-bold"
//                             style={{ color: "var(--primary)" }}
//                           >
//                             📍 {request.travelPlan.destination}
//                           </h4>
//                           <span
//                             className="px-3 py-1 rounded-full text-xs font-semibold"
//                             style={{
//                               background:
//                                 request.travelPlan.travelType === "SOLO"
//                                   ? "var(--chart-3)"
//                                   : request.travelPlan.travelType === "FRIENDS"
//                                   ? "var(--chart-2)"
//                                   : "var(--chart-1)",
//                               color: "var(--primary-foreground)",
//                             }}
//                           >
//                             {request.travelPlan.travelType}
//                           </span>
//                         </div>
//                         <div className="grid grid-cols-2 gap-3 text-sm">
//                           <div>
//                             <span
//                               className="font-medium"
//                               style={{ color: "var(--muted-foreground)" }}
//                             >
//                               Dates:
//                             </span>{" "}
//                             <span
//                               className="font-bold"
//                               style={{ color: "var(--foreground)" }}
//                             >
//                               {formatDate(request.travelPlan.startDate)} -{" "}
//                               {formatDate(request.travelPlan.endDate)}
//                             </span>
//                           </div>
//                           <div>
//                             <span
//                               className="font-medium"
//                               style={{ color: "var(--muted-foreground)" }}
//                             >
//                               Budget:
//                             </span>{" "}
//                             <span
//                               className="font-bold"
//                               style={{ color: "var(--foreground)" }}
//                             >
//                               ${request.travelPlan.budgetMin.toLocaleString()} -
//                               ${request.travelPlan.budgetMax.toLocaleString()}
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Message */}
//                       <div className="mb-4">
//                         <span
//                           className="text-sm font-medium block mb-2"
//                           style={{ color: "var(--muted-foreground)" }}
//                         >
//                           Message:
//                         </span>
//                         <p
//                           className="text-sm leading-relaxed"
//                           style={{ color: "var(--foreground)" }}
//                         >
//                           "{request.message}"
//                         </p>
//                       </div>

//                       {/* Request Date */}
//                       <p
//                         className="text-xs mb-4"
//                         style={{ color: "var(--muted-foreground)" }}
//                       >
//                         Requested on {formatDate(request.createdAt)}
//                       </p>

//                       {/* Action Buttons */}
//                       <div className="flex gap-3">
//                         <button
//                           onClick={() => setSelectedRequest(request)}
//                           className="flex-1 py-3 rounded-lg font-bold transition-all hover:opacity-90"
//                           style={{
//                             background: "var(--secondary)",
//                             color: "var(--secondary-foreground)",
//                           }}
//                         >
//                           View Details
//                         </button>

//                         {request.status === "PENDING" && (
//                           <>
//                             <button
//                               onClick={() => handleAccept(request.id)}
//                               className="flex-1 py-3 rounded-lg font-bold transition-all hover:opacity-90"
//                               style={{
//                                 background: "var(--chart-1)",
//                                 color: "var(--primary-foreground)",
//                               }}
//                             >
//                               Accept
//                             </button>
//                             <button
//                               onClick={() => handleReject(request.id)}
//                               className="flex-1 py-3 rounded-lg font-bold transition-all hover:opacity-90"
//                               style={{
//                                 background: "var(--destructive)",
//                                 color: "var(--primary-foreground)",
//                               }}
//                             >
//                               Reject
//                             </button>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div
//             className="text-center py-20 rounded-xl"
//             style={{ background: "var(--card)" }}
//           >
//             <p
//               className="text-xl font-medium mb-2"
//               style={{ color: "var(--muted-foreground)" }}
//             >
//               No buddy requests found
//             </p>
//             <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
//               {filterStatus !== "ALL"
//                 ? "Try changing the filter"
//                 : "You haven't received any requests yet"}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       <BuddyRequestModal
//         request={selectedRequest}
//         onClose={() => setSelectedRequest(null)}
//         onAccept={handleAccept}
//         onReject={handleReject}
//       />
//     </div>
//   );
// };

// export default BuddyRequestList;

"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import BuddyRequestModal from "./BuddyRequestModal";
import { acceptBuddyRequest } from "@/services/traveler/findBuddy";

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

interface BuddyRequestListProps {
  requests: BuddyRequest[];
}

const BuddyRequestList = ({ requests }: BuddyRequestListProps) => {
  const [selectedRequest, setSelectedRequest] = useState<BuddyRequest | null>(
    null
  );
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [localRequests, setLocalRequests] = useState<BuddyRequest[]>(requests);
  const router = useRouter();

  // Sync with props when they change
  useEffect(() => {
    setLocalRequests(requests);
  }, [requests]);

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

  const filteredRequests = localRequests.filter((request: BuddyRequest) => {
    if (filterStatus === "ALL") return true;
    return request.status === filterStatus;
  });

  const handleAccept = async (requestId: string) => {
    try {
      const result = await acceptBuddyRequest(requestId);

      if (result.success) {
        toast.success("Buddy request accepted successfully!");

        // Update local state to reflect the change
        setLocalRequests((prevRequests: BuddyRequest[]) =>
          prevRequests.map((req: BuddyRequest) =>
            req.id === requestId ? { ...req, status: "ACCEPTED" } : req
          )
        );

        // Also refresh server data
        router.refresh();
      } else {
        toast.error(result.message || "Failed to accept buddy request");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to accept buddy request");
    }
  };

  const handleReject = async (requestId: string) => {
    console.log("Rejecting request:", requestId);
    // Call your reject API here
    toast.info("Reject functionality coming soon!");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div
          className="rounded-xl shadow-lg p-8 mb-8"
          style={{ background: "var(--primary)" }}
        >
          <div className="mb-6">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: "var(--primary-foreground)" }}
            >
              Buddy Requests
            </h1>
            <p
              className="text-lg opacity-90"
              style={{ color: "var(--primary-foreground)" }}
            >
              Manage travel buddy requests for your trips
            </p>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-4">
            <label
              className="text-sm font-medium"
              style={{ color: "var(--primary-foreground)" }}
            >
              Filter by Status:
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              <option value="ALL">All Requests</option>
              <option value="PENDING">Pending</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </div>

          <div
            className="mt-6 pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: "var(--primary-foreground)" }}
            >
              {filteredRequests.length} request(s) found
            </p>
          </div>
        </div>

        {/* Request Cards */}
        {filteredRequests.length > 0 ? (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <div
                key={request.id}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                style={{ background: "var(--card)" }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Requester Info */}
                    <img
                      src={request.requester.profilePhoto}
                      alt={request.requester.name}
                      className="w-20 h-20 rounded-full object-cover border-4"
                      style={{ borderColor: "var(--primary)" }}
                    />

                    <div className="flex-1">
                      {/* Top Row */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3
                            className="text-xl font-bold mb-1"
                            style={{ color: "var(--foreground)" }}
                          >
                            {request.requester.name}
                          </h3>
                          <p
                            className="text-sm mb-2"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {request.requester.email}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500 text-lg">★</span>
                            <span
                              className="text-sm font-medium"
                              style={{ color: "var(--muted-foreground)" }}
                            >
                              {request.requester.averageRating} (
                              {request.requester.totalReviews} reviews)
                            </span>
                          </div>
                        </div>

                        <span
                          className="px-4 py-2 rounded-full text-sm font-bold"
                          style={{
                            background: getStatusColor(request.status),
                            color: "var(--primary-foreground)",
                          }}
                        >
                          {request.status}
                        </span>
                      </div>

                      {/* Travel Plan Info */}
                      <div
                        className="rounded-lg p-4 mb-4"
                        style={{ background: "var(--muted)" }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4
                            className="text-lg font-bold"
                            style={{ color: "var(--primary)" }}
                          >
                            📍 {request.travelPlan.destination}
                          </h4>
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold"
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
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <span
                              className="font-medium"
                              style={{ color: "var(--muted-foreground)" }}
                            >
                              Dates:
                            </span>{" "}
                            <span
                              className="font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {formatDate(request.travelPlan.startDate)} -{" "}
                              {formatDate(request.travelPlan.endDate)}
                            </span>
                          </div>
                          <div>
                            <span
                              className="font-medium"
                              style={{ color: "var(--muted-foreground)" }}
                            >
                              Budget:
                            </span>{" "}
                            <span
                              className="font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              ${request.travelPlan.budgetMin.toLocaleString()} -
                              ${request.travelPlan.budgetMax.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="mb-4">
                        <span
                          className="text-sm font-medium block mb-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          Message:
                        </span>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--foreground)" }}
                        >
                          "{request.message}"
                        </p>
                      </div>

                      {/* Request Date */}
                      <p
                        className="text-xs mb-4"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Requested on {formatDate(request.createdAt)}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedRequest(request)}
                          className="flex-1 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                          style={{
                            background: "var(--secondary)",
                            color: "var(--secondary-foreground)",
                          }}
                        >
                          View Details
                        </button>

                        {request.status === "PENDING" && (
                          <>
                            <button
                              onClick={() => handleAccept(request.id)}
                              className="flex-1 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                              style={{
                                background: "var(--chart-1)",
                                color: "var(--primary-foreground)",
                              }}
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleReject(request.id)}
                              className="flex-1 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                              style={{
                                background: "var(--destructive)",
                                color: "var(--primary-foreground)",
                              }}
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
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
            <p
              className="text-xl font-medium mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              No buddy requests found
            </p>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              {filterStatus !== "ALL"
                ? "Try changing the filter"
                : "You haven't received any requests yet"}
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <BuddyRequestModal
        request={selectedRequest}
        onClose={() => setSelectedRequest(null)}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </div>
  );
};

export default BuddyRequestList;
