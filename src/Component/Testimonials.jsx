import React from 'react'
import Title from "../Component/SecTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Userimg from '../Images/trustpilotimg.webp'
import { IoMdStar } from "react-icons/io";
import Verified from '../Images/verified.png'


export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="container">
        <div className="sectophead">
            <Title title={["Hear Directly From ", <span className="yello-bold">Our Loyal</span>," Customers",]} subheading=""/>
            </div>

            <div className="testimonial-wrap">

            <Swiper
                    id="testimonials"
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                      delay: 9000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
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
                      <div className='test-item'>
                      <h3 className='test-title'>Effortless and Enjoyable Publishing Journey!</h3>
                        <div className='start-rating'>
                          <ul>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                          </ul>
                        </div>
                        <div className="test-para">
                          <p>I am thoroughly impressed with Pearson Book Publishers editing and proofreading style. My editor polished my manuscript and provided invaluable feedback that enhanced my narrative.</p>
                        </div>
                        <div className='footer-author'>
                        <div className='left-ver'><h3>Derek S</h3><img src={Verified} alt='Verified Reviews'/></div>
                        <div className="right-var"><img src={Userimg} alt="Books Image" /></div>
                        </div>
                      </div>
                      
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='test-item'>
                      <h3 className='test-title'>Fast and Seamless Publishing Experience</h3>
                        <div className='start-rating'>
                          <ul>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                          </ul>
                        </div>
                        <div className="test-para">
                          <p>The marketing team at Pearson Book Publishers is made of angels!! They crafted a customized plan that significantly increased my book's visibility and sales. Their social media and SEO expertise made all the difference!</p>
                        </div>
                        <div className='footer-author'>
                        <div className='left-ver'><h3>Anita G</h3><img src={Verified} alt='Verified Reviews'/></div>
                        <div className="right-var"><img src={Userimg} alt="Books Image" /></div>
                        </div>
                      </div>
                      
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='test-item'>
                      <h3 className='test-title'>Excellent Communication and Support Throughout</h3>
                        <div className='start-rating'>
                          <ul>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                          </ul>
                        </div>
                        <div className="test-para">
                          <p>Pearson Book Publishers has a top-notch approach when it comes to ghostwriting. The team that was assigned to me captured my voice perfectly, turning my ideas into a compelling story that resonated with my readers.</p>
                        </div>
                        <div className='footer-author'>
                        <div className='left-ver'><h3>James L</h3><img src={Verified} alt='Verified Reviews'/></div>
                        <div className="right-var"><img src={Userimg} alt="Books Image" /></div>
                        </div>
                      </div>
                      
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='test-item'>
                      <h3 className='test-title'>Exceptional Speed and Professionalism!</h3>
                        <div className='start-rating'>
                          <ul>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                          </ul>
                        </div>
                        <div className="test-para">
                          <p>I couldn't be happier with my experience with Pearson Book Publishers. From start to finish, the entire publishing process was incredibly fast and efficient. Their team was professional and responsive, always ready to address any questions I had. The best part was seeing my book published in just 12 business days!</p>
                        </div>
                        <div className='footer-author'>
                        <div className='left-ver'><h3>Rose G Wiley</h3><img src={Verified} alt='Verified Reviews'/></div>
                        <div className="right-var"><img src={Userimg} alt="Books Image" /></div>
                        </div>
                      </div>
                      
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='test-item'>
                      <h3 className='test-title'>Outstanding Design and Quality!</h3>
                        <div className='start-rating'>
                          <ul>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                          </ul>
                        </div>
                        <div className="test-para">
                          <p>Pearson Book Publishers exceeded my expectations with their excellent design services. Their designers are top-notch, and they worked closely with me to bring my vision to life. The final product was stunning, with high-quality cover design and impeccable formatting. I am thrilled with how my book looks and feels.</p>
                        </div>
                        <div className='footer-author'>
                        <div className='left-ver'><h3>Robert Anderson</h3><img src={Verified} alt='Verified Reviews'/></div>
                        <div className="right-var"><img src={Userimg} alt="Books Image" /></div>
                        </div>
                      </div>
                      
                    </SwiperSlide>    

                    <SwiperSlide>
                      <div className='test-item'>
                      <h3 className='test-title'>Smooth and Easy Publishing Process!</h3>
                        <div className='start-rating'>
                          <ul>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                            <li><IoMdStar/></li>
                          </ul>
                        </div>
                        <div className="test-para">
                          <p>Publishing with Pearson Book Publishers was an absolute breeze. Their streamlined process made everything so easy, from submitting my manuscript to seeing my book available for purchase. The dedicated project manager was incredibly helpful and guided me every step of the way. I felt supported throughout the entire process.</p>
                        </div>
                        <div className='footer-author'>
                        <div className='left-ver'><h3>Laura Bennett</h3><img src={Verified} alt='Verified Reviews'/></div>
                        <div className="right-var"><img src={Userimg} alt="Books Image" /></div>
                        </div>
                      </div>
                      
                    </SwiperSlide>                                      

                  </Swiper>

            </div>
        </div>
      </div>
    </>
  )
}
