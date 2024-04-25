import CardShop from "../../components/card/CardShop";

import { useDataFetcher } from "../../hooks/useFetchData";
import { useSelector } from "react-redux";

const ShopDisplay = () => {
  const { products } = useSelector((state) => state.store);
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
        <div>
          <span>sort by: </span>
          <select name="" id="">
            <option value="top">top</option>
            <option value="low">low</option>
            <option value="mid">mid</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products?.map((item) => (
          <CardShop key={item.id} item={item}></CardShop>
        ))}
      </div>
    </div>
  );
};

export default ShopDisplay;
