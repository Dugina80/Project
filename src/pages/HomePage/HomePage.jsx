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

import FotoS2One from "../../image/slider2/57277852_376591489616730_7235561189722292224_n.jpg";
import FotoS2Two from "../../image/slider2/249203907_938717596737447_1859051773609849448_n.jpg";
import FotoS2Three from "../../image/slider2/259609488_954096285199578_6930681227603225965_n.jpg";
import FotoS2Four from "../../image/slider2/120135995_701159680493241_7606187436324117675_n.jpg";
import FotoS2Five from "../../image/slider2/59532126_384009075541638_6543713040045441024_n.jpg";

import Tr1 from "../../image/306784195_1138756650066873_8617978372212699088_n.jpg";
import Tr2 from "../../image/322401271_981621899479098_2944052154766725554_n.jpg";

function HomePage() {
  return (
    <section className="hd-block">
      <div className="hp-block_one">
        <div className="hp-block_one-content">
          <h2 className="hp-block_one-content_title">
            ТАНЦЮВАЛЬНА СТУДІЯ "TOP-DANCE GUBA-TEAM"
          </h2>
          <p className="hp-block_one-content_text">
            <span>Танцювальна школа GUBA-TEAM поєднує в собі:</span>
            <br />
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
            <img src={FotoOne} alt="FotoOne" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FotoTwo} alt="FotoTwo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FotoThree} alt="FotoThree" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Fotofour} alt="Fotofour" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hp-family">
        <p className="hp-family_text">
          Ми - велика дружна родина, де кожен новий учень доповнює та зміцнює
          єдине ціле.
        </p>
        <p className="hp-family_text">
          Наша студія є якимсь танцювальним світом, де можна не лише навчитися
          красиво рухатися, освоїти сучасні танцювальні та класичні напрямки, а
          й знайти нових друзів.
        </p>
      </div>
      <div className="hp-child">
        <h2 className="hp-title">ТАНЦІ ДЛЯ ДІТЕЙ</h2>
      </div>
      <div className="hp-block_two">
        <div className="hp-block_two-content">
          <Swiper
            spaceBetween={2}
            slidesPerView={1}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={FotoS2One} alt="FotoS2One" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={FotoS2Two} alt="FotoS2Two" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={FotoS2Three} alt="FotoS2Three" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={FotoS2Four} alt="FotoS2Four" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={FotoS2Five} alt="FotoS2Five" />
            </SwiperSlide>
          </Swiper>
          <p className="hp-block_one-content_text">
            <ul>
              <li>
                Стабільна робота внутрішніх органів. Регулярна фізична
                активність сприяє поліпшенню та зміцненню роботи серця, легенів,
                зміцнюються судини та загалом підвищується витривалість
                організму.
              </li>
              <br />
              <li>
                Поліпшення фізичних даних. Курси танців для дітей дозволяють
                досягти пластичності, гнучкості зв'язок, а це гарна підготовка
                до занять акробатикою, гімнастикою та іншими видами спорту на
                професійному рівні. Розтяжка відкриває широкі перспективи для
                легкого підкорення висот у танцювальних напрямках, які, до речі,
                не такі травмонебезпечні, як спорт.
              </li>
              <br />
              <li>
                Розвиток творчих здібностей та корисних навичок. Уроки танців
                для дітей-початківців сприяють розвитку обох півкуль мозку за
                рахунок тренування координації рухів. Танцювальне мистецтво
                стимулює розвиток творчих здібностей, артистизму, умінь
                імпровізувати, виховує добрий смак.
              </li>
              <li>
                Розвиток музичних даних. Школа сучасного танцю для дітей –
                ефективний спосіб розвинути слух та почуття ритму.
              </li>
              <br />
            </ul>
          </p>
        </div>
      </div>
      <div className="hp-trainer">
        <h2 className="hp-title">НАШІ ТРЕНЕРИ</h2>
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
