import React from "react";
import { Link } from "react-router-dom";

import empty_cart from "../../assets/icons/empty_cart.svg";
import { useGetProductsCartQuery } from "../../api/cartApi/cartApi";
import Loading from "../../componets/loading/Loading";
import LeftSideCart from "./leftSideCart/LeftSideCart";
import RightSideCart from "./RightSideCart/RightSideCart";
import { routes } from "../../routes/routes";

const Cart = () => {
  const { data = [], isLoading } = useGetProductsCartQuery();

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="text-3xl mt-5">Корзина</div>
      <div>
        {data.length <= 0 ? (
          // страница при пустой корзины
          <div className=" mt-5 flex justify-center">
            <div className=" text-center">
              <div className="flex justify-center">
                <img src={empty_cart} alt="empty cart" />
              </div>
              <div className="text-xl text-gray-500 mt-4 mb-2">
                Ваша корзина пуста
              </div>
              <Link to={routes.home} className="text-red-800">
                Нажмите здесь
              </Link>
              ,<span className="ml-1">чтобы продолжить покупки</span>
            </div>
          </div>
        ) : (
          <div className="flex mt-5">
            <LeftSideCart products={data} />
            <RightSideCart products={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
