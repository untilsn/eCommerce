import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ShopBanner from "../modules/shop/ShopBanner";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";

const DashboardPage = () => {
  return (
    <div>
      <ShopBanner title="dashboard" subtitle="user"></ShopBanner>
      <Breadcrumb children="dashboard"></Breadcrumb>
      <div className="pt-10 border-t border-gray border-opacity-10">
        <div className="grid grid-cols-[320px_minmax(0,_1fr)] gap-10 px-10">
          <DashboardSidebar></DashboardSidebar>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum
            dolorum esse blanditiis accusantium, debitis facilis ipsa excepturi
            quibusdam doloremque atque velit, aperiam assumenda totam magnam
            temporibus vero molestiae eligendi?
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
