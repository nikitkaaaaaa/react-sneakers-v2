import React, { useEffect, useState } from "react";

import arrow from "../../../assets/icons/arrow.svg";
import arrow_filters from "../../../assets/icons/arrow_filters.svg";
import catalog from "../../../assets/icons/catalog.svg";
import filters from "../../../assets/icons/filters.svg";
import LeftSideInterface from "./LeftSideInterface";
import NewsLetterSection from "../../../componets/sections/NewsLetterSection";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

const LeftSideProducts = ({
  selectedBrands,
  setSelectedBrands,
  selectedGender,
  setSelectedGender,
  selectedSeason,
  setSelectedSeason,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  isBrandPage,
  brand,
  category,
}: LeftSideInterface) => {
  const categoryShoes: string[] = [
    "Кроссовки",
    "Кеды",
    "Для футбола",
    "Для баскетбола",
  ];

  const [brands, setBrabds] = useState<string[]>([
    "Nike",
    "Adidas",
    "Asics",
    "Jordan",
  ]);

  const genders: string[] = ["Мужской", "Женский"];
  const seasons: string[] = ["Лето", "Осень", "Зима", "Весна"];

  const [openCatalog, setOpenCatalog] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const [showFilterPrice, setShowFilterPrice] = useState<boolean>(false);
  const [showFilterBrand, setShowFilterBrands] = useState<boolean>(false);
  const [showFilterGender, setShowFilterGender] = useState<boolean>(false);
  const [showSeason, setShowSeason] = useState<boolean>(false);

  const handleSelectedBrands = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSelectedGender = (gender: string) => {
    if (selectedGender.includes(gender)) {
      setSelectedGender(selectedGender.filter((item) => item !== gender));
    } else {
      setSelectedGender([gender]);
    }
  };

  const handleSelectedSeason = (season: string) => {
    if (selectedSeason.includes(season)) {
      setSelectedSeason(selectedSeason.filter((item) => item !== season));
    } else {
      setSelectedSeason([...selectedSeason, season]);
    }
  };

  useEffect(() => {
    if (category === "Для футбола") {
      setBrabds(["Nike", "Adidas"]);
    } else if (category === "Для баскетбола") {
      setBrabds(["Nike", "Jordan", "Adidas"]);
    } else {
      setBrabds(["Nike", "Adidas", "Asics", "Jordan"]);
    }
  }, [category]); // проверка категории для порверки кол-во возможных брендов данной категории

  return (
    <div className="w-full">
      {/* Каталог */}

      <div
        className="flex items-center justify-between py-5 cursor-pointer relative border-b"
        onClick={() => setOpenCatalog(!openCatalog)}
      >
        <div className="flex items-center">
          <img src={catalog} alt="catalog" />
          <div className="text-xs font-bold ml-3">КАТАЛОГ</div>
        </div>
        <img
          src={arrow}
          alt="arrow"
          className={`transition-transform duration-400 ${
            openCatalog ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          openCatalog ? "max-h-40" : "max-h-0"
        }`}
      >
        {categoryShoes.map((item, index) => (
          <div
            key={index}
            className="border-b border-l border-r hover:bg-white cursor-pointer"
          >
            <Link
              onClick={() => setOpenCatalog(false)}
              to={
                isBrandPage
                  ? routes.productBrands
                      .replace(":category", item)
                      .replace(":brand", brand ? brand : "")
                  : routes.products.replace(":category", item) // если страница продуктов (всех брендов, то routes пернаправляет на все категории продуктов), если нет,то направляет на разыне категории конкретного бренда
              }
            >
              <div className="ml-5 py-2">{item}</div>
            </Link>
          </div>
        ))}
      </div>
      {/* Каталог */}

      {/* Фильтр */}
      <>
        <div
          className="border-b  flex items-center justify-between py-5 cursor-pointer"
          onClick={() => setOpenFilter(!openFilter)}
        >
          <div className="flex items-center">
            <img src={filters} alt="filters" />
            <div className="text-xs font-bold ml-3">ФИЛЬТР</div>
          </div>
          <img
            src={arrow}
            alt="arrow"
            className={`transition-transform duration-400 ${
              openFilter ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            openFilter ? "max-h-[665px]" : "max-h-0"
          }`}
        >
          {/* Фильтр по цене */}
          <div className="hover:bg-white">
            <div className="border-l border-r border-b cursor-pointer ">
              <div
                className="flex items-center justify-between  py-2"
                onClick={() => setShowFilterPrice(!showFilterPrice)}
              >
                <div className="ml-3">Цена</div>
                <img
                  src={arrow_filters}
                  alt="arrow_filters"
                  className={`transition-transform duration-400 mr-3 ${
                    !showFilterPrice ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                showFilterPrice ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-3 py-5 hover:bg-white border-l border-r border-b cursor-pointer">
                <div className="flex items-center ">
                  <input
                    type="text"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                    className="border w-full py-1.5 pl-2 outline-none bg-[#f8f8f8] text-gray-500 rounded-sm"
                    placeholder="17000"
                  />
                  <input
                    type="text"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                    className="border w-full py-1.5 pl-2 outline-none bg-[#f8f8f8] text-gray-500 rounded-sm"
                    placeholder="30000"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Фильтр по цене */}

          {/* Фильтр по брендам */}
          {!isBrandPage && (
            <div className="hover:bg-white">
              <div className="border-l border-r border-b cursor-pointer">
                <div
                  className="flex justify-between items-center  py-2"
                  onClick={() => setShowFilterBrands(!showFilterBrand)}
                >
                  <div className="ml-3">Бренд</div>
                  <img
                    src={arrow_filters}
                    alt="arrow_filters"
                    className={`transition-transform duration-400 mr-3 ${
                      !showFilterBrand ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  showFilterBrand ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-3 hover:bg-white border-l border-r border-b cursor-pointer">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        id={brand}
                        onChange={() => handleSelectedBrands(brand)}
                      />
                      <label htmlFor={brand} className="ml-3 block w-full ">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Фильтр по брендам */}

          {/* Фильтр по полу */}
          <div className="hover:bg-white">
            <div className="border-l border-r border-b  cursor-pointer">
              <div
                className="flex justify-between items-center py-2"
                onClick={() => setShowFilterGender(!showFilterGender)}
              >
                <div className="ml-3">Пол</div>
                <img
                  src={arrow_filters}
                  alt="arrow_filters"
                  className={`transition-transform duration-400 mr-3 ${
                    !showFilterGender ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                showFilterGender ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="p-3 hover:bg-white border-l border-r border-b cursor-pointer">
                {genders.map((gender) => (
                  <div key={gender} className="flex items-center">
                    <input
                      type="checkbox"
                      id={gender}
                      checked={selectedGender.includes(gender)}
                      onChange={() => handleSelectedGender(gender)}
                    />
                    <label htmlFor={gender} className="ml-3 block w-full">
                      {gender}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Фильтр по полу */}

          {/* Фильтр по сезону */}
          {category !== "Для футбола" && category !== "Для баскетбола" && (
            <div className="hover:bg-white">
              <div className="border-l border-r border-b cursor-pointer">
                <div
                  className="flex justify-between items-center py-2"
                  onClick={() => setShowSeason(!showSeason)}
                >
                  <div className="ml-3">Сезон</div>
                  <img
                    src={arrow_filters}
                    alt="arrow_filters"
                    className={`transition-transform duration-400 mr-3 ${
                      !showSeason ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  showSeason ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-3 hover:bg-white border-l border-r border-b cursor-pointer">
                  {seasons.map((season) => (
                    <div key={season} className="flex items-center">
                      <input
                        type="checkbox"
                        id={season}
                        onChange={() => handleSelectedSeason(season)}
                      />
                      <label htmlFor={season} className="ml-3 block w-full ">
                        {season}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Фильтр по сезону */}
        </div>
      </>
      {/* Фильтр */}

      {/* Будьте в курсе наших акций и новостей  */}
      <NewsLetterSection />
      {/* Будьте в курсе наших акций и новостей  */}
    </div>
  );
};

export default LeftSideProducts;
