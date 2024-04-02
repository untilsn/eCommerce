import React from "react";
import shopBanner from "/code/eCommerce-redux/public/shopbanner.jpg";
const ShopBanner = ({ title = "list", subtitle = "shop" }) => {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url(${shopBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center capitalize">
        <h1 className="text-5xl">{title}</h1>
        <h2 className="mt-2 text-2xl text-yellow">{subtitle}</h2>
      </div>
    </div>
  );
};

export default ShopBanner;
