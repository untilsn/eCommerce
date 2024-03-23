import React from "react";
import { dashboardLink } from "./DashboardLink";

const DashboardFeature = () => {
  return (
    <div className="border-b border-gray border-opacity-20 bg-light">
      <div className="container grid items-center justify-between grid-cols-4">
        {/* categories */}
        <div className="flex items-center justify-between h-[60px] px-4 gap-3 text-black border-r border-gray border-opacity-20 hover:bg-yellow group">
          <div className="flex items-center gap-3">
            <span className="py-3 group-hover:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
            <span className="text-lg group-hover:text-white">
              Browse Categories
            </span>
          </div>

          <span className="">
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
        {/* feature */}
        <div className="flex items-center col-span-2 px-4 border-r border-gray border-opacity-20">
          {dashboardLink.map((item) => (
            <div
              key={item.name}
              className="relative flex items-center gap-2 px-4 py-3 mx-auto text-black group"
            >
              <span className="group-hover:text-yellow">{item.name}</span>
              <span className="">
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
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-yellow"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-yellow"></span>
            </div>
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
