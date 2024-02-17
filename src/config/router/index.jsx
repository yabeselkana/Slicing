import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Reservation from "../../pages/Reservation";
import Destination from "../../pages/Destination";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
