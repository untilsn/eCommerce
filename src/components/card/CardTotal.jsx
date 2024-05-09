import React, { useEffect, useState } from "react";
import TitlePath from "../title/TitlePath";
import CheckboxCart from "../checkbox/CheckboxCart";
import { Link } from "react-router-dom";
import ButtonForm from "../button/ButtonForm";
import { useSelector } from "react-redux";
import { Radio } from "@material-tailwind/react";

const CardTotal = () => {
  const { total } = useSelector((state) => state.store);
  const [totalCheckout, setTotalCheckout] = useState(total);

  useEffect(() => {
    setTotalCheckout(total);
  }, [total]);

  const handleCheckShipping = (shipping) => {
    const newTotal = parseFloat(total) + parseFloat(shipping);
    setTotalCheckout(newTotal.toFixed(2)); // Cập nhật tổng mới
  };
  return (
    <div className="flex flex-col pt-5 pb-10 border border-dashed rounded px-7 border-opacity-20 border-dark bg-gray bg-opacity-5">
      <TitlePath classname="text-lg !font-normal border-b border-gray border-opacity-20 pb-5">
        Cart Total
      </TitlePath>
      <div className="flex items-center justify-between py-5 border-b_primary">
        <TitlePath classname="text-base !font-normal">Subtotal:</TitlePath>
        <span className="text-base ">${total || 0}</span>
      </div>
      <div className="py-5">
        <TitlePath classname="text-base !font-normal">Shipping:</TitlePath>
        <div className="flex flex-col py-10">
          <CheckboxCart
            onChange={() => handleCheckShipping(0.0)}
            price="0.00"
            labelItem="Free Shipping"
          ></CheckboxCart>
          <CheckboxCart
            onChange={() => handleCheckShipping(10.0)}
            price="10.00"
            labelItem="Standard:"
          ></CheckboxCart>
          <CheckboxCart
            onChange={() => handleCheckShipping(20.0)}
            price="20.00"
            labelItem="Express:"
          ></CheckboxCart>
        </div>
      </div>
      <TitlePath classname="text-base !font-normal">
        Estimate for Your Country
      </TitlePath>
      <Link
        to="/dashboard"
        className="py-3 text-base border-b_primary text-dark text-opacity-80 max-w-[200px] w-full"
      >
        Change address
      </Link>
      <div className="flex items-center justify-between py-5 border-t border-gray border-opacity-20">
        <TitlePath classname="text-lg !font-normal text-yellowColor">
          Total:
        </TitlePath>
        <TitlePath classname="text-lg !font-normal text-yellowColor hover:underline">
          ${totalCheckout}
        </TitlePath>
      </div>
      <ButtonForm classname="border-[2px]">proceed to checkout</ButtonForm>
    </div>
  );
};

export default CardTotal;
