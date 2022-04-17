import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import HeaderForCard from "./Header/HeaderForCard";
import Card from "./Card/Card";
import s from "../Pizza/PizzaCard.module.css";
import TypeContext from "../../context/TypeContext";

const Cards = () => {
    let [card, setCard] = useState([]);
    const [type, setType] = useState('pizza')

    let getCard = () => {

        fetch(`http://localhost:3000/${type}`)
            .then(response => response.json())
            .then(data => setCard(data))
    }
    useEffect(() => {
        getCard();
    }, [type])
    return (
        <>

            <TypeContext.Provider value={{type, setType}}>
                <HeaderForCard/>
            <div className={s.pizza}>
                {
                    card.map((item) =>
                        <Card
                            food={item}
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            ing={item.ing}
                        />)
                }
                <button className={s.more}>ПОКАЗАТЬ ЕЩЁ</button>
            </div>
            </TypeContext.Provider>



        </>
    )
};

export default Cards