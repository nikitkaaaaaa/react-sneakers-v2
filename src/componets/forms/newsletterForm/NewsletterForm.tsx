import React, { useEffect, useRef } from "react";

import style from "../newsletterForm/newsletterForm.module.css";
import closeFormImg from "../../../assets/icons/closeForm.svg";
import { useForm } from "react-hook-form";
import InerfaceFormNewLeter from "./InerfaceFormNewLeter";
import { useAddNewsLetterMutation } from "../../../api/newsLetterApi/newsLetterApi";
import useClickOutside from "../../hooks/useCloseBlock";
import useDisableScroll from "../../hooks/useDisableScroll";

interface NewsletterFormProps {
  showNewsLetter: boolean;
  closeForm: () => void;
}

const NewsletterForm = ({ showNewsLetter, closeForm }: NewsletterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InerfaceFormNewLeter>();

  const [addNewsLetter] = useAddNewsLetterMutation();

  const handleOnSubmit = async (data: InerfaceFormNewLeter) => {
    try {
      closeForm();
      await addNewsLetter(data).unwrap();
      reset();
      alert("Вы оформили подписку!");
    } catch (error) {
      closeForm();
      alert("Не удалось подписаться");
    }
  };

  const formRef = useRef<HTMLDivElement>(null);

  useClickOutside(formRef, closeForm); // кастомный хук для закрытия окна вне нажатия его

  useDisableScroll(showNewsLetter); // кастомный хук для отмены скрола при открытии блока

  return (
    <>
      {showNewsLetter && (
        <div className={style.blur}>
          <div className={style.newsletterForm} ref={formRef}>
            <div className=" relative pt-[55px] pr-[75px] pb-[2.5px] pl-[60px]">
              <div className="flex justify-between items-center">
                <div className="text-2xl  ">Подписка на рассылку</div>
                <img
                  src={closeFormImg}
                  alt="closeForm"
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={closeForm}
                />
              </div>

              <div className="mt-[30px]">
                <div className="flex justify-between items-center  mb-2">
                  <div className="text-gray-500 text-sm">
                    Email <span className="text-red-600 ml-1">*</span>
                  </div>
                  <div className="text-red-600 text-sm">
                    {errors.email && errors.email.message}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(handleOnSubmit)}>
                {/* email */}
                <input
                  type="email"
                  className="w-full outline-none border rounded  h-[48px] pt-[8px] pr-[13px] pb-[7px] pl-[13px] bg-[#f8f8f8]"
                  {...register("email", {
                    required: "Заполните это поле",
                  })}
                />
                {/* email */}

                <div className="mt-14">
                  <button
                    type="submit"
                    className="bg-white border border-black rounded py-3.5 px-7 text-[11px]"
                  >
                    ПОДПИСАТЬСЯ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterForm;
