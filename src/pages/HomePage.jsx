import React, { Fragment } from "react";
import Banner from "../modules/homepage/Banner";
import SubBanner from "../modules/homepage/SubBanner";
import ShopReview from "../modules/shopReview/ShopReview";
import PromoBanner from "../components/banner/PromoBanner";
import DealOutlet from "../modules/homepage/DealOutlet";
import BrandBanner from "../modules/homepage/BrandBanner";
import TrendProduct from "../modules/homepage/TrendProduct";
import SupportServicesBanner from "../modules/homepage/SupportServicesBanner";
import FooterBanner from "../modules/homepage/footer/FooterBanner";
import FooterContact from "../modules/homepage/footer/FooterContact";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container py-10">
        <Banner></Banner>
        <ShopReview></ShopReview>
        <PromoBanner></PromoBanner>
      </div>
      <div className="w-full py-16 bg-bgColor">
        <DealOutlet></DealOutlet>
      </div>
      <div className="container">
        <BrandBanner></BrandBanner>
        <TrendProduct></TrendProduct>
        <SupportServicesBanner></SupportServicesBanner>
        <FooterBanner></FooterBanner>
        <FooterContact></FooterContact>
      </div>
    </Fragment>
  );
};

export default HomePage;
