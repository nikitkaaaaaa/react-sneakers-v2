import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "../header/header.module.css";
import favorites from "../../assets/icons/favorites.svg";
import logo from "../../assets/icons/logo.svg";
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
              <img src={logo} alt="logo" className={style.logo} />
            </Link>
            <div className="ml-3">
              <div className={style.name_store}>SNEAKERS</div>
              <div className={style.best_sneakers_text}>лучшие кроссовки</div>
            </div>
          </div>

          {/* Блок поиска продуктов */}
          <div className={style.block_search_prosucts}>
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

          <div className="flex  justify-between items-center">
            <Link to={routes.favorites}>
              <img src={favorites} alt="favorites" className="mr-2" />
            </Link>
            <Link to={routes.cart}>
              <img src={cart} alt="cart" />
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
