const MySubscriptionsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 h-10 w-64 animate-pulse rounded-lg bg-gray-300" />
          <div className="h-5 w-80 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Subscription Card */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
          {/* Blue Header Section */}
          <div className="bg-linear-to-r from-blue-600 to-blue-500 p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="h-8 w-56 animate-pulse rounded-lg bg-blue-400" />
                <div className="h-5 w-36 animate-pulse rounded bg-blue-400" />
              </div>
              <div className="h-12 w-32 animate-pulse rounded-lg bg-blue-400" />
            </div>
          </div>

          {/* Card Body */}
          <div className="p-8">
            {/* Active Badge and Start Date */}
            <div className="mb-6 flex items-center justify-between">
              <div className="h-7 w-20 animate-pulse rounded-full bg-teal-200" />
              <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Valid Until and Days Section */}
            <div className="mb-6 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
              {/* Valid Until Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 animate-pulse rounded bg-gray-300" />
                  <div className="h-5 w-24 animate-pulse rounded bg-gray-300" />
                </div>
                <div className="h-5 w-28 animate-pulse rounded bg-gray-300" />
              </div>

              {/* Days Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 animate-pulse rounded bg-gray-300" />
                  <div className="h-5 w-16 animate-pulse rounded bg-gray-300" />
                </div>
                <div className="h-6 w-12 animate-pulse rounded bg-green-200" />
              </div>
            </div>

            {/* Progress Bar Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-4 w-40 animate-pulse rounded bg-gray-300" />
                <div className="h-5 w-10 animate-pulse rounded bg-gray-300" />
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="absolute left-0 top-0 h-full w-[65%] animate-pulse rounded-full bg-linear-to-r from-teal-400 to-teal-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubscriptionsSkeleton;
