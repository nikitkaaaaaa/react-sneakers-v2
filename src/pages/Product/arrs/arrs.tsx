import facebook from "../../../assets/png/facebook";
import instagram from "../../../assets/png/instagram";
import telegram from "../../../assets/png/telegram";

export const size: number[] = [
  35, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 43, 43.5, 44, 45, 46,
  46.5, 47.5,
];

export const socials: { title: string; img: string; route: string }[] = [
  {
    title: "Telegram",
    img: telegram.telegram,
    route: "https://web.telegram.org/k/",
  },
  {
    title: "Instagram",
    img: instagram.instagram,
    route: "https://www.instagram.com/",
  },
  {
    title: "Facebook",
    img: facebook.facebook,
    route: "https://www.facebook.com/",
  },
];

interface ProductData {
  brand?: string;
  category?: string;
  gender?: string;
  season?: string;
}

export const infoProduct = (data: ProductData) => [
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
          Мы будем рады предоставить вам лучшие условия для покупки товара. Если
          вы нашли данную модель в другом магазине по более низкой цене:
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
