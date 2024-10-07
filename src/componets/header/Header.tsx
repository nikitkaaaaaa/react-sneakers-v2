import React from "react";

import style from "../header/header.module.css";
import favorites from "../../icons/favorites.svg";
import logo from "../../icons/logo.svg";
import user from "../../icons/user.svg";
import cart from "../../icons/cart.svg";
import loupe from "../../icons/loupe.svg";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className={style.header}>
          <div className="flex items-center">
            <img src={logo} alt="logo" />
            <div className="ml-3">
              <div className="font-bold text-xl">SNEAKERS</div>
              <div className="text-gray-500">лучшие кросоки у нас</div>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              className="border border-gray-500 w-[900px] outline-none rounded-md pl-10 pr-3 py-1"
            />
            <img
              src={loupe}
              alt="loupe"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
          <div className="flex  w-[100px] justify-between">
            <img src={favorites} alt="favorites" />
            <img src={cart} alt="cart" />
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;