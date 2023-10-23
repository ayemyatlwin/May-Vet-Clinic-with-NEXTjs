import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Pagination({ setData, rowsPerPage, renderedData }) {
  const skipTen = () => {
    setData(renderedData?.slice(rowsPerPage - 1, renderedData?.length - 1));
  };
  const revTen = () => {
    setData(renderedData?.slice(0, 10));
  };

  return (
    <div>
      <section className="   w-full">
        <div className="flex items-center rounded ">
          <BiChevronLeft
            onClick={() => revTen()}
            className="pagination-btn cursor-pointer w-8 h-7 p-1"
          />

          <BiChevronRight
            onClick={() => skipTen()}
            className="pagination-btn cursor-pointer  w-8 h-7 p-1"
          />
        </div>
      </section>
    </div>
  );
}
