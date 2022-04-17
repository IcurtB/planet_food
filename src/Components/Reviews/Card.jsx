import React from "react";
import Slider from "react-slick";
import s from "./Reviews.module.css";
import "./slick-theme.css";
import "./slick.css";

let pen = 'images/pen.svg';
let minipen = 'images/mini_pen.svg';
let el = 'images/ellipce.svg'


const CardRev = ({review}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

            <div className={s.rev_card}>
                <img src={pen} alt=""/>
                <img src={el} alt=""/>
                <div>
                    <p className={s.name}>Сергей</p>
                    <img src={minipen} alt=""/>
                </div>
                <p className={s.rev_text}>{review}</p>
                <p className={s.rev_date}>02.07.2020</p>

            </div>



    )
}
//
export default CardRev