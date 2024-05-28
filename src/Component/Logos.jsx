import React from 'react'
import { Col, Row } from "antd";
import Logo1 from '../Images/logo-1.webp'
import Logo2 from '../Images/logo-2.webp'
import Logo3 from '../Images/logo-3.webp'
import Logo4 from '../Images/logo-4.webp'

export default function Logos() {
  return (
    <>
            <div className="logos-sec">
        <div className="container">
          <Row type="flex" align="middle">
            <Col xs={24} sm={12} md={6}>
              <div className='logo-wrap'>
                <img src={Logo1} alt='Logo1' />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className='logo-wrap'>
                <img src={Logo2} alt='Logo2' />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className='logo-wrap'>
                <img src={Logo3} alt='Logo3' />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className='logo-wrap'>
                <img src={Logo4} alt='Logo4' />
              </div>
            </Col>                        
            </Row>
            </div>
            </div>
    </>
  )
}
