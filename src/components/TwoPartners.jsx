/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const TwoPartners = () => {
  return (
    <div className="partners">
      <Swiper
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          375: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part12.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part13.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part14.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part15.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperSlider-img" src="img/part16.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TwoPartners;
