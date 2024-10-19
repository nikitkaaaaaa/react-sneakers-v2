import React from "react";

import style from "../productsBrand.module.css";
import empty_products from "../../../assets/icons/empty_products.svg";
import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";
import Card from "../../../componets/card/Card";

interface RightSideProductsBrandProps {
  products: IntefraceProducts[];
}

const RightSideProductsBrand = ({ products }: RightSideProductsBrandProps) => {
  return (
    <div>
      {products.length >= 1 ? (
        <div className={style.content}>
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col mt-20">
          <div>
            <img src={empty_products} alt="empty_products" />
          </div>
          <div className="text-2xl mt-6">К сожалению, товаров не найденно</div>
        </div>
      )}
    </div>
  );
};

export default RightSideProductsBrand;
