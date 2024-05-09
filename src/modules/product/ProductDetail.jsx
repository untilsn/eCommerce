import React, { useEffect, useState } from "react";
import { FaCartPlus, FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SupportService } from "../../components/icon/IconService";
import SupportServicesItem from "../homepage/path/SupportServicesItem";
import { FooterIconContact } from "../../components/icon/IconContact";
import { ReviewIcon } from "../../components/card/CardItem";
import { v4 } from "uuid";
import QuantityItem from "../../components/quantity/QuantityItem";

const ProductDetail = ({ item }) => {
  if (!item) return null;
  const [image, setImage] = useState(item.images?.[0]);
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="grid grid-cols-2 mt-10 mb-20 gap-7">
      {/* show image */}
      <div className="grid items-start grid-cols-[max(100px)_1fr] gap-3">
        <div className="grid w-full grid-rows-4 gap-3 ">
          {item?.images?.slice(0, 5).map((img) => (
            <div
              onClick={() => setImage(img)}
              key={v4()}
              className={`${
                image === img ? "border border-yellowColor" : ""
              } max-w-[100px] w-full h-[100px] `}
            >
              <img className="object-cover w-full h-full " src={img} alt="" />
            </div>
          ))}
        </div>
        <div className="w-full h-full">
          <img
            className="object-contain w-full  max-h-[474px] "
            src={image}
            alt=""
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl text-darkPrimary">{item?.title}</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center ">
            {Array(5)
              .fill(0)
              .map((item) => (
                <ReviewIcon key={v4()}></ReviewIcon>
              ))}
          </div>
          <span className="capitalize text-gray text-opacity-60">
            ( {item?.reviews?.length} reviews )
          </span>
        </div>
        <h2 className="text-3xl font-normal text-yellowColor">${item.price}</h2>
        <p className="text-sm font-light text-gray text-opacity-80">
          {item.desc}
        </p>
        <div className="flex items-center gap-5 text-sm text-dark text-opacity-90">
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
        <div className="flex items-center gap-5 text-sm text-dark text-opacity-90">
          qty:
          <QuantityItem></QuantityItem>
        </div>
        {/* add and wishlist */}
        <div className="flex items-center gap-10 mb-5">
          <div className="flex items-center justify-center gap-5 p-4 uppercase bg-white border border-gray border-opacity-20 text-yellowColor max-w-[250px] w-full  hover:bg-yellowColor hover:text-white">
            <span>
              <FaCartPlus />
            </span>
            <span>add to carts</span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <span>
              <CiHeart className="text-yellowColor" />
            </span>
            <span className="hover:text-yellowColor hover:underline">
              Add to Wishlist
            </span>
          </div>
        </div>
        {/* category */}
        <div className="py-5 text-sm font-light border-t text-gray border-gray border-opacity-2">
          category: women
        </div>
        {/* share */}
        <div className="flex items-center gap-3 text-sm capitalize">
          share:{" "}
          <div className="flex items-center gap-2">
            {FooterIconContact.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center p-3 text-sm text-white bg-black border border-black rounded-full bg-opacity-85 hover:bg-white hover:text-black "
              >
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
