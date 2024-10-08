import React from "react";

interface CardInteface {
  id: number;
  title: string;
  imageUrL: string[];
  price: number;
}

const Card = ({ id, title, imageUrL, price }: CardInteface) => {
  return (
    <div>
      <img src={imageUrL[0]} alt={title} className="w-[200px]" />
      <div>{title}</div>
      <div>{price} ₽</div>
    </div>
  );
};

export default Card;
