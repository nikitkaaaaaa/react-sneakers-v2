import React, { useState } from "react";

import style from "../../pages/Products/products.module.css";
import LeftSide from "./LeftSide/LeftSide";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import RightSide from "./RightSide/RightSide";
import ChoiseProducts from "../../componets/choiseProducts/ChoiseProducts";

const Products = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string[]>([]);
  const [priceFrom, setPpriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const [choise, setChoise] = useState<string>("-price");

  const { data = [] } = useGetProductsQuery({
    brands: selectedBrands,
    gender: selectedGender.length > 0 ? selectedGender : undefined,
    seasons: selectedSeason,
    priceFrom,
    priceTo,
    choiseProducts: choise,
  });

  return (
    <div className="flex">
      <div className={style.left_side}>
        <LeftSide
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
          priceFrom={priceFrom}
          setPriceFrom={setPpriceFrom}
          priceTo={priceTo}
          setPriceTo={setPriceTo}
        />
      </div>

      <div className={style.right_side}>
        <div className="">
          <ChoiseProducts
            onChoise={(value) => setChoise(value)}
            choise={choise}
          />
        </div>
        <div className={style.content}>
          <RightSide products={data} />
        </div>
      </div>
    </div>
  );
};

export default Products;
