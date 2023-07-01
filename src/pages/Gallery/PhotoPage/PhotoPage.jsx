import React, { useState } from "react";
import { Row, Col, Grid, Modal } from "antd";

import hall1 from "../../../image/gallery/зображення_viber_2023-06-22_13-04-59-377.jpg";
import hall2 from "../../../image/gallery/зображення_viber_2023-06-22_13-04-59-578.jpg";
import hall3 from "../../../image/gallery/зображення_viber_2023-06-22_13-04-59-811.jpg";

import foto1 from "../../../image/gallery/foto/339744385_3396488473949995_2013771041976392325_n.jpg";
import foto2 from "../../../image/gallery/foto/345646699_170800955614801_8973435195642890776_n.jpg";
import foto3 from "../../../image/gallery/foto/FB_IMG_1578772553786.jpg";
import foto4 from "../../../image/gallery/foto/IMG_20210121_230331.jpg";
import foto5 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-55-556.jpg";
import foto6 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-55-799.jpg";
import foto7 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-56-099.jpg";
import foto8 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-56-667.jpg";
import foto9 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-57-099.jpg";
import foto10 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-57-303.jpg";
import foto11 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-57-652.jpg";
import foto12 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-57-804.jpg";
import foto13 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-58-000.jpg";
import foto14 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-58-185.jpg";
import foto15 from "../../../image/gallery/foto/зображення_viber_2023-06-22_13-04-58-401.jpg";

import "../../../assets/styles/PhotoPage.scss";

function PhotoPage() {
  const screens = Grid.useBreakpoint();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section>
      <div className="pp-block">
        <h2 className="pp-block_title">Танцювальні зали</h2>

        <div>
          <Row>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(hall1)}>
                <img src={hall1} alt="hall1" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(hall2)}>
                <img src={hall2} alt="hall2" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(hall3)}>
                <img src={hall3} alt="hall3" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="pp-block">
        <h2 className="pp-block_title">Галерея</h2>
        <div>
          <Row>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto1)}>
                <img src={foto1} alt="foto1" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto2)}>
                <img src={foto2} alt="foto2" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto3)}>
                <img src={foto3} alt="hfoto3" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto4)}>
                <img src={foto4} alt="foto4" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto5)}>
                <img src={foto5} alt="foto5" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto6)}>
                <img src={foto6} alt="foto6" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto7)}>
                <img src={foto7} alt="foto7" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto8)}>
                <img src={foto8} alt="foto8" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div className="photo-container" onClick={() => openModal(foto9)}>
                <img src={foto9} alt="foto9" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div
                className="photo-container"
                onClick={() => openModal(foto10)}
              >
                <img src={foto10} alt="foto10" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div
                className="photo-container"
                onClick={() => openModal(foto11)}
              >
                <img src={foto11} alt="foto11" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div
                className="photo-container"
                onClick={() => openModal(foto12)}
              >
                <img src={foto12} alt="foto12" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div
                className="photo-container"
                onClick={() => openModal(foto13)}
              >
                <img src={foto13} alt="foto13" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div
                className="photo-container"
                onClick={() => openModal(foto14)}
              >
                <img src={foto14} alt="foto14" />
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div
                className="photo-container"
                onClick={() => openModal(foto15)}
              >
                <img src={foto15} alt="foto15" />
              </div>
            </Col>
          </Row>
        </div>
        <Modal
          visible={selectedPhoto !== null}
          onCancel={closeModal}
          footer={null}
          centered
          wrapClassName="custom-modal"
        >
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="selected-photo"
              className="expanded-photo"
            />
          )}
        </Modal>
      </div>
    </section>
  );
}

export default PhotoPage;
