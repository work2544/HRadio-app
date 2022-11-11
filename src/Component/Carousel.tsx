import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "../Assets/css/styles.css";

// import required modules
import SwiperCore,{ Pagination,Autoplay } from "swiper";
function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{pauseOnMouseEnter:true}}
      pagination={{clickable:true}}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
       modules={[Pagination,Autoplay]}
      className="bannerSwiper"
    >
      <SwiperSlide>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
          className="bannerimage"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg"
          className="bannerimage"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"
          className="bannerimage"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"
          className="bannerimage"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(21).jpg"
          className="bannerimage"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          className="bannerimage"
          alt="..."
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
