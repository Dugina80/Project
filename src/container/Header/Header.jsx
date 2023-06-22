import React from "react";
import { Link } from "react-router-dom";

import { HEADER_NAVIGATION_LINKS } from "./constant";

import "../../assets/styles/containers/header.scss";
import logo from '../../image/logo-removebg-preview.png';


function Header() {

  return (
    <header className="dance-header">
      <div className="dance-header_header">
        <Link to="/" className="dance-header_logo">
          <div className="dance-header_logo-image">
            <img  src={logo} alt="logo" />
            <p>GUBA-TEAM</p>
            </div>
            
        </Link>
      
      
      <nav className="dance-header_navigation">
        {
          HEADER_NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={`${index}-${link.label}`}
              to={link.value}
              className="dance-header_navigation_link"
            >
              {link.label}
            </Link>
          ))
        }
      </nav>
      </div>
    </header>
  )
};

export default Header;