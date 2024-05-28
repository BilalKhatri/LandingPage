import React from 'react'
import BookCovers from '../Component/BookCovers'
import Logos from '../Component/Logos'
import ServicesTabs from '../Component/ServicesTabs'
import Services from '../Component/Services'
import RoadMap from '../Component/RoadMap'
import Testimonials from '../Component/Testimonials'
import PrimiumDiscount from '../Component/PrimiumDiscount'
import Banner from '../Component/Banner'

export default function Home() {
  return (
    <>
    <Banner />
      <Logos />
      <Services />
      <BookCovers />
      <ServicesTabs />
      <PrimiumDiscount />
      <RoadMap />
      <Testimonials />
    </>
  )
}
