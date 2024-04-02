import React from "react";
import CardShop from "../../components/card/CardShop";
import { v4 } from "uuid";

const ShopDisplay = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1>Showing Products</h1>
        <div>
          <span>sort by:</span>
          <select name="" id="">
            <option value="top">top</option>
            <option value="low">low</option>
            <option value="mid">mid</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {Array(9)
          .fill(0)
          .map((item) => (
            <CardShop key={v4()}></CardShop>
          ))}
      </div>
    </div>
  );
};

export default ShopDisplay;
