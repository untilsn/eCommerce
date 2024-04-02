import React from "react";
import { FaCartPlus, FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SupportService } from "../../components/icon/IconService";
import SupportServicesItem from "../homepage/path/SupportServicesItem";
import { FooterIconContact } from "../../components/icon/IconContact";
import { ReviewIcon } from "../../components/card/CardItem";
import { v4 } from "uuid";
import QuantityItem from "../../components/quantity/QuantityItem";

const ProductDetail = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-10 mb-20">
      {/* show image */}
      <div className="grid grid-cols-[max(150px)_1fr] gap-3">
        <div className="grid w-full grid-rows-4 gap-3">
          <div className="max-w-[150px] w-full h-[150px] ">
            <img
              className="object-cover w-full h-full"
              src="/public/productItem/mainImg.jpg"
              alt=""
            />
          </div>
          <div className="max-w-[150px] w-full h-[150px]">
            <img
              className="object-cover w-full h-full"
              src="/public/productItem/mainImg.jpg"
              alt=""
            />
          </div>
          <div className="max-w-[150px] w-full h-[150px]">
            <img
              className="object-cover w-full h-full"
              src="/public/productItem/mainImg.jpg"
              alt=""
            />
          </div>
          <div className="max-w-[150px] w-full h-[150px]">
            <img
              className="object-cover w-full h-full"
              src="/public/productItem/mainImg.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full">
          <img
            className="object-cover w-full h-full"
            src="/public/productItem/mainImg.jpg"
            alt=""
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl text-darkPrimary">
          Dark yellow lace cut out swing dress
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center ">
            {Array(5)
              .fill(0)
              .map((item) => (
                <ReviewIcon key={v4()}></ReviewIcon>
              ))}
          </div>
          <span className="capitalize text-gray text-opacity-60">
            (2 reviews)
          </span>
        </div>
        <h2 className="text-3xl font-normal text-yellow">$76.00–$95.00</h2>
        <p className="text-lg font-light text-gray text-opacity-80">
          Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
          dapibus id, mattis vel, nisi.
        </p>
        <div className="flex items-center gap-5 text-lg text-dark text-opacity-90">
          size
          <select
            name=""
            className="px-5 py-3 border border-gray max-w-[200px] w-full border-opacity-30"
            id=""
          >
            <option value="">small</option>
          </select>
        </div>
        {/* quantity */}
        <div className="flex items-center gap-5 text-lg text-dark text-opacity-90">
          qty:
          <QuantityItem></QuantityItem>
        </div>
        {/* add and wishlist */}
        <div className="flex items-center gap-10 mb-5">
          <div className="flex items-center justify-center gap-5 p-4 uppercase bg-white border border-gray border-opacity-20 text-yellow max-w-[250px] w-full  hover:bg-yellow hover:text-white">
            <span>
              <FaCartPlus />
            </span>
            <span>add to carts</span>
          </div>
          <div className="flex items-center gap-5 text-lg">
            <span>
              <CiHeart className="text-yellow" />
            </span>
            <span className="hover:text-yellow hover:underline">
              Add to Wishlist
            </span>
          </div>
        </div>
        {/* category */}
        <div className="py-5 text-lg font-light border-t text-gray border-gray border-opacity-2">
          category: women
        </div>
        {/* share */}
        <div className="flex items-center gap-5">
          share:{" "}
          <div className="flex items-center gap-2">
            {FooterIconContact.map((item) => (
              <span className="inline-flex items-center p-3 text-lg text-white bg-black border border-black rounded-full hover:bg-white hover:text-black ">
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
