const TravelBuddySkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section Skeleton */}
      <div className="mx-auto max-w-4xl rounded-lg bg-teal-600 p-6 shadow-lg">
        <div className="space-y-3">
          <div className="h-8 w-64 animate-pulse rounded bg-teal-500" />
          <div className="h-4 w-80 animate-pulse rounded bg-teal-500" />
        </div>

        {/* Search Form Skeleton */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div className="h-4 w-40 animate-pulse rounded bg-teal-500" />
            <div className="h-10 w-full animate-pulse rounded bg-white/20" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-24 animate-pulse rounded bg-teal-500" />
            <div className="h-10 w-full animate-pulse rounded bg-white/20" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-20 animate-pulse rounded bg-teal-500" />
            <div className="h-10 w-full animate-pulse rounded bg-white/20" />
          </div>
        </div>

        <div className="mt-4">
          <div className="h-10 w-32 animate-pulse rounded bg-yellow-500" />
        </div>

        <div className="mt-4">
          <div className="h-4 w-40 animate-pulse rounded bg-teal-500" />
        </div>
      </div>

      {/* Travel Plans Cards Skeleton */}
      <div className="mx-auto mt-8 max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="rounded-lg border bg-white p-5 shadow-md"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
              </div>
            </div>

            {/* Destination */}
            <div className="mt-4 h-6 w-full animate-pulse rounded bg-gray-200" />

            {/* Description */}
            <div className="mt-3 space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Details Section */}
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-32 animate-pulse rounded bg-gray-200" />
              </div>
              <div className="flex justify-between">
                <div className="h-3 w-14 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />
              </div>
              <div className="flex justify-between">
                <div className="h-3 w-10 animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-16 animate-pulse rounded-full bg-gray-200" />
              </div>
              <div className="flex justify-between">
                <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-20 animate-pulse rounded-full bg-gray-200" />
              </div>
            </div>

            {/* Details Button */}
            <div className="mt-5">
              <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBuddySkeleton;