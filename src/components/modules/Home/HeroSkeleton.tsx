const HeroSkeleton = () => {
  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden -mt-20">
      {/* Background Skeleton */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title Skeleton */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="h-16 md:h-24 w-full max-w-lg animate-pulse rounded-2xl bg-white/30 backdrop-blur-sm" />
            <div className="h-16 md:h-24 w-full max-w-2xl animate-pulse rounded-2xl bg-gradient-to-r from-orange-200/30 via-yellow-200/30 to-orange-200/30 backdrop-blur-sm" />
          </div>

          {/* Description Skeleton */}
          <div className="mb-12 mx-auto max-w-2xl space-y-3">
            <div className="h-6 w-full animate-pulse rounded-xl bg-white/20 backdrop-blur-sm" />
            <div className="h-6 w-4/5 mx-auto animate-pulse rounded-xl bg-white/20 backdrop-blur-sm" />
          </div>

          {/* Search Box Skeleton */}
          <div className="bg-white/10 backdrop-blur-xl p-3 rounded-3xl max-w-4xl mx-auto border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Destination Input Skeleton */}
              <div className="flex-1 bg-white/90 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 animate-pulse rounded-full bg-gray-300 shrink-0" />
                  <div className="text-left w-full space-y-2">
                    <div className="h-3 w-24 animate-pulse rounded bg-gray-300" />
                    <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              </div>

              {/* Dates Input Skeleton */}
              <div className="flex-1 bg-white/90 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 animate-pulse rounded-full bg-gray-300 shrink-0" />
                  <div className="text-left w-full space-y-2">
                    <div className="h-3 w-16 animate-pulse rounded bg-gray-300" />
                    <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              </div>

              {/* Search Button Skeleton */}
              <div className="rounded-2xl px-10 py-4 h-auto shrink-0">
                <div className="h-12 w-28 animate-pulse rounded-2xl bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Skeleton */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="h-3 w-32 animate-pulse rounded bg-white/30 backdrop-blur-sm" />
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSkeleton;
