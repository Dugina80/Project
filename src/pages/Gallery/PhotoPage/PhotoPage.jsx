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

  const hallPhotos = [hall1, hall2, hall3]; 
  const galleryPhotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15
  ]; 

  return (
    <section>
      <div className="pp-block">
        <h2 className="pp-block_title">Танцювальні зали</h2>

        <div>
          <Row>
            {hallPhotos.map((photo, index) => (
              <Col key={index} span={24} sm={12} md={8}>
                <div className="photo-container" onClick={() => openModal(photo)}>
                  <img src={photo} alt={`hall${index + 1}`} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="pp-block">
        <h2 className="pp-block_title">Галерея</h2>
        <div>
          <Row>
            {galleryPhotos.map((photo, index) => (
              <Col key={index} span={24} sm={12} md={8}>
                <div className="photo-container" onClick={() => openModal(photo)}>
                  <img src={photo} alt={`foto${index + 1}`} />
                </div>
              </Col>
            ))}
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