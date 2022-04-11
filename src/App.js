import React from "react";
import Header from "./Components/Header/Header";
import Face from "./Components/Face/Face";
import Burger from "./Components/Burgers/Burger";
import Pizza from "./Components/Pizza/Pizza";
import AboutUs from "./Components/AboutUs/AboutUs";
import Reviews from "./Components/Reviews/Reviews";
// import Reviews from "./Components/Pizza/Reviwes/Reviws";


import s from './App.module.css';
import Footer from "./Components/Footer/Footer";
import Cards from "./Components/Cards/Cards";
import Admin from "./Components/Admin/Admin";

const App = () => {
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

export default App;
