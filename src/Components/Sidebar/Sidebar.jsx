import React from "react";
import s from "./Sidebar.module.css"


let logo = "/images/admin/logo.svg";
let main = "/images/admin/pie.svg";
let orders = "/images/admin/Vector.svg";
let menu = "/images/admin/Vector-1.svg";
let contacts = "/images/admin/Vector-2.svg";
let reviews = "/images/admin/Vector-3.svg";
let staff = "/images/admin/Vector-4.svg";


const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div className={s.logo}>
                <div>
                    <img src={logo} alt=""/>
                    <p>FOOD PLANET</p>
                </div>
            </div>
            <nav className={s.df}>
                <div>
                    <img src={main} alt=""/>
                    <p>Главаня</p>
                </div>
                <div>
                    <img src={orders} alt=""/>
                    <p>Заказы</p>
                </div>
                <div>
                    <img src={menu} alt=""/>
                    <p>Меню</p>
                </div>
                <div>
                    <img src={contacts} alt=""/>
                    <p>Контакты</p>
                </div>
                <div>
                    <img src={reviews} alt=""/>
                    <p>Отзывы</p>
                </div>
                <div>
                    <img src={staff} alt=""/>
                    <p>Сотрудники</p>
                </div>
            </nav>
        </div>

    )
};

export default Sidebar