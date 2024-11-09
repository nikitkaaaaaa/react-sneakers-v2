import React, { useState } from "react";
import BuyProductForm from "../forms/buyProductForm/BuyProductForm";

interface BuyProductProps {
  style: string;
  price: number | undefined;
  brand: string | undefined;
  title: string | undefined;
  imageUrl: string | undefined;
  id: string | undefined;
}

const BuyProduct = ({
  style,
  price,
  brand,
  title,
  imageUrl,
  id,
}: BuyProductProps) => {
  const [showFormBuyProduct, setShowFormBuyProduct] = useState<boolean>(false);

  return (
    <div>
      <button className={style} onClick={() => setShowFormBuyProduct(true)}>
        КУПИТЬ В 1 КЛИК
      </button>
      <BuyProductForm
        showFormBuyProduct={showFormBuyProduct}
        closeForm={() => setShowFormBuyProduct(false)}
        price={price ?? 0}
        brand={brand ?? ""}
        title={title ?? ""}
        imageUrl={imageUrl ?? ""}
        id={id ?? ""}
      />
    </div>
  );
};

export default BuyProduct;
