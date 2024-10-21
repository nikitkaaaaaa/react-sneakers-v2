import React from "react";

import style from "../cart.module.css";
import remove_product from "../../../assets/icons/remove_product.svg";
import InerfaceCart from "../../../api/cartApi/InerfaceCart";
import CartCard from "../../../componets/card/CartCard";
import { useRemoveProductInCartMutation } from "../../../api/cartApi/cartApi";

interface LeftSideCartProps {
  products: InerfaceCart[];
}

const LeftSideCart = ({ products }: LeftSideCartProps) => {
  const [removeProductInCart] = useRemoveProductInCartMutation();

  const handleClearCart = async () => {
    try {
      for (let i = 0; i < products.length; i++) {
        const productId = products[i].id;
        if (productId) {
          await removeProductInCart(productId).unwrap();
        }
      }
    } catch (error) {
      alert(`Не удалось очистить корзину!`);
    }
  };

  return (
    <div className={style.leftSideCart}>
      <div className=" flex justify-between items-center border-b px-[27px] py-[15px]">
        <div className="border-b-2 border-b-red-800">Товары в корзине</div>
        <div
          className="flex items-center  cursor-pointer"
          onClick={handleClearCart}
        >
          <div className="text-xs mr-3">ОЧИСТИТЬ</div>
          <div>
            <img src={remove_product} alt="remove product" />
          </div>
        </div>
      </div>
      {products.map((item, index) => (
        <CartCard
          {...item}
          key={item.id}
          isLastItem={index === products.length - 1}
        />
      ))}
    </div>
  );
};

export default LeftSideCart;
