import React from "react";

import style from "../home.module.css";
import Card from "../../../componets/card/Card";
import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";

interface BestOffersProps {
  products: IntefraceProducts[];
}

const BestOffers = ({ products }: BestOffersProps) => {
  return (
    <>
      <div className="text-2xl mb-12 lg:mb-24">Лучшие предложения</div>
      <div className={style.best_offers}>
        {products.slice(3, 9).map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default BestOffers;
