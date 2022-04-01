import React, {useState} from "react";
import s from './PizzaCard.module.css'

let mines = '/images/mines.svg'
let plus =  '/images/plus.svg'

let pizza = 'images/pizza/pizza1.svg'
const PizzaCard = (props) => {
    let [count, setCount] = useState(0);
    let inc = () => {
        return setCount(count + 1)
    }
    let dec = () => {
        return setCount(count - 1)
    }
    return (
        <div className={s.card}>
            <img className={s.img} src={props.img} alt=""/>
            <p className={s.name}>{props.name}</p>
            <p className={s.ing}>{props.ing}</p>
            <p className={s.price}>200 сом</p>
            <div className={s.btn}>
                <button onClick={dec}>
                    <img src={mines} alt=""/>
                </button>
                <p>{count}</p>
                <button onClick={inc}>
                    <img src={plus} alt=""/>
                </button>
            </div>
            <button className={s.basket}>В корзину</button>
        </div>
    )
}
export default PizzaCard


