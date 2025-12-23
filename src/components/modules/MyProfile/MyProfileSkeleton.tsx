const MyProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="h-8 w-32 animate-pulse rounded-lg bg-gray-300" />
          <div className="mt-2 h-4 w-56 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Section - Profile Picture */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-4 h-5 w-32 animate-pulse rounded bg-gray-300" />

              {/* Profile Picture Circle */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-32 w-32 animate-pulse rounded-full bg-gray-200" />
                  <div className="absolute bottom-0 right-0 h-8 w-8 animate-pulse rounded-full bg-teal-200" />
                </div>

                {/* Name and Email */}
                <div className="mb-1 h-6 w-32 animate-pulse rounded bg-gray-300" />
                <div className="mb-2 h-4 w-40 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-24 animate-pulse rounded-full bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Right Section - Personal Information */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-6 h-5 w-48 animate-pulse rounded bg-gray-300" />

              <div className="space-y-6">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-300" />
                    <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-300" />
                    <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                  </div>
                </div>

                {/* Contact Number & Current Location Row */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
                    <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-36 animate-pulse rounded bg-gray-300" />
                    <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-300" />
                  <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-300" />
                  <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-300" />
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                    <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />
                    <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100" />
                  </div>
                </div>

                {/* Travel Interests */}
                <div className="space-y-2">
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
                  <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                  <div className="h-3 w-64 animate-pulse rounded bg-gray-200" />
                </div>

                {/* Visited Countries */}
                <div className="space-y-2">
                  <div className="h-4 w-36 animate-pulse rounded bg-gray-300" />
                  <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-100" />
                  <div className="h-3 w-72 animate-pulse rounded bg-gray-200" />
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-4">
                  <div className="h-11 w-40 animate-pulse rounded-lg bg-teal-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileSkeleton;
