import React from "react";

import style from "../products.module.css";
import Card from "../../../componets/card/Card";
import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";
import empty_products from "../../../assets/icons/empty_products.svg";

interface RightSideProps {
  products: IntefraceProducts[];
}

const RightSideProducts = ({ products }: RightSideProps) => {
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
          <div className="text-2xl mt-6 text-center">
            К сожалению, товаров не найденно
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideProducts;
