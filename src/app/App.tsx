import React from "react";

import { Route, Routes } from "react-router-dom";

import "../app/global.css";
import Header from "../componets/header/Header";
import Products from "../pages/Products/Products";
import { routes } from "../routes/routes";
import Home from "../pages/home/Home";
import Product from "../pages/Product/Product";
import Cart from "../pages/cart/Cart";
import Order from "../pages/order/Order";
import Favorites from "../pages/favorites/Favorites";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path={routes.home} element={<Home />}></Route>
          <Route path={routes.products} element={<Products />}></Route>
          <Route path={routes.products} element={<Products />}></Route>
          <Route path={routes.product} element={<Product />}></Route>
          <Route path={routes.productBrands} element={<Products />}></Route>
          <Route path={routes.cart} element={<Cart />}></Route>
          <Route path={routes.order} element={<Order />}></Route>
          <Route path={routes.favorites} element={<Favorites />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
