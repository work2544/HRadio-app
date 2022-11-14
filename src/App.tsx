import React from "react";
import "./App.css";
import Mynavbar from "./Component/Mynavbar";
import Posterpopup from "./Component/Posterpopup";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
function App() {
  return (
    <div className="h-screen ">
      <Posterpopup></Posterpopup>
      <Mynavbar></Mynavbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>
    </div>
  );
}

export default App;
