import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import style from "../cart.module.css";
import arrow_cart from "../../../assets/icons/arrow_cart.svg";
import InerfaceCart from "../../../api/cartApi/InerfaceCart";
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

        <div className="relative">
          <input
            type="text"
            className="w-full outline-none border rounded  h-[42px] pt-[8px] pr-[13px] pb-[7px] pl-[13px]"
            placeholder="Eсть промокод?"
          />
          <img
            src={arrow_cart}
            alt="arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
        <button
          className=" w-full text-sm rounded bg-black text-white py-2.5 border border-black mt-4"
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
