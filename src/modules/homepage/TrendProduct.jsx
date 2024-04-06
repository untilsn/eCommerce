import React from "react";
import CardReview from "../../components/card/CardReview";
import CardItem from "../../components/card/CardItem";
import TitlePath from "../../components/title/TitlePath";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { v4 } from "uuid";

const TrendProduct = () => {
  return (
    <div>
      <TitlePath>Trending Products</TitlePath>
      <div className="flex items-center gap-2 mt-10">
        <CardReview></CardReview>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
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

export default TrendProduct;
