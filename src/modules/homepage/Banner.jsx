import React from "react";
import MainBanner from "./MainBanner";
import SubBanner from "./SubBanner";

const Banner = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-5 mb-16">
      <div className="row-span-4">
        <MainBanner></MainBanner>
      </div>
      <div className="col-span-1">
        <SubBanner></SubBanner>
      </div>
      <div className="col-span-1">
        <SubBanner></SubBanner>
      </div>
      <div className="col-span-1">
        <SubBanner></SubBanner>
      </div>
    </div>
  );
};

export default Banner;
