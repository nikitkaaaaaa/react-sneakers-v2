import React from "react";

import style from "../home.module.css";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

const ProductsOffered = () => {
  const arr: { title: string; brand: string; imageUrl: string }[] = [
    {
      title:
        "мировой лидер, сочетающий стиль и инновации в спортивной одежде и обуви.",
      brand: "Nike",
      imageUrl:
        "https://wayoff.ru/upload/iblock/26f/b3cbo21lk37dgygqthg8phnh30jzqz5r.jpg",
    },
    {
      title: " бренд, объединяющий спортивные технологии и модный дизайн.",
      brand: "Adidas ",
      imageUrl:
        "https://wayoff.ru/upload/iblock/1d4/6x1ksfu8c776gtpa03cqey5mcagvk8fd.jpg",
    },
    {
      title:
        "предлагает комфорт и поддержку в спортивной обуви, делая акцент на здоровье.",
      brand: "Asics ",
      imageUrl:
        "https://wayoff.ru/upload/iblock/038/aqiomvlcfwdfqaht5ftlab6a0825co7f.jpg",
    },
    {
      title: "бренд, известный уникальным стилем и качеством спортивной обуви.",
      brand: "Jordan  ",
      imageUrl:
        "https://wayoff.ru/upload/iblock/424/q1048yr6plwq2qys1l27me906g014y9d.jpeg",
    },
  ];

  return (
    <div className={style.products_offered}>
      {arr.map((item, index) => (
        <div className="shadow flex px-7 rounded" key={index}>
          <div className="bsorder border-red-600 w-[40%] text-center flex flex-col justify-center items-center">
            <div className="uppercase text-sm">{item.title}</div>
            <Link
              to={routes.productBrands.replace(":brand", item.brand)}
              className="mt-5 font-bold hover:text-[#A10000]"
            >
              {item.brand}
            </Link>
          </div>
          <div className="borsder border-blue-600 w-[60%]">
            <Link to={routes.productBrands.replace(":brand", item.brand)}>
              <img src={item.imageUrl} alt={item.brand} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsOffered;
