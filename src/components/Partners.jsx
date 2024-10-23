import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const Partners = () => {
  return (
    <div className="partners">
      <Swiper
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
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
          <img
            className="swiperSlider-img"
            src="img/part1.png"
            alt="Partner 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part2.png"
            alt="Partner 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part3.png"
            alt="Partner 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part4.png"
            alt="Partner 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part5.png"
            alt="Partner 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part6.png"
            alt="Partner 6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part7.png"
            alt="Partner 7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part8.png"
            alt="Partner 8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part9.png"
            alt="Partner 9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part10.png"
            alt="Partner 10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part12.png"
            alt="Partner 12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part13.jpeg"
            alt="Partner 13"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part14.png"
            alt="Partner 14"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part15.png"
            alt="Partner 15"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiperSlider-img"
            src="img/part16.png"
            alt="Partner 16"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
