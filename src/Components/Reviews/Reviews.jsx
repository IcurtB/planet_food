import React, {useState} from "react";
import Slider from "react-slick";
import s from './Reviews.module.css'
import Sidebar from "../Sidebar/Sidebar";
import CardRev from "./Card";
import {reviews} from "../../Constant/Constant";


const Reviews = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className={s.reviews}>
            <p>Отзывы</p>
            <div>
                <div className={s.sa}>
                    <Slider {...settings}>
                    {
                        reviews.map(item => {
                            return (
                                <CardRev
                                key={item.id}
                                review={item.review}/>
                            )
                        })
                    }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Reviews


