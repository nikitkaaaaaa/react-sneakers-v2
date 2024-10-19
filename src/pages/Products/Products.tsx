import React, { useState } from "react";

import style from "../../pages/Products/products.module.css";
import LeftSideProducts from "./LeftSideProducts/LeftSideProducts";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import RightSide from "./RightSideProducts/RightSideProducts";
import ChoiseProducts from "../../componets/choiseProducts/ChoiseProducts";
import Loading from "../../componets/loading/Loading";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string[]>([]);
  const [priceFrom, setPpriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const [choise, setChoise] = useState<string>("-price");

  const { data = [], isLoading } = useGetProductsQuery({
    category: selectedCategory,
    brands: selectedBrands,
    gender: selectedGender.length > 0 ? selectedGender : undefined,
    seasons: selectedSeason,
    priceFrom,
    priceTo,
    choiseProducts: choise,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="flex">
        <div className={style.left_side}>
          <LeftSideProducts
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
            onChoiseCategory={(value) => setSelectedCategory(value)}
          />
        </div>
        <div className={style.right_side}>
          <div>
            <ChoiseProducts
              onChoise={(value) => setChoise(value)}
              choise={choise}
            />
          </div>

          <RightSide products={data} />
        </div>
      </div>
    </div>
  );
};

export default Products;
