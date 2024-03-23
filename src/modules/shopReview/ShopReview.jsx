import React from "react";
import ShopNavigation from "./ShopNavigation";
import CardItem from "../../components/card/CardItem";
import { v4 } from "uuid";

const ShopReview = () => {
  return (
    <div>
      <ShopNavigation></ShopNavigation>
      <div className="grid grid-cols-4 gap-5 mt-16">
        {Array(4)
          .fill(0)
          .map((item) => (
            <CardItem key={v4()}></CardItem>
          ))}
      </div>
    </div>
  );
};

export default ShopReview;
