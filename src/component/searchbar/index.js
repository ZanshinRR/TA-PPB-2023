import React from "react";
import './index.css';
import { FaSearch } from 'react-icons/fa';


export default function index() {
    const openNav= ()=> {
        document.getElementById("searchbar").style.width = "250px";
        document.getElementById("mains").style.marginLeft = "250px";
    }

    const closeNav=()=> {
        document.getElementById("searchbar").style.width = "0";
        document.getElementById("mains").style.marginLeft= "0";
    }

    return(
        <>
            <div id="searchbar" class="searchbars">
            <a href="javascript:void(0)" class="closebtn" onClick={()=> closeNav()}>×</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>

            <div id="mains">
            <button class="openbtn" onClick={()=> openNav()}><FaSearch className="search"/></button>
            </div>
        </>
    )
}