import React, { useEffect, useState } from "react";

import favorites from "../../../assets/icons/favorites.svg";
import arrow from "../../../assets/icons/arrow.svg";
import LeftSideInterface from "./LeftSideInterface";
import { useGetProductIdQuery } from "../../../api/productsApi/productsApi";
import Loading from "../../../componets/loading/Loading";

const LeftSideProduct = ({
  title,
  imageUrl,
  currentImage,
  currentInfoProduct,
  setCurrentInfoProduct,
  setCurrentImage,
  infoProduct,
}: LeftSideInterface) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const { data, isLoading } = useGetProductIdQuery(1);

  const handleNext = () => {
    if (imageUrl) {
      const currentIndex = imageUrl.indexOf(currentImage);
      const nextIndex =
        currentIndex === imageUrl.length - 1 ? 0 : currentIndex + 1;
      setCurrentImage(imageUrl[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (imageUrl) {
      const currentIndex = imageUrl.indexOf(currentImage);
      const prevIndex =
        currentIndex === 0 ? imageUrl.length - 1 : currentIndex - 1;
      setCurrentImage(imageUrl[prevIndex]);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="text-3xl">{title}</div>
      <div className="relative">
        {/* Блок для текущей выбранной картинки */}
        <div className="bordser border-green-500  group">
          <div className="max-w-[1350px] max-h-[810px] relative ">
            <img
              src={currentImage}
              alt={`image ${title}`}
              className="  borsder border-black  w-full h-full"
            />
            <img
              src={favorites}
              alt="favorites"
              className="absolute top-0 right-0 border w-10 p-2 cursor-pointer rounded-lg"
            />
          </div>

          {/* Стрелки для смены картинок */}
          <div
            className="w-[70%] m-auto absolute left-0 top-1/2
              transform -translate-y-1/2  right-0 left-1/2 transform -translate-x-1/2 flex justify-between"
          >
            <button
              onClick={handlePrev}
              className=" bg-white text-black p-2 opacity-0 group-hover:opacity-100
               transition-opacity duration-300 rounded-lg p-4"
            >
              <img src={arrow} alt="arrow" className="transhorm -rotate-90" />
            </button>
            <button
              onClick={handleNext}
              className=" bg-white text-black p-2 opacity-0 group-hover:opacity-100
               transition-opacity duration-300 rounded-lg p-4"
            >
              <img src={arrow} alt="arrow" className="transhorm rotate-90" />
            </button>
          </div>
          {/* Стрелки для смены картинок */}
        </div>
        {/* Блок для текущей выбранной картинки */}

        {/* Галерея с маленькими изображениями */}
        <div className="flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 ">
          {imageUrl?.map((item, index) => (
            <div
              className="w-[80px] mr-2 transition-all duration-300"
              key={index}
            >
              <img
                src={item}
                alt={`image ${title}`}
                className={`w-full cursor-pointer transition-all duration-300 hover:opacity-100 ${
                  currentImage === item ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setCurrentImage(item)}
              />
            </div>
          ))}
        </div>
        {/* Галерея с маленькими изображениями */}
      </div>

      {/* Информация о продукте */}
      <div className="mt-3.5 h-[450px]">
        {infoProduct.map((item, index) => (
          <div key={index} className="inline-block mb-2">
            <div
              className={`mr-3 pt-[9px] pr-[24px] pb-[10px] pl-[24px] rounded border text-sm cursor-pointer ${
                index === selectedTabIndex && "border-b-2 border-b-red-500"
              }`}
              onClick={() => {
                setSelectedTabIndex(index);
                setCurrentInfoProduct(item.value);
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
        <div className="mt-4">{currentInfoProduct}</div>
      </div>
      {/* Информация о продукте */}
    </div>
  );
};

export default LeftSideProduct;
