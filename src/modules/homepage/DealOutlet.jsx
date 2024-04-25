import React from "react";
import dealBanner from "/code/eCommerce-redux/public/dealoutletbanner.jpg";
import CardItem from "../../components/card/CardItem";
import ButtonItem from "../../components/button/ButtonItem";
import TitlePath from "../../components/title/TitlePath";
import DisplayTime from "./DisplayTime";

const DealOutlet = () => {
  return (
    <div className="container">
      <div className="text-center">
        <TitlePath>Deals & Outlet</TitlePath>
        <div className="mt-2 text-sm text-grayDark text-opacity-70">
          today’s deal and more
        </div>
      </div>
      {/* content */}
      <div className="grid grid-cols-4 gap-8 my-16 ">
        <div
          className="w-full h-full col-span-2 "
          style={{
            backgroundImage: `url(${dealBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-20 p-10">
            <div>
              <div className="text-2xl font-semibold text-redLite text-opacity-60">
                Deal of the Day.
              </div>
              <div className="text-sm text-gray">Limited quantities.</div>
            </div>
            <div>
              <div className="text-sm ">Brown faux fur longline coat</div>
              <div className="text-2xl text-redLite text-opacity-60">
                $310.00{" "}
                <span className="text-gray text-opacity-60"> Was $190.00</span>
              </div>
            </div>
            <div>
              <DisplayTime></DisplayTime>
            </div>
          </div>
        </div>
        <CardItem></CardItem>
        <CardItem></CardItem>
      </div>
      <div className="flex items-center justify-center w-full mx-auto">
        <ButtonItem kind="secondary">Shop more Outlet deals</ButtonItem>
      </div>
    </div>
  );
};

export default DealOutlet;
