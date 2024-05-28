import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Chatbtn() {
  const handleClick = () => {
    if (window.LC_API) {
      window.LC_API.open_chat_window();
    } else {
      console.error("LC_API is not available");
    }
    return false;
  };
  return (
    <>
      <button
        className="btn black-col shakanimation"
        id="chat-btn"
        onClick={handleClick}
      >
        <span>Chat Now</span> <HiOutlineArrowLongRight />
      </button>
    </>
  );
}
