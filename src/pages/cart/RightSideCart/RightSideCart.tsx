import React, { useMemo } from "react";

import style from "../cart.module.css";
import InerfaceCart from "../../../api/cartApi/InerfaceCart";
import BuyProduct from "../../../componets/sections/BuyProduct";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface RightSideCartProps {
  products: InerfaceCart[];
}

const RightSideCart = ({ products }: RightSideCartProps) => {
  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    return products.reduce((sum, product) => {
      if (product.price && product.count) {
        return sum + product.price * product.count;
      }
      return sum;
    }, 0);
  }, [products]);

  return (
    <div className={style.right_side_cart}>
      <div className="px-[27px] py-[15px]">
        <div className="flex justify-between items-center font-bold text-xl mb-3">
          <div>Итого</div>
          <div>{totalPrice}₽</div>
        </div>

        <BuyProduct
          style={"border w-full text-sm rounded border border-black py-2 mt-6"}
        />
        <button
          className="border w-full text-sm rounded bg-black text-white py-2.5 border border-black mt-4"
          onClick={() => {
            navigate(routes.order);
            window.scrollTo({ top: 0 });
          }}
        >
          ПЕРЕЙТИ К ОФОРМЛЕНИЮ
        </button>
      </div>
    </div>
  );
};

export default RightSideCart;
