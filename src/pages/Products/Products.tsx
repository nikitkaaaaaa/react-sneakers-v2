import React, { useState } from "react";

import style from "../../pages/Products/products.module.css";
import LeftSide from "./LeftSide/LeftSide";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import RightSide from "./RightSide/RightSide";
import ChoiseProducts from "../../componets/choiseProducts/ChoiseProducts";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string[]>([]);
  const [priceFrom, setPpriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const [choise, setChoise] = useState<string>("-price");

  const { data = [] } = useGetProductsQuery({
    category: selectedCategory,
    brands: selectedBrands,
    gender: selectedGender.length > 0 ? selectedGender : undefined,
    seasons: selectedSeason,
    priceFrom,
    priceTo,
    choiseProducts: choise,
  });

  return (
    <div>
      {/* Выбранные параметры фильтры */}
      <div className="mt-10 mb-6">
        {selectedCategory && (
          <span className="px-2 py-1 rounded-md shadow-md mr-2">
            {selectedCategory}
          </span>
        )}

        {selectedBrands &&
          selectedBrands.map((item, index) => (
            <span className=" px-2 py-1 rounded-md shadow-md mx-2" key={index}>
              {item}
            </span>
          ))}

        {priceFrom && (
          <span className=" px-2 py-1 rounded-md shadow-md mx-2">
            от {priceFrom} ₽
          </span>
        )}

        {priceTo && (
          <span className=" px-2 py-1 rounded-md shadow-md mx-2">
            до {priceTo} ₽
          </span>
        )}
        {selectedSeason &&
          selectedSeason.map((item, index) => (
            <span className=" px-2 py-1 rounded-md shadow-md mx-2" key={index}>
              {item}
            </span>
          ))}

        {selectedGender.length > 0 && (
          <span className="px-2 py-1 rounded-md shadow-md mx-2">
            {selectedGender.join(", ")}
          </span>
        )}
      </div>
      {/* Выбранные параметры фильтры */}
      <hr />
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
