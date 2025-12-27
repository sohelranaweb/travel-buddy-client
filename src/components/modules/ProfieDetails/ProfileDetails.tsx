// "use client";

// import {
//   User,
//   MapPin,
//   Mail,
//   Phone,
//   Star,
//   Calendar,
//   DollarSign,
//   Users,
//   Globe,
//   Heart,
// } from "lucide-react";
// // types/traveler.interface.ts

// interface IReviewer {
//   id: string;
//   email: string;
//   name: string;
//   profilePhoto: string;
// }

// interface IReview {
//   id: string;
//   travelBuddyId?: string;
//   reviewerId: string;
//   revieweeId: string;
//   rating: number;
//   comment: string;
//   createdAt: string;
//   updatedAt: string;
//   reviewer: IReviewer;
// }

// interface ITravelPlan {
//   id: string;
//   travelerId: string;
//   destination: string;
//   startDate: string;
//   endDate: string;
//   budgetMin: number;
//   budgetMax: number;
//   travelType: string; // or enum: 'FAMILY' | 'FRIENDS' | 'SOLO' | 'COUPLE'
//   description: string;
//   isCompleted: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface ITravelerProfileDetails {
//   id: string;
//   email: string;
//   name: string;
//   contactNumber: string;
//   profilePhoto: string;
//   address: string;
//   gender: string; // or enum: 'MALE' | 'FEMALE' | 'OTHER'
//   bio: string;
//   travelInterests: string[];
//   visitedCountries: string[];
//   currentLocation: string;
//   averageRating: number;
//   totalReviews: number;
//   isSubscribed: boolean;
//   isDeleted: boolean;
//   createdAt: string;
//   updatedAt: string;
//   travelPlans: ITravelPlan[];
//   reviewsReceived: IReview[];
// }
// interface ProfileDetailsProps {
//   traveler: ITravelerProfileDetails;
// }

// const ProfileDetails = ({ traveler }: ProfileDetailsProps) => {
//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   const formatTimeAgo = (dateString: string) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const days = Math.floor(
//       (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
//     );

