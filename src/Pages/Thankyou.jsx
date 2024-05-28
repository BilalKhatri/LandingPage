import React from "react";
import { Col, Row } from "antd";

export default function Thankyou() {
  return (
    <>
      <div className="thankyou">
        <div style={{ margin: "0 auto" }} className="container">
          <Row style={{ justifyContent: "center", textAlign: "center" }}>
            <Col lg={20} sm={24}>
              <h1>ThankYou</h1>
              <p>
                We have received your online inquiry and forwarded your
                information to one of our Account Directors who will be in touch
                with you shortly.
              </p>
              <p>We look forward to working with you</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}