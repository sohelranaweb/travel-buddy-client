import React from "react";
import {
  Calendar,
  Users,
  Send,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  LucideIcon,
} from "lucide-react";

// TypeScript interfaces
interface StatusDistribution {
  status: string;
  count: number;
}

interface MetaData {
  myTravelPlansCount: number;
  travelBuddyRequestCount: number;
  mySentRequestCount: number;
  myTripsCount: number;
  hostPendingReviewsCount: number;
  buddyPendingReviewsCount: number;
  requestStatusDistribution: StatusDistribution[];
  tripStatusDistribution: StatusDistribution[];
}

interface DashboardProps {
  metaData: MetaData;
}

interface StatCard {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  bgLight: string;
  iconColor: string;
}

interface PendingReview {
  title: string;
  count: number;
  icon: LucideIcon;
  color: string;
  bg: string;
}

// Main Dashboard Component
const TravelerDashboard: React.FC<DashboardProps> = ({ metaData }) => {
  const stats: StatCard[] = [
    {
      title: "Travel Plans",
      value: metaData?.myTravelPlansCount,
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Buddy Requests",
      value: metaData.travelBuddyRequestCount,
      icon: Users,
      color: "from-purple-500 to-purple-600",
      bgLight: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Sent Requests",
      value: metaData.mySentRequestCount,
      icon: Send,
      color: "from-green-500 to-green-600",
      bgLight: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "My Trips",
      value: metaData.myTripsCount,
      icon: MapPin,
      color: "from-orange-500 to-orange-600",
      bgLight: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const pendingReviews: PendingReview[] = [
    {
      title: "Host Reviews",
      count: metaData.hostPendingReviewsCount,
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "Buddy Reviews",
      count: metaData.buddyPendingReviewsCount,
      icon: Star,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
  ];

  const getStatusIcon = (status: string): React.ReactElement => {
    switch (status) {
      case "PENDING":
        return <Clock className="w-4 h-4" />;
      case "ACCEPTED":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "ACCEPTED":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome Back, Traveler! ✈️
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Here's what's happening with your travel plans
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-2 bg-linear-to-r ${stat.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bgLight} p-3 rounded-xl`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-600">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Request Status */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              Request Status Distribution
            </h2>
            <div className="space-y-4">
              {metaData.requestStatusDistribution.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg border ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {getStatusIcon(item.status)}
                    </div>
                    <span className="font-semibold text-gray-700 capitalize">
                      {item.status.toLowerCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-linear-to-r ${
                          item.status === "PENDING"
                            ? "from-yellow-400 to-yellow-500"
                            : "from-green-400 to-green-500"
                        } transition-all duration-500`}
                        style={{
                          width: `${
                            (item.count / metaData.travelBuddyRequestCount) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-2xl font-bold text-gray-900 min-w-8 text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Reviews */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-600" />
              Pending Reviews
            </h2>
            <div className="space-y-4">
              {pendingReviews.map((review, index) => (
                <div
                  key={index}
                  className={`${review.bg} rounded-xl p-5 border-2 border-transparent hover:border-opacity-50 transition-all`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <review.icon className={`w-6 h-6 ${review.color}`} />
                    <span className={`text-3xl font-bold ${review.color}`}>
                      {review.count}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    {review.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trip Status */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-600" />
            Trip Status Distribution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metaData.tripStatusDistribution.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-3 rounded-lg border ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {getStatusIcon(item.status)}
                  </div>
                  <span className="text-4xl font-bold text-gray-900">
                    {item.count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  {item.status.toLowerCase()} Trips
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-linear-to-r ${
                      item.status === "PENDING"
                        ? "from-yellow-400 to-yellow-500"
                        : "from-green-400 to-green-500"
                    } transition-all duration-500`}
                    style={{
                      width: `${(item.count / metaData.myTripsCount) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerDashboard;
