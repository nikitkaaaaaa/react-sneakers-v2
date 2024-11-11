import React, { useEffect, useRef, useState } from "react";

import style from "../buyProductForm/byProductForm.module.css";
import close_form from "../../../assets/icons/closeForm.svg";
import { useForm } from "react-hook-form";
import InertfaceBuyProductForm from "./InertfaceBuyProductForm";
import useClickOutside from "../../hooks/useCloseBlock";
import useDisableScroll from "../../hooks/useDisableScroll";
import { useAddProductToPurchasedProductsMutation } from "../../../api/purchasedProductsApi/purchasedProductsApi";

interface BuyProductFormProps {
  showFormBuyProduct: boolean;
  closeForm: () => void;
  price: number;
  brand: string;
  title: string;
  imageUrl: string;
  id: string;
}

const BuyProductForm = ({
  showFormBuyProduct,
  closeForm,
  price,
  brand,
  title,
  imageUrl,
  id,
}: BuyProductFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InertfaceBuyProductForm>();

  const [selectedMethod, setSelectedMethod] = useState<string>("telegram");

  const typeConnection: { title: string; value: string }[] = [
    { title: "Telegram", value: "telegram" },
    { title: "Instagram", value: "instagram" },
    { title: "Facebook", value: "facebook" },
  ];

  const [addProductToPurchasedProducts] =
    useAddProductToPurchasedProductsMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  const handleOnSubmit = async (data: InertfaceBuyProductForm) => {
    closeForm();

    reset();

    try {
      setTimeout(() => {
        alert("Вы оформили товар!");
      }, 1500);

      const product = {
        title,
        brand,
        size: "37",
        imageUrl,
        count: 1,
        id,
        parentId: Number(id),
      };

      const obj = {
        products: product,
        totalPrice: price,
        name: data.name,
        phone: data.phone,
        massage: data.message,
      };

      await addProductToPurchasedProducts(obj).unwrap();
    } catch (error) {
      alert("Не удалось купить продукт!");
    }
  };

  const formRef = useRef<HTMLDivElement>(null);

  useClickOutside(formRef, closeForm); // кастомный хук для закрытия окна вне нажатия его

  useDisableScroll(showFormBuyProduct); // кастомный хук для отмены скрола при открытии блока

  return (
    <>
      {showFormBuyProduct && (
        <div className={style.blur}>
          <div className={style.by_product_form} ref={formRef}>
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
                  {errors.phone && (
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
