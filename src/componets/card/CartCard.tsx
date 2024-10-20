import React from "react";
import { Link } from "react-router-dom";

import style from "../../pages/cart/cart.module.css";
import remove_product from "../../assets/icons/remove_product.svg";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import {
  useAddOrRemoveOneProductToCartMutation,
  useRemoveProductInCartMutation,
} from "../../api/cartApi/cartApi";
import { routes } from "../../routes/routes";

interface CartCardProps {
  imageUrl: string | undefined;
  title: string | undefined;
  size: number | undefined;
  price: number | undefined;
  id: string | undefined;
  count: number | undefined;
  parentId: string | undefined;
}

const CartCard = ({
  imageUrl,
  title,
  size,
  price,
  id,
  count,
  parentId,
}: CartCardProps) => {
  const [removeProductInCart] = useRemoveProductInCartMutation();

  const [addOrRemoveOneProductToCart] =
    useAddOrRemoveOneProductToCartMutation();

  const hanldeRemoveProductInCart = async () => {
    try {
      if (id) {
        await removeProductInCart(id).unwrap();
      }
    } catch (error) {
      alert("Не удалось удалить продукт из корзины!");
    }
  };

  const handleAddOrRemoveOneProductToCart = async (type: "add" | "remove") => {
    try {
      if (id && size && price && count) {
        const newCount = type === "add" ? count + 1 : Math.max(count - 1, 1);
        if (newCount !== count) {
          await addOrRemoveOneProductToCart({
            id,
            size,
            price,
            count: newCount,
          }).unwrap();
        }
      }
    } catch (error) {
      alert(`Не удалось ${type === "add" ? "добавить" : "удалить"} продукт!`);
    }
  };

  return (
    <div className="border-b flex justify-between py-[40px] mx-[27px] items-center">
      <div className="bsorder border-blue-400 flex">
        <Link to={routes.product.replace(":id", String(parentId))}>
          <img src={imageUrl} alt={title} className="w-[105px] mr-5" />
        </Link>
        <div>
          <Link to={routes.product.replace(":id", String(parentId))}>
            <div className={style.title_cart}>{title}</div>
          </Link>
          <div className="text-gray-500">
            Размер : <span>{size}</span>
          </div>
        </div>
      </div>
      <div className="border flex w-[100px] items-center justify-between bg-[#FAFAFA] px-2 py-0.5">
        <div>
          <img
            src={minus}
            alt="minus"
            className="cursor-pointer"
            onClick={() => handleAddOrRemoveOneProductToCart("remove")}
          />
        </div>
        <div>{count}</div>
        <div>
          <img
            src={plus}
            alt="plus"
            className="cursor-pointer"
            onClick={() => handleAddOrRemoveOneProductToCart("add")}
          />
        </div>
      </div>
      <div className="font-bold">{price} ₽</div>
      <img
        src={remove_product}
        alt="remove product"
        className="cursor-pointer"
        onClick={hanldeRemoveProductInCart}
      />
    </div>
  );
};

export default CartCard;
