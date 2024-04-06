import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export const categoryList = ["computer", "sextoi", "pillowwaifu"];

const BrowserCategories = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-between transition-all h-[60px] px-4 gap-3 text-black relative hover:bg-yellow group"
    >
      <div className="flex items-center gap-3">
        <span className="py-3 text-3xl text-opacity-90 text-dark ">
          {hovered ? (
            <IoMdClose className="group-hover:text-light" />
          ) : (
            <IoIosMenu />
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
      {/* categori */}
      {hovered ? (
        <div className="absolute top-[100%] left-0 right-0 bg-white shadow-lg">
          {categoryList.map((item, index) => (
            <div
              key={index}
              className="p-5 text-base capitalize hover:bg-gray hover:bg-opacity-5 text-dark border-b_primary"
            >
              {item}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BrowserCategories;
