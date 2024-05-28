import React, { useContext,useEffect,useState } from "react";
import { Col, Row } from "antd";
import Logo from "../Images/logo.webp";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { TbBrandWechat } from "react-icons/tb";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { PopupContext } from '../Context/PopupState';


const Header = () => {
  const { openPopup, setOpenPopup } = useContext(PopupContext)
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  { setOpenPopup(!openPopup) }
}, []);
  return (
    <>
      <header className="header">
        <div className="container">
          <Row type="flex" justify="space-around" align="middle">
            <Col sm={24} md={6}>
              <div className="logo">
                <Link to="/">
                <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </Col>
            <Col sm={24} md={12}>

            <div className="phon-addres-box">

              <div className="phone-box">
                <Link to="tel:+1 (470) 354-0088">
                <ul>
                  <li><FiPhoneCall /></li>
                  <li>Free Call Support<br/><span>(470) 354-0088</span></li>
                  </ul>
                  </Link>
              </div>
              <div className="phone-box">
                <Link to="#" >
                <ul>
                  <li><TbBrandWechat /></li>
                  <li>Talk to expert<br/><span>CHAT NOW</span></li>
                  </ul>
                  </Link>
              </div>              

            </div>

            </Col>

            <Col sm={24} md={6}>
              <div className="mybutton">
                <button  className="btn yel-col shakanimation" onClick={() => { setOpenPopup(!openPopup) }}><span>Get Started</span> <HiOutlineArrowLongRight /></button>

              </div>
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
}
export default Header
