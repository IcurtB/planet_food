import React from "react";
import {reviews} from "../../Constant/Constant";
import s from './Reviews.module.css'
let pen = 'images/pen.svg';
let minipen = 'images/mini_pen.svg';
let el = 'images/ellipce.svg'

const Reviews = () => {
    return (
        <div className={s.reviews}>
            <p>Отзывы</p>
            <div className={s.sa}>
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
                {/*<div className={s.rev_card}>*/}
                {/*    <img className={s.pos_a} src={pen} alt=""/>*/}
                {/*    <img src={el} alt=""/>*/}
                {/*    <div>*/}
                {/*        <p className={s.name}>Сергей</p>*/}
                {/*        <img src={minipen} alt=""/>*/}
                {/*    </div>*/}


                {/*    <p className={s.rev_text}>Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему*/}
                {/*        коллективу понравилась! День Рождения прошел отлично! :)</p>*/}
                {/*    <p className={s.rev_date}>02.07.2020</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Reviews


