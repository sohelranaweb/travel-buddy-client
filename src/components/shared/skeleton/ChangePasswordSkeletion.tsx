// components/ChangePasswordSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

const ChangePasswordSkeleton = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-white p-8 shadow-lg">
        <div className="space-y-3 text-center">
          <Skeleton className="mx-auto h-9 w-64" />
          <Skeleton className="mx-auto h-5 w-full max-w-md" />
        </div>

        <div className="space-y-6">
          {/* Old Password Field */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* New Password Field */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Change Password Button */}
          <Skeleton className="h-11 w-full" />

          {/* Back to Login Link */}
          <div className="text-center pt-2">
            <Skeleton className="mx-auto h-5 w-56" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordSkeleton;
