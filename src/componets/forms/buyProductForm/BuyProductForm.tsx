import React, { useEffect, useRef, useState } from "react";

import style from "../buyProductForm/byProductForm.module.css";
import close_form from "../../../assets/icons/closeForm.svg";
import { useForm } from "react-hook-form";
import InertfaceBuyProductForm from "./InertfaceBuyProductForm";

interface BuyProductFormProps {
  showFormBuyProduct: boolean;
  closeForm: () => void;
}

const BuyProductForm = ({
  showFormBuyProduct,
  closeForm,
}: BuyProductFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InertfaceBuyProductForm>();

  const [selectedMethod, setSelectedMethod] = useState("telegram");

  const typeConnection: { title: string; value: string }[] = [
    { title: "Telegram", value: "telegram" },
    { title: "Instagram", value: "instagram" },
    { title: "Facebook", value: "facebook" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  const handleOnSubmit = (data: InertfaceBuyProductForm) => {
    console.log(data);
    closeForm();
    reset();
  };

  const formRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      closeForm();
    }
  };

  useEffect(() => {
    if (showFormBuyProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showFormBuyProduct]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {showFormBuyProduct && (
        <div className={style.blur}>
          <div className={style.byProductForm} ref={formRef}>
            <div className="flex justify-end  mt-5">
              <img
                src={close_form}
                alt="close form"
                className="cursor-pointer mr-5"
                onClick={closeForm}
              />
            </div>
            <div className="text-2xl px-14 mt-2">Купить в 1 клик</div>

            <form
              className="px-14 pb-5 text-sm"
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              {/* Поле ввода имени */}
              <>
                <div className="flex justify-between items-center  text-gray-500 mt-12 mb-1">
                  <div>
                    Имя <span className="text-red-600 ml-1"> *</span>
                  </div>
                  {errors.name && (
                    <div className="text-red-600">{errors.name?.message}</div>
                  )}
                </div>
                <input
                  type="text"
                  className="border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded bg-[#f8f8f8]"
                  {...register("name", {
                    required: "Имя обязательно для заполнения",
                  })}
                />
              </>
              {/* Поле ввода имени */}

              {/* Поле ввода телефона */}
              <>
                <div className="flex justify-between items-center text-gray-500 mt-6 mb-1">
                  <div>Телефон</div>
                  {errors.name && (
                    <div className="text-red-600">{errors.phone?.message}</div>
                  )}
                </div>
                <input
                  type="tel"
                  className="border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded bg-[#f8f8f8]"
                  {...register("phone", {
                    required: "Телефон обязателен для заполнения",
                  })}
                />
              </>
              {/* Поле ввода телефона */}

              {/* Выбор метода связи */}
              <>
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
              </>
              {/* Выбор метода связи */}

              {/* Комментарий к заказу */}
              <>
                <div className="flex justify-between items-center text-gray-500 mt-6 mb-1">
                  <div> Комментарий к заказу</div>
                  {errors.message && (
                    <div className="text-red-600">
                      {errors.message?.message}
                    </div>
                  )}
                </div>
                <textarea
                  className="border w-full outline-none resize-none h-[190px] py-2 px-3 bg-[#f8f8f8]"
                  {...register("message", {
                    required: "Заполните это поле",
                  })}
                ></textarea>
              </>
              {/* Комментарий к заказу */}

              {/* Отправить форму */}
              <button className="text-xs border text-white bg-red-700 py-2.5 px-5 rounded mt-3">
                ОТПРАВИТЬ
              </button>
              {/* Отправить форму */}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyProductForm;
