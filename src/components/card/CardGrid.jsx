import React from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { LiaBinocularsSolid, LiaHeart } from "react-icons/lia";
import { ReviewIcon } from "./CardItem";
import { v4 } from "uuid";

const CardGrid = ({ item }) => {
  return (
    <div className="grid items-center grid-cols-4 py-5 border-b border-gray border-opacity-20">
      <div className="max-w-[200px] max-h-[200px] w-full h-full col-span-1 shadow-md">
        <img
          src={item.images[0]}
          className="object-contain w-full h-full "
          alt="img"
        />
      </div>
      <div className="flex flex-col col-span-2 gap-5">
        <div>
          <span className="text-sm text-gray text-opacity-80">
            {item.category}
          </span>

          <h1 className="text-base text-dark overflow-hidden overflow-ellipsis h-[22px]">
            {item.title}
          </h1>
        </div>
        <p className="leading-6 text-sm text-gray overflow-hidden overflow-ellipsis h-[78px]">
          {item.desc}
        </p>
      </div>
      <div className="flex flex-col col-span-1 gap-4 px-5 text-opacity-50 text-gray">
        <div className="text-[17px] text-yellowColor">${item.price}</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item) => (
                <ReviewIcon key={v4()}></ReviewIcon>
              ))}
          </div>
          <div className="text-[13px]">({item.reviews.length} reviews) </div>
        </div>
        <div className="flex items-center text-[13px] justify-evenly text-gray text-opacity-80">
          <span className="flex items-center justify-center gap-1 hover:text-yellowColor">
            <LiaBinocularsSolid />
            quick view
          </span>
          <span className="flex items-center justify-center gap-1 hover:text-yellowColor">
            <LiaHeart />
            wishlist
          </span>
        </div>
        <div className="flex items-center justify-center gap-5 p-4 uppercase bg-white border border-gray border-opacity-20 text-yellowColor max-w-[250px] w-full  hover:bg-yellowColor hover:text-white">
          <span>
            <FaCartPlus />
          </span>
          <span>add to carts</span>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
