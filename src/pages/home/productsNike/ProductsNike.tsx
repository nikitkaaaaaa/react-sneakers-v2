import React from "react";

import style from "../home.module.css";
import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";
import Card from "../../../componets/card/Card";

interface ProductsNikeProps {
  products: IntefraceProducts[];
}

const ProductsNike = ({ products }: ProductsNikeProps) => {
  return (
    <>
      <div className="text-2xl mb-24">Nike</div>
      <div className={style.products_nike}>
        {products
          .filter((item) => item.brand === "Nike")
          .slice(0, 4)
          .map((item) => (
            <Card key={item.id} {...item} />
          ))}
      </div>
    </>
  );
};

export default ProductsNike;
