import React from "react";
import TitlePath from "../title/TitlePath";
import CheckboxItem from "../checkbox/CheckboxItem";
import { Link } from "react-router-dom";
import ButtonForm from "../button/ButtonForm";

const CardTotal = () => {
  return (
    <div className="flex flex-col p-5 border border-dashed rounded border-opacity-20 border-dark bg-gray bg-opacity-5">
      <TitlePath classname="text-xl !font-normal border-b border-gray border-opacity-20 pb-5">
        Cart Total
      </TitlePath>
      <div className="flex items-center justify-between py-5 border-b_primary">
        <TitlePath classname="text-xl !font-normal">Subtotal:</TitlePath>
        <span className="text-xl ">$324.98</span>
      </div>
      <div className="py-5">
        <TitlePath classname="text-xl !font-normal">Shipping:</TitlePath>
        <div className="flex flex-col py-10">
          <CheckboxItem labelItem="Free Shipping">$0.00</CheckboxItem>
          <CheckboxItem labelItem="Standard:">$10.00</CheckboxItem>
          <CheckboxItem labelItem="Express:"> $20.00</CheckboxItem>
        </div>
      </div>
      <TitlePath classname="text-xl !font-normal">
        Estimate for Your Country
      </TitlePath>
      <Link
        to="/dashboard"
        className="py-3 text-lg border-b_primary text-dark text-opacity-80 max-w-[200px] w-full"
      >
        Change address
      </Link>
      <div className="flex items-center justify-between py-5 border-t border-gray border-opacity-20">
        <TitlePath classname="text-xl !font-normal text-yellow">
          Total:
        </TitlePath>
        <TitlePath classname="text-xl !font-normal text-yellow">
          $324.98
        </TitlePath>
      </div>
      <ButtonForm classname="border-[2px]">proceed to checkout</ButtonForm>
    </div>
  );
};

export default CardTotal;
