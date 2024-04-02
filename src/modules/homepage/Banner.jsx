import React from "react";
import MainBanner from "./MainBanner";
import SubBanner from "./SubBanner";
import { BannerImage } from "../../utils/bannerItem";

const Banner = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-16">
      <MainBanner></MainBanner>
      <div className="grid grid-rows-3 gap-5">
        {BannerImage.map((item) => (
          <SubBanner key={item.id} img={item.img} content={item}></SubBanner>
        ))}
      </div>
    </div>
  );
};

export default Banner;
