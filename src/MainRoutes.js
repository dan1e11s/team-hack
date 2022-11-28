import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
