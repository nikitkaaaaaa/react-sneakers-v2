import React, { useEffect, useState } from "react";

import style from "../product.module.css";
import favorites from "../../../assets/icons/favorites.svg";
import favorites_added from "../../../assets/icons/favorites_added.svg";
import arrow from "../../../assets/icons/arrow.svg";
import InterfaceLeftSideProduct from "./InterfaceLeftSideProduct";
import {
  useGetProductIdQuery,
  useGetProductsQuery,
} from "../../../api/productsApi/productsApi";
import Loading from "../../../componets/loading/Loading";
import {
  useAddProductToFavoritesMutation,
  useGetFavoritesProductsQuery,
  useRemoveProductInFavoritesMutation,
} from "../../../api/favoritesProductsApi/favoritesProductsApi";
import Card from "../../../componets/card/Card";
import Slider from "react-slick";

const LeftSideProduct = ({
  id,
  price,
  title,
  imageUrl,
  currentImage,
  currentInfoProduct,
  setCurrentInfoProduct,
  setCurrentImage,
  infoProduct,
}: InterfaceLeftSideProduct) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const { data, isLoading } = useGetProductIdQuery(1);

  const { data: favoritesProducts } = useGetFavoritesProductsQuery();

  const { data: products } = useGetProductsQuery({});

  const [visibleCount, setVisibleCount] = useState(10); // Начальное значение рекомендуемых продуктов

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const productInFavorites = favoritesProducts?.find(
    (obj) => obj.parentId === String(id)
  );

  const [addProductToFavorites] = useAddProductToFavoritesMutation();

  const [removeProductInFavorites] = useRemoveProductInFavoritesMutation();

  const handleAddProductToFavorites = async (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!title || !id || !imageUrl || !price) return;
    try {
      await addProductToFavorites({
        id,
        title,
        imageUrL: imageUrl[0],
        price,
        parentId: id,
      }).unwrap();
    } catch (error) {
      alert("Не удалось добавить товар в избранное!");
    }
  };

  const handleRemoveProductToFavorites = async (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!productInFavorites) return;
    try {
      await removeProductInFavorites(productInFavorites.id).unwrap();
    } catch (error) {
      alert("Не удалось добавить товар в избранное!");
    }
  };

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

  const handleResize = () => {
    //функция для опредкления кол-во рекомендованных продуктов
    if (window.innerWidth > 1024) {
      setVisibleCount(7);
    } else {
      setVisibleCount(6);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="relative">
        {/* Блок для текущей выбранной картинки */}
        <div className=" group hidden lg:block">
          <div className="max-w-[1350px] max-h-[810px] relative ">
            <img
              src={currentImage}
              alt={`image ${title}`}
              className="  borsder border-black  w-full h-full"
            />
            <img
              src={productInFavorites ? favorites_added : favorites}
              alt="favorites"
              className="absolute top-0 right-0 border w-10 p-2 cursor-pointer rounded-lg"
              onClick={
                productInFavorites
                  ? handleRemoveProductToFavorites
                  : handleAddProductToFavorites
              }
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
        <div className=" justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10  hidden lg:flex">
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

      {/* Картинка продукта при маленьком экране */}
      <div className="block lg:hidden">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings}>
          {imageUrl?.map((item, index) => (
            <img key={index} src={item} />
          ))}
        </Slider>
      </div>
      {/* Картинка продукта при маленьком экране */}

      {/* Информация о продукте */}
      <div className="hidden lg:block">
        <div className={style.info_product}>
          {infoProduct.map((item, index) => (
            <div key={index} className="inline-block mb-2 border border-white">
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
        </div>
        <div className="mt-4">{currentInfoProduct}</div>
      </div>
      {/* Информация о продукте */}

      {/* Рекомендованные продукты */}
      <div className="hidden lg:block">
        <div className="text-2xl mt-10">Рекомендуем</div>
        <div className={style.recommendation}>
          {products?.slice(3, visibleCount).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      {/* Рекомендованные продукты */}
    </div>
  );
};

export default LeftSideProduct;
