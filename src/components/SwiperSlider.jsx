import React, { useEffect } from 'react';
import Swiper from 'swiper';

import "../assets/styles/components/SwiperSlider.scss";

import FotoOne from "../image/slider/332000872_913055836411948_3735137215035282734_n.jpg";
import FotoTwo from "../image/slider/354252871_1311020082840528_4295899479250242698_n.jpg";
import FotoThree from "../image/slider/DSC_0782.jpg";


const SwiperSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
        direction: "horizontal",
        slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide"><img src={FotoOne} alt="FotoOne" /></div>
        <div className="swiper-slide"><img src={FotoTwo} alt="FotoTwo" style={{width: "800px" , height: '533px'}} /></div>
        <div className="swiper-slide"><img src={FotoThree} alt="FotoThree" style={{width: "800px" , height: '533px'}}/></div>
        {/* Добавьте нужное количество слайдов */}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperSlider;