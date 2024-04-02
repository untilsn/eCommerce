import React from "react";
import { ReviewIcon } from "./CardItem";
import { v4 } from "uuid";
import { PiBinocularsBold } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";

import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const CardShop = () => {
  return (
    <div className="z-0 hover:shadow-itemShadow group">
      <div className="-z-10 max-w-[400px] w-full relative  ">
        <img
          className="object-cover w-full h-full"
          src="/public/item/shopitem.jpg"
          alt=""
        />
        <ul className="absolute flex flex-col gap-3 text-lg top-4 right-4 transition-all opacity-0 group-hover:opacity-90 -translate-x-[50%] group-hover:translate-x-[5%]">
          <li className="p-3 bg-white rounded-full hover:bg-yellow hover:text-white text-yellow">
            <FaRegHeart />
          </li>
          <li className="p-3 bg-white rounded-full hover:bg-yellow hover:text-white text-yellow">
            <PiBinocularsBold />
          </li>
          <li className="p-3 bg-white rounded-full hover:bg-yellow hover:text-white text-yellow">
            <MdCompareArrows />
          </li>
        </ul>
        <div
          className="absolute bottom-0 left-0 right-0 transition-all flex items-center justify-center gap-5 p-4 uppercase bg-white border-b border-gray border-opacity-20 text-yellow 
         opacity-0 group-hover:opacity-100 translate-y-[50%] group-hover:translate-y-[0]
         hover:bg-yellow hover:text-white z-0
         "
        >
          <span>
            <FaCartPlus />
          </span>
          <span>add to carts</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-5 capitalize">
        <span className="text-lg font-light text-gray text-opacity-9 0">
          women
        </span>
        <h1 className="text-xl font-normal text-center">
          Beige metal hoop tote bag
        </h1>
        <h2 className="text-xl font-normal text-center text-yellow">
          $75.00–$80.00
        </h2>
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
      </div>
    </div>
  );
};

export default CardShop;
