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
    <div className={style.leftSideOrderForm}>
      <div
        className={`py-[30px] px-[27px] h-full rounded ${
          hasAnyError && "border border-red-600"
        }`}
      >
        <div className="text-xl">Покупатель</div>
        <div className="bordder flex justify-between items-center mt-4 w-full">
          {/* Поле имя */}
          <div className="w-full mr-4">
            <div className="mb-1 text-sm text-gray-500 flex justify-between">
              <div>
                Имя <span className="text-red-600 ml-1 "> *</span>
              </div>
              {errors.name && (
                <div className="text-red-600 ">{errors.name.message}</div>
              )}
            </div>
            <input
              type="text"
              className={`border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded ${
                errors.name && "border border-red-700"
              }`}
              {...register("name", {
                required: 'Поле "Имя" обязательно для заполнения',
              })}
            />
          </div>
          {/* Поле имя */}

          {/* Поле Телефон */}
          <div className="w-full ml-4">
            <div className="mb-1 text-sm text-gray-500 flex  justify-between">
              <div>
                Телефон <span className="text-red-600 ml-1 "> *</span>
              </div>
              {errors.phone && (
                <div className="text-red-600 ">{errors.phone.message}</div>
              )}
            </div>
            <input
              type="tel"
              className={`border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded ${
                errors.phone && "border border-red-700"
              }`}
              {...register("phone", {
                required: 'Поле "Телефон" обязательно для заполнения',
              })}
            />
          </div>
          {/* Поле Телефон */}
        </div>

        <div className="flex justify-between items-center mt-6">
          {/* Выбор метода связи */}
          <div className="w-full ml-4">
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
          <div className="w-full ml-4">
            <div className="mb-1 text-sm text-gray-500 flex justify-between">
              <div>E-Mail</div>
              {errors.email && (
                <div className="text-red-600 ">{errors.email.message}</div>
              )}
            </div>
            <input
              type="email"
              className={`border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded ${
                errors.email && "border border-red-700"
              }`}
              {...register("email", {
                required: 'Поле "E-Mail" обязательно для заполнения',
              })}
            />
          </div>
          {/* Поле E-Mail */}
        </div>
      </div>
    </div>
  );
};

export default LeftSIdeOrderForm;
