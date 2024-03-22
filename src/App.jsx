import React from "react";

import Home from "./pages/home/Home";
import Add from "./pages/add/AddProduct";
import Edit from "./pages/edit/Edit"
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-product" element={<Add />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </>
  );
};

export default App;
