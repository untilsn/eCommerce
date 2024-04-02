import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollTopButton = () => {
  return (
    <a
      href="#"
      className="fixed p-5 rounded cursor-pointer bg-light text-gray hover:bg-light bg-opacity-80 bottom-10 right-10"
    >
      <FaArrowUpLong />
    </a>
  );
};

export default ScrollTopButton;
