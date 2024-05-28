import React from 'react'
import { Col, Row } from "antd";
import Contact from '../Images/contact.webp'

export default function GetInTourch() {
  return (
    <>
      <div className="getintouch">
        <div className="container">
          <div className="getin-wrap">

          <Row type="flex" justify="space-between" align="middle">
            <Col sm={24} md={12}>

            <div className="getinleft">
              <h2>It’s Time For The Goal To Become <span className='yello-bold'>An Achievement</span>! Our Team Is Here To Hear Your Story – Reach Out To Us Now.	</h2>
              <p>Pearson Book Publishers is all about swift service and top-notch quality for every project, whether it’s for business or personal goals. We take pride in our work and deliver the best every time. Let us know what you need, and we’ll tailor the perfect publishing plan for you.</p>
              <img src={Contact} alt='Get in Touch'/>
            </div>

            </Col>
            <Col sm={24} md={12}>
              <div className="getform-wrap">

              <h3 className="get-title">Get In Touch Now</h3>
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
          </div>
        </div>
      </div>
    </>
  )
}
