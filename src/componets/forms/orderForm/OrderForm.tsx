import React, { useState } from "react";

import RightSideOrderForm from "./RightSideOrderForm/RightSideOrderForm";
import LeftSIdeOrderForm from "./LeftSIdeOrderForm/LeftSIdeOrderForm";
import { useForm } from "react-hook-form";
import interfaceOrderForm from "./interfaceOrderForm/InterfaceOrderForm";
import DeliveryMethod from "./deliveryMethod/DeliveryMethod";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<interfaceOrderForm>();

  const handleOnSubmit = (data: interfaceOrderForm) => {
    console.log(data);
  };

  return (
    <div>
      <form className=" mt-5" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex justify-between ">
          <LeftSIdeOrderForm register={register} errors={errors} />
          <RightSideOrderForm />
        </div>
        <div className="flex justify-between">
          <DeliveryMethod register={register} errors={errors} />
          <div className="w-[25%]"></div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
