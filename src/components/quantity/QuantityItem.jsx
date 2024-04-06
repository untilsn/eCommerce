import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const QuantityItem = ({ classname, quantity = 0 }) => {
  const [quantityItem, setQuantityItem] = useState(quantity);
  return (
    <span
      className={`flex select-none items-center justify-between gap-5 px-5 py-3 border border-gray w-[200px] border-opacity-30 ${classname}`}
    >
      <span onClick={() => setQuantityItem(quantityItem - 1)}>
        <span>
          <FiMinus />
        </span>
      </span>
      <span>{quantityItem}</span>
      <span onClick={() => setQuantityItem(quantityItem + 1)}>
        <span>
          <FiPlus />
        </span>
      </span>
    </span>
  );
};

export default QuantityItem;
