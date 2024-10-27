import React from "react";
import { Link, useNavigate } from "react-router-dom";

import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";
import { routes } from "../../../routes/routes";

interface ProductDayProps {
  product: IntefraceProducts[];
}

const ProductDay = ({ product }: ProductDayProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-2xl">Товар дня</div>
      <div className="flex justify-center mt-24">
        <div className="flex w-[70%]">
          <div className="w-[50%]  ">
            <Link to={routes.product.replace(":id", product[20].id)}>
              <img src={product[21].imageUrL[0]} alt={product[20].title} />
            </Link>
          </div>
          <div className="w-[30%] ml-10 mt-5">
            <Link
              to={routes.product.replace(":id", product[20].id)}
              className="inline-block text-lg cursor-pointer hover:text-[#A10000]"
            >
              {product[20].title}
            </Link>
            <div className="my-10 text-lg">{product[20].price} ₽ </div>
            <button
              className="border border-[#A10000] py-2.5 px-[26px] text-xs text-[#A10000]  rounded"
              onClick={() =>
                navigate(routes.product.replace(":id", product[20].id))
              }
            >
              ПОДРОБНЕЕ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDay;
