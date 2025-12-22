// "use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// type SelectOption = {
//   label: string;
//   value: string;
// };

// type SelectFilterProps = {
//   paramName: string;
//   options: SelectOption[];
//   placeholder?: string;
// };

// const SelectFilter = ({
//   paramName,
//   options,
//   placeholder = "Select...",
// }: SelectFilterProps) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const handleChange = (value: string) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (value) {
//       params.set(paramName, value);
//     } else {
//       params.delete(paramName);
//     }

//     // Reset to page 1 when filter changes
//     params.set("page", "1");

//     router.push(`${pathname}?${params.toString()}`);
//   };

//   const currentValue = searchParams.get(paramName) || "";

//   return (
//     <select
//       value={currentValue}
//       onChange={(e) => handleChange(e.target.value)}
//       className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm min-w-[150px]"
//     >
//       <option value="">{placeholder}</option>
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default SelectFilter;

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectFilterProps = {
  paramName: string;
  options: SelectOption[];
  placeholder?: string;
};

const SelectFilter = ({
  paramName,
  options,
  placeholder = "Select...",
}: SelectFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleChange = (value: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(paramName, value);
      } else {
        params.delete(paramName);
      }

      // Reset to page 1 when filter changes
      params.set("page", "1");

      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const currentValue = searchParams.get(paramName) || "";

  return (
    <div className="relative min-w-[150px]">
      <select
        value={currentValue}
        onChange={(e) => handleChange(e.target.value)}
        disabled={isPending}
        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {isPending && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
        </div>
      )}
      {!isPending && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
