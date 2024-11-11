import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import style from "../orderForm.module.css";
import interfaceOrderForm from "../interfaceOrderForm/InterfaceOrderForm";

interface LeftSIdeOrderFormProps {
  register: UseFormRegister<interfaceOrderForm>;
  errors: FieldErrors<interfaceOrderForm>;
}

const LeftSIdeOrderForm = ({ register, errors }: LeftSIdeOrderFormProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("telegram");

  const typeConnection: { title: string; value: string }[] = [
    { title: "Telegram", value: "telegram" },
    { title: "Instagram", value: "instagram" },
    { title: "Facebook", value: "facebook" },
  ];

  const hasAnyError: boolean = Object.keys(errors).length > 0; // Проверка на ошибки

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div className={style.left_side_order_form}>
      <div
        className={`py-[30px] px-[27px] h-full rounded ${
          hasAnyError ? "border border-red-600" : "border border-white"
        }`}
      >
        <div className="text-xl">Покупатель</div>
        <div className="bordder flex flex-col md:flex-row  justify-between items-center mt-4 w-full">
          {/* Поле имя */}
          <div className="w-full mr-0 md:mr-4 ">
            <div className="text-sm text-gray-500 mb-2">
              Имя <span className="text-red-600"> *</span>
            </div>
            <input
              type="text"
              className={`border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded mb-2 ${
                errors.name && "border border-red-700"
              }`}
              {...register("name", {
                required: 'Поле "Имя" обязательно для заполнения',
              })}
            />{" "}
            {errors.name && (
              <div className="text-red-600 text-xs">{errors.name.message}</div>
            )}
          </div>
          {/* Поле имя */}

          {/* Поле Телефон */}
          <div className="w-full ml-0 md:ml-4 mt-6 md:mt-0">
            <div className="text-sm text-gray-500 mb-2">
              Телефон <span className="text-red-600"> *</span>
            </div>
            <input
              type="tel"
              className={`border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded mb-2 ${
                errors.phone && "border border-red-700"
              }`}
              {...register("phone", {
                required: 'Поле "Телефон" обязательно для заполнения',
              })}
            />
            {errors.phone && (
              <div className="text-red-600 text-xs">{errors.phone.message}</div>
            )}
          </div>
          {/* Поле Телефон */}
        </div>

        <div className="flex justify-between items-center mt-6 flex-col-reverse md:flex-row">
          {/* Выбор метода связи */}
          <div className="w-full ml-0 md:ml-4">
            <div className=" text-gray-500 mt-6 mb-1">
              Как с вами связаться?
            </div>

            {typeConnection.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <label className="inline-flex items-center cursor-pointer mb-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={item.value}
                    checked={selectedMethod === item.value}
                    onChange={handleChange}
                  />
                  <div className="ml-2 text-sm">{item.title}</div>
                </label>
              </div>
            ))}
          </div>
          {/* Выбор метода связи */}

          {/* Поле E-Mail */}
          <div className="w-full ml-0 md:ml-4">
            <div className="text-sm text-gray-500 mb-2">E-Mail</div>
            <input
              type="email"
              className={`border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded mb-2 ${
                errors.email && "border border-red-700"
              }`}
              {...register("email", {
                required: 'Поле "E-Mail" обязательно для заполнения',
              })}
            />
            {errors.email && (
              <div className="text-red-600 text-xs">{errors.email.message}</div>
            )}
          </div>
          {/* Поле E-Mail */}
        </div>
      </div>
    </div>
  );
};

export default LeftSIdeOrderForm;
