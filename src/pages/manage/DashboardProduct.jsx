import React, { Fragment, useState } from "react";
import DashboardHeading from "../../modules/dashboard/DashboardHeading";
import ActionView from "../../components/action/ActionView";
import ActionEdit from "../../components/action/ActionEdit";
import ActionDelete from "../../components/action/ActionDelete";
import { Chip, Typography, Card } from "@material-tailwind/react";
import { useDataFetcher } from "../../hooks/useFetchData";
import { useSelector } from "react-redux";
const TABLE_HEAD = [
  "id",
  "product",
  "categore/stock",
  "user",
  "status",
  "action",
];

const DashboardProduct = () => {
  const { products } = useSelector((state) => state.store);
  const [searchTerm, setSearchTerm] = useState("");
  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <DashboardHeading>Manage Product</DashboardHeading>
        <input
          type="search"
          placeholder="seach products"
          className="p-3 bg-transparent focus:border-warning max-w-[300px] w-full  border border-darkPrimary border-opacity-75 rounded-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Card shadow={false} className="w-full h-full mt-10">
        <table className="w-full text-left min-w-max">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="py-4 border-b border-blueColor-gray-100"
                >
                  <Typography
                    variant="small"
                    color="blueColor-gray"
                    className={
                      head === "product"
                        ? "text-sm  leading-none text-left  font-medium capitalize text-dark "
                        : "text-sm  leading-none text-center font-medium capitalize text-dark "
                    }
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterProducts.map((item, index) => {
              const isLast = index === products.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blueColor-gray-50";
              return (
                <tr
                  key={item.id}
                  className="text-center hover:bg-bgColor hover:bg-opacity-60"
                >
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blueColor-gray"
                      className="text-sm font-normal"
                      title={item?.id}
                    >
                      {item?.id.slice(0, 5) + "..."}
                    </Typography>
                  </td>
                  <td className="py-4 w-[500px]">
                    <Typography
                      variant="small"
                      color="blueColor-gray"
                      className="text-sm font-normal w-[500px]"
                    >
                      <span className="flex items-center justify-start gap-3 max-w-[500px]">
                        <span className="max-w-[150px] w-full  h-[100px]">
                          <img
                            className="object-contain w-full h-full rounded"
                            src={item?.images[0]}
                            alt={item?.category}
                          />
                        </span>
                        <span className="flex flex-col justify-start gap-1">
                          <span
                            className="font-medium overflow-hidden overflow-ellipsis h-[40px] max-w-[300px]"
                            style={
                              {
                                // textOverflow: "ellipsis",
                                // whiteSpace: "nowrap",
                              }
                            }
                            title={item?.title}
                          >
                            {item?.title}
                          </span>
                          <span>Date: {item?.createAt}</span>
                        </span>
                      </span>
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blueColor-gray"
                      className="text-sm font-normal text-center"
                    >
                      <span className="flex flex-col gap-1">
                        <span>{item?.category}</span>
                        <span>{item?.stock}</span>
                      </span>
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blueColor-gray"
                      className="text-sm font-normal"
                    >
                      <span>John Michael</span>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <div className="mx-auto text- w-max">
                      <Chip
                        size="lg"
                        variant="ghost"
                        value="APPROVED"
                        color={
                          status === ""
                            ? "green"
                            : status === "pending"
                            ? "amber"
                            : "red"
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blueColor-gray"
                      className="text-sm font-normal"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <ActionView></ActionView>
                        <ActionEdit></ActionEdit>
                        <ActionDelete></ActionDelete>
                      </span>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </Fragment>
  );
};

export default DashboardProduct;
