import React from "react";
import s from './Face.module.css';

let arr = '/images/arr.svg';
let bigBurger = '/images/bigBurger.svg';
let burVector = '/images/burgerVector.svg';
let tea = '/images/tea.svg';
const Face = () => {
    return (
        <div className={s.pos_rel}>
            <p className={s.h1}>Доставка вкусной еды до 30 минут + напиток в подарок!</p>
            <p className={s.p}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
            <button className={s.btn}>ПЕРЕЙТИ В МЕНЮ
                <img className={s.img} src={arr} alt=""/></button>
            <img className={s.burger} src={bigBurger} alt=""/>
            <img className={s.vector} src={burVector} alt=""/>
            <img className={s.tea} src={tea} alt=""/>

        </div>
    )
}

export default Face