import React from "react";
import {reviews} from "../../Constant/Constant";
import s from "./Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let pen = 'images/pen.svg';
let minipen = 'images/mini_pen.svg';
let el = 'images/ellipce.svg'




const CardRev = ({move}) => {
    return (
        <>
            {
                reviews.map(item =>

                    <div key={item.id} className={s.rev_card}>
                        <img className={s.pos_a} src={pen} alt=""/>
                        <img src={el} alt=""/>
                        <div>
                            <p className={s.name}>Сергей</p>
                            <img src={minipen} alt=""/>
                        </div>
                        <p className={s.rev_text}>{item.review}</p>
                        <p className={s.rev_date}>02.07.2020</p>
                    </div>)
            }

        </>
    )
}
export default CardRev