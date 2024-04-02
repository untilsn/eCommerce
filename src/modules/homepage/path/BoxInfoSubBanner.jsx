import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BoxInfoSubBanner = ({ title, subTitle, heading }) => {
  return (
    <div className="px-8 py-3">
      <h2 className="text-lg text-gray text-opacity-60">{heading}</h2>
      <h1 className="text-2xl font-semibold text-darkPrimary">
        {title} <br />
        <span className="text-2xl font-normal">{subTitle}</span>
      </h1>
      <a className="inline-flex items-center gap-3 px-3 py-1 -ml-3 bg-transparent rounded-full text-yellow hover:bg-yellow hover:text-white">
        Shop Now
        <span>
          <FaLongArrowAltRight />
        </span>
      </a>
    </div>
  );
};

export default BoxInfoSubBanner;
