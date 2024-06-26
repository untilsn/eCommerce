import React from "react";
import ShopBanner from "../modules/shop/ShopBanner";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Table from "../components/table/Table";
import CardTotal from "../components/card/CardTotal";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { GrUpdate } from "react-icons/gr";
import BoxNoItem from "../components/BoxNoItem";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartArray } = useSelector((state) => state.store);
  return (
    <div>
      <ShopBanner title="Shopping Cart"> </ShopBanner>
      <Breadcrumb children="Shopping Cart"></Breadcrumb>
      <div className="container">
        {cartArray?.length === 0 || cartArray === null ? (
          <BoxNoItem type="carts"></BoxNoItem>
        ) : (
          <div className="grid grid-cols-[72%_28%] gap-5 mt-10 mb-40">
            <div className="">
              <Table item={cartArray}></Table>
              <div className="flex items-center justify-between">
                <div className="flex items-center max-w-[350px] w-full gap-5">
                  <input
                    type="text"
                    className="w-full p-3 text-sm border-none bg-gray bg-opacity-5"
                    placeholder="coupon code"
                  />
                  <button className="p-4 text-sm border text-yellowColor border-yellowColor">
                    <FaArrowRightLong />
                  </button>
                </div>
                <button className="flex items-center gap-4 px-4 py-3 border text-dark border-gray border-opacity-30 hover:text-yellowColor">
                  <span className="uppercase text-opacity-60 ">
                    update cart
                  </span>
                  <GrUpdate />
                </button>
              </div>
            </div>
            {/* cart total */}
            <div>
              <CardTotal></CardTotal>
              <Link
                to={`/shop`}
                className="flex items-center justify-center w-full gap-4 px-4 py-3 mt-10 border text-dark border-gray border-opacity-30 hover:text-yellowColor"
              >
                <span className="uppercase text-opacity-60">
                  continue shopping
                </span>
                <GrUpdate />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
