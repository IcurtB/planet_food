import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import Basket from "./Components/Basket/Basket";
import Admin from "./Components/Admin/Admin";

const App = () => {
  return (


      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route exact path="/admin" element={<Admin/>}/>
              <Route exact path="/basket" element={<Basket/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
