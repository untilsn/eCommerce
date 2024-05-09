import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ShopBanner from "../modules/shop/ShopBanner";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "./manage/DashboardLayout";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <ShopBanner title="dashboard" subtitle="user"></ShopBanner>
      <Breadcrumb children="dashboard" item={user}></Breadcrumb>
      <div className="border-t border-gray border-opacity-10">
        <div className="grid grid-cols-[300px_minmax(0,_1fr)] ">
          <DashboardSidebar></DashboardSidebar>
          <DashboardLayout>
            <Outlet></Outlet>
          </DashboardLayout>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
