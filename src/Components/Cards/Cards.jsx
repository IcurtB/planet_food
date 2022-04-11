import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import HeaderForCard from "./Header/HeaderForCard";
import Card from "./Card/Card";
import s from "../Pizza/PizzaCard.module.css";

const Cards = () => {
    let [card, setCard] = useState([]);
    let [type, setType] = useState('pizza')
    useEffect(() => {
        fetch(` http://localhost:3000/${type}`)
            .then(response => response.json())
            .then(data => setCard(data))
    }, [type])
    return (
        <>
            <HeaderForCard changeType={setType}/>
            <div className={s.pizza}>
                {console.log(card)}
                {

                    card.map((item) =>
                        <Card
                            key={item.id}
                            name={item.name}
                            ing={item.ing}
                        />)
                }
                <button className={s.more}>ПОКАЗАТЬ ЕЩЁ</button>
            </div>


        </>
    )
};

export default Cards