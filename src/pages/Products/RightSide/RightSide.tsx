import React from "react";

import Card from "../../../componets/card/Card";
import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";

interface RightSideProps {
  products: IntefraceProducts[];
}
const RightSide = ({ products }: RightSideProps) => {
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </>
  );
};

export default RightSide;
