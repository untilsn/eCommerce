import React, { useEffect, useState } from "react";
import ProductDetail from "../modules/product/ProductDetail";
import ProductDesc from "../modules/product/ProductDesc";
import ShopRelative from "../modules/shop/ShopRelative";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { useLocation, useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfigure";
import { useQueryData } from "../hooks/useQueryData";

const ProductPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");

  const [detailItem] = useQueryData(productId);

  console.log(detailItem);
  return (
    <div>
      <Breadcrumb children="product"></Breadcrumb>
      <div className="container">
        <ProductDetail item={detailItem}></ProductDetail>
        <ProductDesc item={detailItem}></ProductDesc>
        <ShopRelative></ShopRelative>
      </div>
    </div>
  );
};

export default ProductPage;
