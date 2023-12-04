import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import { FaBars  } from 'react-icons/fa';


export default function index() {
    const openNav= ()=> {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
    }

    const closeNav=()=> {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight= "0";
    }

    return (
        <>
          {/* <div id="mySidebar" className="sidebar">
            <Link to="#" className="closebtn" onClick={() => closeNav()}>
            </Link>
            <Link to="/profile">About Us</Link>
          </div>
    
          <div id="main">
            <button className="openbtn" onClick={() => openNav()}>
              <FaBars className="bars" />
            </button>
          </div> */}
        </>
      );
    }