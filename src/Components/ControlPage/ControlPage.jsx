import React from "react";
import s from "./Control.module.css";

let user = "/images/admin/user.svg";
let search = "/images/admin/search.svg";
let news = "/images/admin/new.svg";

const ControlPage = () => {
    return (
        <>
            <div className={s.pages}>
                <header>
                    <p className={s.main}>Главная</p>
                    <div className={`${s.df} ${s.nameBox}`}>
                        <div>
                            <img src={search} alt=""/>
                            <img className={s.bell} src={news} alt=""/>
                        </div>
                        <div className={`${s.df} `}>
                            <p className={s.name}>Бексултна у. Бексултан</p>
                            <div className={s.box}>
                                <img className={s.user} src={user} alt=""/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={s.products}>
                    <div className={s.item}>
                        <div>
                            <p>Пицца</p>
                            <p>60</p>
                        </div>
                        <div>
                            <p>Бургер</p>
                            <p>16</p>
                        </div>
                        <div>
                            <p>Суши</p>
                            <p>43</p>
                        </div>
                        <div>
                            <p>Роллы</p>
                            <p>64</p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div>
                            <p>Салаты</p>
                            <p>60</p>
                        </div>
                        <div>
                            <p>Десерты</p>
                            <p>60</p>
                        </div>
                        <div>
                            <p>Напитки</p>
                            <p>43</p>
                        </div>
                        <div>
                            <p>Роллы</p>
                            <p>64</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ControlPage;
