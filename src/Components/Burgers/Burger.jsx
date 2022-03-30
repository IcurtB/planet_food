import React from "react";
import s from './Burger.module.css'
import {burgers} from "../../Constant/Constant";
import Card from "./Card";

const Burger = () => {
    return (
        <div className={s.burger}>

            <div className={s.df}>
                <p className={s.h2}>Новинки</p>
                <div className={s.menu}>
                    <nav className={s.nav}>
                        <p>Пицца</p>
                        <p>Бургер</p>
                        <p>Суши</p>
                        <p>Роллы</p>
                        <p>Салаты</p>
                        <p>Десерты</p>
                        <p>Напитки</p>
                    </nav>
                </div>
            </div>
            <div className={s.cardBlock}>
            {
                burgers.map(item =>
                <Card
                key={item.id}
                img={item.image}
                name={item.name}
                price={item.price}
                ingr={item.ing}
                />)
            }
            </div>

        </div>
    )
};

export default Burger


