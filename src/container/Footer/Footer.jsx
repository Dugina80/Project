import React from "react";

import "../../assets/styles/containers/footer.scss";
import logo from "../../image/logo-removebg-preview.png";
import {ImFacebook2} from "react-icons/im";
import {AiFillInstagram, } from "react-icons/ai";
import {IoLogoYoutube} from "react-icons/io";


function Footer() {
  return (
    <footer className="dance-footer">
      
        <img src={logo} alt="logo" />
      
      <div className="dance-footer_contacts">
        <div className="dance-footer_contacts-text">
        <h3> Адреса і телефон</h3>
        <p> м.Полтава <br />
        ТЦ Метрополітан <br />
        вул. Гоголя 36, 3й поверх <br /></p>
       
        <p> Контактний телефон: <br />
        066-645-48-51</p>
        </div>
      <div >
        <h3 className="dance-footer_contacts-text">Ми в соціальних мережах</h3>
        <div className="dance-footer-contacts_icons"><span className="dance-footer-contacts_icons-item">
            <ImFacebook2/>
          </span>
          <span className="dance-footer-contacts_icons-item">
            <AiFillInstagram/>
          </span>
          <span className="dance-footer-contacts_icons-item">
            < IoLogoYoutube/>
          </span>
          </div>
      
      </div>
       </div>
    </footer>
  );
}

export default Footer;
