import React, {useContext, useEffect, useState} from "react";
import s from "../../Pizza/PizzaCard.module.css";
import TypeContext from "../../../context/TypeContext";

let mines = '/images/mines.svg';
let plus = '/images/plus.svg';

let pizza = 'images/pizza/pizza1.svg';

const Card = ({id, ing, name, food}) => {
    let [count, setCount] = useState(0);
    const {type, setType} = useContext(TypeContext)
    let inc = () => {
        return setCount(count + 1)
    }
    let dec = () => {
        if (count > 0) {
            return setCount(count - 1)
        }
    }

    const addToBasket = () => {

        const id = food.id;
        let card = localStorage.getItem("basket")

        let foodObject = {
            [id]:{
                id: id,
                food_type: food.food_type,
                name: food.name,
                price: food.price,
                count: count
            }
        }
        if(card){
            let cardStorage = JSON.parse(card)
            foodObject = {
                ...foodObject,
                ...cardStorage
            }
            console.log(foodObject)
        }

        localStorage.setItem("basket", JSON.stringify(foodObject))
        // let url = "http://localhost:3000/basket"

        // const options = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(foodObject)
        // }
        //
        // fetch(url, options)
        //     .then(response => response.json())
            
    }

    return (
        <>
            <div className={s.card}>
                <img className={s.img} src={pizza} alt=""/>
                <p className={s.name}>{name}</p>
                <p className={s.ing}>{ing}</p>
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
                <button onClick={addToBasket} className={s.basket}>В корзину</button>
            </div>
        </>
    )
};
export default Card;