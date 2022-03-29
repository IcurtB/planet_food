import React from "react";
import s from './Header.module.css'

let logo = '/images/logo__b.svg'
let phn = '/images/phn.svg'
let vector = '/images/Vector_1.svg'
let basket = '/images/basket.svg'
const Header = () => {
    return (
        <div className={`${s.df} ${s.main}`}>
            <div>
                <img src={logo} alt=""/>
                <div>
                    <p>FOOD PLANET</p>
                    <p>Пларнета вкусной еды</p>
                </div>
            </div>
            <nav className={s.nav}>
                <p>Главная</p>
                <p>Меню
                    <img src={vector} alt=""/></p>
                <p>Доставка</p>
                <p>Контакты</p>
            </nav>
            <div className={s.contact}>
                <p><img className={s.mrg} src={phn} alt=""/>
                    +996500405988</p>
                <p><img className={s.mrg} src={basket} alt=""/>1</p>
            </div>
        </div>
    )
}

export default Header