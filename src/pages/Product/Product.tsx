import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "../Product/product.module.css";
import { useGetProductIdQuery } from "../../api/productsApi/productsApi";
import RightSideProduct from "./RightSideProduct/RightSideProduct";
import LeftSideProduct from "./LeftSideProduct/LeftSideProduct";
import { infoProduct } from "./arrs/arrs";
import Loading from "../../componets/loading/Loading";

const Product = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetProductIdQuery(Number(id));

  const [currentImage, setCurrentImage] = useState<string>("");

  const [currentInfoProduct, setCurrentInfoProduct] = useState<
    string | JSX.Element
  >("");

  useEffect(() => {
    if (data?.imageUrL) {
      setCurrentImage(data.imageUrL[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setCurrentInfoProduct(infoProduct(data)[0].value);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <div className="flex">
      <div className={style.left_side}>
        <LeftSideProduct
          title={data?.title}
          id={id}
          price={data?.price}
          imageUrl={data?.imageUrL}
          currentImage={currentImage}
          currentInfoProduct={currentInfoProduct}
          setCurrentInfoProduct={setCurrentInfoProduct}
          setCurrentImage={setCurrentImage}
          infoProduct={infoProduct(data || {})}
        />
      </div>

      <div className={style.right_side}>
        <RightSideProduct
          price={data?.price}
          brand={data?.brand}
          title={data?.title}
          imageUrl={data?.imageUrL[0]}
          parentId={id}
          id={id}
        />
      </div>
    </div>
  );
};

export default Product;
