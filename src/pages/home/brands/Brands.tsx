import React from "react";
import { Link } from "react-router-dom";

import style from "../home.module.css";
import nike from "../../../assets/png/nike";
import adidas from "../../../assets/png/adidas";
import asics from "../../../assets/png/asics";
import jordan from "../../../assets/png/jordan";
import { routes } from "../../../routes/routes";

const Brands = () => {
  const brands: { brand: string; imageUrl: string; category: string }[] = [
    { brand: "Nike", imageUrl: nike.nike, category: "Кроссовки" },
    { brand: "Adidas", imageUrl: adidas.adidas, category: "Кроссовки" },
    { brand: "Asics", imageUrl: asics.asics, category: "Кроссовки" },
    { brand: "Jordan", imageUrl: jordan.jordan, category: "Кроссовки" },
  ];

  return (
    <div className={style.icon_brands}>
      {brands.map((item, index) => (
        <Link
          to={routes.productBrands
            .replace(":brand", item.brand)
            .replace(":category", item.category)}
          key={index}
          className=" flex justify-center"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <img
            src={item.imageUrl}
            className={`${item.brand === "Asics" && "h-[25px]"}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Brands;
