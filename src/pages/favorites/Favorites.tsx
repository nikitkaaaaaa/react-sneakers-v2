import React from "react";

import style from "./favorites.module.css";
import empty_favorites_products from "../../assets/icons/empty_favorites_products.svg";
import { useGetFavoritesProductsQuery } from "../../api/favoritesProductsApi/favoritesProductsApi";
import Loading from "../../componets/loading/Loading";
import FavoritesCard from "../../componets/card/FavoritesCard";

const Favorites = () => {
  const { data: favoritesProducts, isLoading } = useGetFavoritesProductsQuery();

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="text-center text-3xl mt-5 mb-12 md:mb-24 xs:text-left">
        Избранные товары
      </div>
      {(favoritesProducts?.length ?? 0) > 0 ? (
        <div className={style.content}>
          {favoritesProducts?.map((item) => (
            <FavoritesCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className=" mt-5 flex justify-center">
          <div className=" flex  flex-col justify-center items-center text-center">
            <img
              src={empty_favorites_products}
              alt="empty favorites products"
            />
            <div className="w-[402px] text-lg">
              Тут вы будете видеть товары, которые лайкнули. Сихронизируется со
              всеми устройствами. Это удобно!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
