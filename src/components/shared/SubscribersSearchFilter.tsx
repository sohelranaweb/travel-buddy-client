"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Search, Loader2 } from "lucide-react";

type SearchFilterProps = {
  paramName: string;
  placeholder?: string;
  type?: "text" | "number";
};

const SubscribersSearchFilter = ({
  paramName,
  placeholder = "Search...",
  type = "text",
}: SearchFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(searchParams.get(paramName) || "");

  const handleSearch = (searchValue: string) => {
    setValue(searchValue);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchValue) {
        params.set(paramName, searchValue);
      } else {
        params.delete(paramName);
      }

      // Reset to page 1 when search changes
      params.set("page", "1");

      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="relative flex-1">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Search className="h-4 w-4" />
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        disabled={isPending}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default SubscribersSearchFilter;
