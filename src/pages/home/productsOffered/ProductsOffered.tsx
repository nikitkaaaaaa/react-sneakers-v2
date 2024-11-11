import React from "react";

import style from "../home.module.css";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

const ProductsOffered = () => {
  const infoBrands: {
    title: string;
    brand: string;
    imageUrl: string;
    category: string;
  }[] = [
    {
      title:
        "мировой лидер, сочетающий стиль и инновации в спортивной одежде и обуви.",
      brand: "Nike",
      imageUrl:
        "https://wayoff.ru/upload/iblock/26f/b3cbo21lk37dgygqthg8phnh30jzqz5r.jpg",
      category: "Кроссовки",
    },

    {
      title: " бренд, объединяющий спортивные технологии и модный дизайн.",
      brand: "Adidas ",
      imageUrl:
        "https://wayoff.ru/upload/iblock/1d4/6x1ksfu8c776gtpa03cqey5mcagvk8fd.jpg",
      category: "Кроссовки",
    },
    {
      title:
        "предлагает комфорт и поддержку в спортивной обуви, делая акцент на здоровье.",
      brand: "Asics ",
      imageUrl:
        "https://wayoff.ru/upload/iblock/038/aqiomvlcfwdfqaht5ftlab6a0825co7f.jpg",
      category: "Кроссовки",
    },
    {
      title: "бренд, известный уникальным стилем и качеством спортивной обуви.",
      brand: "Jordan  ",
      imageUrl:
        "https://wayoff.ru/upload/iblock/424/q1048yr6plwq2qys1l27me906g014y9d.jpeg",
      category: "Кроссовки",
    },
  ];

  return (
    <div className={style.products_offered}>
      {infoBrands.map((item, index) => (
        <div className={`${style.products_offered_item} shadow`} key={index}>
          <div className=" w-[100%] lg:w-[40%] text-center flex flex-col justify-center items-center">
            <div className="uppercase text-sm mt-5 lg:mt-0">{item.title}</div>
            <Link
              to={routes.productBrands
                .replace(":brand", item.brand)
                .replace(":category", item.category)}
              className="mt-5 font-bold hover:text-[#A10000]"
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              {item.brand}
            </Link>
          </div>
          <div className="w-[60%]">
            <Link
              to={routes.productBrands
                .replace(":brand", item.brand)
                .replace(":category", item.category)}
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              <img src={item.imageUrl} alt={item.brand} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsOffered;
