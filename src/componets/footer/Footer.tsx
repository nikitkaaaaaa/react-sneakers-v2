import React from "react";

import phone from "../../assets/icons/phone.svg";
import message from "../../assets/icons/message.svg";
import location from "../../assets/icons/location.svg";

import { socials } from "../../pages/Product/arrs/arrs";
import { Link } from "react-router-dom";

interface FooterProps {
  isLoading: boolean;
}

const Footer = ({ isLoading }: FooterProps) => {
  const mainMenuItems: string[] = ["Каталог", "Акции", "Бренды", "Коллекции"];

  const companyInfoItems: string[] = [
    "Компания",
    "О компании",
    "Контакты",
    "Условия обслуживания",
  ];

  const policyInfoItems: string[] = [
    "Информация",
    "Условия оплаты",
    "Условия доставки",
    "Пользовательское соглашение",
    "Политика конфиденциальности",
    "Договор оферты",
  ];

  const contact: { image: string; value: string }[] = [
    { image: phone, value: "+7 (949) 315-37-37" },
    { image: message, value: "nikitka@react.ru" },
    { image: location, value: "г. Донецк, ул. Пятницкого" },
  ];

  return (
    <div className="mt-[150px]">
      {!isLoading && (
        <>
          <hr className="my-16" />
          <div className="container">
            <div className=" hidden md:block">
              <div className="flex justify-between">
                <div>
                  {mainMenuItems.map((item, index) => (
                    <div key={index}>
                      <div
                        className={`  ${
                          index === 0 ? "mb-5 text-black" : "mb-3 "
                        }`}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  {companyInfoItems.map((item, index) => (
                    <div key={index}>
                      <div
                        className={`  ${
                          index === 0
                            ? "mb-5 text-black"
                            : "mb-3 text-gray-500 "
                        }`}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  {policyInfoItems.map((item, index) => (
                    <div key={index}>
                      <div
                        className={`  ${
                          index === 0 ? "mb-5 text-black" : "mb-3 text-gray-500"
                        }`}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <div className=" hidden lg:block">
                  <div className="mb-2.5">Контакты</div>
                  {contact.map((item, index) => (
                    <div key={index} className="flex mb-3">
                      <img src={item.image} alt={item.value} />
                      <div className="ml-5 text-gray-500">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" justify-center flex lg:hidden">
                <div>
                  {contact.map((item, index) => (
                    <div key={index} className="flex mb-3">
                      <img src={item.image} alt={item.value} />
                      <div className="ml-5 text-gray-500">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Футер при маленьком экране */}
            <div className=" font-bold block md:hidden">
              <div className="border-t border-l border-r py-3.5 pl-3">
                {mainMenuItems[0]}
              </div>
              <div className="border py-3.5 pl-3">{companyInfoItems[0]}</div>
              <div className="border-b border-l border-r py-3.5 pl-3">
                {policyInfoItems[0]}
              </div>
            </div>
            {/* Футер при маленьком экране */}

            <div className=" flex justify-center items-center  my-16">
              {socials.map((item, index) => (
                <Link
                  to={item.route}
                  className="border rounded-sm p-2.5 m-1 "
                  key={index}
                >
                  <img src={item.img} alt="socials" className="w-5" />
                </Link>
              ))}
            </div>
            <div className="text-gray-500 mb-20 text-center md:text-left">
              2024 © WAYOFF — это розничный магазин, специализирующийся на
              продаже лимитированных вещей. В нашем широком ассортименте
              присутствуют исключительно новые и оригинальные товары.
              <div className="mt-2">Разрабочик Юсуфи Никита</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
