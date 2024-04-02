import React from "react";
import menuImg from "/public/menu-img.jpg";
const MenuShop = () => {
  return (
    <div className="flex items-center max-w-[700px] w-full h-[500xp] mt-20">
      <div>
        <div className="grid grid-rows-2 p-5 capitalize">
          {/* 11 */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-normal uppercase">Shop List</h1>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Shop grid column 2
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Shop grid column 3
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              Shop grid column 4
            </div>
          </div>
          {/* 22 */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-normal uppercase">shop pages</h1>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              carts
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              checkout
            </div>
            <div className="text-lg font-light text-gray text-opacity-90 hover:text-yellow">
              wishlist
            </div>
            <div className="text-lg font-light text-gray text-opacity-90">
              my account
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
        <div className="w-[220px] h-[360px] text-white text-2xl uppercase">
          last chance <br />
          <span className="text-4xl font-bold">sale</span>
        </div>
      </div>
    </div>
  );
};

export default MenuShop;