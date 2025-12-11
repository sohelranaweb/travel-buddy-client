"use client";

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
  createdAt: string;
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

interface TravelPlanDetailProps {
  travelPlan: TravelPlan;
}

const TravelPlanDetail = ({ travelPlan }: TravelPlanDetailProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateDuration = () => {
    const start = new Date(travelPlan.startDate);
    const end = new Date(travelPlan.endDate);
    const days = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return days;
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div
          className="rounded-xl shadow-lg p-8 mb-6"
          style={{ background: "var(--primary)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                {travelPlan.destination}
              </h1>
              <p
                className="text-lg opacity-90"
                style={{ color: "var(--primary-foreground)" }}
              >
                Travel Plan Details
              </p>
            </div>
            <div>
              <span
                className="px-6 py-3 rounded-full text-base font-bold shadow-lg"
                style={{
                  background: travelPlan.isCompleted
                    ? "var(--chart-1)"
                    : "var(--chart-4)",
                  color: "var(--primary-foreground)",
                }}
              >
                {travelPlan.isCompleted ? "✓ Completed" : "⏰ Upcoming"}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Plan Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description Card */}
            <div
              className="rounded-xl shadow-lg p-6"
              style={{ background: "var(--card)" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                About This Trip
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                {travelPlan.description}
              </p>
            </div>

            {/* Trip Details Card */}
            <div
              className="rounded-xl shadow-lg p-6"
              style={{ background: "var(--card)" }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Trip Details
              </h2>

              <div className="space-y-5">
                {/* Destination */}
                <div
                  className="flex items-start gap-4 pb-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    📍
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Destination
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {travelPlan.destination}
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div
                  className="flex items-start gap-4 pb-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{
                      background: "var(--chart-2)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    📅
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Travel Dates
                    </p>
                    <p
                      className="text-base font-bold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {formatDate(travelPlan.startDate)}
                    </p>
                    <p
                      className="text-base font-bold"
                      style={{ color: "var(--foreground)" }}
                    >
                      to {formatDate(travelPlan.endDate)}
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Duration: {calculateDuration()} days
                    </p>
                  </div>
                </div>

                {/* Budget */}
                <div
                  className="flex items-start gap-4 pb-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{
                      background: "var(--chart-1)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    💰
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Budget Range
                    </p>
                    <p
                      className="text-xl font-bold"
                      style={{ color: "var(--foreground)" }}
                    >
                      ${travelPlan.budgetMin.toLocaleString()} - $
                      {travelPlan.budgetMax.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Travel Type */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{
                      background: "var(--chart-5)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    {travelPlan.travelType === "SOLO"
                      ? "🧑"
                      : travelPlan.travelType === "FRIENDS"
                      ? "👥"
                      : "👨‍👩‍👧‍👦"}
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Travel Type
                    </p>
                    <span
                      className="px-4 py-2 rounded-lg text-base font-bold inline-block"
                      style={{
                        background:
                          travelPlan.travelType === "SOLO"
                            ? "var(--chart-3)"
                            : travelPlan.travelType === "FRIENDS"
                            ? "var(--chart-2)"
                            : "var(--chart-1)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      {travelPlan.travelType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Traveler Details */}
          <div className="lg:col-span-1">
            <div
              className="rounded-xl shadow-lg p-6 sticky top-6"
              style={{ background: "var(--card)" }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Traveler Info
              </h2>

              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <img
                  src={travelPlan.traveler.profilePhoto}
                  alt={travelPlan.traveler.name}
                  className="w-32 h-32 rounded-full object-cover border-4 shadow-lg"
                  style={{ borderColor: "var(--primary)" }}
                />
              </div>

              {/* Name */}
              <div className="text-center mb-2">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {travelPlan.traveler.name}
                </h3>
                {travelPlan.traveler.isSubscribed && (
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2"
                    style={{
                      background: "var(--chart-1)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    ✓ Premium Member
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-yellow-500 text-2xl">★</span>
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {travelPlan.traveler.averageRating}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  ({travelPlan.traveler.totalReviews} reviews)
                </span>
              </div>

              {/* Bio */}
              {travelPlan.traveler.bio && (
                <div
                  className="mb-6 pb-6 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p
                    className="text-sm leading-relaxed text-center italic"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    "{travelPlan.traveler.bio}"
                  </p>
                </div>
              )}

              {/* Contact Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--muted)" }}
                  >
                    📧
                  </span>
                  <div className="flex-1">
                    <p
                      className="text-xs"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium break-all"
                      style={{ color: "var(--foreground)" }}
                    >
                      {travelPlan.traveler.email}
                    </p>
                  </div>
                </div>

                {travelPlan.traveler.contactNumber && (
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--muted)" }}
                    >
                      📱
                    </span>
                    <div className="flex-1">
                      <p
                        className="text-xs"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Phone
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {travelPlan.traveler.contactNumber}
                      </p>
                    </div>
                  </div>
                )}

                {travelPlan.traveler.currentLocation && (
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--muted)" }}
                    >
                      📍
                    </span>
                    <div className="flex-1">
                      <p
                        className="text-xs"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Location
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {travelPlan.traveler.currentLocation}
                      </p>
                    </div>
                  </div>
                )}

                {travelPlan.traveler.gender && (
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--muted)" }}
                    >
                      👤
                    </span>
                    <div className="flex-1">
                      <p
                        className="text-xs"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Gender
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--foreground)" }}
                      >
                        {travelPlan.traveler.gender}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Travel Interests */}
              {travelPlan.traveler.travelInterests.length > 0 && (
                <div className="mb-6">
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Travel Interests
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {travelPlan.traveler.travelInterests.map(
                      (interest, index) => (
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
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Visited Countries */}
              {travelPlan.traveler.visitedCountries.length > 0 && (
                <div className="mb-6">
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Visited Countries (
                    {travelPlan.traveler.visitedCountries.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {travelPlan.traveler.visitedCountries.map(
                      (country, index) => (
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
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Connect Button */}
              <button
                className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Connect with {travelPlan.traveler.name.split(" ")[0]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanDetail;
