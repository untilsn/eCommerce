import React, { Fragment, useState } from "react";
import DashboardHeading from "../../modules/dashboard/DashboardHeading";
import ActionView from "../../components/action/ActionView";
import ActionEdit from "../../components/action/ActionEdit";
import ActionDelete from "../../components/action/ActionDelete";
import { Chip, Typography, Card } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import Pagination from "../../components/pagination/Pagination";
const TABLE_HEAD = ["id", "name", "slug", "status", "action"];
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
const DashboardCategory = () => {
  useFetchCategory();
  const { categories } = useSelector((state) => state.store);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const filterCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const lastPostIndex = currentPage * itemPerPage;
  const firstPostIndex = lastPostIndex - itemPerPage;
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
      <Card shadow={false} className="w-full mt-10">
        <table className="w-full text-left min-w-max">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 border-b border-gray-100">
                  <Typography
                    variant="small"
                    color="gray"
                    className={
                      head === "status"
                        ? "text-sm leading-none text-center font-medium capitalize text-dark"
                        : head === "action"
                        ? "text-sm leading-none text-center font-medium capitalize text-dark"
                        : "text-sm leading-none text-left font-medium capitalize text-dark"
                    }
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterCategories
              .slice(firstPostIndex, lastPostIndex)
              .map((item, index) => {
                const isLast = index === filterCategories.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-50";
                return (
                  <tr
                    key={item?.id}
                    className=" hover:bg-bgColor hover:bg-opacity-60"
                  >
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="gray"
                        className="text-sm font-normal"
                      >
                        {item?.id}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="gray"
                        className="text-sm font-normal"
                      >
                        <span className="font-medium capitalize">
                          {item?.name}
                        </span>
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="gray"
                        className="text-sm font-normal "
                      >
                        <span>{item?.slug}</span>
                      </Typography>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center justify-center text">
                        <Chip
                          size="lg"
                          variant="ghost"
                          value="Approved"
                          color="green"
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="gray"
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
      <Pagination
        totalPost={filterCategories?.length}
        currentPage={currentPage}
        postPerPage={itemPerPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </Fragment>
  );
};

export default DashboardCategory;
