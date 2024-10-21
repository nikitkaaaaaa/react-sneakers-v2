import React from "react";

import style from "../orderForm.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import interfaceOrderForm from "../interfaceOrderForm/InterfaceOrderForm";

interface DeliveryMethodProps {
  register: UseFormRegister<interfaceOrderForm>;
  errors: FieldErrors<interfaceOrderForm>;
}

const DeliveryMethod = ({ register, errors }: DeliveryMethodProps) => {
  return (
    <div className={style.deliveryMethod}>
      <div className="text-xl">Способ доставки</div>
      <div className="mt-7">
        <div className="mb-2 text-sm  text-gray-500">Адрес доставки</div>
        <input
          type="text"
          className="border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded"
          {...register("deliveryAddress")}
          placeholder="Если вы не уверены начет адрессa доставки, вы сможите уточнить адрес после заказа менеджеру."
        />
      </div>
      <div className="mt-7">
        <div className="mb-2 text-sm  text-gray-500">Комментарии к заказу:</div>
        <input
          type="text"
          className="border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded"
          {...register("message")}
        />
      </div>
    </div>
  );
};

export default DeliveryMethod;
