import React from "react";
import { Checkbox } from "@material-tailwind/react";

const CheckboxItem = ({ children = "Free Shipping", labelItem }) => {
  return (
    <div className="flex items-center justify-between">
      <Checkbox
        className="checked:border-yellow checked:p-1 checked:bg-yellow"
        label={labelItem}
      />
      <div className="text-lg text-dark text-opacity-80">{children}</div>
    </div>
  );
};

export default CheckboxItem;
