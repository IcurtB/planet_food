import React, {useEffect, useState} from "react";
import s from "./Control.module.css";
import Modal from "../Modal/Modal";
import TypeContext from "../../context/TypeContext";

let user = "/images/admin/user.svg";
let search = "/images/admin/search.svg";
let news = "/images/admin/new.svg";

const ControlPage = () => {

    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const food_type = document.getElementById("food_type");
    const ing = document.getElementById("ing");
    const price = document.getElementById("price");


    // let [foodType, setFoodType] = useState([]);
    let [pizza, setPizza] = useState([]);
    let [burger, setBurger] = useState([]);
    let [sushi, setSushi] = useState([]);
    let [roll, setRoll] = useState([]);
    let [desert, setDesert] = useState([]);
    let [drink, setDrink] = useState([]);
    let [salad, setSalad] = useState([]);

    let [dropdown, setDropdown] = useState("pizza")


    // const addFood = () => {
    //     console.log(img.value)
    //     console.log(dropdown)
    // }

    useEffect(() => {
        fetch("http://localhost:3000/foods?food_type=burger")
            .then(response => response.json())
            .then(data => setBurger(data))
        fetch("http://localhost:3000/foods?food_type=pizza")
            .then(response => response.json())
            .then(data => setPizza(data))
        fetch("http://localhost:3000/foods?food_type=sushi")
            .then(response => response.json())
            .then(data => setSushi(data))
        fetch("http://localhost:3000/foods?food_type=sushi_roll")
            .then(response => response.json())
            .then(data => setRoll(data))
        fetch("http://localhost:3000/foods?food_type=desert")
            .then(response => response.json())
            .then(data => setDesert(data))
        fetch("http://localhost:3000/foods?food_type=drink")
            .then(response => response.json())
            .then(data => setDrink(data))
        fetch("http://localhost:3000/foods?food_type=salad")
            .then(response => response.json())
            .then(data => setSalad(data))
    }, [ burger.length, pizza.length, desert.length,
        sushi.length, roll.length, drink.length,
        salad.length])


    const addFood = () => {
        let url = "http://localhost:3000/foods/"

        let foodObject = {
            img: img.value,
            name: name.value,
            food_type: dropdown,
            ing: ing.value,
            price: price.value
        }


        const options = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(foodObject)
        }
        fetch(url, options)
            .then(response => response.json())
    }


    return (
        <>
            <div className={s.pages}>
                <header>
                    <p className={s.main}>Главная</p>
                    <div className={`${s.df} ${s.nameBox}`}>
                        <div>
                            <img src={search} alt=""/>
                            <img className={s.bell} src={news} alt=""/>
                        </div>
                        <div className={`${s.df} `}>
                            <p className={s.name}>Бексултна у. Бексултан</p>
                            <div className={s.box}>
                                <img className={s.user} src={user} alt=""/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={s.drop}>
                    <input className={s.img} id="img" type="url" placeholder="URL-картинки"/>
                    <input id="name" type="text" placeholder="Название блюда"/>
                    <select className={s.dropSelect} value={dropdown} onChange={(e) => {
                        setDropdown(e.target.value)
                    }}>
                        <option value="burger">Гамбургер</option>
                        <option value="pizza">Пицца</option>
                        <option value="sushi">Суши</option>
                        <option value="sushi_roll">Роллы</option>
                        <option value="salad">Салаты</option>
                        <option value="drink">Напитки</option>
                        <option value="desert">Десерты</option>
                    </select>
                    <input id="ing" type="text" placeholder="Ингредиенты"/>
                    <input id="price" type="text" placeholder="Цена"/>
                    <button className={s.submit} type="submit" onClick={addFood}>Добавить еду</button>
                </div>
                    <div className={s.products}>
                        <div className={s.item}>
                            <div>
                                <Modal
                                    name="Бургеры">
                                    {burger.map(item => {
                                        return(
                                            <div key={item.id} className={s.modal}>
                                                <p>{item.id}</p>
                                                <p>{item.food_type}</p>
                                                <p>{item.name}</p>
                                                <p className={s.hidden}>{item.ing}</p>
                                            </div>
                                        )
                                    })}
                                </Modal>
                            </div>
                            <div>
                                <Modal
                                    name="Пицца">
                                    {pizza.map(item => {
                                        return(
                                            <div key={item.id} className={s.modal}>
                                                <p>{item.id}</p>
                                                <p>{item.food_type}</p>
                                                <p>{item.name}</p>
                                                <p className={s.hidden}>{item.ing}</p>
                                            </div>
                                        )
                                    })}
                                </Modal>
                            </div>
                            <div>
                                <Modal
                                    name="Суши">
                                    {sushi.map(item => {
                                        return(
                                            <div key={item.id} className={s.modal}>
                                                <p>{item.id}</p>
                                                <p>{item.food_type}</p>
                                                <p>{item.name}</p>
                                                <p className={s.hidden}>{item.ing}</p>
                                            </div>
                                        )
                                    })}
                                </Modal>
                            </div>
                            <div>
                                <Modal
                                    name="Суши ролл">
                                    {roll.map(item => {
                                        return(
                                            <div key={item.id} className={s.modal}>
                                                <p>{item.id}</p>
                                                <p>{item.food_type}</p>
                                                <p>{item.name}</p>
                                                <p className={s.hidden}>{item.ing}</p>
                                            </div>
                                        )
                                    })}
                                </Modal>
                            </div>
                            <div>
                                <Modal
                                    name="Десерты">
                                    {desert.map(item => {
                                        return(
                                            <div key={item.id} className={s.modal}>
                                                <p>{item.id}</p>
                                                <p>{item.food_type}</p>
                                                <p>{item.name}</p>
                                                <p className={s.hidden}>{item.ing}</p>
                                            </div>
                                        )
                                    })}
                                </Modal>
                            </div>
                            <div>
                                <Modal
                                    name="Напитки">
                                    {drink.map(item => {
                                        return(
                                            <div key={item.id} className={s.modal}>
                                                <p>{item.id}</p>
                                                <p>{item.food_type}</p>
                                                <p>{item.name}</p>
                                                <p className={s.hidden}>{item.ing}</p>
                                            </div>
                                        )
                                    })}
                                </Modal>
                            </div>
                            <div>
                                <Modal
                                    name="Салаты">
                                    {salad.map(item => {
                                        return(
                                            <div key={item.id} className={s.modal}>
                                                <p>{item.id}</p>
                                                <p>{item.food_type}</p>
                                                <p>{item.name}</p>
                                                <p className={s.hidden}>{item.ing}</p>
                                            </div>
                                        )
                                    })}
                                </Modal>
                            </div>
                        </div>
                    </div>


            </div>
        </>
    )
};

export default ControlPage;
