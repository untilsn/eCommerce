import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { IoCloseOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfigure";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { displayTotal } from "../../redux/slice/storeSlice";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["product", "price", "quantity", "total"];

const Table = ({ item }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const initialQuantities = {};
  item.forEach((doc) => {
    initialQuantities[doc.productId] = 1; // Đặt giá trị mặc định là 1 cho mỗi sản phẩm
  });
  const [quantities, setQuantities] = useState(initialQuantities);
  const [totalPrices, setTotalPrices] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  // Tính tổng giá khi số lượng thay đổi

  useEffect(() => {
    let total = 0;
    item.forEach((doc) => {
      const price = doc.price || 0;
      const quantity = quantities[doc.productId] || 0;
      total += price * quantity;
    });
    dispatch(displayTotal(total.toFixed(2)));
    setTotalPrice(total);
  }, [item, quantities]);
  useEffect(() => {
    const newTotalPrices = {};
    Object.keys(quantities).forEach((itemId) => {
      const quantity = quantities[itemId];
      const price = item.find((i) => i.productId === itemId)?.price || 0;
      newTotalPrices[itemId] = quantity * price;
    });
    setTotalPrices(newTotalPrices);
  }, [quantities, item]);

  const handleIncreQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecreQuantity = (itemId) => {
    if (quantities[itemId] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: (prevQuantities[itemId] || 0) - 1,
      }));
    }
  };

  const handleRemoveCart = async (productId) => {
    try {
      const wishlistRef = collection(db, "carts");
      const queryWishlists = query(
        wishlistRef,
        where("productId", "==", productId),
        where("userId", "==", user.id)
      );
      const querySnapshot = await getDocs(queryWishlists);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        await deleteDoc(doc.ref);
        toast.success("remove success");
      } else {
        console.log("No matching documents found.");
      }
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <Card shadow={false} className="w-full mb-10">
      <table className="w-full text-left min-w-max">
        <thead className="">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="p-4 border-b border-gray border-opacity-40"
              >
                <Typography
                  variant="small"
                  color="gray"
                  className={
                    head === "product" || head === "total"
                      ? "text-base font-normal leading-none text-left capitalize text-dark "
                      : "text-base font-normal leading-none text-center capitalize text-dark "
                  }
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {item.map((doc) => {
            const total = totalPrices[doc.productId] || 0;
            return (
              <tr key={doc.productId}>
                <td className="p-4 max-w-[440px]">
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-sm font-normal"
                  >
                    <span className="flex items-center gap-2">
                      <Link
                        to={`/product?id=${doc.productId}`}
                        className="hover:shadow-sm max-w-[60px] w-full h-[80px]"
                      >
                        <img
                          className="object-contain w-full h-full "
                          src={doc?.images[0]}
                          alt="img"
                        />
                      </Link>
                      <Link
                        to={`/product?id=${doc.productId}`}
                        className="text-base font-medium text-dark overflow-hidden overflow-ellipsis h-[50px] hover:text-yellowColor"
                      >
                        {doc?.title}
                      </Link>
                    </span>
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-lg font-normal text-center"
                  >
                    ${doc?.price}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography>
                    <span className="flex select-none items-center justify-between px-2  py-3 border border-gray w-[100px] border-opacity-30 ">
                      <span onClick={() => handleDecreQuantity(doc.productId)}>
                        <FiMinus />
                      </span>
                      <span>{quantities[doc.productId] || 0}</span>
                      <span onClick={() => handleIncreQuantity(doc.productId)}>
                        <FiPlus />
                      </span>
                    </span>
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-between gap-3 text-lg max-w-[120px] w-full font-medium text-center text-yellowColor"
                  >
                    ${total.toFixed(2)}
                    <span
                      className="text-dark"
                      onClick={() => handleRemoveCart(doc.productId)}
                    >
                      <IoCloseOutline></IoCloseOutline>
                    </span>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
