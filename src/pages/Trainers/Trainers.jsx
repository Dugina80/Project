import React from "react";

import Trn1 from "../../image/306784195_1138756650066873_8617978372212699088_n.jpg";
import Trn2 from "../../image/322401271_981621899479098_2944052154766725554_n.jpg";
import "../../assets/styles/Trainers.scss";

function Coaches() {
  return (
    <section>
      <div className="trainer">
        <h2 className="trainer-title">НАШІ ТРЕНЕРИ</h2>
        <div className="trainer-block">
          <div className="trainer-foto">
            <div className="trainer-foto_item">
              <h3 className="trainer-foto_item-text">
                ЮЛІЯ ГУБА
                <br />
                Артистка балету <br /> Полтавської обласної філармонії
              </h3>

              <img src={Trn1} alt="foto trainer" />
            </div>
            <div className="trainer-foto_item">
              <h3 className="trainer-foto_item-text">
                Сергій Губа <br />
                Балетмейстер-постановник <br />
                Полтавської обласної філармонії
              </h3>
              <img src={Trn2} alt="foto trainer" />
            </div>
          </div>
          <div className="trainer-block_info">
            <p>
              Сергій та Юлія Губа у 2006 вступили до Полтавського Національного
              Педагогічного університету, де ж і отримали ступінь магістра
              хореографії у 2011 році. Викладацьку діяльність Юлія розпочала,
              навчаючись ще на другому курсі у Щербанівському Будинку культури.
              Створила колектив народної хореографії "Василечки" і пропрацювала
              в ньому до 2015 року. Сергій також, в свою чергу, почав викладати
              дитячу хореографію у дитячому садочку ще з 2008 року. У 2011 році
              відкривається студія танцю Top dance, де і починає викладати
              Сергій. У 2015 році до нього приєднується Юлія і починає
              тренерську діяльність в цій студії. Так, разом в студії працюють
              впродовж 8 років і мають на меті розвивати свій колектив далі і
              підкорювати все нові і нові вершини!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coaches;
