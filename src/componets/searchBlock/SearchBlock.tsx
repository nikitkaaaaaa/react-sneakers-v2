import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import style from "./searchBlock.module.css";
import IntefraceProducts from "../../api/productsApi/IntefraceProducts";
import { routes } from "../../routes/routes";
import useClickOutside from "../hooks/useCloseBlock";

interface SearchBlockProps {
  showSearchBlock: boolean;
  products: IntefraceProducts[] | undefined;
  closeSearchBlock: () => void;
}

const SearchBlock = ({
  showSearchBlock,
  products,

  closeSearchBlock,
}: SearchBlockProps) => {
  const formRef = useRef<HTMLDivElement>(null);

  useClickOutside(formRef, closeSearchBlock); // кастомный хук для закрытия окна вне нажатия его

  return (
    <>
      {showSearchBlock && (
        <div className={style.searchBlock} ref={formRef}>
          <div className=" max-h-[300px] overflow-auto border-b border-l border-r ">
            {products?.map((item) => (
              <Link
                to={routes.product.replace(":id", String(item.id))}
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  closeSearchBlock();
                }}
              >
                <div key={item.id} className="py-3 hover:bg-[#f8f8f8]">
                  <div className="ml-3 flex items-center text-sm">
                    <img
                      src={item.imageUrL[0]}
                      alt="image product"
                      className="w-[50px] mr-5"
                    />
                    <div>
                      <div>{item.title}</div>
                      <div className="mt-1">{item.price} ₽</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBlock;
