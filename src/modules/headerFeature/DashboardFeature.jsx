import React, { useState } from "react";
import { dashboardLink } from "./DashboardLink";
import BrowserCategories from "./BrowserCategories";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuShop from "../menu/MenuShop";

const DashboardFeature = () => {
  const location = useLocation();
  const [itemHover, setItemHover] = useState("");
  const handleMenuHover = (item) => {
    setItemHover(item.name);
  };
  const handleMenuClose = () => {
    setItemHover("");
  };
  return (
    <div className="sticky top-0 z-30 bg-white shadow-primaryShadow">
      <div className="container grid items-center justify-between grid-cols-4">
        {/* categories */}
        <BrowserCategories></BrowserCategories>
        {/* feature */}
        <div className="flex items-center col-span-2 px-4 capitalize ">
          {dashboardLink.map((item) => (
            <NavLink
              onMouseEnter={() => handleMenuHover(item)}
              onMouseLeave={() => handleMenuClose(item)}
              to={item?.url}
              key={item?.name}
              className="relative w-full px-2 py-5 mx-auto text-black group"
            >
              {location.pathname === item.url ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-yellow">{item.name}</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5 text-yellow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0  h-[2px] w-full bg-yellow"></span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span className="group-hover:text-yellow">{item.name}</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray group-hover:text-yellow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-yellow"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-yellow"></span>
                </div>
              )}
              {itemHover === item.name ? item.menu : ""}
            </NavLink>
          ))}
        </div>

        {/* notion */}
        <div className="text-lg text-end">
          <span>Clearance</span>
          <span className="font-semibold">&nbsp;Up to 30% Off</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardFeature;
