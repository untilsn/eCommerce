import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { v4 } from "uuid";
import { useFetchProductCategory } from "../../hooks/useFetchProductCategory";
import { Link } from "react-router-dom";

const BrowserCategories = ({ category }) => {
  const [hovered, setHovered] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");
  useFetchProductCategory(selectCategory);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-between h-full gap-3 px-4 text-black transition-all border-r border-gray border-opacity-10 hover:bg-yellowColor group"
    >
      <div className="flex items-center gap-3">
        <span className="py-3 text-3xl text-opacity-90 text-dark ">
          {hovered ? (
            <IoMdClose className="group-hover:text-light" />
          ) : (
            <IoIosMenu />
          )}
        </span>
        <span className="text-sm group-hover:text-white">
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
          {category.slice(0, 6).map((item) => (
            <Link key={item.id} to={`/shop`}>
              <div
                onClick={() => setSelectCategory(item.name)}
                className="p-5 text-sm capitalize hover:bg-gray hover:bg-opacity-5 text-dark border-b_primary"
              >
                {item?.name}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BrowserCategories;