//     if (days === 0) return "Today";
//     if (days === 1) return "Yesterday";
//     if (days < 7) return `${days} days ago`;
//     if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
//     return formatDate(dateString);
//   };
//   return (
//     <div className="min-h-screen" style={{ background: "oklch(0.97 0 0)" }}>
//       {/* Header Section */}
//       <div
//         className="text-white py-12 "
//         style={{ background: "oklch(61.422% 0.10271 203.354)" }}
//       >
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center gap-6">
//             <img
//               src={traveler.profilePhoto}
//               alt={traveler.name}
//               className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
//             />
//             <div className="text-center md:text-left flex-1">
//               <h1 className="text-4xl font-bold mb-2">{traveler.name}</h1>
//               <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 opacity-90">
//                 <div className="flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   <span>{traveler.currentLocation}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Star
//                     className="w-4 h-4"
//                     style={{
//                       fill: "oklch(0.828 0.189 84.429)",
//                       color: "oklch(0.828 0.189 84.429)",
//                     }}
//                   />
//                   <span>
//                     {traveler?.averageRating} ({traveler.totalReviews} reviews)
//                   </span>
//                 </div>
//                 {traveler.isSubscribed && (
//                   <span
//                     className="px-3 py-1 rounded-full text-sm font-semibold"
//                     style={{
//                       background: "oklch(78.613% 0.16327 76.949)",
//                       color: "oklch(0.205 0 0)",
//                     }}
//                   >
//                     Premium Member
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Column - About & Info */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* About Section */}
//             <div
//               className="rounded-xl shadow-md p-6"
//               style={{ background: "oklch(1 0 0)" }}
//             >
//               <h2
//                 className="text-xl font-bold mb-4 flex items-center gap-2"
//                 style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//               >
//                 <User
//                   className="w-5 h-5"
//                   style={{ color: "oklch(61.422% 0.10271 203.354)" }}
//                 />
//                 About
//               </h2>
//               <p
//                 className="leading-relaxed"
//                 style={{ color: "oklch(0.556 0 0)" }}
//               >
//                 {traveler.bio}
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div
//               className="rounded-xl shadow-md p-6"
//               style={{ background: "oklch(1 0 0)" }}
//             >
//               <h2
//                 className="text-xl font-bold mb-4"
//                 style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//               >
//                 Contact Info
//               </h2>
//               <div className="space-y-3">
//                 <div
//                   className="flex items-center gap-3"
//                   style={{ color: "oklch(0.556 0 0)" }}
//                 >
//                   <Mail
//                     className="w-5 h-5"
//                     style={{ color: "oklch(61.422% 0.10271 203.354)" }}
//                   />
//                   <span className="break-all">{traveler.email}</span>
//                 </div>
//                 <div
//                   className="flex items-center gap-3"
//                   style={{ color: "oklch(0.556 0 0)" }}
//                 >
//                   <Phone
//                     className="w-5 h-5"
//                     style={{ color: "oklch(61.422% 0.10271 203.354)" }}
//                   />
//                   <span>{traveler.contactNumber}</span>
//                 </div>
//                 <div
//                   className="flex items-center gap-3"
//                   style={{ color: "oklch(0.556 0 0)" }}
//                 >
//                   <MapPin
//                     className="w-5 h-5"
//                     style={{ color: "oklch(61.422% 0.10271 203.354)" }}
//                   />
//                   <span>{traveler.address}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Travel Interests */}
//             <div
//               className="rounded-xl shadow-md p-6"
//               style={{ background: "oklch(1 0 0)" }}
//             >
//               <h2
//                 className="text-xl font-bold mb-4 flex items-center gap-2"
//                 style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//               >
//                 <Heart
//                   className="w-5 h-5"
//                   style={{ color: "oklch(0.577 0.245 27.325)" }}
//                 />
//                 Travel Interests
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 {traveler?.travelInterests?.map((interest, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 rounded-full text-sm font-medium"
//                     style={{
//                       background: "oklch(0.97 0 0)",
//                       color: "oklch(61.422% 0.10271 203.354)",
//                     }}
//                   >
//                     {interest}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Visited Countries */}
//             <div
//               className="rounded-xl shadow-md p-6"
//               style={{ background: "oklch(1 0 0)" }}
//             >
//               <h2
//                 className="text-xl font-bold mb-4 flex items-center gap-2"
//                 style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//               >
//                 <Globe
//                   className="w-5 h-5"
//                   style={{ color: "oklch(0.6 0.118 184.704)" }}
//                 />
//                 Visited Countries
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 {traveler?.visitedCountries?.map((country, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 rounded-full text-sm font-medium"
//                     style={{
//                       background: "oklch(0.97 0 0)",
//                       color: "oklch(0.6 0.118 184.704)",
//                     }}
//                   >
//                     🌍 {country}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Travel Plans & Reviews */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Travel Plans */}
//             <div
//               className="rounded-xl shadow-md p-6"
//               style={{ background: "oklch(1 0 0)" }}
//             >
//               <h2
//                 className="text-2xl font-bold mb-6 flex items-center gap-2"
//                 style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//               >
//                 <MapPin
//                   className="w-6 h-6"
//                   style={{ color: "oklch(61.422% 0.10271 203.354)" }}
//                 />
//                 Travel Plans ({traveler?.travelPlans?.length})
//               </h2>
//               <div className="space-y-4">
//                 {traveler?.travelPlans?.map((plan) => (
//                   <div
//                     key={plan.id}
//                     className="rounded-lg p-5 hover:shadow-lg transition-shadow"
//                     style={{ border: "1px solid oklch(0.922 0 0)" }}
//                   >
//                     <div className="flex items-start justify-between mb-3">
//                       <div>
//                         <h3
//                           className="text-lg font-bold mb-1"
//                           style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//                         >
//                           {plan.destination}
//                         </h3>
//                         <div
//                           className="flex items-center gap-2 text-sm"
//                           style={{ color: "oklch(0.556 0 0)" }}
//                         >
//                           <Calendar className="w-4 h-4" />
//                           <span>
//                             {formatDate(plan.startDate)} -{" "}
//                             {formatDate(plan.endDate)}
//                           </span>
//                         </div>
//                       </div>
//                       <span
//                         className="px-3 py-1 rounded-full text-xs font-semibold"
//                         style={
//                           plan.isCompleted
//                             ? {
//                                 background: "oklch(0.97 0 0)",
//                                 color: "oklch(0.6 0.118 184.704)",
//                               }
//                             : {
//                                 background: "oklch(78.613% 0.16327 76.949)",
//                                 color: "oklch(0.205 0 0)",
//                               }
//                         }
//                       >
//                         {plan.isCompleted ? "Completed" : "Upcoming"}
//                       </span>
//                     </div>
//                     <p
//                       className="text-sm mb-3"
//                       style={{ color: "oklch(0.556 0 0)" }}
//                     >
//                       {plan.description}
//                     </p>
//                     <div className="flex flex-wrap items-center gap-4 text-sm">
//                       <div
//                         className="flex items-center gap-2"
//                         style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//                       >
//                         <DollarSign
//                           className="w-4 h-4"
//                           style={{ color: "oklch(0.6 0.118 184.704)" }}
//                         />
//                         <span className="font-semibold">
//                           ${plan.budgetMin.toLocaleString()} - $
//                           {plan.budgetMax.toLocaleString()}
//                         </span>
//                       </div>
//                       <div
//                         className="flex items-center gap-2"
//                         style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//                       >
//                         <Users
//                           className="w-4 h-4"
//                           style={{ color: "oklch(61.422% 0.10271 203.354)" }}
//                         />
//                         <span className="font-semibold">{plan.travelType}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Reviews */}
//             <div
//               className="rounded-xl shadow-md p-6"
//               style={{ background: "oklch(1 0 0)" }}
//             >
//               <h2
//                 className="text-2xl font-bold mb-6 flex items-center gap-2"
//                 style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//               >
//                 <Star
//                   className="w-6 h-6"
//                   style={{
//                     fill: "oklch(0.828 0.189 84.429)",
//                     color: "oklch(0.828 0.189 84.429)",
//                   }}
//                 />
//                 Reviews ({traveler?.reviewsReceived?.length})
//               </h2>
//               <div className="space-y-4">
//                 {traveler?.reviewsReceived?.map((review) => (
//                   <div
//                     key={review.id}
//                     className="rounded-lg p-5 transition-colors"
//                     style={{ border: "1px solid oklch(0.922 0 0)" }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.background = "oklch(0.97 0 0)")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.background = "transparent")
//                     }
//                   >
//                     <div className="flex items-start gap-4">
//                       <img
//                         src={review.reviewer.profilePhoto}
//                         alt={review.reviewer.name}
//                         className="w-12 h-12 rounded-full object-cover cursor-pointer transition"
//                         style={{ border: "2px solid transparent" }}
//                         onMouseEnter={(e) =>
//                           (e.currentTarget.style.borderColor =
//                             "oklch(61.422% 0.10271 203.354)")
//                         }
//                         onMouseLeave={(e) =>
//                           (e.currentTarget.style.borderColor = "transparent")
//                         }
//                         title={`View ${review.reviewer.name}'s profile`}
//                       />
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between mb-2">
//                           <div>
//                             <h4
//                               className="font-bold"
//                               style={{
//                                 color: "oklch(37.678% 0.02564 228.44/1)",
//                               }}
//                             >
//                               {review.reviewer.name}
//                             </h4>
//                             <p
//                               className="text-sm"
//                               style={{ color: "oklch(0.556 0 0)" }}
//                             >
//                               {formatTimeAgo(review.createdAt)}
//                             </p>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className="w-4 h-4"
//                                 style={
//                                   i < review.rating
//                                     ? {
//                                         fill: "oklch(0.828 0.189 84.429)",
//                                         color: "oklch(0.828 0.189 84.429)",
//                                       }
//                                     : { color: "oklch(0.922 0 0)" }
//                                 }
//                               />
//                             ))}
//                           </div>
//                         </div>
//                         <p
//                           className="leading-relaxed"
//                           style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
//                         >
//                           {review.comment}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDetails;

"use client";

import { useState } from "react";
import {
  User,
  MapPin,
  Mail,
  Phone,
  Star,
  Calendar,
  DollarSign,
  Users,
  Globe,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Pagination from "./Pagination";

interface IReviewer {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
}

interface IReview {
  id: string;
  travelBuddyId?: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  reviewer: IReviewer;
}

interface ITravelPlan {
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

export interface ITravelerProfileDetails {
  id: string;
  email: string;
  name: string;
  contactNumber: string;
  profilePhoto: string;
  address: string;
  gender: string;
  bio: string;
  travelInterests: string[];
  visitedCountries: string[];
  currentLocation: string;
  averageRating: number;
  totalReviews: number;
  isSubscribed: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  travelPlans: ITravelPlan[];
  reviewsReceived: IReview[];
}

interface ProfileDetailsProps {
  traveler: ITravelerProfileDetails;
}

// Pagination Component

const ProfileDetails = ({ traveler }: ProfileDetailsProps) => {
  // Pagination states
  const [plansPage, setPlansPage] = useState(1);
  const [reviewsPage, setReviewsPage] = useState(1);
  const ITEMS_PER_PAGE = 3; // প্রতি পেজে কতটি আইটেম দেখাবে

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const days = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return formatDate(dateString);
  };

  // Pagination calculations
  const totalPlansPages = Math.ceil(
    traveler.travelPlans.length / ITEMS_PER_PAGE
  );
  const totalReviewsPages = Math.ceil(
    traveler.reviewsReceived.length / ITEMS_PER_PAGE
  );

  const paginatedPlans = traveler.travelPlans.slice(
    (plansPage - 1) * ITEMS_PER_PAGE,
    plansPage * ITEMS_PER_PAGE
  );

  const paginatedReviews = traveler.reviewsReceived.slice(
    (reviewsPage - 1) * ITEMS_PER_PAGE,
    reviewsPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0 0)" }}>
      {/* Header Section */}
      <div
        className="text-white py-12"
        style={{ background: "oklch(61.422% 0.10271 203.354)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={traveler.profilePhoto}
              alt={traveler.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
            />
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-bold mb-2">{traveler.name}</h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 opacity-90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{traveler.currentLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4"
                    style={{
                      fill: "oklch(0.828 0.189 84.429)",
                      color: "oklch(0.828 0.189 84.429)",
                    }}
                  />
                  <span>
                    {traveler?.averageRating} ({traveler.totalReviews} reviews)
                  </span>
                </div>
                {traveler.isSubscribed && (
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      background: "oklch(78.613% 0.16327 76.949)",
                      color: "oklch(0.205 0 0)",
                    }}
                  >
                    Premium Member
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - About & Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* About Section */}
            <div
              className="rounded-xl shadow-md p-6"
              style={{ background: "oklch(1 0 0)" }}
            >
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
              >
                <User
                  className="w-5 h-5"
                  style={{ color: "oklch(61.422% 0.10271 203.354)" }}
                />
                About
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "oklch(0.556 0 0)" }}
              >
                {traveler.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div
              className="rounded-xl shadow-md p-6"
              style={{ background: "oklch(1 0 0)" }}
            >
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
              >
                Contact Info
              </h2>
              <div className="space-y-3">
                <div
                  className="flex items-center gap-3"
                  style={{ color: "oklch(0.556 0 0)" }}
                >
                  <Mail
                    className="w-5 h-5"
                    style={{ color: "oklch(61.422% 0.10271 203.354)" }}
                  />
                  <span className="break-all">{traveler.email}</span>
                </div>
                <div
                  className="flex items-center gap-3"
                  style={{ color: "oklch(0.556 0 0)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(61.422% 0.10271 203.354)" }}
                  />
                  <span>{traveler.contactNumber}</span>
                </div>
                <div
                  className="flex items-center gap-3"
                  style={{ color: "oklch(0.556 0 0)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(61.422% 0.10271 203.354)" }}
                  />
                  <span>{traveler.address}</span>
                </div>
              </div>
            </div>

            {/* Travel Interests */}
            <div
              className="rounded-xl shadow-md p-6"
              style={{ background: "oklch(1 0 0)" }}
            >
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
              >
                <Heart
                  className="w-5 h-5"
                  style={{ color: "oklch(0.577 0.245 27.325)" }}
                />
                Travel Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {traveler?.travelInterests?.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: "oklch(0.97 0 0)",
                      color: "oklch(61.422% 0.10271 203.354)",
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Visited Countries */}
            <div
              className="rounded-xl shadow-md p-6"
              style={{ background: "oklch(1 0 0)" }}
            >
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
              >
                <Globe
                  className="w-5 h-5"
                  style={{ color: "oklch(0.6 0.118 184.704)" }}
                />
                Visited Countries
              </h2>
              <div className="flex flex-wrap gap-2">
                {traveler?.visitedCountries?.map((country, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: "oklch(0.97 0 0)",
                      color: "oklch(0.6 0.118 184.704)",
                    }}
                  >
                    🌍 {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Travel Plans & Reviews */}
          <div className="lg:col-span-2 space-y-6">
            {/* Travel Plans */}
            <div
              className="rounded-xl shadow-md p-6"
              style={{ background: "oklch(1 0 0)" }}
            >
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
              >
                <MapPin
                  className="w-6 h-6"
                  style={{ color: "oklch(61.422% 0.10271 203.354)" }}
                />
                Travel Plans ({traveler?.travelPlans?.length})
              </h2>
              <div className="space-y-4">
                {paginatedPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="rounded-lg p-5 hover:shadow-lg transition-shadow"
                    style={{ border: "1px solid oklch(0.922 0 0)" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
                        >
                          {plan.destination}
                        </h3>
                        <div
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "oklch(0.556 0 0)" }}
                        >
                          <Calendar className="w-4 h-4" />
                          <span>
                            {formatDate(plan.startDate)} -{" "}
                            {formatDate(plan.endDate)}
                          </span>
                        </div>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={
                          plan.isCompleted
                            ? {
                                background: "oklch(0.97 0 0)",
                                color: "oklch(0.6 0.118 184.704)",
                              }
                            : {
                                background: "oklch(78.613% 0.16327 76.949)",
                                color: "oklch(0.205 0 0)",
                              }
                        }
                      >
                        {plan.isCompleted ? "Completed" : "Upcoming"}
                      </span>
                    </div>
                    <p
                      className="text-sm mb-3"
                      style={{ color: "oklch(0.556 0 0)" }}
                    >
                      {plan.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div
                        className="flex items-center gap-2"
                        style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
                      >
                        <DollarSign
                          className="w-4 h-4"
                          style={{ color: "oklch(0.6 0.118 184.704)" }}
                        />
                        <span className="font-semibold">
                          ${plan.budgetMin.toLocaleString()} - $
                          {plan.budgetMax.toLocaleString()}
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
                      >
                        <Users
                          className="w-4 h-4"
                          style={{ color: "oklch(61.422% 0.10271 203.354)" }}
                        />
                        <span className="font-semibold">{plan.travelType}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Travel Plans Pagination */}
              <Pagination
                currentPage={plansPage}
                totalPages={totalPlansPages}
                onPageChange={setPlansPage}
              />
            </div>

            {/* Reviews */}
            <div
              className="rounded-xl shadow-md p-6"
              style={{ background: "oklch(1 0 0)" }}
            >
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
              >
                <Star
                  className="w-6 h-6"
                  style={{
                    fill: "oklch(0.828 0.189 84.429)",
                    color: "oklch(0.828 0.189 84.429)",
                  }}
                />
                Reviews ({traveler?.reviewsReceived?.length})
              </h2>
              <div className="space-y-4">
                {paginatedReviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-lg p-5 transition-colors"
                    style={{ border: "1px solid oklch(0.922 0 0)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "oklch(0.97 0 0)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={review.reviewer.profilePhoto}
                        alt={review.reviewer.name}
                        className="w-12 h-12 rounded-full object-cover cursor-pointer transition"
                        style={{ border: "2px solid transparent" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor =
                            "oklch(61.422% 0.10271 203.354)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor = "transparent")
                        }
                        title={`View ${review.reviewer.name}'s profile`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4
                              className="font-bold"
                              style={{
                                color: "oklch(37.678% 0.02564 228.44/1)",
                              }}
                            >
                              {review.reviewer.name}
                            </h4>
                            <p
                              className="text-sm"
                              style={{ color: "oklch(0.556 0 0)" }}
                            >
                              {formatTimeAgo(review.createdAt)}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4"
                                style={
                                  i < review.rating
                                    ? {
                                        fill: "oklch(0.828 0.189 84.429)",
                                        color: "oklch(0.828 0.189 84.429)",
                                      }
                                    : { color: "oklch(0.922 0 0)" }
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <p
                          className="leading-relaxed"
                          style={{ color: "oklch(37.678% 0.02564 228.44/1)" }}
                        >
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reviews Pagination */}
              <Pagination
                currentPage={reviewsPage}
                totalPages={totalReviewsPages}
                onPageChange={setReviewsPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
