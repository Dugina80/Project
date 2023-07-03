import React from "react";
import { Row, Col, Image } from "antd";
import "../../assets/styles/Schedule.scss";

import fotoSchedule from "../../image/зображення_viber_2023-06-28_09-48-41-743.jpg";

function Schedule() {
  return (
    <section>
      <div className="schedule-container">
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <div className="schedule-image-container">
              <Image src={fotoSchedule} alt="fotoSchedule" className="responsive-image" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Schedule;