import React from "react";
import TopHeader from "./TopHeader";
import HeaderBottom from "./HeaderBottom";
import HeaderFeature from "../../utils/HeaderFeature";
import DashboardFeature from "../../modules/headerFeature/DashboardFeature";
import Banner from "../../modules/homepage/Banner";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-[#212529] bg-opacity-95 ">
      <div className="container">
        <TopHeader></TopHeader>
        <HeaderBottom></HeaderBottom>
      </div>
    </div>
  );
};

export default Header;
