import React from "react";
import s from "../App.module.css";
import Header from "../Components/Header/Header";
import Face from "../Components/Face/Face";
import Burger from "../Components/Burgers/Burger";
import Cards from "../Components/Cards/Cards";
import AboutUs from "../Components/AboutUs/AboutUs";
import Reviews from "../Components/Reviews/Reviews";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div className={s.df}>
            {/*<Admin/>*/}
            <Header/>
            <Face/>
            <Burger/>
            {/*<Pizza/>*/}
            <Cards/>
            <AboutUs/>
            <Reviews/>
            <Footer/>
        </div>
    );
}

export default Main;
