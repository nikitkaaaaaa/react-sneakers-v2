import React from "react";
import { Link } from "react-router-dom";

import style from "../home.module.css";
import nike from "../../../assets/png/nike";
import adidas from "../../../assets/png/adidas";
import asics from "../../../assets/png/asics";
import jordan from "../../../assets/png/jordan";
import { routes } from "../../../routes/routes";

const Brands = () => {
  const brands: { routes: string; imageUrl: string }[] = [
    { routes: "Nike", imageUrl: nike.nike },
    { routes: "Adidas", imageUrl: adidas.adidas },
    { routes: "Asics", imageUrl: asics.asics },
    { routes: "Jordan", imageUrl: jordan.jordan },
  ];

  return (
    <div className={style.icon_brands}>
      {brands.map((item, index) => (
        <Link
          to={routes.productBrands.replace(":brand", item.routes)}
          key={index}
          className=" flex justify-center"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <img
            src={item.imageUrl}
            className={`${item.routes === "Asics" && "h-[25px]"}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Brands;
