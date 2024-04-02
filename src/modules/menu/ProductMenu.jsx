import React from "react";
import menuImg from "/public/menu-img1.jpg";

const ProductMenu = () => {
  return (
    <div className="flex h-[500xp] mt-20 bg-white shadow-md absolute justify-between -top-7 left-0 w-[570px]">
      <div>
        <div className="p-10 capitalize ">
          {/* 11 */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-normal uppercase">PRODUCT DETAILS</h1>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Default
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Centered
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Extended InfoNEW
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Gallery
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Sticky Info
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Boxed With Sidebar
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Full Width
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-10"
        style={{
          backgroundImage: `url(${menuImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[220px] h-[360px] top-auto text-white text-2xl uppercase">
          last chance <br />
          <span className="text-4xl font-bold">sale</span>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
