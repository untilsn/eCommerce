import React from "react";
import ShopNavigation from "./ShopNavigation";
import CardItem from "../../components/card/CardItem";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const ShopReview = () => {
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
          {Array(5)
            .fill(0)
            .map((item) => (
              <SwiperSlide key={v4()}>
                <CardItem></CardItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopReview;
