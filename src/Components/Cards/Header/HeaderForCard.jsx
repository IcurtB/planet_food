import React from "react";

import s from "../../Pizza/PizzaCard.module.css";
let arr = '/images/Vector_1.svg'
const HeaderForCard = ({changeType}) => {
    return (
        <>

                <div className={s.menu}>
                    <p className={s.menu_p}>Меню</p>
                    <div className={s.df}>
                        <nav className={s.nav}>
                            <p onClick={()=> changeType('pizza')}>Пицца</p>
                            <p onClick={()=> changeType('burger')}>Бургер</p>
                            <p onClick={()=> changeType('sushi')}>Суши</p>
                            <p onClick={()=> changeType('rools')}>Роллы</p>
                            <p onClick={()=> changeType('salads')}>Салаты</p>
                            <p onClick={()=> changeType('deserts')}>Десерты</p>
                            <p onClick={()=> changeType('drinks')}>Напитки</p>
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
        </>
    )
};
export default HeaderForCard
