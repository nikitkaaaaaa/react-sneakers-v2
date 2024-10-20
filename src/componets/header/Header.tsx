import React from "react";

import { Link } from "react-router-dom";

import style from "../header/header.module.css";
import favorites from "../../assets/icons/favorites.svg";
import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/user.svg";
import cart from "../../assets/icons/cart.svg";
import loupe from "../../assets/icons/loupe.svg";
import { routes } from "../../routes/routes";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className={style.header}>
          <div className="flex items-center">
            <Link to={routes.home}>
              <img src={logo} alt="logo" />
            </Link>
            <div className="ml-3">
              <div className="font-bold text-xl">SNEAKERS</div>
              <div className="text-gray-500">лучшие кросоки у нас</div>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              className="border border-gray-500 w-[1100px] outline-none rounded-md pl-10 pr-3 py-1"
            />
            <img
              src={loupe}
              alt="loupe"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
          <div className="flex  w-[100px] justify-between">
            <img src={favorites} alt="favorites" />
            <Link to={routes.cart}>
              <img src={cart} alt="cart" />
            </Link>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
