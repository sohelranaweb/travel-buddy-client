// import { useState } from "react";

// interface Traveler {
//   id: string;
//   email: string;
//   name: string;
//   contactNumber: string | null;
//   profilePhoto: string;
//   address: string | null;
//   gender: string | null;
//   bio: string | null;
//   averageRating: number;
//   totalReviews: number;
//   isSubscribed: boolean;
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
//   traveler: Traveler;
// }
// interface TravelPlanModalProps {
//   plan: TravelPlan | null;
//   onClose: () => void;
//   onConnect: (travelPlanId: string, message: string) => Promise<void> | void;
// }

// const TravelPlanModal = ({
//   plan,
//   onClose,
//   onConnect,
// }: TravelPlanModalProps) => {
//   const [connectionNote, setConnectionNote] = useState("");
//   if (!plan) return null;

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       style={{ background: "rgba(0, 0, 0, 0.7)" }}
//       onClick={onClose}
//     >
//       <div
//         className="rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
//         style={{ background: "var(--card)" }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Modal Header */}
//         <div
//           className="p-6 sticky top-0 z-10"
//           style={{ background: "var(--primary)" }}
//         >
//           <div className="flex items-start justify-between mb-4">
//             <div className="flex-1">
//               <h2
//                 className="text-3xl font-bold mb-2"
//                 style={{ color: "var(--primary-foreground)" }}
//               >
//                 {plan.destination}
//               </h2>
//               <div className="flex items-center gap-2">
//                 <span
//                   className="px-3 py-1 rounded-full text-sm font-semibold"
//                   style={{
//                     background: plan.isCompleted
//                       ? "var(--chart-1)"
//                       : "var(--chart-4)",
//                     color: "var(--primary-foreground)",
//                   }}
//                 >
//                   {plan.isCompleted ? "Completed" : "Upcoming"}
//                 </span>
//                 <span
//                   className="px-3 py-1 rounded-full text-sm font-semibold"
//                   style={{
//                     background:
//                       plan.travelType === "SOLO"
//                         ? "var(--chart-3)"
//                         : plan.travelType === "FRIENDS"
//                         ? "var(--chart-2)"
//                         : "var(--chart-1)",
//                     color: "var(--primary-foreground)",
//                   }}
//                 >
//                   {plan.travelType}
//                 </span>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-3xl font-bold ml-4 hover:opacity-80 transition-all"
//               style={{ color: "var(--primary-foreground)" }}
//             >
//               ×
//             </button>
//           </div>
//         </div>

