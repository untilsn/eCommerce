import React from "react";
import ShopBanner from "../modules/shop/ShopBanner";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Table from "../components/table/Table";
import CardTotal from "../components/card/CardTotal";
import { FaArrowRightLong } from "react-icons/fa6";
import MenuShop from "../modules/menu/MenuShop";

const CartPage = () => {
  return (
    <div>
      <ShopBanner title="Shopping Cart"> </ShopBanner>
      <Breadcrumb children="Shopping Cart"></Breadcrumb>
      <div className="container">
        <div className="grid grid-cols-[72%_28%] gap-5 mt-10 mb-40">
          <div className="flex flex-col ">
            <Table></Table>
            <div className="flex items-center gap-5 py-5">
              <input
                type="text"
                className="p-3 text-lg border-none outline-none bg-gray max-w-[300px] w-full bg-opacity-5"
                placeholder="coupon code"
              />
              <button className="p-4 text-xl border text-yellow border-yellow">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <CardTotal></CardTotal>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartPage;
