import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-14">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-1 py-0.5 text-sm border disabled:opacity-40 hover:bg-black hover:text-white transition"
      >
        <ChevronLeft className="h-5"/>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 py-0.5 text-sm border transition
            ${
              currentPage === page
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-1 py-0.5 text-sm border disabled:opacity-40 hover:bg-black hover:text-white transition"
      >
    <ChevronRight className="h-5"/>
          </button>
    </div>
  );
}
