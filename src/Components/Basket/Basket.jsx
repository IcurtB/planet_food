import React, {useEffect, useState} from "react";
import s from "./Basket.module.css"
import TypeContext from "../../context/TypeContext";

const BasketCard = ({id, name, count, price, del }) => {
    let [counter, setCount] = useState(count) ;
    let finalPrice = price * counter
    let inc = () => {
        setCount(counter + 1)
    }
    let dec = () => {
        if(counter > 0){
            setCount(counter - 1)
        }
    }
    // console.log(id)

    return (
        <>
            <tr>
                <td >{id}</td>
                <td>{name}</td>
                <td>{counter}</td>
                <td>
                    <button onClick={dec}>-</button>
                </td>
                <td>
                    <button onClick={inc}>+</button>
                </td>
                <td>{finalPrice}</td>
                <td>
                    <button onClick={() => del(id)}>Удалить</button>
                </td>
            </tr>
        </>
    )

}

const Basket = () => {
    let url = "http://localhost:3000/food";
    let [menuBill, setMenuBill] = useState();
    let fromStorage = localStorage.getItem("basket")
    let parseBasket = JSON.parse(fromStorage)
    let keys = Object.keys(parseBasket)
    // console.log(keys)
    // keys.map(key => console.log(key))




    // const deleteBill = (id) => {
    //     let url = `http://localhost:3000/food/${id}`;
    //
    //     const options = {
    //         method: "DELETE"
    //     }
    //
    //
    //     fetch(url, options)
    //         .then((response) => {
    //                 if (response.status === 200) {
    //                     setMenuBill(menuBill.filter(bill => bill.id !== id))
    //                     console.log('Deleted')
    //                 } else {
    //                     console.log("something wrong")
    //                 }
    //             }
    //         )
    //         .then(data => console.log(data))
    // }
    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setMenuBill(data))
    // }, [url]);


    let card;
    // if(parseBasket){
    //     card = keys.map(key1 => {
    //         return (
    //             <BasketCard
    //                 // del={deleteBill}
    //                 // food={menuBill}
    //                 key={parseBasket[key1].id}
    //                 id={key1}
    //                 name={parseBasket[key1].name}
    //                 count={parseBasket[key1].count}
    //                 price={parseBasket[key1].price}
    //             />
    //         )
    //     })
    // }


    //Модальное окно
    return (
        <>
            <table className={s.table}>
                <tbody>
                <tr className={s.row}>
                    <td>№</td>
                    <td className={s.name}>Название</td>
                    <td>Количество</td>
                    <td>-</td>
                    <td>+</td>
                    <td className={s.result}>Стоимость</td>
                    <td>Удалить</td>
                </tr>

                {card}



                </tbody>
            </table>
        </>
    )
};
export default Basket

