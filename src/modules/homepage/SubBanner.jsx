import React from "react";
import subBanner from "F:/code/eCommerce-redux/public/sub-banner1.jpg";
import BoxInfoSubBanner from "./path/BoxInfoSubBanner";
const SubBanner = ({ img, content }) => {
  return (
    <div
      className="w-full max-w-[500px] col-span-1"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BoxInfoSubBanner
        title={content.title}
        subTitle={content.subTitle}
        heading={content.heading}
      ></BoxInfoSubBanner>
    </div>
  );
};

export default SubBanner;
