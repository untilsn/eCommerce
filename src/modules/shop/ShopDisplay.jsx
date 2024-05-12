import React, { useEffect, useState } from "react";
import { BiGridHorizontal, BiGridSmall } from "react-icons/bi";
import CardGrid from "../../components/card/CardGrid";
import CardShop from "../../components/card/CardShop";
import { useSelector } from "react-redux";
import { Input } from "@material-tailwind/react";
import Pagination from "../../components/pagination/Pagination";

const ShopDisplay = () => {
  const { categoryProducts } = useSelector((state) => state.store);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);
  const lastPostIndex = currentPage * itemPerPage;
  const firstPostIndex = lastPostIndex - itemPerPage;

  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState("grid-1");

  const filterProducts = categoryProducts?.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1 className="text-sm">
          Showing{" "}
          <span>
            {filterProducts?.length} of {categoryProducts?.length}
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
          <div>
            <Input
              variant="standard"
              label="search products"
              placeholder="Search products..."
              color="black"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </div>
        </div>
      </div>
      {filterProducts?.length > 0 ? (
        <div>
          {isActive === "grid-1" ? (
            <div className="grid grid-cols-1 gap-5">
              {filterProducts
                .slice(firstPostIndex, lastPostIndex)
                .map((item) => (
                  <CardGrid key={item.id} item={item}></CardGrid>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-6">
              {filterProducts
                .slice(firstPostIndex, lastPostIndex)
                .map((item) => (
                  <CardShop key={item.id} item={item}></CardShop>
                ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-base font-light text-gray">
          No products matching your selection.
        </div>
      )}
      <div className="flex justify-center w-full">
        <Pagination
          totalPost={categoryProducts?.length}
          postPerPage={itemPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default ShopDisplay;
