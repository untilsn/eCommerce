import React from "react";
import ShopNavigation from "./ShopNavigation";
import CardItem from "../../components/card/CardItem";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";

const ShopReview = () => {
  const { products } = useSelector((state) => state.store);
  return (
    <div>
      <ShopNavigation></ShopNavigation>
      <div className="mt-10">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          {products.slice(0, 8).map((item) => (
            <SwiperSlide key={v4()}>
              <CardItem item={item}></CardItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopReview;
