import React from "react";
import CardReview from "../../components/card/CardReview";
import CardItem from "../../components/card/CardItem";
import TitlePath from "../../components/title/TitlePath";

const TrendProduct = () => {
  return (
    <div>
      <TitlePath>Trending Products</TitlePath>
      <div className="flex items-center gap-5 mt-10">
        <CardReview></CardReview>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
      </div>
    </div>
  );
};

export default TrendProduct;
