import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../components/icon/IconDashboardSidebar";
import { TbLetterM } from "react-icons/tb";

const DashboardSidebar = () => {
  const location = useLocation();
  return (
    <div className="px-10 border-r border-dark border-opacity-10">
      <div className="sidebar-logo">
        <NavLink to="/">
          <div className="flex items-center justify-center mb-10 text-6xl font-medium text-center uppercase text-yellow ">
            <span className="">M</span>
            <span className="normal-case text-darkPrimary">olla</span>
          </div>
        </NavLink>
        <span></span>
      </div>
      <div className="flex flex-col gap-5">
        {sidebarLinks.map((link) => {
          console.log(link.url);
          return (
            <NavLink
              to={link.url}
              className={`${
                location.pathname == link.url
                  ? "text-dark bg-yellow bg-opacity-10"
                  : "text-dark hover:bg-opacity-10 hover:bg-yellow "
              } flex items-center gap-5 p-3 text-sm rounded `}
              key={link.title}
            >
              <span className="menu-icon text-2">{link.icon}</span>
              <span className="menu-text">{link.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSidebar;
