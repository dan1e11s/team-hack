import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import PaymentForm from "./pages/PaymentForm/PaymentForm";

const MainRoutes = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/add" element={<AddProductPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/payment" element={<PaymentForm />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </ProductContextProvider>
  );
};

export default MainRoutes;
