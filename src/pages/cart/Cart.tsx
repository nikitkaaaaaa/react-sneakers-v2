import React from "react";

import { useGetProductsCartQuery } from "../../api/cartApi/cartApi";
import Loading from "../../componets/loading/Loading";
import LeftSideCart from "./leftSideCart/LeftSideCart";
import RightSideCart from "./RightSideCart/RightSideCart";

const Cart = () => {
  const { data = [], isLoading } = useGetProductsCartQuery();

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="text-3xl mt-5">Корзина</div>
      <div>
        {data.length <= 0 ? (
          <div>net novarov</div>
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
