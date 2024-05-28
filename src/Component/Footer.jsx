import React from 'react'
import { Col, Row } from "antd";
import { Link } from 'react-router-dom';
import WhiteLogo from "../Images/white-logo.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import Payment from '../Images/payment.png'
import Chatbtn from '../Component/Chatbtn'


export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='container'>

        <Row gutter={24}>
            <Col sm={24} md={6}>
              <div className="footer-logo">
                <img src={WhiteLogo} alt='Logo' />
              </div>
              <div className="footer-button">
                <Chatbtn/>
              </div>
            </Col>
            <Col sm={24} md={6}>
              <div className="footer-box">
                <h3>About Us</h3>
                <p>Pearson Book Publishers is a leading US-based company designed to cater to your book’s publishing needs.</p>
              </div>
            </Col>
            <Col sm={24} md={6}>
            <div className="footer-box">
                <h3>Contact Us</h3>
                <ul className="footer-contacts">
                  <li><Link to="tel:+1 (470) 354-0088"><BsTelephone/><span>(470) 354-0088</span></Link></li>
                  <li><Link to="mailto:info@pearsonbookpublishers.com"><PiEnvelopeSimpleThin/><span>info@pearsonbookpublishers.com</span></Link></li>
                </ul>
              </div>              
            </Col>
            <Col sm={24} md={6}>
            <div className="footer-box">
                <h3>Social Media</h3>
                <ul className='social-media-list'>
                  <li><Link to="https://www.facebook.com/people/Pearson-Book-Publishers/61559587897985"><BiLogoFacebook/></Link></li>
                  <li><Link to="#"></Link><TiSocialTwitter/></li>
                  <li><Link to="https://www.instagram.com/pearson.book/"><SlSocialInstagram/></Link></li>
                </ul>
                <div className='payment-icon'>
                  <img src={Payment} alt='payment' />
                </div>
              </div>              
            </Col>            
            </Row>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
          <div className="copytext">
            <p>© 2024 Pearson Book Publishers. All right reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}
