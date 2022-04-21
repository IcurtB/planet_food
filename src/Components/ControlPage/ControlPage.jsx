import React, {useEffect, useState} from "react";
import s from "./Control.module.css";

let user = "/images/admin/user.svg";
let search = "/images/admin/search.svg";
let news = "/images/admin/new.svg";

const ControlPage = () => {
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const food_type = document.getElementById("food_type");
    const ing = document.getElementById("ing");
    const price = document.getElementById("price");

    let [foods, setFoods] = useState([])

    useEffect(() => {
        let url = "http://localhost:3000/foods/"

        fetch(url)
            .then(response => response.json())
            .then(data => setFoods(data))
    }, [foods.length])

    const addFood = () => {
        let url = "http://localhost:3000/foods/"

        let foodObject = {
            img: img.value,
            name: name.value,
            food_type: food_type.value,
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
                <div className={s.products}>
                    <div className={s.item}>
                        <div>
                            <input id="img" type="text"/>
                            <input id="name" type="text"/>
                            <input id="food_type" type="text"/>
                            <input id="price" type="text"/>
                            <input id="ing" type="text"/>
                            <button onClick={addFood}>Добавить еду</button>
                        </div>
                        {
                            foods.map(item => {
                                return (
                                    <>
                                      <div>
                                          <p>{item.id}</p>
                                          <p>{item.name}</p>
                                          <p>{item.food_type}</p>
                                      </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default ControlPage;


// const foodObject = {
//     [food.food_typy]
// }
// const postFood = () => {
//     foods.map(food => {
//         const url = "http://localhost:3000/foods?food_type=" + food.food_type;
//         let urlObject1 = {
//             [food.id]:url
//         }
//         setUrlObject(urlObject1)
//     })
// }
// const postUrl = (url) => {
//     setUrlObject(url)
//     console.log(urlObject)
// }


// useEffect(() => {
//     if (loaded) return;
//     console.log('aaa')
//     postFood()
//     setLoaded(true)
// }, [foods, postFood, urlObject, loaded])


// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log("Первый фетч")
// const foodObject = {
//     [food.food_type]: {
//         ...data
//     }
// }
// const options = {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify(foodObject)
// }
//     fetch("http://localhost:3000/admin")
//         .then(response => response.json())
//         .then(data => console.log("второй фетч"))
// })
// const urlObject = {
//     [food.food_type]: {
//         url
//     }
// }
// console.log(urlObject)
// const urlObject = {
//     "URL": url
// }
// const urlAdmin = "http://localhost:3000/admin"

// fetch(urlAdmin, options)
//     .then(response => response.json())


// useEffect(() => {
//     if (foods !== undefined) {
//
//         foods.map(food => {
//             const urlFoodType = "http://localhost:3000/foods?food_type=" + food.food_type;
//             fetch(urlFoodType)
//                 .then(response => response.json());
//
//
//             let forAdmin = [fooda]
//
//
//             fetch(urlFoodType)
//                 .then(response => response.json())
//                 // .then(data => console.log(data))
//                 .then(data => {
//                     const urlAdmin = "http://localhost:3000/admin";
//                     const options = {
//                         method: "POST",
//                         headers: {
//                             "Content-Type":"application/json"
//                         },
//                         body: JSON.stringify(forAdmin)
//                     };
//
//                     fetch(urlAdmin, options)
//                         .then(response => response.json())
//
//                 })
//
//
//         })
//     }
// }, [])

// const options = {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify()
// }

