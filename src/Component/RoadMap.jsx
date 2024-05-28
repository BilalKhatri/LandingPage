import React, { useRef, useState,useContext } from "react";
import Title from "../Component/SecTitle";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Roadmap from '../Images/road-map.webp'
import { PopupContext } from '../Context/PopupState';
import Chatbtn from '../Component/Chatbtn'

export default function RoadMap() {
  const { openPopup, setOpenPopup } = useContext(PopupContext)
  return (
    <>
      <div className="roadmap-sec">
        <div className="container">
        <div className="sectophead">
            <Title title={["Become A Successful ", <span className="yello-bold">Self Book Publisher</span>," With Us In A Few Steps",]} subheading="Discover how we turn pages into stories. With our meticulous approach, you no longer have to hold back from your dream of publishing a book that disrupts the market"/>
            </div>
            <div className='roadmap-wrap'>
            <div className='roadmap-box1 boxing'>
              <h3>Reach Out</h3>
              <p>Reach out to begin transforming your ideas into a published ebook, with support in every step, from writing to marketing.</p>
            </div>
            <div className='roadmap-box2 boxing'>
              <h3>Editing & Proofreading</h3>
              <p>Get feedback on your drafts from experienced editors who work on details carefully, like the Oxford comma. Our editors will improve your writing, fix any errors, and ensure your ebook is perfect.</p>
            </div>
            <div className='roadmap-box3 boxing'>
              <h3>Publishing Strategy</h3>
              <p>Talk with experts to figure out the best ways to write and publish your book. You can choose to publish on platforms like Amazon or look into different places to sell your book.</p>
            </div>
            <div className='roadmap-box4 boxing'>
              <h3>Ghostwriting Services</h3>
              <p>Work with a team that includes experts, editors, and book planners specializing in different writing types. Whether you're writing fiction, non-fiction, or about a specific topic, we have a dedicated writer for you.</p>
            </div>
            <div className='roadmap-box5 boxing'>
              <h3>Illustrations and Layout</h3>
              <p>Make your ebook more enjoyable to read with great illustrations and designs. We focus on making your book look good and read well.</p>
            </div>
            <div className='roadmap-box6 boxing'>
              <h3>Marketing Plan</h3>
              <p>Create a marketing strategy to meet your goals and boost your sales using tools like social media, SEO, and PPC (pay-per-click advertising).</p>
            </div>

              <img src={Roadmap} alt='Road Map' />
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
  )
}
