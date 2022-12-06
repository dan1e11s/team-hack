import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ShopPage from './pages/ShopPage/ShopPage';
import Layout from './components/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import AuthContextProvider from './contexts/AuthContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';
import PaymentForm from './pages/PaymentForm/PaymentForm';
import EditPage from './pages/EditPage/EditPage';
import CartContextProvider from './contexts/CardContextProvider';
import Cart from './pages/Cart/Cart';
import RestorePasswordPage from './pages/RestorePasswordPage/RestorePasswordPage';
import SetRestoredPage from './pages/SetRestoredPage/SetRestoredPage';

const MainRoutes = () => {
  return (
    <CartContextProvider>
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
              <Route path="/edit/:id" element={<EditPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/restore-password"
                element={<RestorePasswordPage />}
              />
              <Route
                path="/set-restore-password"
                element={<SetRestoredPage />}
              />
            </Route>
          </Routes>
        </AuthContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  );
};

export default MainRoutes;
