import React from "react";
import ProductDetail from "../modules/product/ProductDetail";
import ProductDesc from "../modules/product/ProductDesc";
import ShopRelative from "../modules/shop/ShopRelative";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const ProductPage = () => {
  return (
    <div>
      <Breadcrumb children="product"></Breadcrumb>
      <div className="container">
        <ProductDetail></ProductDetail>
        <ProductDesc></ProductDesc>
        <ShopRelative></ShopRelative>
      </div>
    </div>
  );
};

export default ProductPage;
