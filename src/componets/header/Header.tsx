import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "../header/header.module.css";
import favorites from "../../assets/icons/favorites.svg";
import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/user.svg";
import cart from "../../assets/icons/cart.svg";
import loupe from "../../assets/icons/loupe.svg";
import clear_text from "../../assets/icons/clear_text.svg";
import { routes } from "../../routes/routes";
import SearchBlock from "../searchBlock/SearchBlock";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";

const Header = () => {
  const [searchProducts, setSearchProducts] = useState<string>("");

  const { data } = useGetProductsQuery({ title: searchProducts });

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
              <div className="text-gray-500">лучшие кроссовки у нас</div>
            </div>
          </div>

          {/* Блок поиска продуктов */}
          <div className="relative w-[60%]">
            <div>
              <input
                type="text"
                className="border border-gray-200 w-full outline-none pl-10 pr-3 py-1"
                value={searchProducts}
                onChange={(e) => setSearchProducts(e.target.value)}
              />
              <img
                src={loupe}
                alt="loupe"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              {searchProducts.length >= 1 && (
                <img
                  src={clear_text}
                  alt="clear text"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                  onClick={() => setSearchProducts("")}
                />
              )}
            </div>
            {searchProducts.length >= 2 && data && data.length > 0 && (
              <SearchBlock
                showSearchBlock={true}
                products={data}
                closeSearchBlock={() => setSearchProducts("")}
              />
            )}
          </div>
          {/* Блок поиска продуктов */}

          <div className="flex w-[100px] justify-between">
            <Link to={routes.favorites}>
              <img src={favorites} alt="favorites" />
            </Link>
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
