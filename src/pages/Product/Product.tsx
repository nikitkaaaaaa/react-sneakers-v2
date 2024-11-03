import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import style from "../Product/product.module.css";
import { useGetProductIdQuery } from "../../api/productsApi/productsApi";
import RightSideProduct from "./RightSideProduct/RightSideProduct";
import LeftSideProduct from "./LeftSideProduct/LeftSideProduct";
import { infoProduct } from "./arrs/arrs";
import Loading from "../../componets/loading/Loading";
import { routes } from "../../routes/routes";

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
    <>
      <div className="text-gray-500 mt-8 ">
        <span>
          <Link to={routes.home}>Главная</Link>
        </span>
        <span className="mx-2">—</span> Каталог
        <span className="mx-2">—</span> <span>{data?.category}</span>
        <span className="mx-2">—</span>{" "}
        <Link
          to={routes.productBrands.replace(":brand", data ? data?.brand : "")}
        >
          {data?.brand}
        </Link>
        <span className="mx-2">—</span> <span>{data?.title}</span>
      </div>

      <div className="text-2xl mt-4 mb-2">{data?.title}</div>
      <div className="flex flex-col lg:flex-row">
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
            currentInfoProduct={currentInfoProduct}
            setCurrentInfoProduct={setCurrentInfoProduct}
            infoProduct={infoProduct(data || {})}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
