const BuddyRequestsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <div className="bg-teal-600 rounded-lg p-6 mb-6 animate-pulse">
        <div className="h-8 bg-teal-500 rounded w-48 mb-2"></div>
        <div className="h-4 bg-teal-500 rounded w-64 mb-4"></div>
        <div className="flex items-center gap-2">
          <div className="h-4 bg-teal-500 rounded w-24"></div>
          <div className="h-10 bg-teal-500 rounded w-32"></div>
        </div>
        <div className="h-4 bg-teal-500 rounded w-32 mt-4"></div>
      </div>

      {/* Request Cards */}
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white rounded-lg shadow-sm p-6 mb-4 animate-pulse"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 bg-gray-300 rounded-full"></div>

              {/* User Info */}
              <div>
                <div className="h-5 bg-gray-300 rounded w-20 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="h-8 bg-gray-300 rounded-full w-24"></div>
          </div>

          {/* Destination and Dates */}
          <div className="flex items-start gap-2 mb-3">
            <div className="w-4 h-4 bg-gray-300 rounded mt-1"></div>
            <div className="h-5 bg-gray-300 rounded w-48"></div>
            <div className="h-6 bg-teal-300 rounded-full w-20 ml-auto"></div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="h-4 bg-gray-200 rounded w-56"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-32"></div>
          </div>

          {/* View Details Button */}
          <div className="h-12 bg-gray-300 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default BuddyRequestsSkeleton;
