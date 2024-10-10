import React, { useEffect, useState } from "react";

import arrow_small from "../../icons/arrow_filters.svg";

interface ChoiseProductsProps {
  onChoise: (value: string) => void;
  choise: string;
}

const ChoiseProducts = ({ onChoise, choise }: ChoiseProductsProps) => {
  const typeChoise: { value: string; title: string }[] = [
    { value: "-price", title: "По цене (возрастание)" },
    { value: "price", title: "По цене (убывание)" },
    { value: "title", title: "По названию" },
  ];

  const [openChoise, setOpenChoise] = useState<boolean>(false);

  const [currentChoise, setCurrentChoise] = useState<string>("");

  const handleChoiseProducts = (item: string) => {
    setOpenChoise(false);
    onChoise(item);
  };

  useEffect(() => {
    if (choise === "-price") {
      setCurrentChoise("По цене (возрастание)");
    } else if (choise === "price") {
      setCurrentChoise("По цене (убывание)");
    } else if (choise === "title") {
      setCurrentChoise("По названию");
    }
  }, [choise]);

  return (
    <div className="relative py-5 inline-block w-[230px]">
      <div
        onClick={() => setOpenChoise(!openChoise)}
        className="flex items-center cursor-pointer relative"
      >
        <div>{currentChoise}</div>
        <img
          src={arrow_small}
          alt="arrow_small"
          className={`transition-transform duration-400 ml-4 ${
            !openChoise ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      <div
        className={`absolute left-0 w-full mt-1 bg-white shadow-lg z-10 transition-all duration-500 ease-in-out rounded-md ${
          openChoise ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        {typeChoise.map((item, index) => (
          <div
            key={index}
            onClick={() => handleChoiseProducts(item.value)}
            className="hover:bg-[#f8f8f8] cursor-pointer"
          >
            <div className="mx-5 py-2">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiseProducts;
