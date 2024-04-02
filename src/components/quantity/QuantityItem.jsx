import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const QuantityItem = ({ classname, quantity = 0 }) => {
  const [quantityItem, setQuantityItem] = useState(quantity);
  return (
    <div
      className={`flex select-none items-center justify-between gap-5 px-5 py-3 border border-gray w-[200px] border-opacity-30 ${classname}`}
    >
      <span onClick={() => setQuantityItem(quantityItem - 1)}>
        <FiMinus />
      </span>
      <span>{quantityItem}</span>
      <span onClick={() => setQuantityItem(quantityItem + 1)}>
        <FiPlus />
      </span>
    </div>
  );
};

export default QuantityItem;
