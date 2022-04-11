import React from "react"
import CardRev from "../../Reviews/Card";
import s from "./Rew.module.css"
const Reviews = () => {
    return (
        <>
            <div>
                <p>Отзывы</p>
                <div className={s.df}>
                    <div>
                        <CardRev/>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Reviews
