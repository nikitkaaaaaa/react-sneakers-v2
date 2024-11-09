import React, { useMemo } from "react";

import style from "../orderForm.module.css";
import arrow_cart from "../../../../assets/icons/arrow_cart.svg";
import { UseFormRegister } from "react-hook-form";
import interfaceOrderForm from "../interfaceOrderForm/InterfaceOrderForm";

interface RightSideOrderFormProps {
  totalPrice: number;
  register: UseFormRegister<interfaceOrderForm>;
}

const RightSideOrderForm = ({
  totalPrice,
  register,
}: RightSideOrderFormProps) => {
  return (
    <div className={style.rightSideOrderForm}>
      <div className=" flex justify-between items-center font-bold text-lg">
        <div>Итого:</div>
        <div>{totalPrice} ₽</div>
      </div>
      <div className="text-sm flex justify-between items-center text-gray-500 mt-5">
        <div>Товаров на</div>
        <div>{totalPrice} ₽</div>
      </div>
      <div className="text-sm flex justify-between items-center text-gray-500 mt-2">
        <div>Доставка</div>
        <div className="text-green-600">бесплатно</div>
      </div>
      <div className="relative mt-5">
        <input
          type="text"
          className="w-full outline-none border rounded  h-[42px] pt-[8px] pr-[53px] pb-[7px] pl-[13px] bg-[#f8f8f8]"
          placeholder="Eсть промокод?"
          {...register("promotionalСode")}
        />
        <img
          src={arrow_cart}
          alt="arrow"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>

      <button className="border border-black bg-black text-white w-full text-xs py-3.5 rounded mt-7">
        ОФОРМИТЬ ЗАКАЗ
      </button>
      <div className="text-center text-sm mt-8">
        Оформляя заказ, Вы подтверждаете согласие с{" "}
        <span className="text-red-800">
          Пользовательским соглашением, Политикой конфиденциальности и Договором
          оферты.
        </span>
      </div>
    </div>
  );
};

export default RightSideOrderForm;
