import React from "react";
import mainBanner from "F:/code/eCommerce-redux/public/main-banner1.jpg";
import ButtonItem from "../../components/button/ButtonItem";
const MainBanner = () => {
  return (
    <div
      className="w-full h-full col-span-2"
      style={{
        backgroundImage: `url(${mainBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full p-24 h-[500px] inline-flex flex-col gap-4">
        <h2 className="text-2xl font-light text-yellow">Daily Deals</h2>
        <h1 className="text-6xl font-semibold text-darkPrimary">
          AirPods <br />
          Earphones
        </h1>
        <p className="flex items-start gap-1 text-darkPrimary">
          <span className="text-2xl">Today:</span>
          <span className="text-6xl font-semibold text-yellow">$247</span>
          <span className="text-2xl font-semibold text-yellow">.99</span>
        </p>
        <ButtonItem className="max-w-[250px] w-full justify-center">
          Click here
        </ButtonItem>
      </div>
    </div>
  );
};

export default MainBanner;
