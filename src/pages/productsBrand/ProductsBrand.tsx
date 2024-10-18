import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import Card from "../../componets/card/Card";
import style from "../productsBrand/productsBrand.module.css";
import { routes } from "../../routes/routes";
import NewsLetterSection from "../../componets/sections/NewsLetterSection";

const ProductsBrand = () => {
  const { brand } = useParams<{ brand: string }>();

  const { data = [] } = useGetProductsQuery({ brands: brand ? [brand] : [] });

  return (
    <div>
      <div className="text-gray-500 mt-10 mb-4">
        <span>
          <Link to={routes.home}>Главная</Link>
        </span>{" "}
        <span className="mx-2">—</span> Производители
        <span className="mx-2">—</span> <span>{brand}</span>
      </div>
      <hr className="absolute mt-[230px]  top-0 left-0 w-full" />
      <NewsLetterSection />
      <div className=" text-3xl">Бренд {brand}</div>
      <div className={style.content}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsBrand;
