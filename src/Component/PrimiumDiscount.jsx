import React from 'react'
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function PrimiumDiscount() {
  return (
    <>
      <div className="premium-discount">
        <div className="container">
          <Row type="flex" justify="space-between" align="middle">
            <Col sm={24} md={12}>
              <div className="pre-left">
                <div className="pre-heading">
                  <h3>Your Book Should Be A Best Seller, And We Will Make It Happen</h3>
                </div>
                <div className="ban-para">
                  <p className="f-para">Explore Discounts On Our <strong>Premium Services</strong> And Get Yourself Registered With Us Now!</p>
                  <p className="sec-para">Do Not Let Money Be A Boundary!</p>
                </div>
                  <div className="premium-button">
                    <Link to="tel:+1 (470) 354-0088" className="btn yel-col">
                      <span>Call Us Now</span> <HiOutlineArrowLongRight />
                    </Link>
                  </div>
              </div>
            </Col>
            <Col xsOffset={12} xs={1} />
          </Row>
        </div>
      </div>
    </>
  )
}
