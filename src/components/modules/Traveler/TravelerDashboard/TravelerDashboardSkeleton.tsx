const TravelerDashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-10 bg-gray-200 rounded-lg w-64 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded-lg w-48"></div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
            >
              <div className="h-2 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Request Status Skeleton */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-6"></div>
            <div className="space-y-4">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-3 bg-gray-200 rounded-full"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Reviews Skeleton */}
          <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-36 mb-6"></div>
            <div className="space-y-4">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="bg-gray-100 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trip Status Skeleton */}
        <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-48 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="h-10 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-28 mb-2"></div>
                <div className="w-full h-2 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerDashboardSkeleton;
