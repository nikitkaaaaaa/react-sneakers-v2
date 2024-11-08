import React, { useState } from "react";

import style from "../home.module.css";
import reviews from "../../../assets/icons/reviews.svg";
import star from "../../../assets/icons/star.svg";
import ReviewsForm from "../../../componets/forms/reviewsForm/ReviewsForm";

const Reviews = () => {
  const reviewsArr: { date: string; name: string; description: string }[] = [
    {
      date: "07 декабря 2022",
      name: "Полина Храмова",
      description:
        "Этот магазин - настоящая находка для ценителей стильной обуви! У них огромный выбор моделей, и доставка была очень быстрой. Сотрудники оперативно ответили на все мои вопросы, что приятно удивило. Без сомнения, я буду делать здесь ещё заказы!",
    },
    {
      date: "20 апреля 2023",
      name: "Максим П.",
      description:
        "Впечатлили отзывчивые продавцы, которые моментально отвечают на все вопросы и помогли мне с выбором размера. К сожалению, нужного мне цвета не было в наличии, оплатил на месте, и через час заказ был доставлен прямо по указанному адресу. Это была моя покупка модели изи 350.",
    },
  ];

  const [showReviews, setShowReviews] = useState<boolean>(false);

  return (
    <div>
      <div className={style.reviews}>
        <div className={style.reviews_left_side}>
          <div className="text-2xl">О нас пишут</div>
          <div className="text-gray-500 my-5">
            Все отзывы в данном блоке взяты из карточки нашей компании в Яндекс
            картах
          </div>

          <button
            className="border-2 border-[#A10000] rounded py-2 px-3.5 flex justify-center items-center"
            onClick={() => setShowReviews(true)}
          >
            <img src={reviews} alt="reviews" />
          </button>
        </div>
        {/* Вывод каротчек отзывов */}
        <div className="w-full lg:w-[70%] flex items-center  relative ">
          <div className={style.reviews_right_side}>
            {reviewsArr.map((item, index) => (
              <div
                className="w-full lg:w-[50%] mb-2 mx-[0.5px] border  bg-white py-[29px] px-[39px]  hover:transform hover:-translate-y-0.5
              hover:shadow-lg transition-transform duration-300"
                key={index}
              >
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 text-sm">{item.date}</div>
                  <div className="inline-flex">
                    {[...Array(5)].map((_, starIndex) => (
                      <img key={starIndex} src={star} alt="star" />
                    ))}
                  </div>
                </div>
                <div className="mt-1">{item.name}</div>
                <div className="mt-3 text-md text-gray-700">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Вывод каротчек отзывов */}
      </div>

      {/* Форма для отправки отзыва */}
      <ReviewsForm
        showReviews={showReviews}
        closeForm={() => setShowReviews(false)}
      />
      {/* Форма для отправки отзыва */}
    </div>
  );
};

export default Reviews;
