import React from "react";
import { v4 } from "uuid";
import CardRelative from "../../components/card/CardRelative";
import TitlePath from "../../components/title/TitlePath";

const ShopRelative = () => {
  return (
    <div>
      <TitlePath classname="mt-20 text-4xl font-normal text-center">
        You May Also Like
      </TitlePath>
      <div className="grid grid-cols-4 gap-10 my-20">
        {Array(4)
          .fill(0)
          .map((item) => (
            <CardRelative key={v4()}></CardRelative>
          ))}
      </div>
    </div>
  );
};

export default ShopRelative;
