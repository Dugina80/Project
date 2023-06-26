import React from "react";

import "../../assets/styles/HomePage.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";

import FotoOne from "../../image/slider/332000872_913055836411948_3735137215035282734_n.jpg";
import FotoTwo from "../../image/slider/зображення_viber_2023-06-22_19-32-36-978.jpg";
import FotoThree from "../../image/slider/FB_IMG_1637431688666.jpg";
import Fotofour from "../../image/slider/зображення_viber_2023-06-22_13-04-57-475.jpg";

import Tr1 from "../../image/306784195_1138756650066873_8617978372212699088_n.jpg";
import Tr2 from "../../image/322401271_981621899479098_2944052154766725554_n.jpg";

function HomePage() {
  return (
    <section>
      <div className="hp-block_one">
        <div className="hp-block_one-content">
          <h2 className="hp-block_one-content_title">
            ТАНЦЮВАЛЬНА СТУДІЯ "TOP-DANCE GUBA-TEAM"
          </h2>
          <p className="hp-block_one-content_text">
            <span>Танцювальна школа GUBA-TEAM поєднує в собі:</span>
            <ul>
              <li>
                Унікальну можливість навчитися танцювати для тих, хто звик
                вибагливо вибирати місце, де можна виплеснути свої емоції у
                танці;
              </li>
              <br />
              <li>
                Можливість кожному бажаючому, незалежно новачок ти чи
                професіонал, з легкістю поринути у світ запальних сучасних
                танців;
              </li>
              <br />
              <li>
                Незвичайність інтер'єру та персональний підхід до кожного
                дозволяють побачити найменші побажання навіть найвибагливіших
                відвідувачів та відкрити нові можливості для навчання сучасним
                танцям та розкриття власного танцю через магію руху. Затишний та
                незвичайний інтер'єр танцювальних залів, професійні педагоги,
                які не залишать ваші емоції порожніми, вдихнуть у вас ритм і
                пластику танцю та позитивний настрій, якнайшвидше досягнення
                поставлених цілей.
              </li>
            </ul>
          </p>
        </div>
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={FotoOne}
              alt=""
              style={{ maxwidth: "800px", height: "533px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={FotoTwo}
              alt=""
              style={{ maxwidth: "800px", height: "533px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={FotoThree}
              alt=""
              style={{ maxwidth: "800px", height: "533px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Fotofour}
              alt=""
              style={{ maxwidth: "800px", height: "533px" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hp-trainer">
        <h2 className="hp-trainer_title">НАШІ ТРЕНЕРИ</h2>
        <div className="hp-trainer_foto">
          <div>
            <h3>Юлія Губа</h3>
            <img src={Tr1} alt="foto trainer" />
          </div>
          <div>
            <h3>Сергій Губа</h3>
            <img src={Tr2} alt="foto trainer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
