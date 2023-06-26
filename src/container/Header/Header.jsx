import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { HEADER_NAVIGATION_LINKS } from "./constant";

import "../../assets/styles/containers/header.scss";
import logo from "../../image/logo-removebg-preview.png";

const { SubMenu } = Menu;

function Header() {
  const galleryMenu = (
    <Menu className="custom-menu">
      <Menu.Item key="photos">
        <Link to="/gallery/photos">ФОТО</Link>
      </Menu.Item>
      <Menu.Item key="videos">
        <Link to="/gallery/videos">ВІДЕО</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="dance-header">
      <div className="dance-header_header">
        <Link to="/" className="dance-header_logo">
          <div className="dance-header_logo-image">
            <img src={logo} alt="logo" />
            <div><p className="dance-header_logo-text">TOP-DANCE</p>
            <p className="dance-header_logo-text">GUBA-TEAM</p></div>
            
          </div>
        </Link>

        <nav className="dance-header_navigation">
          {HEADER_NAVIGATION_LINKS.map((link, index) =>
            link.value === "/gallery" ? (
              <Dropdown
                key={`${index}-${link.label}`}
                overlay={galleryMenu}
                arrow
              >
                <Link
                  to={link.value}
                  className="dance-header_navigation_link"
                >
                  {link.label} <DownOutlined className="custom-arrow" />
                </Link>
              </Dropdown>
            ) : (
              <Link
                key={`${index}-${link.label}`}
                to={link.value}
                className="dance-header_navigation_link"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;