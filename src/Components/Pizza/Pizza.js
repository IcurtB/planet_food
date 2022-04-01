import React from "react";
import s from './PizzaCard.module.css'
import PizzaCard from "./PizzaCard";
import {pizza} from "../../Constant/Constant";

let arr = '/images/Vector_1.svg'
const Pizza = () => {
    return (
        <div>
            <div className={s.menu}>
                <p className={s.menu_p}>Меню</p>
                <div className={s.df}>
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
            <div className={s.sort}>
                <p>Сортировать по:</p>
                <div>
                    <p className={s.mgn}>По умолчанию</p>
                    <img src={arr} alt=""/>
                </div>
            </div>
            <div className={s.pizza}>
                {
                    pizza.map((item) =>
                        <PizzaCard
                            key={item.id}
                            name={item.name}
                            ing={item.ing}
                            img={item.image}
                        />)
                }
                <button className={s.more}>ПОКАЗАТЬ ЕЩЁ</button>
            </div>

        </div>
    )
};

export default Pizza