import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import ShopBanner from "../modules/shop/ShopBanner";
import { FaCartPlus } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { FooterIconContact } from "../components/icon/IconContact";
import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebaseConfigure";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useFetchingWishlists } from "../hooks/useFetchingWishlists";

const TABLE_HEAD = ["Product", "Price", "Stock Status", ""];

const WishlistPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { wishlistArray } = useSelector((state) => state.store);
  useFetchingWishlists(user);

  const handleDeleteWishlist = async (item) => {
    if (!item) return;
    try {
      const docRef = collection(db, "wishlists");
      const queryWishlists = query(
        docRef,
        where("productId", "==", item),
        where("userId", "==", user.uid)
      );
      const querySnapshot = await getDocs(queryWishlists);
      querySnapshot.forEach(async (doc) => {
        try {
          await deleteDoc(doc.ref);
          toast.success("Remove from wishlist success!");
        } catch (error) {
          console.log("Error removing document: ", error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ShopBanner title="wishlist" />
      <Breadcrumb children="shop" url="Wishlist" />
      <div className="container">
        {/* table */}
        {wishlistArray?.length === 0 ? (
          <div className="flex flex-col items-center w-full gap-5 p-20 ">
            <FaCartPlus className="text-6xl text-grayDark"></FaCartPlus>
            <h1 className="text-xl text-dark">No products added to wishlist</h1>
            <Link className="p-4 text-white capitalize bg-yellow" to={"/shop"}>
              go shop
            </Link>
          </div>
        ) : (
          <Card shadow={false} className="container w-full h-full mt-20">
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="p-4 border-b border-blue-gray-100 "
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-base font-medium leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {wishlistArray?.map((item, index) => {
                  const isLast = index === wishlistArray?.length - 1;
                  const classes = isLast
                    ? "p-4 text-base"
                    : "p-4 border-b border-blue-gray-50 text-base";
                  return (
                    <tr key={item?.id}>
                      <td className={`${classes} max-w-[580px] `}>
                        <div className="flex items-center gap-5">
                          <Link
                            to={`/product?id=${item.id}`}
                            className="max-w-[100px] w-[100px] h-[100px]"
                          >
                            <img
                              className="object-cover w-full h-full"
                              src={item?.images[0]}
                              alt=""
                            />
                          </Link>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex-1 text-base font-medium hover:text-yellow"
                          >
                            <Link to={`/product?id=${item.id}`}>
                              {item?.title}
                            </Link>
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="text-lg text-left font-base text-yellow"
                        >
                          ${item?.price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="text-lg text-left font-base text-yellow"
                        >
                          {item?.stock?.length !== 0 ? "In stock" : "Out stock"}
                        </Typography>
                      </td>
                      <td className={`${classes} max-w-[270px]`}>
                        <div className="flex items-center gap-8 text-sm font-medium text-center text-yellow w-[270px]">
                          <span className="flex items-center justify-center gap-5 p-4 uppercase bg-white border border-gray border-opacity-20 text-yellow max-w-[250px] w-full  hover:bg-yellow hover:text-white">
                            <span>
                              <FaCartPlus />
                            </span>
                            <span>Add to Cart</span>
                          </span>
                          <span onClick={() => handleDeleteWishlist(item.id)}>
                            <IoCloseOutline className="text-3xl text-gray text-opacity-65 hover:text-opacity-100" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        )}

        <div className="flex items-center gap-5 my-20">
          <span className="text-base text-gray text-opacity-60">Share on:</span>
          <div className="flex items-center gap-2">
            {FooterIconContact.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center p-3 bg-white border rounded-full text-gray border-gray hover:text-yellow hover:border-yellow"
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
