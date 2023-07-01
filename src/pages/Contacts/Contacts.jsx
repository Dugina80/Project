import React from "react";

import GoogleMapReact from "../../components/Map.jsx";
import "../../assets/styles/Contact.scss";

function Contacts() {
  return (
    <section>
      <div className="dance-contact_container">
        <div className="dance-contact_container-block">
          <div>
            <h1 className="dance-contact_container-title">Контакти</h1>
            <p>
              м.Полтава <br />
              ТЦ Метрополітан <br />
              вул. Гоголя 36, 3й поверх <br />
            </p>
            <p>
              Контактний телефон: <br />
              066-645-48-51
            </p>
          </div>
          <GoogleMapReact />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
