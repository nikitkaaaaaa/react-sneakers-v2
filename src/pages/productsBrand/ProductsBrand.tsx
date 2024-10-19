import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import style from "../productsBrand/productsBrand.module.css";
import { routes } from "../../routes/routes";
import ChoiseProducts from "../../componets/choiseProducts/ChoiseProducts";
import Loading from "../../componets/loading/Loading";
import RightSideProductsBrand from "./RightSideProductsBrand/RightSideProductsBrand";
import LeftSideProductsBrand from "./LeftSideProductsBrand/LeftSideProductsBrand";

const ProductsBrand = () => {
  const { brand } = useParams<{ brand: string }>();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string[]>([]);
  const [priceFrom, setPpriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const [choise, setChoise] = useState<string>("-price");

  const { data = [], isLoading } = useGetProductsQuery({
    category: selectedCategory,
    brands: brand ? [brand] : [],
    gender: selectedGender.length > 0 ? selectedGender : undefined,
    seasons: selectedSeason,
    priceFrom,
    priceTo,
    choiseProducts: choise,
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="text-gray-500 mt-10 mb-4">
        <span>
          <Link to={routes.home}>Главная</Link>
        </span>{" "}
        <span className="mx-2">—</span> Производители
        <span className="mx-2">—</span> <span>{brand}</span>
      </div>
      <hr className="absolute mt-[230px]  top-0 left-0 w-full" />

      <div className=" text-3xl">Бренд {brand}</div>

      <div className="flex mt-10">
        <div className={style.left_side}>
          <LeftSideProductsBrand
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
          <RightSideProductsBrand products={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductsBrand;
