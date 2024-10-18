import React, { useEffect, useRef, useState } from "react";

import style from "../consultationForm/ConsultationForm.module.css";
import closeFormConsuiltation from "../../../assets/icons/closeFormConsuiltation.svg";
import { useForm } from "react-hook-form";
import { useAddConsultationMessageApiMutation } from "../../../api/consultationMessageApi/consultationMessageApi";
import InterfaceForm from "./InerfaceForm";

interface ConsultationFormProps {
  showСonsultation: boolean;
  closeСonsultation: () => void;
}

const ConsultationForm = ({
  showСonsultation,
  closeСonsultation,
}: ConsultationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InterfaceForm>();

  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const [AddConsultationMessageApiMutation] =
    useAddConsultationMessageApiMutation();

  const handleOnSubmit = async (data: InterfaceForm) => {
    const obj: InterfaceForm = {
      name: data.name,
      message: data.message,
      email: data.email,
      phone: data.phone,
    };

    try {
      await AddConsultationMessageApiMutation(obj).unwrap();
      reset();
      alert("Ваше сообщение отправлено!");
    } catch (error) {
      alert("Не удалось отправить сообщение!");
    }
    closeСonsultation();
  };

  useEffect(() => {
    if (showСonsultation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showСonsultation]);

  const formRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      closeСonsultation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {showСonsultation && (
        <div className={style.blur}>
          <div className={style.consultationForm} ref={formRef}>
            <div className="flex justify-end">
              <img
                src={closeFormConsuiltation}
                alt="close form"
                className="mr-4 cursor-pointer"
                onClick={closeСonsultation}
              />
            </div>
            <div className="font-bold text-2xl text-center mb-3">
              Задать вопрос
            </div>
            <hr />
            <form
              className="px-8 py-3 flex flex-col justify-between "
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              {/* Поле ввода для имени */}
              <div className="h-[73px]  relative  ">
                <input
                  type="text"
                  className={`${style.input} ${errors.name && style.error}`}
                  placeholder="Имя *"
                  {...register("name", {
                    required: "Имя обязательно для заполнения",
                  })}
                />

                {errors.name && (
                  <div className="text-red-500 text-sm absolute bottom-0 left-0">
                    {errors.name.message}
                  </div>
                )}
              </div>
              {/* Поле ввода для имени */}

              {/* Поле ввода для email */}
              <div className=" relative h-[73px]  ">
                <input
                  type="email"
                  className={`${style.input} ${errors.email && style.error}`}
                  placeholder="E-mail"
                  {...register("email", {
                    required: "Email обязателен для заполнения",
                  })}
                />

                {errors.email && (
                  <div className="text-red-500 text-sm absolute bottom-0 left-0">
                    {errors.email.message}
                  </div>
                )}
              </div>
              {/* Поле ввода для email */}

              {/* Поле ввода для телефона */}
              <div className=" relative h-[73px]   ">
                <input
                  type="tel"
                  className={`${style.input} ${errors.phone && style.error}`}
                  placeholder="Телефон"
                  {...register("phone", {
                    required: "Телефон обязателен для заполнения",
                  })}
                />

                {errors.phone && (
                  <div className="text-red-500 text-sm absolute bottom-0 left-0">
                    {errors.phone.message}
                  </div>
                )}
              </div>
              {/* Поле ввода для телефона */}

              {/* Поле ввода для сообщения */}
              <div className=" relative h-[73px]   ">
                <textarea
                  className={`${style.textarea} ${
                    errors.message && style.error
                  }`}
                  placeholder="Напишите ваш вопрос *"
                  {...register("message", {
                    required: "Сообщение обязательно для заполнения",
                  })}
                ></textarea>

                {errors.message && (
                  <div className="text-red-500 text-sm absolute bottom--1 left-0   ">
                    {errors.message.message}
                  </div>
                )}
              </div>
              {/* Поле ввода для сообщения */}

              {/* Галочка для принятия согласия на обработку */}
              <label className="flex items-start cursor-pointer mt-12 mb-4">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <div className="text-[11px] leading-tight ml-2">
                  Нажимая кнопку «Отправить», я даю свое согласие на обработку
                  моих персональных данных, в соответствии с Федеральным законом
                  от 27.07.2006 года №152-ФЗ «О персональных данных», на
                  условиях и для целей, определенных в Согласии на обработку
                  персональных данных *Поле обязательно для заполнения
                </div>
              </label>
              {/* Галочка для принятия согласия на обработку */}

              {/* Кнопка для отправки формы */}
              <button
                className="w-full bg-black text-white py-3.5 rounded"
                type="submit"
              >
                Отправить
              </button>
              {/* Кнопка для отправки формы */}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationForm;
