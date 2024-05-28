import React, { useContext } from "react";
import { PopupContext } from "../Context/PopupState";
import { Col, Modal, Row } from "antd";
import Icon from "../Images/icon.png";

const Popup = () => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    return (
    <>
      <Modal
        // title="Send us A Message"
        // wrapClassName="request-proposal-modal"
        centered
        width = '650px'
        open={openPopup}
        onOk={() => setOpenPopup(false)}
        okText="Submit"
        closable={true}
        onCancel={() => setOpenPopup(false)}
      >
        <Row
          style={{ justifyContent: "space-between", alignItems: "center" }}
          gutter={[{ lg: 30 }]}
        >
          <Col lg={24}>
            <div className="poupform-inner">
              <div className="poup-header">
                <div className="leftcon">
                  <h3>ACTIVATE YOUR COUPON TO AVAIL 50% DISCOUNT</h3>
                  <p>It’s a limited time offer so hurry up! Don’t wait!</p>
                </div>
                <div className="rightcon">
                  <img src={Icon} alt="Logo Icon" />
                </div>
              </div>

              <form action="/mail/proces.php" method="post" className="ban-form">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="Name"
                    className="form-control form-field"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="Email"
                    className="form-control form-field"
                    placeholder="name@example.com"
                    required=""
                  />
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    name="Number"
                    className="form-control form-field"
                    placeholder="Number"
                    required=""
                  />
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    name="Message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-btn">
                  <input
                    value="Publish My Book"
                    type="submit"
                    name="submit"
                    className="formbtn btn yel-col"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
    );
};
export default Popup;