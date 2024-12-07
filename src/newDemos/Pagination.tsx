import React from "react";
import "./new.css";
interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const handleNavigation = (type: "prev" | "next") => {
    const newPage = type === "prev" ? page - 1 : page + 1;
    onPageChange(newPage); // Notify parent component about the page change
  };

  return (
    <div className="d-flex justify-content-between align-items-center gap-3">
      {/* Previous Button */}
      <button
        className="btn btn-outline-primary d-flex align-items-center"
        onClick={() => handleNavigation("prev")}
        disabled={page <= 1}
      >
        <img
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="me-2"
        />
        Prev
      </button>

      {/* Current Page Info */}
      <p className="mb-0 text-center">
        {page} / {totalPages}
      </p>

      {/* Next Button */}
      <button
        className="btn btn-outline-primary d-flex align-items-center"
        onClick={() => handleNavigation("next")}
        disabled={page >= totalPages}
      >
        Next
        <img
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="ms-2 rotate-180"
        />
      </button>
    </div>
  );
};