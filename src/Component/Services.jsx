import React, { useRef, useState,useContext } from "react";
import Title from "../Component/SecTitle";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Scifi from '../Images/Sci-fi.webp'
import Horror from '../Images/Horror.webp'
import Fables from '../Images/Fables.webp'
import Poetries from '../Images/Poetries.webp'

import Romance from '../Images/Romance.webp'
import Selfhelp from '../Images/Self-help.webp'
import Historical from '../Images/Historical.webp'
import FairyTales from '../Images/FairyTales.webp'

import Mysteries from '../Images/Mysteries.webp'
import Cookbooks from '../Images/Cookbooks.webp'
import Biographies from '../Images/Biographies.webp'
import PicturesBooks from '../Images/PicturesBooks.webp'

import BusinessGuides from '../Images/BusinessGuides.webp'
import Memoirs from '../Images/Memoirs.webp'
import Comics from '../Images/Comics.webp'
import Mythology from '../Images/Mythology.webp'

import { PopupContext } from '../Context/PopupState';
import Chatbtn from '../Component/Chatbtn'

export default function Services() {
  const { openPopup, setOpenPopup } = useContext(PopupContext)
  return (
    <>
      <div className="sevices-sec">
        <div className="container">
          <div className="sectophead">
            <Title title={["Explore a ", <span className="yello-bold">Variety of Genre</span>,"That You Can Publish With Us",]} subheading="Pearson Book Publishers – Every Story Needs a Final Push"/>
            </div>
            <div className="secices-all">
            <div className="services-lists">
            <Row gutter={24}>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Sci-fi</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Scifi} alt="SciFi"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Horror</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Horror} alt="Horror"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Fables</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Fables} alt="Fables"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Poetries</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Poetries} alt="Poetries"/></div>
            </div>
            </Col>                                    
            </Row>
            </div>
            <div className="services-lists">
            <Row gutter={24}>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Fantasy</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Romance} alt="Fantasy"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Rhymes</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Selfhelp} alt="Rhymes"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Comedy</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Historical} alt="Comedy"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Thrillers</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={FairyTales} alt="Thrillers"/></div>
            </div>
            </Col>                                    
            </Row>
            </div>
            <div className="services-lists">
            <Row gutter={24}>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Mysteries</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Mysteries} alt="Mysteries"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Cookbooks</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Cookbooks} alt="Cookbooks"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Biographies</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Biographies} alt="Biographies"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Pictures Books</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={PicturesBooks} alt="PicturesBooks"/></div>
            </div>
            </Col>                                    
            </Row>
            </div>
            <div className="services-lists">
            <Row gutter={24}>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Business Guides</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={BusinessGuides} alt="Business Guides"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Memoirs</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Memoirs} alt="Memoirs"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Comics</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Comics} alt="Comics"/></div>
            </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
            <div className="services-wrap">
              <div className="left-serve"><h3>Mythology</h3><div className="serve-icon"><Link to="#"><HiOutlineArrowLongRight/></Link></div></div>
              <div className="righ-serve"><img src={Mythology} alt="Mythology"/></div>
            </div>
            </Col>                                    
            </Row>
            </div>
            </div>

            <div className="services-buttons">

            <div className="serv-button">
                    <button onClick={() => { setOpenPopup(!openPopup) }} className="btn yel-col">
                      <span>Get A Quote</span> <HiOutlineArrowLongRight />
                    </button>
                  </div>
                  <div className="serv-button">
                    <Chatbtn/>
                  </div>

            </div>

          
        </div>
      </div>
    </>
  );
}
