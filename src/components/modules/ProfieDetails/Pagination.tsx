import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background: currentPage === 1 ? "oklch(0.922 0 0)" : "oklch(1 0 0)",
          color: "oklch(61.422% 0.10271 203.354)",
          border: "1px solid oklch(0.922 0 0)",
        }}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className="px-4 py-2 rounded-lg transition-colors font-medium"
          style={
            currentPage === page
              ? {
                  background: "oklch(61.422% 0.10271 203.354)",
                  color: "oklch(0.985 0 0)",
                }
              : {
                  background: "oklch(1 0 0)",
                  color: "oklch(37.678% 0.02564 228.44/1)",
                  border: "1px solid oklch(0.922 0 0)",
                }
          }
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background:
            currentPage === totalPages ? "oklch(0.922 0 0)" : "oklch(1 0 0)",
          color: "oklch(61.422% 0.10271 203.354)",
          border: "1px solid oklch(0.922 0 0)",
        }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
