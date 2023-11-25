import React from "react";
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

    return(
        <>
            <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onClick={()=> closeNav()}>×</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>

            <div id="main">
            <button class="openbtn" onClick={()=> openNav()}><FaBars className="bars"/></button>
            </div>
        </>
    )
}