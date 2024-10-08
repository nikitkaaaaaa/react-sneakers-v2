import React from "react";

import style from "../../pages/Products/products.module.css";
import favorites from "../../icons/favorites.svg";
import pacman from "../../icons/pacman.svg";

interface CardInteface {
  id: number;
  title: string;
  imageUrL: string[];
  price: number;
}

const Card = ({ id, title, imageUrL, price }: CardInteface) => {
  return (
    <div className=" relative">
      <img src={imageUrL[0]} alt={title} />
      <div className={style.title_product}>{title}</div>
      <div className="mt-5 font-bold">{price} ₽</div>
      <img src={favorites} alt="favorites" className="absolute top-2 right-2" />
      <div className="border border-black rounded-lg  mt-5 w-fit  py-1  px-2 flex items-center">
        <div className="bg-black text-white rounded-l-lg flex items-center pr-1">
          <img src={pacman} alt="pacman" />
          <div className="text-xs ml-1">{price / 2} ₽</div>
        </div>
        <div className="text-xs ml-2">x 2 в Сплит</div>
      </div>
    </div>
  );
};

export default Card;
