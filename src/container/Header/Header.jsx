import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Modal } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

import { HEADER_NAVIGATION_LINKS } from "./constant";

import "../../assets/styles/containers/header.scss";
import logo from "../../image/logo-removebg-preview.png";

function Header() {
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1260) {
      setIsBurgerVisible(true);
    } else {
      setIsBurgerVisible(false);
    }
    if (window.innerWidth > 1260 && isModalVisible) {
      setIsModalVisible(false);
    }
  };

  useEffect(() => {
    handleResize();
    const handleResizeWrapper = () => handleResize();
    window.addEventListener("resize", handleResizeWrapper);
    return () => {
      window.removeEventListener("resize", handleResizeWrapper);
    };
  }, [isModalVisible]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleMenuClick = () => {
    toggleModal();
  };

  const galleryMenu = (
    <Menu className="custom-menu">
      <Menu.Item key="photos" onClick={handleMenuClick}>
        <Link to="/gallery/photos">ФОТО</Link>
      </Menu.Item>
      <Menu.Item key="videos" onClick={handleMenuClick}>
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
            <div>
              <p className="dance-header_logo-text">TOP-DANCE</p>
              <p className="dance-header_logo-text">GUBA-TEAM</p>
            </div>
          </div>
        </Link>

        {isBurgerVisible ? (
          <div className="burger-menu" onClick={toggleModal}>
            <MenuOutlined />
          </div>
        ) : (
          <nav className="dance-header_navigation">
            {HEADER_NAVIGATION_LINKS.map((link, index) =>
              link.value === "/gallery" ? (
                <Dropdown
                  key={`${index}-${link.label}`}
                  overlay={galleryMenu}
                  arrow
                >
                  <Link to="#" className="dance-header_navigation_link">
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
        )}
        <Modal
          visible={isModalVisible}
          onCancel={toggleModal}
          footer={null}
          className="modal-window"
        >
          <nav className="modal-navigation">
            {HEADER_NAVIGATION_LINKS.map((link, index) =>
              link.value === "/gallery" ? (
                <Dropdown
                  key={`${index}-${link.label}`}
                  overlay={galleryMenu}
                  arrow
                >
                  <Link to="#" className="modal-navigation_link">
                    {link.label} <DownOutlined className="custom-arrow" />
                  </Link>
                </Dropdown>
              ) : (
                <Link
                  key={`${index}-${link.label}`}
                  to={link.value}
                  className="modal-navigation_link"
                  onClick={handleMenuClick}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </Modal>
      </div>
    </header>
  );
}

export default Header;