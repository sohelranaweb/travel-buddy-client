"use client";

import Link from "next/link";
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
  travelInterests: string[];
  visitedCountries: string[];
  currentLocation: string | null;
  averageRating: number;
  totalReviews: number;
  isSubscribed: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ExploreTravelersProps {
  travelers: Traveler[];
}

const ExploreTravelers = ({ travelers }: ExploreTravelersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubscription, setFilterSubscription] = useState("ALL");
  const [filterRating, setFilterRating] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const travelersData = Array.isArray(travelers) ? travelers : [];

  const handleReset = () => {
    setSearchTerm("");
    setFilterSubscription("ALL");
    setFilterRating("ALL");
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredTravelers = travelersData.filter((traveler) => {
    const matchesSearch =
      traveler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      traveler.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      traveler.currentLocation
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      traveler.travelInterests.some((interest) =>
        interest.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      traveler.visitedCountries.some((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesSubscription =
      filterSubscription === "ALL" ||
      (filterSubscription === "PREMIUM" && traveler.isSubscribed) ||
      (filterSubscription === "FREE" && !traveler.isSubscribed);

    const matchesRating =
      filterRating === "ALL" ||
      (filterRating === "5" && traveler.averageRating === 5) ||
      (filterRating === "4+" && traveler.averageRating >= 4) ||
      (filterRating === "3+" && traveler.averageRating >= 3);

    return matchesSearch && matchesSubscription && matchesRating;
  });

  const totalPages = Math.ceil(filteredTravelers.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentTravelers = filteredTravelers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              Explore Travelers
            </h1>
            <p
              className="text-lg opacity-90"
              style={{ color: "var(--primary-foreground)" }}
            >
              Connect with fellow travel enthusiasts around the world
            </p>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Search Travelers
              </label>
              <input
                type="text"
                placeholder="Search by name, location, interests..."
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

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Subscription
              </label>
              <select
                value={filterSubscription}
                onChange={(e) => {
                  setFilterSubscription(e.target.value);
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
                <option value="PREMIUM">Premium</option>
                <option value="FREE">Free</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Rating
              </label>
              <select
                value={filterRating}
                onChange={(e) => {
                  setFilterRating(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <option value="ALL">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4+">4+ Stars</option>
                <option value="3+">3+ Stars</option>
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
              Found {filteredTravelers.length} travelers
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
              Total Travelers
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              {travelersData.length}
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
              Premium Members
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--chart-1)" }}
            >
              {travelersData.filter((t) => t.isSubscribed).length}
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
              Top Rated (5★)
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--chart-4)" }}
            >
              {travelersData.filter((t) => t.averageRating === 5).length}
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
              With Reviews
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--chart-2)" }}
            >
              {travelersData.filter((t) => t.totalReviews > 0).length}
            </div>
          </div>
        </div>

        {/* Traveler Cards */}
        {currentTravelers.length > 0 ? (
          // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          //   {currentTravelers.map((traveler) => (
          //     <div
          //       key={traveler.id}
          //       className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          //       style={{ background: "var(--card)" }}
          //     >
          //       {/* Card Header */}
          //       <div
          //         className="h-32 relative"
          //         style={{
          //           background: `linear-gradient(135deg, ${
          //             traveler.isSubscribed
          //               ? "var(--chart-1)"
          //               : "var(--chart-3)"
          //           }, ${
          //             traveler.isSubscribed
          //               ? "var(--chart-2)"
          //               : "var(--chart-5)"
          //           })`,
          //         }}
          //       >
          //         {traveler.isSubscribed && (
          //           <div className="absolute top-4 right-4">
          //             <span
          //               className="px-3 py-1 rounded-full text-xs font-bold"
          //               style={{
          //                 background: "rgba(255,255,255,0.3)",
          //                 color: "var(--primary-foreground)",
          //               }}
          //             >
          //               ⭐ Premium
          //             </span>
          //           </div>
          //         )}
          //       </div>

          //       {/* Profile Photo */}
          //       <div className="flex justify-center -mt-16 mb-4">
          //         <Link
          //           href={`/profile-details/${traveler.id}`}
          //           className="z-0"
          //         >
          //           <img
          //             src={traveler.profilePhoto}
          //             alt={traveler.name}
          //             className="w-32 h-32 rounded-full object-cover border-4"
          //             style={{ borderColor: "var(--card)" }}
          //           />
          //         </Link>
          //       </div>

          //       {/* Card Body */}
          //       <div className="px-6 pb-6">
          //         {/* Name */}
          //         <h3
          //           className="text-2xl font-bold text-center mb-2"
          //           style={{ color: "var(--foreground)" }}
          //         >
          //           {traveler.name}
          //         </h3>

          //         {/* Rating */}
          //         <div className="flex items-center justify-center gap-2 mb-4">
          //           <div className="flex">
          //             {[1, 2, 3, 4, 5].map((star) => (
          //               <span
          //                 key={star}
          //                 className="text-lg"
          //                 style={{
          //                   color:
          //                     star <= traveler.averageRating
          //                       ? "#fbbf24"
          //                       : "#d1d5db",
          //                 }}
          //               >
          //                 ★
          //               </span>
          //             ))}
          //           </div>
          //           <span
          //             className="text-sm font-medium"
          //             style={{ color: "var(--muted-foreground)" }}
          //           >
          //             ({traveler.totalReviews} reviews)
          //           </span>
          //         </div>

          //         {/* Bio */}
          //         {traveler.bio && (
          //           <p
          //             className="text-sm text-center mb-4 italic line-clamp-2"
          //             style={{ color: "var(--muted-foreground)" }}
          //           >
          //             "{traveler.bio}"
          //           </p>
          //         )}

          //         {/* Info Grid */}
          //         <div className="space-y-3 mb-4">
          //           {traveler.currentLocation && (
          //             <div className="flex items-center gap-3">
          //               <span
          //                 className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          //                 style={{ background: "var(--muted)" }}
          //               >
          //                 📍
          //               </span>
          //               <div className="flex-1">
          //                 <p
          //                   className="text-xs"
          //                   style={{ color: "var(--muted-foreground)" }}
          //                 >
          //                   Location
          //                 </p>
          //                 <p
          //                   className="text-sm font-medium"
          //                   style={{ color: "var(--foreground)" }}
          //                 >
          //                   {traveler.currentLocation}
          //                 </p>
          //               </div>
          //             </div>
          //           )}

          //           {traveler.contactNumber && (
          //             <div className="flex items-center gap-3">
          //               <span
          //                 className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          //                 style={{ background: "var(--muted)" }}
          //               >
          //                 📱
          //               </span>
          //               <div className="flex-1">
          //                 <p
          //                   className="text-xs"
          //                   style={{ color: "var(--muted-foreground)" }}
          //                 >
          //                   Contact
          //                 </p>
          //                 <p
          //                   className="text-sm font-medium"
          //                   style={{ color: "var(--foreground)" }}
          //                 >
          //                   {traveler.contactNumber}
          //                 </p>
          //               </div>
          //             </div>
          //           )}

          //           <div className="flex items-center gap-3">
          //             <span
          //               className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          //               style={{ background: "var(--muted)" }}
          //             >
          //               📧
          //             </span>
          //             <div className="flex-1">
          //               <p
          //                 className="text-xs"
          //                 style={{ color: "var(--muted-foreground)" }}
          //               >
          //                 Email
          //               </p>
          //               <p
          //                 className="text-sm font-medium truncate"
          //                 style={{ color: "var(--foreground)" }}
          //               >
          //                 {traveler.email}
          //               </p>
          //             </div>
          //           </div>

          //           {traveler.gender && (
          //             <div className="flex items-center gap-3">
          //               <span
          //                 className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          //                 style={{ background: "var(--muted)" }}
          //               >
          //                 👤
          //               </span>
          //               <div className="flex-1">
          //                 <p
          //                   className="text-xs"
          //                   style={{ color: "var(--muted-foreground)" }}
          //                 >
          //                   Gender
          //                 </p>
          //                 <p
          //                   className="text-sm font-medium"
          //                   style={{ color: "var(--foreground)" }}
          //                 >
          //                   {traveler.gender}
          //                 </p>
          //               </div>
          //             </div>
          //           )}
          //         </div>

          //         {/* Travel Interests */}
          //         {traveler.travelInterests.length > 0 && (
          //           <div className="mb-4">
          //             <p
          //               className="text-xs font-medium mb-2"
          //               style={{ color: "var(--muted-foreground)" }}
          //             >
          //               Travel Interests
          //             </p>
          //             <div className="flex flex-wrap gap-2">
          //               {traveler.travelInterests.map((interest, index) => (
          //                 <span
          //                   key={index}
          //                   className="px-3 py-1 rounded-full text-xs font-semibold"
          //                   style={{
          //                     background: "var(--secondary)",
          //                     color: "var(--secondary-foreground)",
          //                   }}
          //                 >
          //                   {interest}
          //                 </span>
          //               ))}
          //             </div>
          //           </div>
          //         )}

          //         {/* Visited Countries */}
          //         {traveler.visitedCountries.length > 0 && (
          //           <div className="mb-4">
          //             <p
          //               className="text-xs font-medium mb-2"
          //               style={{ color: "var(--muted-foreground)" }}
          //             >
          //               Visited Countries ({traveler.visitedCountries.length})
          //             </p>
          //             <div className="flex flex-wrap gap-2">
          //               {traveler.visitedCountries.map((country, index) => (
          //                 <span
          //                   key={index}
          //                   className="px-3 py-1 rounded-full text-xs font-semibold"
          //                   style={{
          //                     background: "var(--chart-2)",
          //                     color: "var(--primary-foreground)",
          //                   }}
          //                 >
          //                   {country}
          //                 </span>
          //               ))}
          //             </div>
          //           </div>
          //         )}

          //         {/* Member Since */}
          //         <div
          //           className="text-center text-xs mb-4 pb-4 border-b"
          //           style={{
          //             color: "var(--muted-foreground)",
          //             borderColor: "var(--border)",
          //           }}
          //         >
          //           Member since {formatDate(traveler.createdAt)}
          //         </div>

          //         {/* Connect Button */}
          //         <button
          //           onClick={() => handleConnect(traveler)}
          //           className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90"
          //           style={{
          //             background: "var(--primary)",
          //             color: "var(--primary-foreground)",
          //           }}
          //         >
          //           View Upcoming Travel Plans
          //         </button>
          //       </div>
          //     </div>
          //   ))}
          // </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentTravelers.map((traveler) => (
              <div
                key={traveler.id}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col"
                style={{ background: "var(--card)", height: "fit-content" }}
              >
                {/* Card Header */}
                <div
                  className="h-32 relative shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${
                      traveler.isSubscribed
                        ? "var(--chart-1)"
                        : "var(--chart-3)"
                    }, ${
                      traveler.isSubscribed
                        ? "var(--chart-2)"
                        : "var(--chart-5)"
                    })`,
                  }}
                >
                  {traveler.isSubscribed && (
                    <div className="absolute top-4 right-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: "rgba(255,255,255,0.3)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        ⭐ Premium
                      </span>
                    </div>
                  )}
                </div>

                {/* Profile Photo */}
                <div className="flex justify-center -mt-16 mb-4 shrink-0">
                  <Link
                    href={`/profile-details/${traveler.id}`}
                    className="z-0"
                  >
                    <img
                      src={traveler.profilePhoto}
                      alt={traveler.name}
                      className="w-32 h-32 rounded-full object-cover border-4"
                      style={{ borderColor: "var(--card)" }}
                    />
                  </Link>
                </div>

                {/* Card Body - Flexible content */}
                <div className="px-6 pb-6 flex flex-col grow">
                  {/* Name */}
                  <h3
                    className="text-2xl font-bold text-center mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {traveler.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="text-lg"
                          style={{
                            color:
                              star <= traveler.averageRating
                                ? "#fbbf24"
                                : "#d1d5db",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      ({traveler.totalReviews} reviews)
                    </span>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-sm text-center mb-4 italic line-clamp-2 min-h-10"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {traveler.bio ? `"${traveler.bio}"` : ""}
                  </p>

                  {/* Info Grid */}
                  <div className="space-y-3 mb-4">
                    {/* Location - Always show label */}
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                        style={{ background: "var(--muted)" }}
                      >
                        📍
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          Location
                        </p>
                        <p
                          className="text-sm font-medium h-5"
                          style={{ color: "var(--foreground)" }}
                        >
                          {traveler.currentLocation || ""}
                        </p>
                      </div>
                    </div>

                    {/* Contact - Always show label */}
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                        style={{ background: "var(--muted)" }}
                      >
                        📱
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          Contact
                        </p>
                        <p
                          className="text-sm font-medium h-5"
                          style={{ color: "var(--foreground)" }}
                        >
                          {traveler.contactNumber || ""}
                        </p>
                      </div>
                    </div>

                    {/* Email - Always show label */}
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                        style={{ background: "var(--muted)" }}
                      >
                        📧
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          Email
                        </p>
                        <p
                          className="text-sm font-medium truncate h-5"
                          style={{ color: "var(--foreground)" }}
                        >
                          {traveler.email || ""}
                        </p>
                      </div>
                    </div>

                    {/* Gender - Always show label */}
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                        style={{ background: "var(--muted)" }}
                      >
                        👤
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          Gender
                        </p>
                        <p
                          className="text-sm font-medium h-5"
                          style={{ color: "var(--foreground)" }}
                        >
                          {traveler.gender || ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Travel Interests */}
                  <div className="mb-4 min-h-[60px]">
                    {traveler.travelInterests &&
                    traveler.travelInterests.length > 0 ? (
                      <>
                        <p
                          className="text-xs font-medium mb-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          Travel Interests
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {traveler.travelInterests.map((interest, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                background: "var(--secondary)",
                                color: "var(--secondary-foreground)",
                              }}
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>

                  {/* Visited Countries */}
                  <div className="mb-4 min-h-[60px]">
                    {traveler.visitedCountries &&
                    traveler.visitedCountries.length > 0 ? (
                      <>
                        <p
                          className="text-xs font-medium mb-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          Visited Countries ({traveler.visitedCountries.length})
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {traveler.visitedCountries.map((country, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                background: "var(--chart-2)",
                                color: "var(--primary-foreground)",
                              }}
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Member Since */}
                  <div
                    className="text-center text-xs mb-4 pb-4 border-b"
                    style={{
                      color: "var(--muted-foreground)",
                      borderColor: "var(--border)",
                    }}
                  >
                    Member since {formatDate(traveler.createdAt)}
                  </div>

                  {/* Connect Button - Always at bottom */}
                  <Link href={`/profile-details/${traveler.id}`}>
                    <button
                      className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 mt-auto cursor-pointer"
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      View Upcoming Travel Plans
                    </button>
                  </Link>
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
              No travelers found
            </p>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Try adjusting your filters
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredTravelers.length > 0 && (
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
                {Math.min(endIndex, filteredTravelers.length)} of{" "}
                {filteredTravelers.length} results
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
    </div>
  );
};

export default ExploreTravelers;