//         {/* Modal Body */}
//         <div className="p-6">
//           {/* Traveler Info */}
//           <div
//             className="rounded-lg p-6 mb-6"
//             style={{ background: "var(--muted)" }}
//           >
//             <h3
//               className="text-lg font-bold mb-4"
//               style={{ color: "var(--foreground)" }}
//             >
//               About the Traveler
//             </h3>
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={plan.traveler.profilePhoto}
//                 alt={plan.traveler.name}
//                 className="w-20 h-20 rounded-full object-cover border-4"
//                 style={{ borderColor: "var(--primary)" }}
//               />
//               <div className="flex-1">
//                 <h4
//                   className="text-xl font-bold"
//                   style={{ color: "var(--foreground)" }}
//                 >
//                   {plan.traveler.name}
//                 </h4>
//                 <p
//                   className="text-sm"
//                   style={{ color: "var(--muted-foreground)" }}
//                 >
//                   {plan.traveler.email}
//                 </p>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="text-yellow-500 text-lg">★</span>
//                   <span
//                     className="text-sm font-medium"
//                     style={{ color: "var(--muted-foreground)" }}
//                   >
//                     {plan.traveler.averageRating} ({plan.traveler.totalReviews}{" "}
//                     reviews)
//                   </span>
//                   {plan.traveler.isSubscribed && (
//                     <span
//                       className="px-2 py-1 rounded text-xs font-bold"
//                       style={{
//                         background: "var(--chart-4)",
//                         color: "var(--primary-foreground)",
//                       }}
//                     >
//                       Premium
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {plan.traveler.bio && (
//               <p
//                 className="text-sm"
//                 style={{ color: "var(--muted-foreground)" }}
//               >
//                 {plan.traveler.bio}
//               </p>
//             )}
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               {plan.traveler.contactNumber && (
//                 <div>
//                   <span
//                     className="text-xs font-medium block mb-1"
//                     style={{ color: "var(--muted-foreground)" }}
//                   >
//                     Contact
//                   </span>
//                   <span
//                     className="text-sm font-bold"
//                     style={{ color: "var(--foreground)" }}
//                   >
//                     {plan.traveler.contactNumber}
//                   </span>
//                 </div>
//               )}
//               {plan.traveler.gender && (
//                 <div>
//                   <span
//                     className="text-xs font-medium block mb-1"
//                     style={{ color: "var(--muted-foreground)" }}
//                   >
//                     Gender
//                   </span>
//                   <span
//                     className="text-sm font-bold"
//                     style={{ color: "var(--foreground)" }}
//                   >
//                     {plan.traveler.gender}
//                   </span>
//                 </div>
//               )}
//               {plan.traveler.address && (
//                 <div className="col-span-2">
//                   <span
//                     className="text-xs font-medium block mb-1"
//                     style={{ color: "var(--muted-foreground)" }}
//                   >
//                     Address
//                   </span>
//                   <span
//                     className="text-sm font-bold"
//                     style={{ color: "var(--foreground)" }}
//                   >
//                     {plan.traveler.address}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Trip Details */}
//           <div className="space-y-4 mb-6">
//             <h3
//               className="text-lg font-bold"
//               style={{ color: "var(--foreground)" }}
//             >
//               Trip Details
//             </h3>

//             <div
//               className="rounded-lg p-4"
//               style={{ background: "var(--muted)" }}
//             >
//               <span
//                 className="text-sm font-medium block mb-2"
//                 style={{ color: "var(--muted-foreground)" }}
//               >
//                 Description
//               </span>
//               <p
//                 className="text-sm leading-relaxed"
//                 style={{ color: "var(--foreground)" }}
//               >
//                 {plan.description}
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div
//                 className="rounded-lg p-4"
//                 style={{ background: "var(--muted)" }}
//               >
//                 <span
//                   className="text-sm font-medium block mb-2"
//                   style={{ color: "var(--muted-foreground)" }}
//                 >
//                   Start Date
//                 </span>
//                 <p
//                   className="text-base font-bold"
//                   style={{ color: "var(--foreground)" }}
//                 >
//                   {formatDate(plan.startDate)}
//                 </p>
//               </div>

//               <div
//                 className="rounded-lg p-4"
//                 style={{ background: "var(--muted)" }}
//               >
//                 <span
//                   className="text-sm font-medium block mb-2"
//                   style={{ color: "var(--muted-foreground)" }}
//                 >
//                   End Date
//                 </span>
//                 <p
//                   className="text-base font-bold"
//                   style={{ color: "var(--foreground)" }}
//                 >
//                   {formatDate(plan.endDate)}
//                 </p>
//               </div>

//               <div
//                 className="rounded-lg p-4"
//                 style={{ background: "var(--muted)" }}
//               >
//                 <span
//                   className="text-sm font-medium block mb-2"
//                   style={{ color: "var(--muted-foreground)" }}
//                 >
//                   Budget Range
//                 </span>
//                 <p
//                   className="text-base font-bold"
//                   style={{ color: "var(--foreground)" }}
//                 >
//                   ${plan.budgetMin.toLocaleString()} - $
//                   {plan.budgetMax.toLocaleString()}
//                 </p>
//               </div>

//               <div
//                 className="rounded-lg p-4"
//                 style={{ background: "var(--muted)" }}
//               >
//                 <span
//                   className="text-sm font-medium block mb-2"
//                   style={{ color: "var(--muted-foreground)" }}
//                 >
//                   Travel Type
//                 </span>
//                 <p
//                   className="text-base font-bold"
//                   style={{ color: "var(--foreground)" }}
//                 >
//                   {plan.travelType}
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div
//                 className="rounded-lg p-4"
//                 style={{ background: "var(--muted)" }}
//               >
//                 <span
//                   className="text-sm font-medium block mb-2"
//                   style={{ color: "var(--muted-foreground)" }}
//                 >
//                   Created
//                 </span>
//                 <p className="text-sm" style={{ color: "var(--foreground)" }}>
//                   {formatDate(plan.createdAt)}
//                 </p>
//               </div>

//               <div
//                 className="rounded-lg p-4"
//                 style={{ background: "var(--muted)" }}
//               >
//                 <span
//                   className="text-sm font-medium block mb-2"
//                   style={{ color: "var(--muted-foreground)" }}
//                 >
//                   Last Updated
//                 </span>
//                 <p className="text-sm" style={{ color: "var(--foreground)" }}>
//                   {formatDate(plan.updatedAt)}
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Connection Note Textarea */}
//           <div className="mb-4">
//             <label
//               className="text-sm font-medium block mb-2"
//               style={{ color: "var(--foreground)" }}
//             >
//               Connection Note (Optional)
//             </label>
//             <textarea
//               value={connectionNote}
//               onChange={(e) => setConnectionNote(e.target.value)}
//               placeholder="Introduce yourself and explain why you'd like to connect..."
//               className="w-full p-4 rounded-lg text-sm resize-none focus:outline-none focus:ring-2"
//               style={{
//                 background: "var(--muted)",
//                 color: "var(--foreground)",
//                 borderColor: "var(--border)",
//                 minHeight: "100px",
//               }}
//               rows={4}
//             />
//           </div>

//           {/* Action Button */}
//           <button
//             onClick={() => {
//               onConnect(plan);
//               onClose();
//             }}
//             className="w-full py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90"
//             style={{
//               background: "var(--primary)",
//               color: "var(--primary-foreground)",
//             }}
//           >
//             Connect with {plan.traveler.name.split(" ")[0]}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelPlanModal;

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

interface TravelPlanModalProps {
  plan: TravelPlan | null;
  onClose: () => void;
  onConnect: (travelPlanId: string, message: string) => Promise<void> | void;
}

const TravelPlanModal = ({
  plan,
  onClose,
  onConnect,
}: TravelPlanModalProps) => {
  const [connectionNote, setConnectionNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!plan) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleConnect = async () => {
    // Validate message length
    if (connectionNote.trim().length < 10) {
      setError("Message must be at least 10 characters");
      return;
    }
    if (connectionNote.length > 500) {
      setError("Message must not exceed 500 characters");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await onConnect(plan.id, connectionNote);
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to send buddy request");
    } finally {
      setIsSubmitting(false);
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
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                {plan.destination}
              </h2>
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: plan.isCompleted
                      ? "var(--chart-1)"
                      : "var(--chart-4)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {plan.isCompleted ? "Completed" : "Upcoming"}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
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
          {/* Traveler Info */}
          <div
            className="rounded-lg p-6 mb-6"
            style={{ background: "var(--muted)" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              About the Traveler
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={plan.traveler.profilePhoto}
                alt={plan.traveler.name}
                className="w-20 h-20 rounded-full object-cover border-4"
                style={{ borderColor: "var(--primary)" }}
              />
              <div className="flex-1">
                <h4
                  className="text-xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {plan.traveler.name}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {plan.traveler.email}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {plan.traveler.averageRating} ({plan.traveler.totalReviews}{" "}
                    reviews)
                  </span>
                  {plan.traveler.isSubscribed && (
                    <span
                      className="px-2 py-1 rounded text-xs font-bold"
                      style={{
                        background: "var(--chart-4)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      Premium
                    </span>
                  )}
                </div>
              </div>
            </div>
            {plan.traveler.bio && (
              <p
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                {plan.traveler.bio}
              </p>
            )}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {plan.traveler.contactNumber && (
                <div>
                  <span
                    className="text-xs font-medium block mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Contact
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {plan.traveler.contactNumber}
                  </span>
                </div>
              )}
              {plan.traveler.gender && (
                <div>
                  <span
                    className="text-xs font-medium block mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Gender
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {plan.traveler.gender}
                  </span>
                </div>
              )}
              {plan.traveler.address && (
                <div className="col-span-2">
                  <span
                    className="text-xs font-medium block mb-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Address
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {plan.traveler.address}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Trip Details */}
          <div className="space-y-4 mb-6">
            <h3
              className="text-lg font-bold"
              style={{ color: "var(--foreground)" }}
            >
              Trip Details
            </h3>

            <div
              className="rounded-lg p-4"
              style={{ background: "var(--muted)" }}
            >
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
                {plan.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-lg p-4"
                style={{ background: "var(--muted)" }}
              >
                <span
                  className="text-sm font-medium block mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Start Date
                </span>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {formatDate(plan.startDate)}
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ background: "var(--muted)" }}
              >
                <span
                  className="text-sm font-medium block mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  End Date
                </span>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {formatDate(plan.endDate)}
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ background: "var(--muted)" }}
              >
                <span
                  className="text-sm font-medium block mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Budget Range
                </span>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  ${plan.budgetMin.toLocaleString()} - $
                  {plan.budgetMax.toLocaleString()}
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ background: "var(--muted)" }}
              >
                <span
                  className="text-sm font-medium block mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Travel Type
                </span>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {plan.travelType}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-lg p-4"
                style={{ background: "var(--muted)" }}
              >
                <span
                  className="text-sm font-medium block mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Created
                </span>
                <p className="text-sm" style={{ color: "var(--foreground)" }}>
                  {formatDate(plan.createdAt)}
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ background: "var(--muted)" }}
              >
                <span
                  className="text-sm font-medium block mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Last Updated
                </span>
                <p className="text-sm" style={{ color: "var(--foreground)" }}>
                  {formatDate(plan.updatedAt)}
                </p>
              </div>
            </div>
          </div>

          {/* Connection Note Textarea */}
          <div className="mb-4">
            <label
              className="text-sm font-medium block mb-2"
              style={{ color: "var(--foreground)" }}
            >
              Connection Message{" "}
              <span style={{ color: "var(--destructive)" }}>*</span>
            </label>
            <textarea
              value={connectionNote}
              onChange={(e) => {
                setConnectionNote(e.target.value);
                setError("");
              }}
              placeholder="Introduce yourself and explain why you'd like to connect... (minimum 10 characters)"
              className="w-full p-4 rounded-lg text-sm resize-none focus:outline-none focus:ring-2"
              style={{
                background: "var(--muted)",
                color: "var(--foreground)",
                borderColor: error ? "var(--destructive)" : "var(--border)",
                border: error ? "2px solid" : "1px solid",
                minHeight: "100px",
              }}
              rows={4}
              disabled={isSubmitting}
            />
            {error && (
              <p
                className="text-sm mt-2"
                style={{ color: "var(--destructive)" }}
              >
                {error}
              </p>
            )}
            <p
              className="text-xs mt-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              {connectionNote.length}/500 characters
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleConnect}
            disabled={isSubmitting || connectionNote.trim().length < 10}
            className="w-full py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            {isSubmitting
              ? "Sending..."
              : `Connect with ${plan.traveler.name.split(" ")[0]}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanModal;
