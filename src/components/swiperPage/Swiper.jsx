import React from "react";
import "./style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
// import all photos
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
// install Swiper modules
SwiperCore.use([Navigation]);
let Swiperr = () => {
  return (
    <>
      <Swiper navigation={true} className="Swiper">
        <SwiperSlide className="Swiper__item">
          <div className="Swiper__item-title">
            <h1>
              Ассоциация по цифровой <br /> маркировке товаров <br /> и
              фискализации в КР
            </h1>
          </div>

          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper__item">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper__item">
          <img src={img3} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide className="Swiper__item">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Swiper__item">
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Swiperr;
