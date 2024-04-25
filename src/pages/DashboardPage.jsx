import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ShopBanner from "../modules/shop/ShopBanner";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <ShopBanner title="dashboard" subtitle="user"></ShopBanner>
      <Breadcrumb children="dashboard"></Breadcrumb>
      <div className="pt-10 border-t border-gray border-opacity-10">
        <div className="grid grid-cols-[380px_minmax(0,_1fr)] ">
          <DashboardSidebar></DashboardSidebar>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
