import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";

const App = () => {
  return (


      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Main/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
