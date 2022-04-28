/** FROM BASKET
 * ------------------
// console.log(json)
// console.log()

// fetch(json)
//     .then(response => response.json())
//     .then(data => console.log(data))
// keyForJson.map(key => {
//     fetch(json[key])
//         .then(response => console.log(response.json()))
//         .then(data => console.log(data))
// })

// keyForJson.filter(key => json[key].id !== key)
// fetch(localStorage)
//     .then(response => response.json())
//     .then(data => console.log(data))
// .then(data => console.log(data))
// fetch(url, options)
//     .then()





// setMap(forMap.filter(food => food))
// fetch(url, options)
//     .then(response => response)
//     .then(data => console.log(data))
 --------------------------
**/

/**
  const deleteBill = () => {
        let url = `http://localhost:3000/food/${id}`;

        const options = {
            method: "DELETE"
        }


        fetch(url, options)
            .then((response) => {
                    if (response.status === 200) {
                        console.log('Deleted')
                    } else {
                        console.log("something wrong")
                    }
                }
            )
            .then(data => console.log(data))
    }
 **/

/******** Control Page *********/
/*
 useEffect(() => {


        let pizzaUrl = "http://localhost:3000/foods?food_type=pizza";
        fetch(pizzaUrl)
            .then(response => response.json())
            .then(data => setPizza(data))

        let sushiUrl = "http://localhost:3000/foods?food_type=sushi";
        fetch(sushiUrl)
            .then(response => response.json())
            .then(data => setSushi(data))

        let rollUrl = "http://localhost:3000/foods?food_type=sushi_roll";
        fetch(rollUrl)
            .then(response => response.json())
            .then(data => setRoll(data))

        let desertUrl = "http://localhost:3000/foods?food_type=desert";
        fetch(desertUrl)
            .then(response => response.json())
            .then(data => setDesert(data))

        let drinkUrl = "http://localhost:3000/foods?food_type=drink";
        fetch(drinkUrl)
            .then(response => response.json())
            .then(data => setDrink(data))

        let saladUrl = "http://localhost:3000/foods?food_type=salad";
        fetch(saladUrl)
            .then(response => response.json())
            .then(data => setSalad(data))

    }, [
        burger.length, pizza.length, desert.length,
        sushi.length, roll.length, drink.length,
        salad.length])


    const getUrls = () => {
        let url = "http://localhost:3000/foods/"
        fetch(url)
            .then(response => response.json())
            .then(data => setFoodType([...new Set(data.map(food => food.food_type))]))
    }
    const getFoods = () => {
        foodType.map(food => {
            let url = "http://localhost:3000/foods?food_type=" + food;
            fetch(url)
                .then(response => response.json())
                .then(data => setFoods(data))

        })
    }

    ------------------------------------------

    {
                            foodTypes ? foodTypes.map(
                                item => (
                                    fetch(`http://localhost:3000/foods?food_type=${item}`)
                                        .then(response => response.json())
                                        .then(data => {
                                            return (
                                                <div>
                                                    <p>{data.length}</p>
                                                </div>
                                            )
                                        })
                                )
                            ) : console.log("none")
                        }
---------------------------------------------------------
// const foodType = () => {
    //     let url = "http://localhost:3000/foods/"
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //         setFoodTypes([...new Set(data.map(item => item.food_type))])
    //             // setFoodType([...new Set(data.map(food => food.food_type))]))
    //         })
    // }
    // useEffect(() => {
    //     foodType()
    // }, [])
*/