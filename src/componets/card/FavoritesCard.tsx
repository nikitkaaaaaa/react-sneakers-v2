import React from "react";
import { Link } from "react-router-dom";

import style from "../../pages/Products/products.module.css";
import pacman from "../../assets/icons/pacman.svg";
import favorites_added from "../../assets/icons/favorites_added.svg";
import { routes } from "../../routes/routes";
import { useRemoveProductInFavoritesMutation } from "../../api/favoritesProductsApi/favoritesProductsApi";

interface FavoritesCardProps {
  title: string;
  imageUrL: string;
  price: number;
  id: string;
  parentId: string;
}

const FavoritesCard = ({
  title,
  imageUrL,
  price,
  id,
  parentId,
}: FavoritesCardProps) => {
  const [removeProductInFavorites] = useRemoveProductInFavoritesMutation();

  const handleRemoveProductInFavorites = async () => {
    try {
      await removeProductInFavorites(id).unwrap();
    } catch (error) {
      alert("Не удалось удалить товар из избранного!");
    }
  };

  return (
    <div className=" relative">
      <img
        src={favorites_added}
        alt="favorites"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={handleRemoveProductInFavorites}
      />
      <Link
        to={routes.product.replace(":id", parentId)}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <img src={imageUrL} alt={title} />
        <div className={style.title_product}>{title}</div>
        <div className="mt-5 font-bold">{price} ₽</div>

        <div className="border border-black rounded-lg  mt-5 w-fit  py-1  px-2 flex items-center">
          <div className="bg-black text-white rounded-l-lg flex items-center pr-1">
            <img src={pacman} alt="pacman" />
            <div className="text-xs ml-1">{price / 2} ₽</div>
          </div>
          <div className="text-xs ml-2">x 2 в Сплит</div>
        </div>
      </Link>
    </div>
  );
};

export default FavoritesCard;
