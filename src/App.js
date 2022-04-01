import React from "react";
import Header from "./Components/Header/Header";
import Face from "./Components/Face/Face";
import Burger from "./Components/Burgers/Burger";
import Pizza from "./Components/Pizza/Pizza";
import AboutUs from "./Components/AboutUs/AboutUs";

import s from './App.module.css';

const App = () => {
  return (
    <div className={s.df}>
        <Header/>
        <Face/>
        <Burger/>
        <Pizza/>
        <AboutUs/>
    </div>
  );
}

export default App;
