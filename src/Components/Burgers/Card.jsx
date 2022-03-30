import React, {useState} from "react";
import s from './Burger.module.css';
let mines = '/images/mines.svg';
let plus = '/images/plus.svg';

const Card = (props) => {
    const [count, setCount] = useState(0);
    const inc = () => setCount(count + 1)
    const dec = () => setCount(count - 1)

    return (
        <div className={s.bCard} key={props.id}>
            <img className={s.img} src={props.img} alt=""/>
            <p className={s.name}>{props.name}</p>
            <p className={s.text}>{props.ingr}</p>
            <p className={s.price}>{props.price}</p>
            <div className={s.btn}>
                <button onClick={dec}>
                    <img src={mines} alt=""/>
                </button>
                <p className={s.count}>{count}</p>
                <button onClick={inc}>
                    <img src={plus} alt=""/>
                </button>
            </div>
            <button className={s.basket}>В КОРЗИНУ</button>
        </div>
    )
};
export default Card