import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import style from "./reviewsForm.module.css";
import close_form from "../../../assets/icons/closeForm.svg";
import InterfaceReviewsForm from "./InterfaceReviewsForm";
import useClickOutside from "../../hooks/useCloseBlock";
import useDisableScroll from "../../hooks/useDisableScroll";
import { useAddReviewsMutation } from "../../../api/reviewsFormApi/reviewsFormApi";

interface ReviewsFormProps {
  showReviews: boolean;
  closeForm: () => void;
}

const ReviewsForm = ({ showReviews, closeForm }: ReviewsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InterfaceReviewsForm>();
  const [addReviews] = useAddReviewsMutation();

  const handleOnSubmit = async (data: InterfaceReviewsForm) => {
    closeForm();
    reset();
    try {
      await addReviews(data);
    } catch (error) {
      alert("Не удалось отправить отзыв!");
    }
  };

  const formRef = useRef<HTMLDivElement>(null);

  useClickOutside(formRef, closeForm); // кастомный хук для закрытия окна вне нажатия его

  useDisableScroll(showReviews); // кастомный хук для отмены скрола при открытии блока

  return (
    <>
      {showReviews && (
        <div className={style.blur}>
          <div className={style.reviews_form} ref={formRef}>
            <div className="flex justify-between items-center   pl-[50px] pr-[25px]">
              <div className="text-2xl mt-8">Оставить отзыв</div>
              <img
                src={close_form}
                alt="close from "
                onClick={closeForm}
                className="cursor-pointer"
              />
            </div>
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="py-[35px] px-[55px]"
            >
              {/* Поле ввода имени */}
              <>
                <div className="flex justify-between items-center  text-gray-500 mt- mb-1">
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

              {/* Поле ввода E-mail */}
              <>
                <div className="flex justify-between items-center  text-gray-500 mt-6 mb-1">
                  <div>E-mail</div>
                  {errors.email && (
                    <div className="text-red-600">{errors.email?.message}</div>
                  )}
                </div>
                <input
                  type="email"
                  className="border w-full outline-none h-[48px] p-2 pr-3.25 pb-1.5 rounded bg-[#f8f8f8]"
                  {...register("email", {
                    required: "E-mail обязателен для заполнения",
                  })}
                />
              </>
              {/* Поле ввода E-mail */}

              {/* Поле ввода телефона */}
              <>
                <div className="flex justify-between items-center  text-gray-500 mt-6 mb-1">
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

              {/* Поле ввода сообщения */}
              <>
                <div className="flex justify-between items-center  text-gray-500 mt-6 mb-1">
                  <div>
                    Текст отзыва <span className="text-red-600 ml-1"> *</span>
                  </div>
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
              {/* Поле ввода сообщения */}

              {/* Кнопка отправки формы */}
              <button className="border border-black rounded mt-5 py-3 px-6 text-xs">
                ОТПРАВИТЬ
              </button>
              {/* Кнопка отправки формы */}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewsForm;
