// index.js
import React, { useState } from "react";
import "./index.css";
import { FaBars } from "react-icons/fa";

export default function Index() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <>
      <div id="mains">
        <button className="openbtn" onClick={toggleOverlay}>
          <FaBars className="bars" />
        </button>
      </div>

      <h1 ><a className="home" href="/movie">Anime News Plus</a></h1>
      

      <div
        id="searchbar"
        className={`searchbars ${isOverlayOpen ? "overlay-open" : ""}`}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={toggleOverlay}>
          ×
        </a>
        <a href="/profile">About Us</a>
      </div>

      <div></div>
    </>
  );
}
