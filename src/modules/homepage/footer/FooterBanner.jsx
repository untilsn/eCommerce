import React from "react";
import footerBanner from "/code/eCommerce-redux/public/footerbanner.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

import { FooterIconContact } from "../../../components/icon/IconContact";
const FooterBanner = () => {
  return (
    <div
      className="p-5 mb-20"
      style={{
        backgroundImage: `url(${footerBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center gap-10 p-10 bg-white">
        {/* right content */}
        <div className="flex-1 text-center">
          <h1 className="text-4xl">Shop Social</h1>
          <p className="mt-5 text-xl font-normal text-gray text-opacity-60">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci.
          </p>
          {/* icon contact */}
          <div className="flex items-center justify-center gap-5 mt-10">
            {FooterIconContact.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center justify-center p-4 text-2xl text-white rounded-full bg-purple"
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
        {/* line */}
        <div className="h-[400px] max-w-[1px] w-full bg-gray bg-opacity-20"></div>
        {/* left content */}
        <div className="flex-1 text-center">
          <h1 className="text-4xl">Get the Latest Deals</h1>
          <span className="text-xl font-normal text-gray text-opacity-60">
            and
          </span>
          <p className="text-xl font-normal text-gray text-opacity-60">
            receive <span className="text-yellow">$20 coupon</span> for first
            shopping
          </p>
          {/* input */}
          <div className="input-group inline-flex max-w-[400px] w-full items-center border border-gray border-opacity-40 mt-10 rounded-full ">
            <input
              type="email"
              className="w-full px-5 py-3 bg-transparent border-none rounded-l-full outline-none form-control"
              placeholder="Enter your Email Address"
              aria-label="Email Adress"
              required=""
            />
            <div className="px-6 py-4 rounded-r-full input-group-append bg-yellow">
              <button
                className="text-white btn btn-primary btn-rounded"
                type="submit"
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
