import React from "react";

import style from "../../componets/loading/loading.module.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-[200px]">
      <div className={style.loader}></div>
    </div>
  );
};

export default Loading;
