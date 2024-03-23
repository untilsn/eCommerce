import React from "react";
import SearchInput from "../search/SearchInput";
import HeaderFeature from "../../utils/HeaderFeature";
import { iconHeaderList } from "../icon/Icons";

const HeaderBottom = () => {
  return (
    <div className="grid items-center justify-between grid-cols-4 py-3">
      <div className="max-w-[105px] w-full ">
        <img
          src="./logo.png"
          alt="logo"
          className="object-cover w-full h-full"
        />
      </div>
      <SearchInput></SearchInput>
      <div className="flex items-center justify-end gap-10">
        {iconHeaderList.map((item) => (
          <HeaderFeature key={item.title} icon={item.icon}>
            {item.title}
          </HeaderFeature>
        ))}
      </div>
    </div>
  );
};

export default HeaderBottom;
