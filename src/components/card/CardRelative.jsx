import React, { useState } from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { PiBinocularsBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const CardRelative = ({ item }) => {
  const [cardHover, setCardHover] = useState(false);
  return (
    <NavLink
      to={`/product?id=${item.id}`}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      className="overflow-hidden group hover:shadow-itemShadow"
    >
      <div className="max-w-[400px] w-full relative overflow-hidden">
        <img
          className="object-contain w-full h-[340px] "
          src={`${cardHover ? item.images[1] : item.images[0]}`}
          alt=""
        />
        <ul className="absolute flex flex-col gap-3 text-sm top-4 right-4 transition-all opacity-0 group-hover:opacity-90 -translate-x-[50%] group-hover:translate-x-[5%]">
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
          className="absolute bottom-0 left-0 right-0 transition-all flex items-center justify-center gap-5 p-4 uppercase bg-darkPrimary border-b border-gray border-opacity-20 text-white 
         opacity-0 group-hover:opacity-100 translate-y-[50%] group-hover:translate-y-[0]
         hover:bg-yellow hover:text-white group/item 
         "
        >
          <span className="text-yellow group-hover/item:text-white">
            <FaCartPlus />
          </span>
          <span className="text-white group-hover/item:text-white">
            add to cart
          </span>
        </div>
      </div>
      <div className="z-0 flex flex-col items-center gap-2 p-5 capitalize">
        <h1 className="text-sm font-normal text-center text-black overflow-hidden overflow-ellipsis h-[30px]">
          {item?.title}
        </h1>
        <h2 className="text-sm font-normal text-center text-yellow">
          ${item?.price}
        </h2>
      </div>
    </NavLink>
  );
};

export default CardRelative;
