import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "../Product/product.module.css";
import { useGetProductIdQuery } from "../../api/productsApi/productsApi";
import RightSideProduct from "./RightSideProduct/RightSideProduct";
import LeftSideProduct from "./LeftSideProduct/LeftSideProduct";

const Product = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetProductIdQuery(Number(id));

  const [currentImage, setCurrentImage] = useState<string>("");

  const infoProduct = [
    {
      title: "ОПИСАНИЕ",
      value: (
        <div>
          <div className="items-center flex">
            <div className="font-bold">Бренд - </div>
            <div className="ml-1">{data?.brand}</div>
          </div>
          <div className="items-center flex mt-2">
            <div className="font-bold">Категория - </div>
            <div className="ml-1">{data?.category}</div>
          </div>
          <div className="items-center flex mt-2">
            <div className="font-bold">Пол - </div>
            <div className="ml-1">{data?.gender}</div>
          </div>
          <div className="items-center flex mt-2">
            <div className="font-bold">Сезон - </div>
            <div className="ml-1">{data?.season}</div>
          </div>
        </div>
      ),
    },
    {
      title: "КАК КУПИТЬ",
      value:
        "Купить в нашем магазине можно несколькими способами. Вы можете оформить заказ на сайте, позвонить нашему менеджеру или написать в WhatsApp или Telegram. Мы с удовольствием проконсультируем по всем вопросам и поможем с оформлением заказа.",
    },
    {
      title: "ОПЛАТА И ДОСТАВКА",
      value: (
        <div>
          <div>
            <div>
              Мы стараемся делать наших клиентов самыми счастливыми, поэтому
              доставляем заказы максимально быстро и комфортно для Вас.
            </div>
            <br />
            <div>Вся доставка в нашем магазине бесплатная. </div>
            <div>
              Стоимость и сроки доставки в другие страны рассчитывается
              индивидуально после оформления заказа.
            </div>
            <br />
            Донецк
          </div>
          <br />
          <div>• Если товар в наличии - в день заказ</div>
          <br />
          <div>• Индивидуальный заказ - 5-7 рабочих дней</div>
          <br />
          <div>Ваша страна</div>
          <br />
          <div>
            • Если товар в наличии - 2-7 рабочих дней, в зависимости от города
          </div>
          <br />
          <div>
            • Индивидуальный заказ - 7-10 рабочих дней, в зависимости от города
          </div>
        </div>
      ),
    },
    {
      title: "ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ",
      value: (
        <div>
          <div>
            Мы будем рады предоставить вам лучшие условия для покупки товара.
            Если вы нашли данную модель в другом магазине по более низкой цене:
            напишите нам, мы предложим лучшую цену относительно конкурентов.
          </div>
          <br />
          <div>
            Обратите внимание, что акция распространяется только на российские
            платформы, продающие оригинальную продукцию.
          </div>
        </div>
      ),
    },
    {
      title: "ОБМЕН И ВОЗВРАТ",
      value:
        "Мы предлагаем бесплатный и полный возврат или обмен для всех стран, куда доставляем наши товары, в течение 14 дней с момента их получения, если сохранён товарный вид, упаковка и все навесные бирки.",
    },
  ];

  const [currentInfoProduct, setCurrentInfoProduct] = useState<
    string | JSX.Element
  >(infoProduct[0].value);

  useEffect(() => {
    if (data?.imageUrL) {
      setCurrentImage(data.imageUrL[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setCurrentInfoProduct(infoProduct[0].value);
    }
  }, [data]);

  return (
    <div className="flex">
      <div className={style.left_side}>
        <LeftSideProduct
          title={data?.title}
          imageUrl={data?.imageUrL}
          currentImage={currentImage}
          currentInfoProduct={currentInfoProduct}
          setCurrentInfoProduct={setCurrentInfoProduct}
          setCurrentImage={setCurrentImage}
          infoProduct={infoProduct}
        />
      </div>

      <div className={style.right_side}>
        <RightSideProduct price={data?.price} brand={data?.brand} />
      </div>
    </div>
  );
};

export default Product;
