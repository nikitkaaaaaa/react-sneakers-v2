import React, { useState } from "react";

import plane from "../../assets/icons/plane.svg";
import NewsletterForm from "../forms/newsletterForm/NewsletterForm";

const NewsLetterSection = () => {
  const [showNewsLetter, setShowNewsLetter] = useState<boolean>(false);

  return (
    <div>
      <div
        className="mt-10 group border  pt-6  max-w-full max-h-full
          flex-col justify-center   rounded-sm
          hover:bg-white hover:transform hover:-translate-y-0.5
          hover:shadow-lg transition-transform duration-300 text hidden lg:flex"
      >
        <div className="flex justify-center">
          <img src={plane} alt="plane" className="w-[65px] h-[56px]" />
        </div>
        <div className="text-center mt-4 ">
          <div className="mb-8">Будьте в курсе наших акций и новостей</div>
          <button
            className="w-full rounded-sm  py-4 border-t text-sm  group-hover:bg-red-700 transition-colors duration-300 group-hover:text-white"
            onClick={() => setShowNewsLetter(true)}
          >
            ПОДПИСАТЬСЯ
          </button>
        </div>
      </div>
      <NewsletterForm
        showNewsLetter={showNewsLetter}
        closeForm={() => setShowNewsLetter(false)}
      />
    </div>
  );
};

export default NewsLetterSection;
