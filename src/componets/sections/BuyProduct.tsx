import React, { useState } from "react";
import BuyProductForm from "../forms/buyProductForm/BuyProductForm";

interface BuyProductProps {
  style: string;
}

const BuyProduct = ({ style }: BuyProductProps) => {
  const [showFormBuyProduct, setShowFormBuyProduct] = useState<boolean>(false);

  return (
    <div>
      <button className={style} onClick={() => setShowFormBuyProduct(true)}>
        КУПИТЬ В 1 КЛИК
      </button>
      <BuyProductForm
        showFormBuyProduct={showFormBuyProduct}
        closeForm={() => setShowFormBuyProduct(false)}
      />
    </div>
  );
};

export default BuyProduct;
