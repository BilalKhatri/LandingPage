import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import img1 from '../Images/Informative/1.webp'
import img2 from '../Images/Informative/2.webp'
import img3 from '../Images/Informative/3.webp'
import img4 from '../Images/Informative/4.webp'
import img5 from '../Images/Informative/5.webp'
import img6 from '../Images/Informative/6.webp'
import img7 from '../Images/Informative/7.webp'
import img8 from '../Images/Informative/8.webp'
import img9 from '../Images/Informative/9.webp'
import img10 from '../Images/Informative/10.webp'


export default function Swiper5() {
  return (
    <>
                      <div className="tabs-books">
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
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={img1} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img2} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img3} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img4} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img5} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img6} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img7} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img8} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img9} alt="Books Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img10} alt="Books Image" />
                    </SwiperSlide>
                  </Swiper>
                </div>
    </>
  )
}
