import React from "react";
let pen = 'images/pen.svg';
let minipen = 'images/mini_pen.svg';
let el = 'images/ellipce.svg'
const Reviews = () => {
    return (
        <div>
            <p>Отзывы</p>
            <div>
                <div>
                    <img src={pen} alt=""/>
                    <img src={el} alt=""/>
                    <p>Сергей
                        <img src={minipen} alt=""/>
                    </p>
                    <p>Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему
                        коллективу понравилась! День Рождения прошел отлично! :)</p>
                    <p>02.07.2020</p>
                </div>
            </div>
        </div>
    )
}






