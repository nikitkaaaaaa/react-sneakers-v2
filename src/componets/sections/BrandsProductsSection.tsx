import React from "react";
import { Link } from "react-router-dom";

import { routes } from "../../routes/routes";

interface BrandsProductsSectionProps {
  brand: string | undefined;
  brandImg: string;
}

const BrandsProductsSection = ({
  brand,
  brandImg,
}: BrandsProductsSectionProps) => {
  return (
    <div className="border p-[30px] mt-20 rounded-sm">
      <Link
        to={brand ? routes.productBrands.replace(":brand", brand) : "#"}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <img src={brandImg} alt="name" className="max-w-[70px] max-h-[50px]" />
      </Link>
      <Link
        to={brand ? routes.productBrands.replace(":brand", brand) : "#"}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <div className="mb-2 mt-4">Все товары категории</div>
      </Link>
      <Link
        to={brand ? routes.productBrands.replace(":brand", brand) : "#"}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <div>Все товары бренда {brand}</div>
      </Link>
    </div>
  );
};

export default BrandsProductsSection;
