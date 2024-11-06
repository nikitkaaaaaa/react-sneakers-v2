import React, { useState } from "react";

import style from "../home.module.css";
import Card from "../../../componets/card/Card";
import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";

interface BestOffersProps {
  products: IntefraceProducts[];
}

const BestOffers = ({ products }: BestOffersProps) => {
  const conditionOfProducts: string[] = ["Новинки", "Акция"];

  const [selectedCondition, setSelectedCondition] = useState<number>(0);

  return (
    <>
      <div className="mb-12 lg:mb-24 flex justify-between xs:items-center  flex-col xs:flex-row">
        <div className="text-2xl">Лучшие предложения</div>
        <div className="flex gap-7 mt-7 xs:mt-0">
          {conditionOfProducts.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedCondition == index && "border-b-2 border-b-red-800"
              } cursor-pointer `}
              onClick={() => setSelectedCondition(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={style.best_offers}>
        {products.slice(3, 9).map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default BestOffers;
