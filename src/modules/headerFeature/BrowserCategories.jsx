import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const BrowserCategories = () => {
  const [hovered, setHovered] = useState(true);
  const handleHoverClose = () => {
    setHovered(false);
  };
  const handleHoverOpen = () => {
    setHovered(true);
  };
  return (
    <div
      onMouseEnter={handleHoverClose}
      onMouseLeave={handleHoverOpen}
      className="flex items-center justify-between h-[60px] px-4 gap-3 text-black  hover:bg-yellow group"
    >
      <div className="flex items-center gap-3">
        <span className="py-3 text-3xl ">
          {hovered ? (
            <IoIosMenu />
          ) : (
            <IoMdClose className="group-hover:text-light" />
          )}
        </span>
        <span className="text-lg group-hover:text-white">
          Browse Categories
        </span>
      </div>

      <span className="group-hover:text-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5 text-gray group-hover:text-light"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default BrowserCategories;
