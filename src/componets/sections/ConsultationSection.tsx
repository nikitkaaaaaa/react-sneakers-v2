import React from "react";

import consultation from "../../assets/icons/consultation.svg";

interface ConsultationSectionProps {
  openConsultation: () => void;
}

const ConsultationSection = ({
  openConsultation,
}: ConsultationSectionProps) => {
  return (
    <div
      className="border group  rounded-sm mt-8  flex-col justify-center items-center text-center hover:bg-white hover:transform hover:-translate-y-0.5
                   hover:shadow-lg transition-transform duration-300 pt-[40px] hidden lg:flex"
    >
      <img src={consultation} alt="consultation" />
      <div className="my-4 px-[15px]">Нужна консультация?</div>
      <div className="text-sm px-[15px]">
        Наши специалисты ответят на любой интересующий вопрос
      </div>

      <button
        className="w-full rounded-sm mt-4 py-3.5 border-t text-sm t group-hover:bg-red-700 transition-colors duration-300 group-hover:text-white"
        onClick={openConsultation}
      >
        ЗАДАТЬ ВОПРОС
      </button>
    </div>
  );
};

export default ConsultationSection;
