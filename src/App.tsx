import React from "react";
import "./App.css";
import Mynavbar from "./Component/Mynavbar";
import Posterpopup from "./Component/Posterpopup";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import HomePage2 from "./Page/HomePage2";
import HomePage3 from "./Page/HomePage3";
import HomePage4 from "./Page/HomePage4";
function App() {
  return (
    <div className="h-screen ">
      <Posterpopup></Posterpopup>
      <Mynavbar></Mynavbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/2" element={<HomePage2></HomePage2>} />
        <Route path="/3" element={<HomePage3></HomePage3>} />
        <Route path="/4" element={<HomePage4></HomePage4>} />
      </Routes>
    </div>
  );
}

export default App;
