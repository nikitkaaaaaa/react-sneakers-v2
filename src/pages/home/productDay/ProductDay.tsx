import React from "react";
import { Link, useNavigate } from "react-router-dom";

import style from "../home.module.css";
import IntefraceProducts from "../../../api/productsApi/IntefraceProducts";
import { routes } from "../../../routes/routes";

interface ProductDayProps {
  product: IntefraceProducts[];
}

const ProductDay = ({ product }: ProductDayProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-2xl mb-6 lg:mb-12">Товар дня</div>
      <div className="flex justify-center ">
        <div className={style.product_day}>
          <div className="w-full md:w-[50%]">
            <Link
              to={routes.product.replace(":id", product[21].id)}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              <img src={product[21].imageUrL[0]} alt={product[21].title} />
            </Link>
          </div>
          <div className="w-[100%] lg:w-[35%] ml-10 mt-0 lg:mt-8  text-center ">
            <Link
              to={routes.product.replace(":id", product[21].id)}
              className="inline-block text-md lg:text-lg cursor-pointer hover:text-[#A10000]"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              {product[20].title}
            </Link>
            <div className="my-6 text-md lg:text-lg">
              {product[21].price} ₽{" "}
            </div>
            <button
              className="border border-[#A10000] py-2.5 px-[26px] text-xs text-[#A10000]  rounded"
              onClick={() => {
                navigate(routes.product.replace(":id", product[21].id));
                window.scrollTo({ top: 0 });
              }}
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
