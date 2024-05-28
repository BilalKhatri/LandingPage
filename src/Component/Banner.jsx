import React, { useRef, useState,useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BsArrowRightCircle } from "react-icons/bs";
import Logo1 from "../Images/Bark_Logo.png";
import Logo2 from "../Images/sitejabber.png";
import Logo3 from "../Images/trustpilot.png";
import { PopupContext } from '../Context/PopupState';
import Chatbtn from '../Component/Chatbtn'


export default function Banner() {
  const { openPopup, setOpenPopup } = useContext(PopupContext)



  return (
    <>
      <div className="banner">
        <div className="container">
          <Row type="flex" justify="space-between" align="middle">
            <Col sm={24} md={12}>
              <div className="banner-left">
                <div className="ban-heading">
                  <h1>
                    Turn Your Book Into{" "}
                    <span style={{ color: "#C8F60E" }}>A Best Seller With</span>{" "}
                    Pearson Book Publishers
                  </h1>
                </div>
                <div className="ban-para">
                  <p className="italic-font">
                    A Leading Book Publishing Company
                  </p>
                  <p>
                    Experience rapid success with your e-book on top platforms.
                    Our experts are here to guide you swiftly to becoming a
                    published author and expanding your reader base!
                  </p>
                </div>
                <div className="ban-lists">
                  <ul>
                    <li>
                      <BsArrowRightCircle />
                      <b>400+</b> Authors Trust Us
                    </li>
                    <li>
                      <BsArrowRightCircle />
                      <b>86%</b> Customer Recurrence
                    </li>
                    <li>
                      <BsArrowRightCircle />
                      <b>3,000</b> Editors And Writers
                    </li>
                    <li>
                      <BsArrowRightCircle />
                      <b>100%</b> Client Satisfaction
                    </li>
                  </ul>
                </div>
                <div className="ban-buttons">
                  <div className="banner-button">
                    <button onClick={() => { setOpenPopup(!openPopup) }} className="btn yel-col shakanimation">
                      <span>Get A Quote</span> <HiOutlineArrowLongRight />
                    </button>
                  </div>
                  <div className="banner-button">

                  <Chatbtn />
                  </div>
                </div>
                <div className="ban-logos">
                  <Swiper
                    id="logos"
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                      delay: 9000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={Logo1} alt="Bark" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Logo2} alt="SiteJabber" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Logo3} alt="TrustPilot" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Logo2} alt="SiteJabber" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
            <Col sm={24} md={12}>
              <div className="banner-right">
                <div className="innerban">

              <h3 className="fifty-disc"><span className="fifty-1">Sign Up for convenient publishing </span><br/>on Amazon &amp; more</h3>

                  
                  <h3 className="fonm-title">
                    Fill up the form to begin your journey.
                  </h3>
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
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
