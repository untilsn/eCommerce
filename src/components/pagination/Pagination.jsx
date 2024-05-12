import React from "react";
import { v4 } from "uuid";

const Pagination = ({
  totalPost,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPage = Math.ceil(totalPost / postPerPage);
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
  return (
    <div className="flex items-center gap-3 mx-auto mt-20">
      {pages.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          className={`${
            page === currentPage
              ? "bg-opacity-100"
              : "bg-opacity-60 hover:opacity-80"
          } flex items-center justify-center w-8 h-8 shadow rounded bg-black  text-white border`}
          key={v4()}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
