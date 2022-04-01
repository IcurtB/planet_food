import React from "react";
import s from './AboutUs.module.css'
import {aboutUs} from "../../Constant/Constant";


const AboutUs = () => {
    return (
        <div className={s.aboutUs}>
            <p>Почему выбирают нас:</p>
            <div>
            {aboutUs.map(item =>
                <div className={s.card}>
                    <img src={item.img} alt=""/>
                    <p className={s.title}>{item.title}</p>
                    <p className={s.desc}>{item.text}</p>
                </div>
            )}
            </div>

        </div>
    )
}

export default AboutUs



