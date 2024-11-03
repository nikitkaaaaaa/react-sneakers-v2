import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import style from "../../pages/Products/products.module.css";
import LeftSideProducts from "./LeftSideProducts/LeftSideProducts";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import RightSide from "./RightSideProducts/RightSideProducts";
import ChoiseProducts from "../../componets/choiseProducts/ChoiseProducts";
import Loading from "../../componets/loading/Loading";
import { routes } from "../../routes/routes";

const Products = () => {
  const { brand } = useParams<{ brand: string }>();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string[]>([]);
  const [priceFrom, setPpriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const [choise, setChoise] = useState<string>("-price");

  const { data = [], isLoading } = useGetProductsQuery({
    category: selectedCategory,
    brands: brand ? [brand] : selectedBrands,
    gender: selectedGender.length > 0 ? selectedGender : undefined,
    seasons: selectedSeason,
    priceFrom,
    priceTo,
    choiseProducts: choise,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      {/* В зависимости от routes разный блок */}
      <div>
        {brand ? (
          <>
            <div className="text-gray-500 mt-8 mb-4">
              <span>
                <Link to={routes.home}>Главная</Link>
              </span>
              <span className="mx-2">—</span> Производители
              <span className="mx-2">—</span> <span>{brand}</span>
            </div>
            <div>
              <div className=" text-3xl mb-4">Бренд {brand}</div>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-500 mt-8 mb-4">
              <span>
                <Link to={routes.home}>Главная</Link>
              </span>
              <span className="mx-2">—</span> Кросовки
            </div>
          </>
        )}
      </div>
      {/* В зависимости от routes разный блок */}

      <div className="flex flex-col lg:flex-row">
        <div className={style.left_side_products}>
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
            isBrandPage={brand}
          />
        </div>
        <div className={style.right_side_products}>
          <div className="">
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
