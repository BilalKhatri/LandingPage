import React from 'react'
import Title from "../Component/SecTitle";
import Callnow from '../Images/callus.png';
import { Link } from "react-router-dom";

export default function BookCovers() {
  return (
    <>
            <div className="books-sec">
        <div className="container">
            <div className="boos-top">
            <Title title="Self Publishing With Mesmerizing Book Covers The Best Cover Design Services in the US" subheading="Pearson Book Publishers operates with a dedicated team of diverse expertise and industry knowledge. From ghostwriting and editing to cover design and marketing, get publishing support through our comprehensive services."/>
            </div>
            <div className="books-bottom">
              <Link to="#"><img src={Callnow} alt="Call Now"/></Link>
            </div>
        </div>
        </div>
    </>
  )
}
