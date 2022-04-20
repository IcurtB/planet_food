import React, {useContext} from "react";

import s from "../../Pizza/PizzaCard.module.css";
import TypeContext from "../../../context/TypeContext";
let arr = '/images/Vector_1.svg'
const HeaderForCard = () => {
    const {type, setType} = useContext(TypeContext)
    return (
        <>

                <div className={s.menu}>
                    <p className={s.menu_p}>Меню</p>
                    <div className={s.df}>
                        <nav className={s.nav}>
                            <p onClick={()=> setType('pizza')}>Пицца</p>
                            <p onClick={()=> setType('burger')}>Бургер</p>
                            <p onClick={()=> setType('sushi')}>Суши</p>
                            <p onClick={()=> setType('sushi_roll')}>Роллы</p>
                            <p onClick={()=> setType('salad')}>Салаты</p>
                            <p onClick={()=> setType('desert')}>Десерты</p>
                            <p onClick={()=> setType('drink')}>Напитки</p>
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
