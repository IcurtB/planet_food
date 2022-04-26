import React, {useEffect, useState} from "react";
import s from "./Basket.module.css"
import TypeContext from "../../context/TypeContext";

const BasketCard = ({id, name, count, price, del}) => {
    let [counter, setCount] = useState(count);
    let finalPrice = price * counter
    let inc = () => {
        setCount(counter + 1)
    }
    let dec = () => {
        if (counter > 0) {
            setCount(counter - 1)
        }
    }
    // console.log(id)

    return (
        <>
            <tr>
                <td>{id}</td>
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
    let [parsed, setParsed] = useState([]);
    const basket = Object.values(JSON.parse(localStorage.getItem("basket")))
    // console.log(basket)


    const deleteBill = (id) => {
        localStorage.setItem("basket", JSON.stringify(parsed.filter((item => item.id != id))))
        setParsed(Object.values(JSON.parse(localStorage.getItem("basket"))))
    }
    useEffect(() => {
        setParsed(Object.values(JSON.parse(localStorage.getItem("basket"))))
    }, [parsed.length])
    // let deleteBill = (id) => {
    //     setParsed(basket.filter(item => item.id != id))
    //     if (parsed !== undefined) {
    //         localStorage.setItem("basket", JSON.stringify(parsed))
    //     }
    // }

    // if (basket) {
    //     var card =
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

                {
                    basket.map(item => {
                        return (
                            <BasketCard
                                del={deleteBill}
                                // food={menuBill}
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                count={item.count}
                                price={item.price}
                            />
                        )
                    })
                }
                <tr>
                    <td colSpan="7">
                        <button>Оформить</button>
                    </td>
                </tr>


                </tbody>
            </table>
        </>
    )
};
export default Basket;


