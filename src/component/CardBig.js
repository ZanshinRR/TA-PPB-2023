import { AiFillStar } from "react-icons/ai"; import "./CardBig.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export default function CardBig(props) {
    const navigate= useNavigate()

    const navigateFam=()=> {
        navigate('pages/SpyXFamily');
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 5,
      };

      return (
        <div className="containerBig1" onClick={()=> navigateFam()}>
                <img src={props.img} className="posterBig1" />
          <div className="descriptionBig1">
            <div>
              <p id="title">{props.title}</p>
              <p id="Score">{props.score}</p>
              <p id="genre">{props.genre}</p>
              <p id="Theme">{props.theme} </p>
            </div>
          </div>
        </div>
      );
    }


    // return (
    //     <div className="containerBig">
    //         <img src={props.img} alt="" className="posterBig" />
    //         <div className="descriptionBig">
    //          <div>
    //                 <p id="title">{props.title}</p>
    //                 <p id="Score">{props.score}</p>
    //                 <p id="genre">{props.genre}</p>
    //                 <p id="Theme">{props.theme} </p>
    //             </div> 
    //             </div>
    //         </div>

    // );