import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About";

import Home from "../../pages/Home";

import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import Reservation from "../../pages/Reservation";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
