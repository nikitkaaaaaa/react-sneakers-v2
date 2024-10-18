import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { size, socials } from "../arrs/arrs";
import consultation from "../../../assets/icons/consultation.svg";
import asics from "../../../assets/png/asics";
import nike from "../../../assets/png/nike";
import adidas from "../../../assets/png/adidas";
import jordan from "../../../assets/png/jordan";
import ConsultationForm from "../../../componets/forms/consultationForm/ConsultationForm";
import ConsultationSection from "../../../componets/sections/ConsultationSection";
import BrandsProductsSection from "../../../componets/sections/BrandsProductsSection";

interface RightSideProps {
  price: number | undefined;
  brand: string | undefined;
}

const RightSideProduct = ({ price, brand }: RightSideProps) => {
  const [currentSize, setcurrnetSize] = useState<number>(0);

  const [currentBrandImg, setCurrentBrandImg] = useState<string>("");

  const [showСonsultation, setShowСonsultation] = useState<boolean>(false);

  useEffect(() => {
    if (brand === "Asics") {
      setCurrentBrandImg(asics.asics);
    } else if (brand === "Nike") {
      setCurrentBrandImg(nike.nike);
    } else if (brand === "Adidas") {
      setCurrentBrandImg(adidas.adidas);
    } else if (brand === "Jordan") {
      setCurrentBrandImg(jordan.jordan);
    }
  }, [brand]);

  return (
    <div className="mt-10">
      <div className="text-2xl font-bold opacity-65">от {price} ₽</div>

      {/* Размеры продукта */}
      <div
        className="grid  mt-5 gap-y-[10px] gap-x-[20px]"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {size.map((item, index) => (
          <div
            key={index}
            className={`text-center  cursor-pointer text-sm pb-1 ${
              currentSize === index
                ? "border-b-2 border-b-red-800"
                : "border-b-2 border-b-[#f8f8f8]"
            }`}
            onClick={() => setcurrnetSize(index)}
          >
            <div className="font-bold py-1">{item} EU</div>
            <div>{index % 2 == 0 ? price : price && price * 1.05} ₽</div>
          </div>
        ))}
      </div>
      {/* Размеры продукта */}

      {/* Покупка продукта */}
      <>
        <button className=" border w-full text-center bg-white  border-black mt-5 rounded py-3 px-5 text-xs">
          В КОРЗИНУ
        </button>
        <button className="w-full text-center text-white bg-black mt-2 rounded py-4 px-5 text-xs">
          КУПИТЬ В 1 КЛИК
        </button>
      </>
      {/* Покупка продукта */}

      <div className="text-center  text-sm my-7">
        Мы будем рады ответить на все вопросы в любом удобном мессенджере:
      </div>

      {/* Соц сети  */}
      {socials.map((item, index) => (
        <Link to={item.route} target="_blank" key={index}>
          <button className="border border-black w-full mt-3 py-2.5 rounded flex items-center justify-center relative">
            <div>{item.title}</div>
            <img
              src={item.img}
              alt="telegram"
              className="w-6 absolute right-5 top-1/2 transform -translate-y-1/2"
            />
          </button>
        </Link>
      ))}
      {/* Соц сети  */}

      {/* Перейти к продуктам конкретного бренда */}
      <BrandsProductsSection brand={brand} brandImg={currentBrandImg} />
      {/* Перейти к продуктам конкретного бренда */}

      {/* консультанция */}
      <ConsultationSection openConsultation={() => setShowСonsultation(true)} />
      {/* консультанция */}

      {/* Форма консультации */}
      <ConsultationForm
        showСonsultation={showСonsultation}
        closeСonsultation={() => setShowСonsultation(false)}
      />
      {/* Форма консультации */}
    </div>
  );
};

export default RightSideProduct;
