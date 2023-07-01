import React from "react";

import "../../assets/styles/containers/footer.scss";
import logo from "../../image/logo-removebg-preview.png";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <footer className="dance-footer">
      <img src={logo} alt="logo" />
      <div className="dance-footer_contacts">
        <div className="dance-footer_contacts-text">
          <h3> Адреса і телефон</h3>
          <p>
            м.Полтава <br />
            ТЦ Метрополітан <br />
            вул. Гоголя 36, 3й поверх <br />
          </p>
          <br />
          <h3>
            Контактний телефон: <br />
            066-645-48-51
          </h3>
        </div>
        <div className="dance-footer-contacts_link">
          <h3 className="dance-footer-contacts_link-title">
            Ми в соціальних мережах
          </h3>
          <div className="dance-footer-contacts_link-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100017976466640"
              className="dance-footer-contacts_icons-item"
            >
              <ImFacebook2 />
            </a>
            <a
              href="https://www.instagram.com/guba.team/"
              className="dance-footer-contacts_link-item"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.youtube.com/@topdancegubateam/videos"
              className="dance-footer-contacts_link-item"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
