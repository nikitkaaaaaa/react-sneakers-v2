import React, { useMemo } from "react";

import style from "../orderForm.module.css";

interface RightSideOrderFormProps {
  totalPrice: number;
}

const RightSideOrderForm = ({ totalPrice }: RightSideOrderFormProps) => {
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
      <input
        type="text"
        className="w-full  border outline-none bg-[#f8f8f8] mt-5 py-[9px] pr-[35px] pb-[9px] pl-[12px] rounded"
        placeholder="Есть промокод?"
      />

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
