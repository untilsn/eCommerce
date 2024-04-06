import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../components/icon/IconDashboardSidebar";

const DashboardSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <NavLink to="/">
          <img srcSet="/monkey.png 2x" alt="" />
        </NavLink>
        <span></span>
      </div>
      {sidebarLinks.map((link) => {
        if (link.onClick)
          return (
            <div className="menu-item" onClick={link.onClick} key={link.title}>
              <span className="menu-icon">{link.icon}</span>
              <span className="menu-text">{link.title}</span>
            </div>
          );
        return (
          <NavLink to={link.url} className="menu-item" key={link.title}>
            <span className="menu-icon">{link.icon}</span>
            <span className="menu-text">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
