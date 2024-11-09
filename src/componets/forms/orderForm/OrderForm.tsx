import React, { useMemo, useState } from "react";

import style from "./orderForm.module.css";
import RightSideOrderForm from "./RightSideOrderForm/RightSideOrderForm";
import LeftSIdeOrderForm from "./LeftSIdeOrderForm/LeftSIdeOrderForm";
import { useForm } from "react-hook-form";
import interfaceOrderForm from "./interfaceOrderForm/InterfaceOrderForm";
import DeliveryMethod from "./deliveryMethod/DeliveryMethod";
import { useAddProductToPurchasedProductsMutation } from "../../../api/purchasedProductsApi/purchasedProductsApi";
import {
  useGetProductsCartQuery,
  useRemoveProductInCartMutation,
} from "../../../api/cartApi/cartApi";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<interfaceOrderForm>();

  const { data: cartProducts } = useGetProductsCartQuery();

  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    if (!cartProducts) return 0;
    return cartProducts.reduce((sum, product) => {
      if (product.price && product.count) {
        return sum + product.price * product.count;
      }
      return sum;
    }, 0);
  }, [cartProducts]);

  const [addProductToPurchasedProducts] =
    useAddProductToPurchasedProductsMutation();

  const [removeProductInCart] = useRemoveProductInCartMutation();

  const handleClearCart = async () => {
    if (!cartProducts || cartProducts.length === 0) return;
    try {
      for (let i = 0; i < cartProducts.length; i++) {
        const productId = cartProducts[i].id;
        if (productId) {
          await removeProductInCart(productId).unwrap();
        }
      }
    } catch (error) {
      alert(`Не удалось очистить корзину!`);
    }
  };

  const handleOnSubmit = async (data: interfaceOrderForm) => {
    try {
      navigate(routes.home);
      setTimeout(() => {
        alert("Вы оформили корзину!");
      }, 1500);
      reset();
      handleClearCart();

      await addProductToPurchasedProducts({
        products: cartProducts || [],
        totalPrice: totalPrice,
        name: data.name,
        phone: data.phone,
        email: data.email,
        massage: data.message,
        deliveryAddress: data.deliveryAddress,
        promotionalСode: data.promotionalСode,
      }).unwrap();
    } catch (error) {
      setTimeout(() => {
        alert("Не удалось оформить!");
      }, 1500);
    }
  };

  return (
    <div>
      <form className=" mt-5" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={style.container_order_form}>
          <LeftSIdeOrderForm register={register} errors={errors} />
          <RightSideOrderForm totalPrice={totalPrice} register={register} />
        </div>
        <div className="flex justify-between">
          <DeliveryMethod register={register} errors={errors} />
          <div className="w-[0%]  md:w-[25%]"></div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
