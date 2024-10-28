import React from "react";

import { Link } from "react-router-dom";

import style from "../../pages/Products/products.module.css";
import favorites from "../../assets/icons/favorites.svg";
import favorites_added from "../../assets/icons/favorites_added.svg";
import pacman from "../../assets/icons/pacman.svg";
import { routes } from "../../routes/routes";
import {
  useAddProductToFavoritesMutation,
  useGetFavoritesProductsQuery,
  useRemoveProductInFavoritesMutation,
} from "../../api/favoritesProductsApi/favoritesProductsApi";

interface CardProps {
  id: string;
  title: string;
  imageUrL: string[];
  price: number;
}

const Card = ({ id, title, imageUrL, price }: CardProps) => {
  const { data: favoritesProducts } = useGetFavoritesProductsQuery();

  const productInFavorites = favoritesProducts?.find(
    (obj) => obj.parentId === String(id)
  );

  const [addProductToFavorites] = useAddProductToFavoritesMutation();

  const [removeProductInFavorites] = useRemoveProductInFavoritesMutation();

  const handleAddProductToFavorites = async (event: React.MouseEvent) => {
    event.stopPropagation();

    try {
      await addProductToFavorites({
        id,
        title,
        imageUrL: imageUrL[0],
        price,
        parentId: String(id),
      });
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

  return (
    <div className=" relative">
      <img
        src={productInFavorites ? favorites_added : favorites}
        alt="favorites"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={
          productInFavorites
            ? handleRemoveProductToFavorites
            : handleAddProductToFavorites
        }
      />
      <Link
        to={routes.product.replace(":id", String(id))}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <img src={imageUrL[0]} alt={title} />
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

export default Card;
