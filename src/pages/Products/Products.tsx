import React, { useState } from "react";

import catalog from "../../icons/catalog.svg";
import arrow from "../../icons/arrow.svg";
import arrow_filters from "../../icons/arrow_filters.svg";
import filters from "../../icons/filters.svg";
import plane from "../../icons/plane.svg";

const Products = () => {
  const categoryShoes: string[] = ["Кроссовки", "Кеды", "Ботинки"];

  const brands: string[] = ["Nike", "Adidas", "Assics", "Jordan"];

  const genders: string[] = ["Мужской", "Женский"];

  const seasons: string[] = ["Лето", "Осень", "Зима", "Весна"];

  const [openCatalog, setOpenCatalog] = useState<boolean>(false);

  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const [showFilterPrice, setShowFilterPrice] = useState<boolean>(false);

  const [showFilterBrand, setShowFilterBrands] = useState<boolean>(false);

  const [showFilterGender, setShowFilterGender] = useState<boolean>(false);

  const [showSeason, setShowSeason] = useState<boolean>(false);

  return (
    <div className="flex">
      <div className="w-[20%]">
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
              <div className="ml-5 py-2">{item}</div>
            </div>
          ))}
        </div>
        {/* Каталог */}

        {/* Фильтр */}
        <div
          className="border-b border-b flex items-center justify-between py-5 cursor-pointer"
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
                    className="border w-full py-1.5 pl-2 outline-none bg-[#f8f8f8] text-gray-500 rounded-sm"
                    placeholder="17000"
                  />
                  <input
                    type="text"
                    className="border w-full py-1.5 pl-2 outline-none bg-[#f8f8f8] text-gray-500 rounded-sm"
                    placeholder="30000"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Фильтр по цене */}

          {/* Фильтр по брендам */}
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
                  <div key={brand}>
                    <input type="checkbox" id={brand} />
                    <label htmlFor={brand} className="ml-3">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                {genders.map((brand) => (
                  <div key={brand}>
                    <input type="checkbox" id={brand} />
                    <label htmlFor={brand} className="ml-3">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фильтр по полу */}

          {/* Фильтр по временам года */}

          <div className="hover:bg-white">
            <div className="border-l border-r border-b  cursor-pointer">
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
                {seasons.map((brand) => (
                  <div key={brand}>
                    <input type="checkbox" id={brand} />
                    <label htmlFor={brand} className="ml-3">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фильтр по временам года */}
        </div>
        {/* Фильтр */}

        {/* Будьте в курсе наших акций и новостей  */}

        <div className="mt-10 border px-4 py-6 flex flex-col justify-center items-center rounded-sm  hover:bg-white hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-transform duration-300">
          <img src={plane} alt="plane" />
          <div className="text-center mt-4">
            Будьте в курсе наших акций и новостей
          </div>
        </div>

        {/* Будьте в курсе наших акций и новостей  */}
      </div>
      {/* <div className="w-[80%]">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div> */}
    </div>
  );
};

export default Products;
