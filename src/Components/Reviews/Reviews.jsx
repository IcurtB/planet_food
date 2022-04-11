import React, {useState} from "react";
import Slider from "react-slick";
import s from './Reviews.module.css'
import Sidebar from "../Sidebar/Sidebar";
import CardRev from "./Card";


const Reviews = () => {
    let [offset, setOffset] = useState(0);

    const next = () => {
        return setOffset(offset + 248)
    };

    const prev = () => {
        return setOffset(offset - 248)
    }
    if(offset > 1120){
        return setOffset(0)
    }else if(offset< 0){
        return setOffset(0)
    }



    console.log(offset)
    return (
        <div className={s.reviews}>
            <p>Отзывы</p>
            <div className={s.mid}>
                <div className={s.df}>
                    <div className={s.sa}>
                        <CardRev/>
                    </div>
                </div>
            </div>
            <button onClick={next}>Вперед</button>
            <button onClick={prev}>Назад</button>

        </div>
    )
}

export default Reviews


