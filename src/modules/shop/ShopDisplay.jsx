import {
  BsGrid,
  BsGrid3X2Gap,
  BsGrid3X2GapFill,
  BsGridFill,
} from "react-icons/bs";
import CardShop from "../../components/card/CardShop";

import { useDataFetcher } from "../../hooks/useFetchData";
import { useSelector } from "react-redux";
import { useState } from "react";
import CardGrid from "../../components/card/CardGrid";
import { BiGridHorizontal, BiGridSmall } from "react-icons/bi";

const ShopDisplay = () => {
  const { products } = useSelector((state) => state.store);
  const [isActive, setIsActive] = useState("grid-1");
  useDataFetcher();
  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1 className="text-sm">
          Showing{" "}
          <span>
            {products?.length} of {products?.length}
          </span>{" "}
          Products
        </h1>
        <div className="flex items-center gap-5">
          <div>
            <span>sort by: </span>
            <select name="" id="">
              <option value="top">top</option>
              <option value="low">low</option>
              <option value="mid">mid</option>
            </select>
          </div>
          <div className="flex items-end gap-3 text-2xl">
            <BiGridSmall
              onClick={() => setIsActive("grid-1")}
              className={`${
                isActive === "grid-1"
                  ? "opacity-100"
                  : "opacity-20 hover:opacity-100"
              } transition-all`}
            />
            <BiGridHorizontal
              onClick={() => setIsActive("grid-4")}
              className={`${
                isActive === "grid-4"
                  ? "opacity-100"
                  : "opacity-20 hover:opacity-100"
              } transition-all`}
            />
          </div>
        </div>
      </div>
      {isActive === "grid-1" ? (
        <div className="grid grid-cols-1 gap-5">
          {products.map((item) => (
            <CardGrid key={item.id} item={item}></CardGrid>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {products?.map((item) => (
            <CardShop key={item.id} item={item}></CardShop>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopDisplay;
