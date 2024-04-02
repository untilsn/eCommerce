import React from "react";
import Header from "../components/header/Header";
import DashboardFeature from "../modules/headerFeature/DashboardFeature";
import ScrollTopButton from "../components/button/ScrollTopButton";
import FooterContact from "../modules/homepage/footer/FooterContact";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardFeature />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePageLayout;
