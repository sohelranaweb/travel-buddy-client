const PricingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-96 animate-pulse rounded-lg bg-gray-200" />
          <div className="mx-auto mb-3 h-5 w-full max-w-lg animate-pulse rounded bg-gray-200" />
          <div className="mx-auto h-5 w-80 animate-pulse rounded bg-gray-200" />

          {/* Features Badges */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Monthly Plan */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 h-6 w-32 animate-pulse rounded bg-gray-200" />
            <div className="mb-2 flex items-baseline gap-1">
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              <div className="h-14 w-28 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="mb-6 h-4 w-20 animate-pulse rounded bg-gray-200" />

            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 flex-1 animate-pulse rounded bg-gray-200" />
                </div>
              ))}
            </div>

            <div className="mt-8 h-12 w-full animate-pulse rounded-lg bg-gray-200" />
          </div>

          {/* Half Yearly Plan (Most Popular) */}
          <div className="relative rounded-2xl border-2 border-teal-500 bg-gradient-to-b from-teal-50 to-white p-8 shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="h-6 w-28 animate-pulse rounded-full bg-yellow-400" />
            </div>

            <div className="mb-4 h-6 w-40 animate-pulse rounded bg-gray-200" />
            <div className="mb-2 flex items-baseline gap-1">
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              <div className="h-16 w-32 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="mb-6 h-4 w-24 animate-pulse rounded bg-gray-200" />

            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-4 w-4 animate-pulse rounded-full bg-teal-200" />
                  <div className="h-4 flex-1 animate-pulse rounded bg-gray-200" />
                </div>
              ))}
            </div>

            <div className="mt-8 h-12 w-full animate-pulse rounded-lg bg-teal-400" />
          </div>

          {/* Yearly Plan */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 h-6 w-28 animate-pulse rounded bg-gray-200" />
            <div className="mb-2 flex items-baseline gap-1">
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              <div className="h-14 w-28 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="mb-6 h-4 w-20 animate-pulse rounded bg-gray-200" />

            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 flex-1 animate-pulse rounded bg-gray-200" />
                </div>
              ))}
            </div>

            <div className="mt-8 h-12 w-full animate-pulse rounded-lg bg-gray-200" />
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center">
          <div className="mx-auto h-4 w-80 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Payment Icons */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-10 w-14 animate-pulse rounded bg-gray-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSkeleton;
